import { useLayoutEffect } from 'react'
import gsap from 'gsap'

// Port of the live "meeting notes" demo window timeline (the original site chunk 2473,
// NotesDemoWindow). activeIndex 0 = idle ("Write notes..."), 1 = play the
// transcribe -> type -> enhance sequence once. Leaving the step (1 -> 0) kills
// the timeline and reverts to idle, so the demo replays on each activation.
const RAW_NOTES = [
  'walked thru q3 priorities',
  '2 pulled fwd from q4',
  'tanya offered to pair on docs',
  'jack - spec in-app tour',
].join('\n')
const CARET =
  '<span class="inline-block w-px h-[1em] ml-px align-middle bg-ink-accent animate-pulse"></span>'
const TYPE_CPS = 26

function parts(win) {
  const cells = win.querySelector('.grid.min-h-0')?.children
  if (!cells || cells.length < 3) return null
  return {
    placeholder: cells[0].firstElementChild,
    raw: cells[1].firstElementChild,
    scroller: cells[2],
    enhanced: cells[2].querySelector('.demo-enhanced'),
    enhancing: win.querySelector('.pointer-events-none.absolute.inset-x-2.top-0 > div'),
    transcribing: win.querySelector('.bottom-4 > div'),
    askBar: win.querySelector('.absolute.inset-x-0.bottom-0.px-4.pb-6'),
  }
}

// containerRef: ref to an element containing exactly one demo window
// (the `select-none rounded-3xl` element rendered by the step-1 tile).
export function useHiwStepDemo(containerRef, active) {
  useLayoutEffect(() => {
    const win = containerRef.current?.querySelector('.select-none.rounded-3xl')
    if (!win) return
    const p = parts(win)
    if (!p || Object.values(p).some((v) => !v)) return
    const { placeholder: a, raw: t, scroller: s, enhanced: l, enhancing: n, transcribing: r, askBar: c } = p
    const grads = gsap.utils.toArray('.hiw-grad', l)
    const clearGrads = () => grads.forEach((g) => g.classList.remove('gradient-text-animate'))

    const ctx = gsap.context(() => {
      let scrollH = 0
      let enhancedH = 0
      let viewH = 0
      let maxScroll = 0
      let offsets = []
      const reveal = (e) => {
        const a2 = e * Math.max(0, viewH - (scrollH - enhancedH))
        const t2 = Math.max(0, (e - 0.5) / 0.5) * maxScroll
        s.scrollTop = t2
        const r2 = a2 + t2
        const c2 = Math.max(0, enhancedH - r2)
        gsap.set(l, { clipPath: `inset(0px 0px ${c2}px 0px)` })
        gsap.set(n, { y: a2 + -8 })
        grads.forEach((g, i) => {
          if (r2 >= offsets[i]) g.classList.add('gradient-text-animate')
        })
      }

      if (!active) {
        clearGrads()
        t.innerHTML = ''
        s.scrollTop = 0
        gsap.set(a, { autoAlpha: 1 })
        gsap.set(t, { autoAlpha: 0 })
        gsap.set(l, { autoAlpha: 0, clipPath: 'inset(0px 0px 100% 0px)' })
        gsap.set(n, { autoAlpha: 0, y: 0, scale: 0.95 })
        gsap.set(r, { autoAlpha: 0 })
        gsap.set(c, { autoAlpha: 0 })
        return
      }

      clearGrads()
      s.scrollTop = 0
      gsap.set(a, { autoAlpha: 0 })
      gsap.set(l, { autoAlpha: 1, clipPath: 'inset(0px 0px 100% 0px)' })
      gsap.set(n, { autoAlpha: 0, y: -8, scale: 0.95 })
      gsap.set(r, { autoAlpha: 0 })
      gsap.set(c, { autoAlpha: 0 })
      gsap.set(t, { autoAlpha: 1 })
      t.innerHTML = CARET

      const typed = { n: 0 }
      const tl = gsap.timeline({ delay: 0.35 })
      tl.fromTo(r, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'back.out(2.6)' }, 0)
      tl.to(typed, {
        n: RAW_NOTES.length,
        duration: RAW_NOTES.length / TYPE_CPS,
        ease: 'none',
        onUpdate: () => {
          t.innerHTML =
            RAW_NOTES.slice(0, Math.round(typed.n))
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/\n/g, '<br>') + CARET
        },
      })
      tl.to({}, { duration: 0.6 })
      tl.to(t, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' })
      tl.add(() => {
        viewH = s.clientHeight
        scrollH = s.scrollHeight
        enhancedH = l.offsetHeight
        maxScroll = Math.max(0, s.scrollHeight - s.clientHeight)
        offsets = grads.map((g) => g.offsetTop)
      })
      tl.add(() => reveal(0))
      const prog = { p: 0 }
      tl.addLabel('enhance')
      tl.to(r, { autoAlpha: 0, scale: 0.8, duration: 0.25, ease: 'power2.in' }, 'enhance')
      tl.fromTo(
        c,
        { autoAlpha: 0, scaleX: 0.72, scaleY: 0.9 },
        { autoAlpha: 1, scaleX: 1, scaleY: 1, duration: 0.42, ease: 'back.out(2.2)' },
        'enhance+=0.08',
      )
      tl.to(prog, { p: 1, duration: 2.6, ease: 'power1.inOut', onUpdate: () => reveal(prog.p) }, 'enhance')
      tl.fromTo(n, { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.28, ease: 'power2.out' }, 'enhance')
      tl.to(n, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' })
    }, win)

    return () => ctx.revert()
  }, [containerRef, active])
}
