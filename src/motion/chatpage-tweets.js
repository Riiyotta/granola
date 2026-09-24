import { useEffect, useRef } from 'react'

// react-tweet "Copy link" action, as measured on live /chat (Playwright click):
//  - writes the tweet URL (the header avatar/author href) to the clipboard
//  - swaps the link icon for a check icon and the label "Copy link" -> "Copied!"
//  - reverts after 6000ms (measured 6027ms incl. polling)
// The tweets are ported as static hydrated markup, so this binds by event delegation.
const COPY_PATH =
  'M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z'
const CHECK_PATH = 'M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z'
export const TWEET_COPIED_MS = 6000

export function useTweetCopyLinks() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return undefined
    const timers = new Map()
    const setState = (btn, copied) => {
      const path = btn.querySelector('svg path')
      const label = btn.querySelector('[class*="tweet-actions_copyText"]')
      if (path) path.setAttribute('d', copied ? CHECK_PATH : COPY_PATH)
      if (label) label.textContent = copied ? 'Copied!' : 'Copy link'
    }
    const onClick = (e) => {
      const btn = e.target.closest('button[class*="tweet-actions_copy"]')
      if (!btn || !root.contains(btn)) return
      const article = btn.closest('article')
      const url = article?.querySelector('a[class*="tweet-header_avatar"]')?.href
      if (url && navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {})
      setState(btn, true)
      clearTimeout(timers.get(btn))
      timers.set(btn, setTimeout(() => setState(btn, false), TWEET_COPIED_MS))
    }
    root.addEventListener('click', onClick)
    return () => {
      root.removeEventListener('click', onClick)
      timers.forEach((t) => clearTimeout(t))
    }
  }, [])
  return ref
}
