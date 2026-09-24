import { useEffect, useState } from 'react'

// Live Navbar: `window.scrollY > 0` -> nav[data-scrolled=true]; evaluated on mount and on every
// scroll event (no throttle). The site's <main> also gets the `scrolled` class from the same
// condition (useSyncExternalStore), which the original CSS uses (`main.scrolled .floating-item`).
// Visual transition (bg/border/shadow 300ms ease-out) lives in the original CSS on .navbar-pill.
export function useNavScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => {
      const s = window.scrollY > 0
      setScrolled(s)
      const main = document.querySelector('main')
      if (main) main.classList.toggle('scrolled', s)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return scrolled
}

// Live: body overflow hidden while the mobile menu is open, restored on close/unmount.
export function useBodyScrollLock(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [locked])
}

// Live picks the Download label by OS. mac/unknown -> Apple icon + "Download";
// iOS/Android -> "Get the app".
export function detectDevice() {
  if (typeof navigator === 'undefined') return 'mac'
  const ua = navigator.userAgent || ''
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios'
  if (/Android/i.test(ua)) return 'android'
  if (/Windows/i.test(ua)) return 'windows'
  return 'mac'
}
