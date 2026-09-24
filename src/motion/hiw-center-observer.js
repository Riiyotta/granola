import { useEffect, useState } from 'react'

// Live: IntersectionObserver with rootMargin "-50% 0px -50% 0px", threshold 0,
// i.e. "is this element crossing the horizontal centre line of the viewport".
export const HIW_CENTER_ROOT_MARGIN = '-50% 0px -50% 0px'

export function useHiwCenterActive(ref) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: HIW_CENTER_ROOT_MARGIN,
      threshold: 0,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [ref])
  return active
}
