import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// 1:1 port of the live hero app-window GSAP timeline (chunk 2067, module 96280).
// All durations / eases / offsets below are the original values.

export const RAW_LINES = [
  { text: 'confirm ICP alignment' },
  { text: 'Deal stalls - sales input' },
  { text: '' },
  { text: 'Q3 messaging rollout, are teams ready??' },
]

export const ENHANCED = [
  { text: 'ICP Alignment Confirmation', kind: 'heading' },
  { text: 'Agreed to narrow Q3 focus to mid-market finance and ops buyers', kind: 'bullet' },
  { text: 'SMB deprioritised for the quarter', kind: 'bullet', indent: 1, grey: true },
  { text: 'Paid campaigns paused until ICP doc is confirmed', kind: 'bullet', indent: 1, grey: true },
  { text: 'Deal Stalls: Sales Input', kind: 'heading' },
  { text: 'Jack flagged deals stalling at business case stage', kind: 'bullet' },
  { text: 'Marketing to build a business case template', kind: 'bullet', indent: 1, grey: true },
  { text: 'CS to share proof points from successful onboardings', kind: 'bullet', indent: 1, grey: true },
  { text: 'Follow-up scheduled for Tuesday', kind: 'bullet', grey: true },
  { text: 'Q3 Messaging Rollout', kind: 'heading' },
  { text: 'Sales and CS do not yet feel briefed on new messaging', kind: 'bullet' },
  { text: 'Lunch and learn session agreed', kind: 'bullet', indent: 1, grey: true },
  { text: 'Next Steps', kind: 'heading' },
  { text: 'Tanya: Update ICP doc and pause paid campaigns', kind: 'bullet', grey: true },
  { text: 'Rob: Scope business case template by Tuesday', kind: 'bullet', grey: true },
  { text: 'Jack: Collate CS proof points by Tuesday', kind: 'bullet', grey: true },
]

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const CARET = '<span class="inline-block w-px h-[1em] ml-px align-middle bg-ink-accent animate-pulse"></span>'

// Initial markup of the raw-notes layer (React renders this once; GSAP owns it after).
export const RAW_INITIAL_HTML = RAW_LINES.slice(0, -1).map((l) => `<p>${esc(l.text)}</p>`).join('') + '<p></p>'

// framer-motion useInView(ref, { margin: '100px' }) equivalent.
function useInView(ref, margin) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: margin })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, margin])
  return inView
}

export function useHeroDemoLoop(r) {
  const tlRef = useRef(null)
  const inView = useInView(r.root, '100px')

  useLayoutEffect(() => {
    const raw = r.raw.current
    const enhanced = r.enhanced.current
    const enhancedWrap = r.enhancedWrap.current
    const scroller = r.scroller.current
    const pill = r.pill.current
    if (!raw || !enhanced || !enhancedWrap || !scroller || !pill) return

    const ctx = gsap.context(() => {
      const render = (lines, typing) => {
        const ps = lines.map((t) => `<p>${esc(t)}</p>`)
        if (typing !== null) ps.push(`<p>${esc(typing)}${CARET}</p>`)
        else if (ps.length) ps[ps.length - 1] = `<p>${esc(lines[lines.length - 1])}${CARET}</p>`
        raw.innerHTML = ps.join('')
      }
      const first = RAW_LINES.slice(0, -1).map((l) => l.text)
      const last = RAW_LINES[RAW_LINES.length - 1]
      const showStart = () => render(first, '')
      const grads = gsap.utils.toArray('.dq-grad', enhancedWrap)

      let scrollH = 0, enhancedH = 0, clientH = 0, maxScroll = 0, tops = []
      const measure = () => {
        clientH = scroller.clientHeight
        scrollH = scroller.scrollHeight
        enhancedH = enhanced.offsetHeight
        maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight)
        tops = grads.map((g) => g.offsetTop)
      }
      document.fonts?.ready?.then(() => measure())

      const reveal = (p) => {
        const revealY = p * Math.max(0, clientH - (scrollH - enhancedH))
        const scroll = Math.max(0, (p - 0.5) / 0.5) * maxScroll
        scroller.scrollTop = scroll
        const edge = revealY + scroll
        const bottom = Math.max(0, enhancedH - edge)
        gsap.set(enhanced, { clipPath: `inset(0px 0px ${bottom}px 0px)` })
        gsap.set(pill, { y: revealY + -8 })
        grads.forEach((g, i) => { if (edge >= tops[i]) g.classList.add('gradient-text-animate') })
      }

      const reset = () => {
        showStart()
        grads.forEach((g) => g.classList.remove('gradient-text-animate'))
        scroller.scrollTop = 0
        gsap.set(enhanced, { autoAlpha: 1, clipPath: 'inset(0px 0px 100% 0px)' })
        gsap.set(pill, { autoAlpha: 0, y: 0, scale: 0.95 })
        gsap.set(r.generate.current, { autoAlpha: 0, y: 0, scale: 0.8 })
      }

      const tl = gsap.timeline({ repeat: -1, onRepeat: reset })
      reset()
      gsap.set(r.transcribing.current, { autoAlpha: 0, scale: 0.8 })
      gsap.set(r.toggle.current, { autoAlpha: 0, scale: 0.94 })
      gsap.set(r.highlight.current, { xPercent: 100 })

      tl.to(r.toggle.current, { autoAlpha: 0, scale: 0.85, duration: 0.18, ease: 'power2.in' }, 0)
      tl.fromTo(r.transcribing.current, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'back.out(2.6)' }, 0.04)
      tl.add(showStart, 0)

      // Typing: one frame per character (no typo configured for this line), 26 chars/s, linear.
      const frames = []
      let acc = ''
      for (let i = 0; i < last.text.length; i++) { acc += last.text[i]; frames.push(acc) }
      const typing = { i: 0 }
      tl.to(typing, {
        i: frames.length - 1, duration: frames.length / 26, ease: 'none',
        onUpdate: () => render(first, frames[Math.round(typing.i)]),
      }, 0.3)
      tl.to({}, { duration: 0.25 })
      tl.add(() => render(RAW_LINES.map((l) => l.text), null))
      tl.to(r.transcribing.current, { autoAlpha: 0, scale: 0.8, duration: 0.25, ease: 'power2.in' }, '+=0.12')
      tl.to(r.generate.current, { autoAlpha: 1, scale: 1, duration: 0.38, ease: 'back.out(2.2)' }, '<0.08')
      tl.to(r.generate.current, { scale: 0.96, duration: 0.1, ease: 'power2.in', delay: 0.18 })
      tl.to(r.generate.current, { scale: 1, duration: 0.12, ease: 'power2.out' })
      tl.to(r.generate.current, { y: 28, scale: 0.85, autoAlpha: 0, duration: 0.35, ease: 'power2.in' }, '+=0.05')
      tl.add(measure)
      tl.add(() => reveal(0))

      const prog = { p: 0 }
      tl.addLabel('enhance')
      tl.to(prog, { p: 1, duration: 3.1, ease: 'power1.in', onUpdate: () => reveal(prog.p) }, 'enhance')
      tl.fromTo(pill, { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.28, ease: 'power2.out' }, 'enhance')

      const morph = { y: 0, scale: 1 }
      tl.add(() => {
        const toggle = r.toggle.current
        if (!toggle) return
        const pr = pill.getBoundingClientRect()
        const tr = toggle.getBoundingClientRect()
        const y = Number(gsap.getProperty(pill, 'y')) || 0
        const sx = Number(gsap.getProperty(pill, 'scaleX')) || 1
        const pc = pr.top + pr.height / 2
        morph.y = y + (tr.top + tr.height / 2 - pc) / (pill.offsetHeight ? pr.height / pill.offsetHeight : 1)
        morph.scale = Math.max(0.7, tr.width / (pr.width / sx))
      }, `enhance+=${3.1 - 0.05}`)
      tl.addLabel('morph', 'enhance+=3.1')
      tl.to(pill, { y: () => morph.y, duration: 0.5, ease: 'power2.out' }, 'morph')
      tl.set(r.highlight.current, { xPercent: 100 }, 'morph')
      tl.to(pill, { autoAlpha: 0, scaleX: () => morph.scale, duration: 0.22, ease: 'power2.in' }, 'morph+=0.42')
      tl.fromTo(r.toggle.current, { autoAlpha: 0, scale: 0.88 }, { autoAlpha: 1, scale: 1, duration: 0.4, ease: 'back.out(1.8)' }, 'morph+=0.4')
      tl.to({}, { duration: 0.45 })
      tl.addLabel('switch')
      tl.to(r.highlight.current, { xPercent: 0, duration: 0.28, ease: 'power3.inOut' }, 'switch')
      tl.add(() => { gsap.set(enhanced, { autoAlpha: 0 }); showStart(); scroller.scrollTop = 0 }, 'switch+=0.28')
      tl.add(() => grads.forEach((g) => g.classList.remove('gradient-text-animate')))
      tl.to({}, { duration: 0.12 })
      tlRef.current = tl
    }, r.root.current)

    return () => { ctx.revert(); tlRef.current = null }
  }, [])

  useLayoutEffect(() => {
    if (inView) tlRef.current?.play()
    else tlRef.current?.pause()
  }, [inView])
}
