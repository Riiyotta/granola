// Measured on the original site (framer-motion props read from the live bundle, sampled per frame).

// Features dropdown panel (desktop). Closed: opacity 0, y 14. Open: opacity 1, y -5.
// y: 300ms tween cubic-bezier(.165,.84,.44,1); opacity: 150ms, same ease.
export const DROPDOWN_INITIAL = { opacity: 0, y: 14 }
export const dropdownAnimate = (open) => ({ opacity: open ? 1 : 0, y: open ? -5 : 14 })
export const DROPDOWN_TRANSITION = {
  duration: 0.3,
  ease: [0.165, 0.84, 0.44, 1],
  opacity: { duration: 0.15 },
  y: { duration: 0.3 },
}

// Mobile menu: framer default transition (y -> spring, opacity -> tween), initial {opacity:0,y:-20}.
// The live menu is NOT wrapped in AnimatePresence, so `exit` never runs: it unmounts instantly on close.
export const MOBILE_MENU_INITIAL = { opacity: 0, y: -20 }
export const MOBILE_MENU_ANIMATE = { opacity: 1, y: 0 }
export const MOBILE_MENU_EXIT = { opacity: 0, y: -20 }
