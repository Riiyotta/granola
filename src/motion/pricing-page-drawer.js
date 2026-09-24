import { useCallback, useEffect, useRef, useState } from 'react'

// Live renders the "Get the Desktop app" / "Sign-up in app" drawer on iOS/Android with vaul
// (Radix Dialog underneath). vaul injects these rules at runtime; captured verbatim from live
// (bottom-direction, no snap points subset):
//   drawer:  animation slideFromBottom / slideToBottom 0.5s cubic-bezier(0.32,0.72,0,1)
//   overlay: animation fadeIn / fadeOut           0.5s cubic-bezier(0.32,0.72,0,1)
// Measured on live @390: translateY 326 -> 271 (55ms) -> 154 (104ms) -> 63 (155ms) -> 0 (~505ms).
const VAUL_CSS = `[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,100%,0)}}`

let injected = false
function injectVaulCss() {
  if (injected || typeof document === 'undefined') return
  injected = true
  const style = document.createElement('style')
  style.setAttribute('data-pricing-vaul', '')
  style.textContent = VAUL_CSS
  document.head.appendChild(style)
}

const EASE = 'cubic-bezier(0.32, 0.72, 0, 1)'
// vaul defaults: close when dragged past 25% of drawer height or flicked faster than 0.4px/ms.
const CLOSE_THRESHOLD = 0.25
const VELOCITY_THRESHOLD = 0.4

// open/close state + mount-until-exit-animation-ends + drag-to-dismiss (vaul behaviour subset).
export function useVaulDrawer() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const drawerRef = useRef(null)
  const drag = useRef(null)

  useEffect(injectVaulCss, [])

  const show = useCallback(() => {
    setMounted(true)
    setOpen(true)
  }, [])
  const hide = useCallback(() => setOpen(false), [])

  // Unmount after slideToBottom ends (vaul keeps it mounted for the 0.5s exit animation).
  useEffect(() => {
    if (open || !mounted) return
    const el = drawerRef.current
    const t = setTimeout(() => setMounted(false), 500)
    const end = (e) => {
      if (e.target === el) {
        clearTimeout(t)
        setMounted(false)
      }
    }
    el?.addEventListener('animationend', end)
    return () => {
      clearTimeout(t)
      el?.removeEventListener('animationend', end)
    }
  }, [open, mounted])

  // Esc closes; body scroll locked while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const onPointerDown = useCallback((e) => {
    if (e.target.closest('input,button,a')) return
    drag.current = { y: e.clientY, t: performance.now(), dy: 0 }
    const el = drawerRef.current
    if (el) el.style.transition = 'none'
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }, [])
  const onPointerMove = useCallback((e) => {
    const d = drag.current
    const el = drawerRef.current
    if (!d || !el) return
    d.dy = Math.max(0, e.clientY - d.y)
    el.style.transform = `translate3d(0, ${d.dy}px, 0)`
  }, [])
  const onPointerUp = useCallback(() => {
    const d = drag.current
    const el = drawerRef.current
    drag.current = null
    if (!d || !el) return
    const h = el.getBoundingClientRect().height
    const v = d.dy / Math.max(1, performance.now() - d.t)
    el.style.transition = `transform 0.5s ${EASE}`
    if (d.dy > h * CLOSE_THRESHOLD || v > VELOCITY_THRESHOLD) {
      el.style.transform = `translate3d(0, 100%, 0)`
      setTimeout(() => {
        setOpen(false)
        setMounted(false)
      }, 500)
    } else {
      el.style.transform = 'translate3d(0, 0, 0)'
    }
  }, [])

  return {
    open,
    mounted,
    show,
    hide,
    drawerRef,
    dragHandlers: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp },
  }
}
