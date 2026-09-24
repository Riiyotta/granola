import { useEffect } from 'react'

// The original drives the hero with CSS scroll-driven animations that already live in
// /styles/granola-main.css under @supports (animation-timeline: scroll()):
//   .sticky-demo-preview   shrink-to-sticky-{sm,lg}   linear, range 0 -> 100vh
//   .float-*-{lg,sm}       cubic-bezier(.7,0,.84,0), ranges grey 6-56vh, explosion 0-50vh, green 12-62vh
//   .floating-item (2nd)   floating-fade-out 1 -> 0, linear, 60vh -> 80vh
//   .video-call-parallax   translateY(12%) -> (-45%), linear, 0 -> 120vh
// In browsers with scroll timelines nothing needs JS. This hook reproduces the same
// curves with a scroll listener only when scroll timelines are unsupported.

function bezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by
  const sx = (t) => ((ax * t + bx) * t + cx) * t
  const sy = (t) => ((ay * t + by) * t + cy) * t
  const dx = (t) => (3 * ax * t + 2 * bx) * t + cx
  return (x) => {
    let t = x
    for (let i = 0; i < 8; i++) {
      const e = sx(t) - x
      const d = dx(t)
      if (Math.abs(e) < 1e-6 || Math.abs(d) < 1e-6) break
      t -= e / d
    }
    let lo = 0, hi = 1
    if (Math.abs(sx(t) - x) > 1e-5) {
      t = x
      for (let i = 0; i < 30; i++) { const v = sx(t); if (v < x) lo = t; else hi = t; t = (lo + hi) / 2 }
    }
    return sy(t)
  }
}
const floatEase = bezier(0.7, 0, 0.84, 0)
const prog = (y, a, b) => Math.min(1, Math.max(0, (y - a) / (b - a)))
const lerp = (a, b, t) => a + (b - a) * t

const FLOATS = {
  'float-grey-lg': { from: [23, 21], to: 0.75, range: [6, 56] },
  'float-explosion-lg': { from: [24, -6], to: 0.75, range: [0, 50] },
  'float-green-lg': { from: [-35, 10], to: 0.75, range: [12, 62] },
  'float-grey-sm': { from: [40, 10], to: 0.2, range: [6, 56] },
  'float-explosion-sm': { from: [45, 8], to: 0.2, range: [0, 50] },
  'float-green-sm': { from: [-45, 8], to: 0.2, range: [12, 62] },
}

export function useHeroScrollFallback(rootRef) {
  useEffect(() => {
    if (typeof CSS !== 'undefined' && CSS.supports?.('animation-timeline: scroll()')) return
    const root = rootRef.current
    if (!root) return
    const preview = root.querySelector('.sticky-demo-preview')
    const parallax = root.querySelector('.video-call-parallax')
    const floats = [...root.querySelectorAll('.floating-item')].map((el) => {
      const key = Object.keys(FLOATS).find((k) => el.classList.contains(k))
      el.style.transition = 'none'
      return [el, FLOATS[key]]
    })
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight / 100
      const y = window.scrollY
      const w = window.innerWidth
      const p = prog(y, 0, 100 * vh)
      if (preview) {
        if (w >= 1440) preview.style.transform = `translate(${lerp(25, 0, p)}%, ${lerp(-6, 0, p) * vh}px) scale(${lerp(1.2, 1, p)})`
        else if (w >= 1024) preview.style.transform = `translateY(${lerp(-6, 0, p) * vh}px) scale(${lerp(1.2, 1, p)})`
        else preview.style.transform = `scale(${lerp(1, 0.8, p)})`
      }
      const fade = 1 - prog(y, 60 * vh, 80 * vh)
      for (const [el, f] of floats) {
        if (!f) continue
        const t = floatEase(prog(y, f.range[0] * vh, f.range[1] * vh))
        el.style.transform = `translate(${lerp(f.from[0], 0, t)}%, ${lerp(f.from[1], 0, t)}%) scale(${lerp(1, f.to, t)})`
        el.style.opacity = String(fade)
      }
      if (parallax) parallax.style.transform = `translateY(${lerp(12, -45, prog(y, 0, 120 * vh))}%)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [rootRef])
}
