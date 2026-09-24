import { useState } from 'react'
import { pickHeroCallVideos, useHeroCanvasVideo } from '../../motion/hero-call-videos.js'

const TILE = 'relative overflow-hidden w-full rounded-sm transition-all duration-300 border aspect-square border-oats-neutral-900'
const MEDIA = 'absolute inset-0 z-0 h-full w-full object-cover'

function CallVideo({ src, poster }) {
  const { canvasRef, fallback } = useHeroCanvasVideo(src)
  if (fallback) return <video src={src} poster={poster} autoPlay muted loop playsInline className={MEDIA} />
  return (
    <canvas ref={canvasRef} aria-hidden="true" className={MEDIA} style={{ backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
  )
}

// Live VideoThumbs (chunk 1343) with the hero's className overrides.
export default function HeroVideoThumbs() {
  const [videos] = useState(pickHeroCallVideos)
  return (
    <div className="video-thumbs flex-col items-stretch border video-call-parallax flex rounded-lg bg-black p-[3px] gap-[3px] border-oats-neutral-900">
      {videos.map((v) => (
        <div key={v.src} className={TILE + ' pointer-events-auto'}>
          <CallVideo src={v.src} poster={v.poster} />
        </div>
      ))}
      <div aria-hidden="true" className="flex items-center justify-center gap-1.5 pt-0.5">
        <span className="flex items-center justify-center rounded-full w-[26px] h-[14px] text-white bg-[#484844]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic size-2.5">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        </span>
        <span className="flex items-center justify-center rounded-full w-[26px] h-[14px] text-white bg-[#484844]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-2.5">
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
          </svg>
        </span>
        <span className="flex items-center justify-center rounded-full w-[26px] h-[14px] text-white bg-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone size-2.5 rotate-135">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
      </div>
    </div>
  )
}
