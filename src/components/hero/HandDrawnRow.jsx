import { useId } from 'react'
import { useHeroHandDrawn } from '../../motion/hero-hand-drawn.js'

export default function HandDrawnRow({ icon, children }) {
  const id = 'hand-drawn-' + useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const { turbRef, active, enter, leave } = useHeroHandDrawn()
  return (
    <p className="flex items-center gap-3 min-h-(--notepad-row)" onPointerEnter={enter} onPointerLeave={leave}>
      <svg aria-hidden="true" className="absolute size-0">
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence ref={turbRef} type="turbulence" baseFrequency="0.02" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <img alt="" loading="lazy" width="50" height="50" decoding="async" className="size-[50px] shrink-0 object-contain" style={{ color: 'transparent', filter: active ? `url(#${id})` : undefined }} src={icon} />
      <span>{children}</span>
    </p>
  )
}

export function HandDrawnRows() {
  return (
    <>
      <HandDrawnRow icon="/assets/roboto.svg">
        {'Uses your computer audio, '}
        <strong className="font-semibold">{'so doesn’t invite a bot'}</strong>
      </HandDrawnRow>
      <HandDrawnRow icon="/assets/lock.svg">
        <strong className="font-semibold">{'Private by default'}</strong>
        {', easy to share if you choose'}
      </HandDrawnRow>
      <HandDrawnRow icon="/assets/tick.svg">
        {'Works with '}
        <strong className="font-semibold">{'Zoom'}</strong>
        {', '}
        <strong className="font-semibold">{'Google Meet'}</strong>
        {', '}
        <strong className="font-semibold">{'Teams'}</strong>
        {' and every other meeting app.'}
      </HandDrawnRow>
    </>
  )
}
