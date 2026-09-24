import { useLayoutEffect } from 'react'

// Live: each demo stage wrapper (`absolute inset-0`) is observed with a
// ResizeObserver and its child gets `--stage-scale = clientWidth / 448`.
// The CSS only applies the scale below 768px (max-md:transform-[scale(var(--stage-scale))]).
export function useHiwStageScale(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const stages = [...root.querySelectorAll('[style*="--stage-scale"]')]
    const observers = stages.map((stage) => {
      const wrap = stage.parentElement
      const update = () => {
        const w = wrap.clientWidth
        if (w > 0) stage.style.setProperty('--stage-scale', String(w / 448))
      }
      update()
      const ro = new ResizeObserver(update)
      ro.observe(wrap)
      return ro
    })
    return () => observers.forEach((ro) => ro.disconnect())
  }, [rootRef])
}
