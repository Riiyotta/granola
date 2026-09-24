import { useEffect } from 'react'

// Live (VideoThumb canvas): a detached muted/looping <video> is played and every
// decoded frame is painted to the canvas via requestVideoFrameCallback. The
// canvas keeps the poster as a CSS background until the first frame lands.
// If rVFC is unsupported or play() is rejected, the live site falls back to a
// plain <video autoplay muted loop playsinline poster>.
export function useHiwVideoThumbs(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const canvases = [...root.querySelectorAll('.video-thumbs canvas')]
    const cleanups = canvases.map((canvas) => {
      const m = /url\("?([^")]+)-poster\.jpg"?\)/.exec(canvas.style.backgroundImage || '')
      if (!m) return () => {}
      const src = `${m[1]}.mp4`
      const poster = `${m[1]}-poster.jpg`
      const ctx = canvas.getContext('2d')
      let fallback = null
      const useFallback = () => {
        if (fallback) return
        fallback = document.createElement('video')
        Object.assign(fallback, { src, poster, autoplay: true, muted: true, loop: true, playsInline: true })
        fallback.className = canvas.className
        canvas.style.display = 'none'
        canvas.after(fallback)
      }
      if (!ctx || !('requestVideoFrameCallback' in HTMLVideoElement.prototype)) {
        useFallback()
        return () => { fallback?.remove(); canvas.style.display = '' }
      }
      const video = document.createElement('video')
      Object.assign(video, { src, muted: true, loop: true, playsInline: true })
      let handle = 0
      let disposed = false
      const paint = () => {
        if (canvas.width !== video.videoWidth && video.videoWidth) {
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
        }
        ctx.drawImage(video, 0, 0)
        handle = video.requestVideoFrameCallback(paint)
      }
      handle = video.requestVideoFrameCallback(paint)
      video.play().catch(() => { if (!disposed) useFallback() })
      return () => {
        disposed = true
        video.cancelVideoFrameCallback(handle)
        video.pause()
        video.removeAttribute('src')
        video.load()
        if (fallback) { fallback.remove(); canvas.style.display = '' }
      }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [rootRef])
}
