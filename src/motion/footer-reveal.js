import { useEffect, useRef } from 'react'
import { useSpring } from 'framer-motion'
import { gsap } from 'gsap'

// Port of the original site's FooterReveal (read from the live bundle):
// - framer useSpring(0, { stiffness: 260, damping: 24, mass: 0.9 }) bound to `y` of the page wrapper
// - IntersectionObserver (threshold 0) on the 1px sentinel at the page bottom
// - wheel/touch deltas accumulate while at the bottom: y = -260 * (1 - exp(-acc / 500))
// - 0.14s (gsap ticker time) after the last wheel event, or on touchend: acc = 0, spring back to 0
// - while lifted, images hard-cut every 150ms: index = floor(gsapTime / 0.15) % 6
// - prefers-reduced-motion: no behaviour (CSS shows the first image)
export const FOOTER_REVEAL_SPRING = { stiffness: 260, damping: 24, mass: 0.9 }
export const FOOTER_REVEAL_MAX = 260
export const FOOTER_REVEAL_FALLOFF = 500
export const FOOTER_REVEAL_RELEASE_S = 0.14
export const FOOTER_REVEAL_FRAME_S = 0.15

export function useFooterReveal(panelRef, sentinelRef) {
  const y = useSpring(0, FOOTER_REVEAL_SPRING)
  const acc = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let touchY = null
    let releaseAt = null
    const imgs = panelRef.current ? Array.from(panelRef.current.querySelectorAll('img')) : []
    let shown = -1
    let atBottom = false

    const io = new IntersectionObserver(([e]) => { atBottom = e.isIntersecting }, { threshold: 0 })
    if (sentinelRef.current) io.observe(sentinelRef.current)

    const reset = () => { acc.current = 0; releaseAt = null; y.set(0) }
    const push = (d) => {
      acc.current = Math.max(0, acc.current + d)
      y.set(-FOOTER_REVEAL_MAX * (1 - Math.exp(-acc.current / FOOTER_REVEAL_FALLOFF)))
    }
    const onWheel = (e) => {
      if (acc.current > 0 || (e.deltaY > 0 && atBottom)) {
        push(e.deltaY)
        releaseAt = gsap.ticker.time + FOOTER_REVEAL_RELEASE_S
      }
    }
    const tick = (t) => {
      if (releaseAt !== null && t >= releaseAt) reset()
      if (acc.current === 0 && Math.abs(y.get()) < 0.5) return
      if (!imgs.length) return
      const i = Math.floor(t / FOOTER_REVEAL_FRAME_S) % imgs.length
      if (i !== shown) {
        if (shown !== -1) imgs[shown].style.opacity = '0'
        imgs[i].style.opacity = '1'
        shown = i
      }
    }
    const onTouchStart = (e) => { touchY = e.touches[0].clientY }
    const onTouchMove = (e) => {
      if (touchY === null) return
      const cy = e.touches[0].clientY
      const d = touchY - cy
      touchY = cy
      if (acc.current > 0 || (d > 0 && atBottom)) push(d)
    }
    const onTouchEnd = () => { touchY = null; reset() }

    gsap.ticker.add(tick)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      io.disconnect()
      gsap.ticker.remove(tick)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return y
}
