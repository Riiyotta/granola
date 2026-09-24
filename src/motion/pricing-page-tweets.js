import { useEffect } from 'react'

// react-tweet client behaviour for the static tweet markup on /pricing (event delegation):
// - "Copy link": copies the tweet URL, swaps to the check icon + "Copied!" for 6000ms.
// - Video: play button removes itself, enables native controls and plays inline; the
//   "Watch on X" pill hides while playing.
const CHECK_PATH = 'M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z'
const COPY_MS = 6000

export function useTweetInteractions(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const timers = new Set()

    const onClick = (e) => {
      const copy = e.target.closest('.tweet-actions_copy__2YVai')
      if (copy && root.contains(copy)) {
        e.preventDefault()
        const url = copy.closest('article')?.querySelector('.tweet-info-created-at_root__nRn6X')?.href
        if (url) navigator.clipboard?.writeText(url).catch(() => {})
        const path = copy.querySelector('path')
        const text = copy.querySelector('.tweet-actions_copyText__fz9jS')
        if (!copy.dataset.origPath) copy.dataset.origPath = path.getAttribute('d')
        path.setAttribute('d', CHECK_PATH)
        text.textContent = 'Copied!'
        clearTimeout(Number(copy.dataset.timer))
        const t = setTimeout(() => {
          path.setAttribute('d', copy.dataset.origPath)
          text.textContent = 'Copy link'
          timers.delete(t)
        }, COPY_MS)
        timers.add(t)
        copy.dataset.timer = String(t)
        return
      }
      const play = e.target.closest('.tweet-media-video_videoButton__3lFll')
      if (play && root.contains(play)) {
        e.preventDefault()
        const video = play.previousElementSibling
        const watch = play.parentElement.querySelector('.tweet-media-video_watchOnTwitter__9bewi')
        play.remove()
        video.controls = true
        video.tabIndex = 0
        video.addEventListener('play', () => watch && (watch.style.display = 'none'))
        video.load()
        video.play().then(() => video.focus()).catch(() => { video.controls = true })
      }
    }
    root.addEventListener('click', onClick)
    return () => {
      root.removeEventListener('click', onClick)
      timers.forEach(clearTimeout)
    }
  }, [rootRef])
}
