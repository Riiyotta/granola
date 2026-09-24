import { useCallback, useEffect, useRef, useState } from 'react'
import { HIW_CENTER_ROOT_MARGIN } from './hiw-center-observer.js'

// Live HowItWorks desktop: one IntersectionObserver (rootMargin -50% 0 -50% 0,
// threshold 0) on the three `[data-index]` step blocks; the block crossing the
// viewport centre becomes active. Clicking a tab sets it active immediately,
// ignores observer callbacks for 900ms and smooth-scrolls the block to centre.
export function useHiwActiveStep(sectionRef) {
  const [activeIndex, setActiveIndex] = useState(0)
  const ignoreUntil = useRef(0)
  const steps = useRef([])

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    steps.current = [...root.querySelectorAll('[data-index]')]
    const io = new IntersectionObserver(
      (entries) => {
        if (performance.now() < ignoreUntil.current) return
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index))
        }
      },
      { rootMargin: HIW_CENTER_ROOT_MARGIN, threshold: 0 },
    )
    steps.current.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sectionRef])

  const onTabClick = useCallback((i) => {
    setActiveIndex(i)
    ignoreUntil.current = performance.now() + 900
    steps.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  return { activeIndex, onTabClick }
}
