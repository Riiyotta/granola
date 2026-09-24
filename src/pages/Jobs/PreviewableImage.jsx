import { cloneElement, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { lockScroll } from '../../motion/jobs-motion.js'

// Live wraps the Casa Granola thumbnails and the Life at Granola photos in a Radix Dialog.
// Measured on live: overlay `fixed inset-0 z-[100] bg-black/70` appears instantly; the content
// plays `contentShow` (150ms cubic-bezier(.16,1,.3,1): opacity 0 -> 1,
// translate(-50%,-48%) scale(.96) -> translate(-50%,-50%) scale(1)) from the original CSS via
// `data-[state=open]:animate-contentShow`. Closing (Escape / click outside) is instant; the body
// is scroll-locked while open.
export default function PreviewableImage({ src, children }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const contentRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const unlock = lockScroll()
    const prevPE = document.body.style.pointerEvents
    document.body.style.pointerEvents = 'none'
    contentRef.current?.focus({ preventScroll: true })
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onDown = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      unlock()
      document.body.style.pointerEvents = prevPE
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
      triggerRef.current?.focus?.({ preventScroll: true })
    }
  }, [open])

  const trigger = cloneElement(children, {
    ref: triggerRef,
    type: 'button',
    'aria-haspopup': 'dialog',
    'aria-expanded': open ? 'true' : 'false',
    'aria-controls': `radix-${id}`,
    'data-state': open ? 'open' : 'closed',
    onClick: (e) => {
      children.props.onClick?.(e)
      if (!e.defaultPrevented) setOpen((o) => !o)
    },
  })

  return (
    <>
      {trigger}
      {open &&
        createPortal(
          <>
            <div data-state="open" className="fixed inset-0 z-[100] bg-black/70" style={{ pointerEvents: 'auto' }} />
            <div
              ref={contentRef}
              role="dialog"
              id={`radix-${id}`}
              aria-labelledby={`radix-${id}-title`}
              data-state="open"
              tabIndex={-1}
              className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 bottom-auto -translate-x-1/2 -translate-y-1/2 rounded-t-2xl rounded-b-2xl bg-white shadow-xl overflow-hidden focus:outline-hidden z-[100]  border-white max-h-[90vh]"
              style={{ pointerEvents: 'auto' }}
            >
              <h2 id={`radix-${id}-title`} className="sr-only">
                {'Image preview'}
              </h2>
              <img alt="Gallery image" draggable="false" width="640" height="640" decoding="async" src={src} style={{ color: 'transparent' }} />
            </div>
          </>,
          document.body,
        )}
    </>
  )
}
