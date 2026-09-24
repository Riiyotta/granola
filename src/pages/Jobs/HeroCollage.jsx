import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PHOTO_SPRING, PHOTO_DRAG_TRANSITION, PHOTO_WHILE_DRAG, randInt } from '../../motion/jobs-motion.js'

// Live /jobs hero photo stack. It is a client component: the SSR markup only contains every card
// parked at left:60% top:40% scale(.8) opacity:.5 with no height (aspect-ratio is applied by the
// animation), so the static port rendered nothing. On mount each card springs to a random
// rotation (+-0..7deg) and position (left 50..90% clamped to stay on screen, top 35..65%).
// Cards are draggable (with momentum) and mousedown brings a card to the front.
//
// Widths: live picks them randomly on the server; these are the values served by the current
// live SSR (20/14/14/21/21/17/19vw).
const IMAGES = [
  { id: 2, url: '/landingImages/mother-demo.jpg', alt: 'Image 2', link: '#', width: '20vw' },
  { id: 8, url: '/landingImages/margaret-hamilton.jpg', alt: 'Margaret Hamilton', link: '#', isPortrait: true, width: '14vw' },
  { id: 4, url: '/landingImages/scribe2.jpg', alt: 'Image 3', isPortrait: true, width: '14vw' },
  { id: 7, url: '/landingImages/nick-page-cZ80txK6DjA-unsplash.jpg', alt: 'brick lane', width: '21vw' },
  { id: 6, url: '/landingImages/vs-code.png', link: '#', alt: 'VS Code', width: '21vw' },
  { id: 5, url: '/hiring-image-stack/donuts.jpg', alt: 'Image 3', width: '17vw' },
  { id: 3, url: '/hiring-image-stack/beers.jpeg', alt: 'Team Granola', width: '19vw' },
]

const IMG_STYLE = { position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }

function ExternalLink({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="grid absolute right-2 bottom-2 place-items-center w-12 h-12 text-white rounded-xl backdrop-blur-lg transition-all origin-bottom-right scale-75 md:w-8 md:h-8 md:opacity-0 group-hover:opacity-100 group-hover:scale-100 bg-black/20 hover:bg-black/10 hover:scale-110">
      <svg aria-hidden="true" focusable="false" role="img" className="w-6 h-6 lg:h-4 lg:w-4" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{ display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible' }}>
        <path d="M4.53 4.75A.75.75 0 0 1 5.28 4h6.01a.75.75 0 0 1 .75.75v6.01a.75.75 0 0 1-1.5 0v-4.2l-5.26 5.261a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L9.48 5.5h-4.2a.75.75 0 0 1-.75-.75Z" />
      </svg>
    </a>
  )
}

function Card({ image, index, zIndex, onFront }) {
  const [pos, setPos] = useState({ rotation: 0, left: '60%', top: '40%' })
  useEffect(() => {
    const rotation = randInt(0, 7, true)
    const ratio = image.isPortrait ? 0.75 : 1.5
    const w = Math.max((parseFloat(image.width) / 100) * window.innerWidth, image.isPortrait ? 240 : 320)
    const a = (Math.abs(rotation) * Math.PI) / 180
    const maxLeft = 100 - (w * Math.cos(a) + (w / ratio) * Math.sin(a)) / 2 / window.innerWidth * 100
    setPos({
      rotation,
      left: Math.min(Math.floor(41 * Math.random()) + 50, maxLeft) + '%',
      top: Math.floor(31 * Math.random()) + 35 + '%',
    })
  }, [image])

  return (
    <motion.div
      drag
      whileDrag={PHOTO_WHILE_DRAG}
      dragMomentum
      dragTransition={PHOTO_DRAG_TRANSITION}
      initial={{ scale: 0.8, left: '60%', top: '40%', translateX: '-50%', rotate: 0, translateY: '-50%', opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1, rotate: pos.rotation, aspectRatio: image.isPortrait ? 0.75 : 1.5, left: pos.left, top: pos.top }}
      transition={PHOTO_SPRING}
      style={{ order: index, width: image.width, minWidth: image.isPortrait ? 240 : 320, position: 'absolute', pointerEvents: 'auto', zIndex }}
      onMouseDown={onFront}
      className="overflow-hidden rounded-2xl shadow-photo group cursor-grab"
      draggable="false"
    >
      <img alt={image.alt} draggable="false" loading="lazy" decoding="async" className="object-cover absolute shadow-lg bg-background-100" style={IMG_STYLE} sizes="100vw" src={image.url} />
      {image.link && <ExternalLink link={image.link} />}
    </motion.div>
  )
}

export default function HeroCollage() {
  const [z, setZ] = useState(() => IMAGES.map((img, i) => [img.id, i + 10]))
  const front = (id) => {
    setZ((prev) => {
      const max = Math.max(...prev.map((p) => p[1]))
      return prev.map((p) => (p[0] === id ? [p[0], max + 1] : p))
    })
  }
  return (
    <div className="hidden absolute inset-0 pointer-events-none md:block">
      {IMAGES.map((img, i) => (
        <Card key={img.id} image={img} index={i} zIndex={z.find((p) => p[0] === img.id)[1]} onFront={() => front(img.id)} />
      ))}
    </div>
  )
}
