import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useFooterReveal } from '../motion/footer-reveal.js'

const IMAGES = [1, 2, 3, 4, 5, 6].map((n) => `/assets/footer-${n}.jpg`)
const IMG_STYLE = { position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }

// Renders the fixed green panel (z -1) plus the page wrapper that the spring lifts,
// matching the live DOM: panel, then div.min-h-svh.bg-background > children + 1px sentinel.
export default function FooterReveal({ children }) {
  const panelRef = useRef(null)
  const sentinelRef = useRef(null)
  const y = useFooterReveal(panelRef, sentinelRef)
  return (
    <>
      <div ref={panelRef} aria-hidden="true" className="footer-reveal-panel">
        {IMAGES.map((src) => (
          <img key={src} alt="" loading="lazy" decoding="async" style={IMG_STYLE} sizes="100vw" src={src} />
        ))}
      </div>
      <motion.div style={{ y }} className="min-h-svh bg-background">
        {children}
        <div ref={sentinelRef} aria-hidden="true" className="-mt-px h-px" />
      </motion.div>
    </>
  )
}
