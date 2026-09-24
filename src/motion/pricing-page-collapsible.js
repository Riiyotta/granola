import { useLayoutEffect, useRef, useState, useCallback } from 'react'
import { flushSync } from 'react-dom'

// Radix Accordion/Collapsible behaviour as measured on live /pricing and /enterprise FAQs:
// - type="multiple": opening one item does not close the others.
// - Closed content is `hidden` and has no children. On open the content mounts, its natural size is
//   measured with animations disabled and written to --radix-collapsible-content-height/-width;
//   data-state=open then plays `accordion-down` (0.2s ease-out, 0 -> var height) from the original CSS.
// - On close data-state=closed plays `accordion-up` (0.2s ease-out, var height -> 0); children stay
//   mounted until animationend, then the region gets `hidden` again and children unmount.
// - Chevron: CSS only (group-data-[state=open]:rotate-180, 300ms cubic-bezier(.87,0,.13,1)).
export function useCollapsible(open) {
  const ref = useRef(null)
  const [present, setPresent] = useState(open)
  // Radix suppresses the animation only when an item is open on first mount.
  const skipAnim = useRef(open)

  if (open && !present) setPresent(true)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !present) return
    // Measure natural size with the animation suppressed (same technique as Radix).
    const prevDuration = el.style.transitionDuration
    const prevAnim = el.style.animationName
    el.style.transitionDuration = '0s'
    el.style.animationName = 'none'
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--radix-collapsible-content-height', `${rect.height}px`)
    el.style.setProperty('--radix-collapsible-content-width', `${rect.width}px`)
    if (!skipAnim.current) {
      el.style.transitionDuration = prevDuration
      el.style.animationName = prevAnim
    }
    skipAnim.current = false
  }, [open, present])

  useLayoutEffect(() => {
    const el = ref.current
    if (open || !present || !el) return
    const name = getComputedStyle(el).animationName
    if (!name || name === 'none') {
      setPresent(false)
      return
    }
    // flushSync (as Radix Presence does) so the region is hidden in the same frame the exit
    // animation ends; otherwise it paints one frame at full height.
    const done = (e) => {
      if (e.target === el) flushSync(() => setPresent(false))
    }
    el.addEventListener('animationend', done)
    el.addEventListener('animationcancel', done)
    return () => {
      el.removeEventListener('animationend', done)
      el.removeEventListener('animationcancel', done)
    }
  }, [open, present])

  return { ref, present }
}

// Multiple-open accordion state (live uses Radix Accordion type="multiple").
export function useMultiAccordion() {
  const [openSet, setOpenSet] = useState(() => new Set())
  const toggle = useCallback((key) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }, [])
  return { isOpen: (key) => openSet.has(key), toggle }
}

// Neutral filler text of a given length for long-form answers (live prose is not copied).
const FILLER =
  'Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar places. '
export function placeholder(n) {
  let s = ''
  while (s.length < n) s += FILLER
  s = s.slice(0, n)
  return s.replace(/\s+\S*$/, '').replace(/[,\s]+$/, '') + '.'
}
