import { useEffect, useRef, useState } from 'react'

// Live module 71323: two distinct random clips out of 15, picked once per page load
// (module-level cache). `-512` variants at (min-width: 768px), 256px variants below.
// Posters are preloaded with `new Image()`.
const NAMES = [
  'jack-call', 'camilla-call', 'paavan-call', 'rob-call', 'sirine-call', 'naomi-call', 'caroline-call',
  'nickt-call', 'sean-call', 'clem-call', 'jullien-call', 'nickfil-call', 'will-call', 'angus-call', 'xiuting-call',
]
const BASE = '/assets/call-videos/'
let picked = null

export function pickHeroCallVideos() {
  if (picked) return picked
  const suffix = window.matchMedia('(min-width: 768px)').matches ? '-512' : ''
  const make = (n) => ({ src: `${BASE}${n}${suffix}.mp4`, poster: `${BASE}${n}${suffix}-poster.jpg` })
  const a = Math.floor(Math.random() * NAMES.length)
  let b = Math.floor(Math.random() * (NAMES.length - 1))
  if (b >= a) b++
  picked = [make(NAMES[a]), make(NAMES[b])]
  for (const v of picked) new Image().src = v.poster
  return picked
}

// Live VideoThumb: detached muted/looping <video>, every decoded frame drawn to the
// canvas with requestVideoFrameCallback at the video's native size (canvas is
// object-cover). Poster stays as the canvas background until frames arrive. If rVFC is
// unsupported or play() rejects, it renders a plain <video autoplay muted loop playsinline>.
export function useHeroCanvasVideo(src) {
  const canvasRef = useRef(null)
  const [fallback, setFallback] = useState(false)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !('requestVideoFrameCallback' in HTMLVideoElement.prototype)) {
      setFallback(true)
      return
    }
    const video = document.createElement('video')
    video.src = src
    video.muted = true
    video.loop = true
    video.playsInline = true
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
    video.play().catch(() => { if (!disposed) setFallback(true) })
    return () => {
      disposed = true
      video.cancelVideoFrameCallback(handle)
      video.pause()
      video.removeAttribute('src')
      video.load()
    }
  }, [src])
  return { canvasRef, fallback }
}
