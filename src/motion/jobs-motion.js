import { useEffect, useState } from 'react'

// Values below are lifted from the live /jobs client bundle (page-f94b1838732618b0.js and the
// dynamically imported gallery chunk 3340) and confirmed numerically with Playwright @1440.

// Hero collage + Life at Granola gallery: framer-motion spring, identical on both.
// Live: all hero props (left/top/scale/rotate/opacity) share one spring; at t=+250ms the
// progress was 0.614 for every card and prop, overshoot ~0.7% at +500ms, settled by ~+900ms.
export const PHOTO_SPRING = { type: 'spring', stiffness: 80, damping: 15 }
// Drag: framer drag with momentum; whileDrag scale 1.02.
export const PHOTO_DRAG_TRANSITION = { timeConstant: 100, power: 0.1 }
export const PHOTO_WHILE_DRAG = { scale: 1.02 }

// Integer in [min, max]; optionally negated (always, or 50/50). Same helper as live.
export function randInt(min, max, maybeNegative = false, forceNegative = false) {
  const v = Math.floor(Math.random() * (max - min + 1)) + min
  return forceNegative || (maybeNegative && Math.random() < 0.5) ? -v : v
}

// Team grid hover card (desktop): position follows the hovered tile through a spring.
export const TEAM_CARD_SPRING = { stiffness: 420, damping: 32, mass: 0.45 }
// Card enter/exit: opacity 0 -> 1, scale 0.92 -> 1 (exit to 0.96), 140ms easeOut.
export const TEAM_CARD_TRANSITION = { duration: 0.14, ease: 'easeOut' }
// Leaving a tile / the card hides it after 120ms (measured: opacity still 1 at +110ms).
export const TEAM_HIDE_DELAY = 120

// Tile opacity falloff around the hovered tile: 1 - 0.12 * gridDistance, floored at 0.5.
export function tileOpacity(i, hovered, columns) {
  if (hovered === null || !columns) return undefined
  const d = Math.hypot(Math.floor(i / columns) - Math.floor(hovered / columns), (i % columns) - (hovered % columns))
  return Math.max(0.5, 1 - 0.12 * d)
}

export const TEAM_FILTERS = [
  { id: 'product-design', label: 'Product & Design' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'sales-gtm', label: 'Sales & GTM' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'customer-experience', label: 'Customer Experience' },
  { id: 'operations', label: 'Operations' },
  { id: 'people-talent', label: 'People & Talent' },
  { id: 'leadership', label: 'Leadership' },
]

// Role -> filter areas, same regexes as live.
export function roleAreas(role) {
  const r = (role ?? '').toLowerCase()
  const s = new Set()
  const t = (re) => re.test(r)
  const eng = t(/engineer|developer|architect|\bcto\b/)
  if (eng) s.add('engineering')
  if (t(/design/)) s.add('product-design')
  if (!eng && t(/\bproduct\b/)) s.add('product-design')
  if (t(/sales|account executive|\bae\b|\bsdr\b|\bgtm\b|business development|partnership|revenue/)) s.add('sales-gtm')
  if (t(/marketing|growth|creative|content/)) s.add('marketing')
  if (t(/customer|\bcx\b|support|success/)) s.add('customer-experience')
  if (t(/operations|\bops\b|office|executive assistant|chief of staff|finance|legal/)) s.add('operations')
  if (t(/talent|recruit|\bpeople\b|\bhr\b/)) s.add('people-talent')
  if (t(/chief of staff/)) {
    s.add('product-design')
    s.add('marketing')
  }
  if (t(/founder|\bceo\b|\bcto\b|\bcoo\b|\bcfo\b|\bcmo\b|\bcpo\b|\bcro\b|\bcso\b/)) s.add('leadership')
  return s
}

// Fisher-Yates; live shuffles the filter chip order once on mount.
export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// null until mounted, then whether the device has a fine hovering pointer (live: tap on touch
// devices opens a bottom drawer instead of the hover card).
export function useCanHover() {
  const [v, setV] = useState(null)
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setV(mq.matches)
    const on = (e) => setV(e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return v
}

export function useWindowWidth() {
  const [w, setW] = useState(() => window.innerWidth)
  useEffect(() => {
    const on = () => setW(window.innerWidth)
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  return w
}

// Life at Granola masonry (react-responsive-masonry on live):
// columnsCountBreakPoints {350:1, 750:2, 900:3, 1280:5, 1500:5}, a breakpoint applies when it is
// strictly below the viewport width. Gutter resolves to "10px" (the default gutterBreakPoints).
export function galleryColumns(width) {
  const bp = { 350: 1, 750: 2, 900: 3, 1280: 5, 1500: 5 }
  let n = bp[350]
  for (const k of Object.keys(bp).map(Number).sort((a, b) => a - b)) if (k < width) n = bp[k]
  return n
}

// Body scroll lock like react-remove-scroll (used by the Radix dialog on live).
export function lockScroll() {
  const b = document.body
  const prev = { overflow: b.style.overflow, pe: b.style.pointerEvents }
  b.setAttribute('data-scroll-locked', '1')
  b.style.overflow = 'hidden'
  return () => {
    b.removeAttribute('data-scroll-locked')
    b.style.overflow = prev.overflow
  }
}
