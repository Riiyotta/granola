import { useEffect, useState } from 'react'

// All values read from the live /chat page bundle (app/(main)/chat/page-*.js, module 31891 +
// 38257) and cross-checked by sampling the live DOM every 15ms (Playwright, 1440 + 390).

// ---- Hero chat input typing loop -------------------------------------------------------
// Live: type one char every 100ms; when the prompt is complete hold 2000ms; delete one char
// every 50ms; when empty advance to the next prompt (wraps) and start typing again.
// Measured: 100-102ms/char typing, 2064ms full hold (2000 + one render), 50ms/char delete.
export const CHAT_HERO_PROMPTS = [
  'What should I work on?',
  'What feedback did I get?',
  '/Coach me',
  'What are my action items?',
  'What just got discussed?',
  '/Recap next steps',
]
export const TYPE_MS = 100
export const HOLD_MS = 2000
export const DELETE_MS = 50

export function useHeroTyping(prompts = CHAT_HERO_PROMPTS) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = prompts[index]
    if (typing) {
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), TYPE_MS)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setTyping(false), HOLD_MS)
      return () => clearTimeout(t)
    }
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), DELETE_MS)
      return () => clearTimeout(t)
    }
    setIndex((i) => (i + 1) % prompts.length)
    setTyping(true)
  }, [text, index, typing, prompts])

  return text
}

// ---- Scroll-linked tilt of the input pill + tile grid ------------------------------------
// Live: rotateX = 22 - 15 * clamp((scrollY - 300) / 500, 0, 1) deg, recomputed on every
// window scroll event (no rAF / easing). 22deg at rest -> 7deg at scrollY >= 800.
// Applied to three elements: the input pill wrapper (with translateX(-50%)), the grid row and
// the marquee track inside it.
export function heroTiltAt(scrollY) {
  return 22 - 15 * Math.min(Math.max(0, scrollY - 300) / 500, 1)
}

export function useHeroTilt() {
  const [deg, setDeg] = useState(22)
  useEffect(() => {
    const onScroll = () => setDeg(heroTiltAt(window.scrollY))
    // Live registers the listener only (initial state 22); mirror that, but also sync once so a
    // restored scroll position (back/forward) matches what live shows after its first scroll.
    if (window.scrollY > 0) onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return deg
}

// ---- Waveform bars in the "Sam/Chris 1:1" tile ------------------------------------------
// Live (component 38257): initial [40, 90, 50]%; every 200ms set
//   [h(1.5), h(1), h(1.5)] with h(k) = min(floor(50 / ((0.4 * rand + 0.6) * k)) + 15, 100)
// Each tile instance runs its own interval. Height eases via the bars' CSS
// (transition-all duration-300 ease-in-out = 300ms cubic-bezier(.4,0,.2,1)).
const INITIAL_BARS = [40, 90, 50]
const barHeight = (k = 1) => Math.min(Math.floor(50 / ((0.4 * Math.random() + 0.6) * k)) + 15, 100)

export function useWaveBars(active = true) {
  const [bars, setBars] = useState(INITIAL_BARS)
  useEffect(() => {
    if (!active) {
      setBars(INITIAL_BARS)
      return undefined
    }
    const id = setInterval(() => setBars([barHeight(1.5), barHeight(), barHeight(1.5)]), 200)
    return () => clearInterval(id)
  }, [active])
  return bars
}
