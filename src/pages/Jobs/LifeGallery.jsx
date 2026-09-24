import { useMemo } from 'react'
import { motion } from 'framer-motion'
import PreviewableImage from './PreviewableImage.jsx'
import { PHOTO_SPRING, PHOTO_DRAG_TRANSITION, PHOTO_WHILE_DRAG, galleryColumns, useWindowWidth } from '../../motion/jobs-motion.js'

// "Life at Granola" photo wall. On live this is a client-only (ssr:false) chunk that fetches
// /api/images, so the static port had nothing between "Life at Granola" and "Join us".
// Images: first 19 entries of the live /api/images list (downloaded to public/lifestyle-images);
// PHOTO-2024-08-15-21-02-55 is rendered as an empty cell, as on live.
const IMAGES = [
  '/lifestyle-images/a1000108316.jpg',
  '/lifestyle-images/a1000108321.jpg',
  '/lifestyle-images/a1000110406.jpg',
  '/lifestyle-images/a20250303_153643.jpg',
  '/lifestyle-images/a5289756B-1E5B-4223-9FC9-EE1E9DA2921C.JPG.jpg',
  '/lifestyle-images/a7233f247-3ba2-4179-a1c6-9d1dba113aa3.jpg',
  '/lifestyle-images/aIMG_1690.jpg',
  '/lifestyle-images/aIMG_1707.jpg',
  '/lifestyle-images/PHOTO-2023-12-14-16-36-21.jpg',
  '/lifestyle-images/PHOTO-2024-01-23-18-30-54.jpg',
  '/lifestyle-images/PHOTO-2024-01-24-19-39-51.jpg',
  '/lifestyle-images/PHOTO-2024-03-26-21-39-02.jpg',
  '/lifestyle-images/PHOTO-2024-05-01-12-47-28.jpg',
  '/lifestyle-images/PHOTO-2024-05-08-15-00-03.jpg',
  '/lifestyle-images/PHOTO-2024-05-24-15-31-01.jpg',
  '/lifestyle-images/PHOTO-2024-08-15-21-02-55.jpg',
  '/lifestyle-images/WhatsApp Image 2024-07-05 at 09.22.49.jpeg',
  '/lifestyle-images/WhatsApp Image 2024-07-19 at 19.52.48 (1).jpeg',
  '/lifestyle-images/WhatsApp Image 2024-08-13 at 19.02.25.jpeg',
]

const COL_STYLE = { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'stretch', flex: 1, width: 0, gap: '10px' }
const ROW_STYLE = { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'stretch', boxSizing: 'border-box', width: '100%', gap: '10px' }

// Each photo springs (stiffness 80, damping 15) from scale 1 / no offset to a random resting
// pose: scale .8..0.9, x/y -16..16px, rotate 0..3.5deg (sign alternates by index). Dragging
// snaps back to origin.
function Photo({ src, index }) {
  const target = useMemo(
    () => ({
      scale: 0.1 * Math.random() + 0.8,
      x: 32 * Math.random() - 16,
      y: 32 * Math.random() - 16,
      rotate: (index % 2 === 0 ? 1 : -1) * Math.random() * 3.5,
    }),
    [index],
  )
  return (
    <PreviewableImage src={src}>
      <motion.div
        drag
        whileDrag={PHOTO_WHILE_DRAG}
        dragMomentum
        dragTransition={PHOTO_DRAG_TRANSITION}
        dragSnapToOrigin
        animate={target}
        transition={PHOTO_SPRING}
        className="overflow-hidden relative rounded-lg border-[0.5px] border-stroke cursor-pointer"
        draggable="false"
      >
        <img alt={`Gallery image ${index + 1}`} draggable="false" loading="lazy" width="640" height="640" decoding="async" src={src} style={{ color: 'transparent' }} />
      </motion.div>
    </PreviewableImage>
  )
}

export default function LifeGallery() {
  const width = useWindowWidth()
  const count = galleryColumns(width)
  // Equal-count distribution (item i -> column i % n). Live's masonry would re-distribute by
  // height, but the empty cell has zero height so it never does; the result is round-robin.
  const columns = Array.from({ length: count }, () => [])
  IMAGES.forEach((src, i) => {
    columns[i % count].push(
      <div key={i} style={{ display: 'flex', justifyContent: 'stretch' }}>
        {src.includes('2024-08-15-21-02-55') ? <div /> : <Photo src={src} index={i} />}
      </div>,
    )
  })
  return (
    <div className="col-span-5 w-[90vw] -translate-x-1/2 left-1/2 relative">
      <div>
        <div style={ROW_STYLE}>
          {columns.map((items, i) => (
            <div key={i} style={COL_STYLE}>
              {items}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
