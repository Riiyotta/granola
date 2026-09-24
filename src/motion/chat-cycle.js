import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Measured on the original site (Playwright, 1440 + 390):
//  typing  : framer variants staggerChildren .045s, delayChildren .4s (char 1 at +404ms,
//            char 56 at +2883ms); resting state fired ~285ms after the last char.
//  resting : caret-blink 1.1s step-end infinite, held 2400ms (measured 2414ms)
//  selected: chars bg #b8d5ff, caret visibility hidden, held 650ms (measured 652ms)
//  then next prompt; chip remounts with spring {duration:.55, bounce:.6} from scale .5
export const CHAT_REST_MS = 2400
export const CHAT_SELECT_MS = 650
export const CHAT_STAGGER = 0.045
export const CHAT_DELAY = 0.4

export function useChatCycle(count) {
  const ref = useRef(null)
  // live: starts when the card is >=60% in view
  const inView = useInView(ref, { amount: 0.6, once: true })
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState('hidden') // hidden | typing | resting | selected

  useEffect(() => {
    if (inView && phase === 'hidden') setPhase('typing')
  }, [inView, phase])

  useEffect(() => {
    let t
    if (phase === 'resting') t = setTimeout(() => setPhase('selected'), CHAT_REST_MS)
    else if (phase === 'selected')
      t = setTimeout(() => {
        setIndex((i) => (i + 1) % count)
        setPhase('typing')
      }, CHAT_SELECT_MS)
    return () => clearTimeout(t)
  }, [phase, count])

  const onTyped = () => setPhase((p) => (p === 'typing' ? 'resting' : p))
  return { ref, index, phase, onTyped }
}
