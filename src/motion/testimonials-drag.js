import { useEffect, useRef } from 'react'

// Live testimonials scroller is a blossom-carousel: native overflow-x:auto with
// `[has-snap=true]{scroll-snap-type:var(--snap-type)!important}` (x mandatory, computed on
// live), scroll-behavior:smooth, overscroll-behavior-x:contain, cursor:grab. No autoplay
// (scrollLeft stayed 0 over 6s). Touch / trackpad scrolling stays native + CSS snap.
//
// Mouse drag, measured on live @1440 (Playwright, iubenda banner blocked):
//  - drag origin is the first pointermove (a 500px drag moved scrollLeft 450px when the
//    first move event was 50px), scroll follows the pointer 1:1 after that
//  - on release, scrollLeft springs to a snap point. Fitted to the recorded trajectory
//    (450 -> 120, v0 = 0): stiffness 140, damping 25.5, mass 1 (zeta 1.08), RMS 0.9px,
//    settles in ~900ms
//  - a fast release (~3000px/s) from 446 went to the next card (844) rather than the
//    nearest (120), so the release velocity projects the target
export const TESTI_SPRING = { stiffness: 140, damping: 25.5 }
const PROJECT_S = 0.2

export function useTestimonialsDrag() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let x0 = null
    let s0 = 0
    let moved = false
    let samples = []
    let raf = 0

    const lockSnap = () => el.style.setProperty('scroll-snap-type', 'none', 'important')
    const unlockSnap = () => el.style.setProperty('scroll-snap-type', 'none') // original inline value
    const setX = (x) => el.scrollTo({ left: x, behavior: 'instant' })

    const snapPoints = () => {
      const base = el.getBoundingClientRect().left - el.scrollLeft
      const max = el.scrollWidth - el.clientWidth
      return [...el.children]
        .filter((c) => getComputedStyle(c).scrollSnapAlign.includes('start'))
        .map((c) => Math.min(Math.max(c.getBoundingClientRect().left - base, 0), max))
    }

    const springTo = (target, v0) => {
      cancelAnimationFrame(raf)
      let x = el.scrollLeft
      let v = v0
      let last = 0
      const step = (t) => {
        const dt = last ? Math.min((t - last) / 1000, 1 / 30) : 1 / 60
        last = t
        // integrate in 1ms sub-steps for stability
        for (let i = 0; i < Math.round(dt * 1000); i++) {
          const a = -TESTI_SPRING.stiffness * (x - target) - TESTI_SPRING.damping * v
          v += a / 1000
          x += v / 1000
        }
        setX(x)
        if (Math.abs(x - target) < 0.5 && Math.abs(v) < 5) {
          setX(target)
          unlockSnap()
          raf = 0
          return
        }
        raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const onMove = (e) => {
      if (x0 === null) {
        x0 = e.clientX
        s0 = el.scrollLeft
      }
      const dx = e.clientX - x0
      if (Math.abs(dx) > 3) moved = true
      const now = performance.now()
      samples.push([now, e.clientX])
      samples = samples.filter((s) => now - s[0] < 100)
      setX(s0 - dx)
    }
    const onUp = () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
      let v = 0
      if (samples.length > 1) {
        const a = samples[0]
        const b = samples[samples.length - 1]
        if (performance.now() - b[0] < 100 && b[0] > a[0]) v = -(b[1] - a[1]) / ((b[0] - a[0]) / 1000)
      }
      samples = []
      x0 = null
      const proj = el.scrollLeft + v * PROJECT_S
      const pts = snapPoints()
      if (!pts.length) return unlockSnap()
      const target = pts.reduce((best, p) => (Math.abs(p - proj) < Math.abs(best - proj) ? p : best), pts[0])
      springTo(target, v)
    }
    const onDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return
      cancelAnimationFrame(raf)
      lockSnap()
      x0 = null
      moved = false
      samples = []
      el.setPointerCapture(e.pointerId)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerup', onUp)
      el.addEventListener('pointercancel', onUp)
    }
    const onClick = (e) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false }
    }
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('click', onClick, true)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('click', onClick, true)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
    }
  }, [])
  return ref
}
