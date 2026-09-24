import { useCallback, useEffect, useRef, useState } from 'react'

// Live module 72486 (intro icon rows): on pointerenter the icon gets
// filter:url(#hand-drawn-*) and every 100ms feTurbulence baseFrequency steps through
// .02 + [-.02, .01, -.01, .02] (index advances before each set). pointerleave clears
// the interval, removes the filter and resets baseFrequency to .02.
// Skipped entirely under prefers-reduced-motion (the filter is still applied).
const STEPS = [-0.02, 0.01, -0.01, 0.02]

export function useHeroHandDrawn() {
  const turbRef = useRef(null)
  const timer = useRef(null)
  const step = useRef(0)
  const [active, setActive] = useState(false)
  const leave = useCallback(() => {
    setActive(false)
    if (timer.current !== null) { window.clearInterval(timer.current); timer.current = null }
    turbRef.current?.setAttribute('baseFrequency', '0.02')
  }, [])
  const enter = useCallback(() => {
    setActive(true)
    if (timer.current !== null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer.current = window.setInterval(() => {
      const t = turbRef.current
      if (!t) { leave(); return }
      step.current = (step.current + 1) % STEPS.length
      t.setAttribute('baseFrequency', `${0.02 + STEPS[step.current]}`)
    }, 100)
  }, [leave])
  useEffect(() => () => { if (timer.current !== null) window.clearInterval(timer.current) }, [])
  return { turbRef, active, enter, leave }
}
