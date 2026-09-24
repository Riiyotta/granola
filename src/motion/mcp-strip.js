import { useEffect, useRef } from 'react'

// Measured on the original site MCP connector strip (Playwright, 1440 + 390):
//  autoscroll 29.99px/s (spec: 30px/s, dt capped at 100ms), only while intersecting
//  scale = 0.59 + 0.41*cos(min(|layoutCenterX - vw/2| / (vw/2), 1) * PI/2)
//    (layoutCenterX = untransformed tile centre; confirmed against live inline `scale`)
//  translate keeps every visual gap at 2*padding (44px md / 24px mobile), normalised by
//    linear interpolation so the offset at x = vw/2 is 0 (live values match to <0.01px)
//  paused while pointer down; user scroll resets the base; reduced motion: nothing moves
export const MCP_SPEED = 30
const DT_CAP = 0.1

export function useMcpStrip(setCount) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tiles = [...el.querySelectorAll('[data-mcp-tile]')]
    const items = tiles.map((t) => t.parentElement)
    let raf = 0
    let last = 0
    let pos = 0
    let down = false
    let visible = false
    let setW = 0
    let lastWritten = -1

    const measureSet = () => {
      // width of one set of 11 connectors (items are equal width)
      setW = items[0].offsetWidth * (items.length / setCount)
    }
    const write = (x) => {
      el.scrollTo({ left: x, behavior: 'instant' })
      lastWritten = el.scrollLeft
    }
    const wrap = () => {
      // content repeats; keep scroll position inside the 2nd..3rd copies
      let x = el.scrollLeft
      if (x < setW) x += setW
      else if (x >= setW * 3) x -= setW
      else return false
      pos += x - el.scrollLeft
      write(x)
      return true
    }

    const layout = () => {
      const vw = window.innerWidth
      const half = vw / 2
      const n = tiles.length
      const c = new Array(n)
      const s = new Array(n)
      // item wrappers are never transformed, so their boxes are the layout positions
      const base = items[0].getBoundingClientRect().left - items[0].offsetLeft
      const w = tiles[0].offsetWidth
      const pad = (items[0].offsetWidth - w) / 2
      for (let k = 0; k < n; k++) {
        // layout (untransformed) centre in viewport coords
        c[k] = base + items[k].offsetLeft + items[k].offsetWidth / 2
        const i = Math.min(Math.abs(c[k] - half) / half, 1)
        s[k] = reduce ? 1 : 0.59 + 0.41 * Math.cos((i * Math.PI) / 2)
      }
      if (reduce) return
      const m = new Array(n)
      m[0] = 0
      for (let k = 1; k < n; k++) {
        m[k] = m[k - 1] + (w * (s[k - 1] + s[k])) / 2 + pad * 2 - (c[k] - c[k - 1])
      }
      // normalise: offset interpolated at the viewport centre is 0
      let off = 0
      let j = 0
      while (j < n - 1 && c[j + 1] < half) j++
      if (j < n - 1 && c[j] <= half) {
        const f = (half - c[j]) / (c[j + 1] - c[j])
        off = m[j] + f * (m[j + 1] - m[j])
      } else off = m[j]
      for (let k = 0; k < n; k++) {
        const st = tiles[k].style
        // skip far-off tiles that are already at rest values
        st.scale = s[k].toFixed(6)
        st.translate = `${(m[k] - off).toFixed(3)}px`
      }
    }

    const frame = (t) => {
      raf = requestAnimationFrame(frame)
      const dt = last ? Math.min((t - last) / 1000, DT_CAP) : 0
      last = t
      if (!down && !reduce) {
        pos += MCP_SPEED * dt
        write(pos)
        // write() rounds to device pixels; keep the float accumulator
      }
      wrap()
      layout()
    }

    const onScroll = () => {
      // user scroll (wheel/touch/drag) resets the base
      if (Math.abs(el.scrollLeft - lastWritten) > 1) {
        pos = el.scrollLeft
        lastWritten = el.scrollLeft
        if (!raf) layout()
      }
    }

    // mouse drag (blossom-carousel style); touch uses native scrolling
    let dragX = 0
    let dragStart = 0
    const onDown = (e) => {
      down = true
      if (e.pointerType === 'mouse' && e.button === 0) {
        dragX = e.clientX
        dragStart = el.scrollLeft
        el.setPointerCapture(e.pointerId)
        el.addEventListener('pointermove', onMove)
      }
    }
    const onMove = (e) => {
      write(dragStart - (e.clientX - dragX))
      pos = el.scrollLeft
      if (wrap()) { dragStart = el.scrollLeft + (e.clientX - dragX); }
    }
    const onUp = () => {
      down = false
      last = 0
      pos = el.scrollLeft
      el.removeEventListener('pointermove', onMove)
    }

    measureSet()
    write(setW + 0) // start at the 2nd copy; same visual as live (set tail fills the left)
    pos = el.scrollLeft
    layout()

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting
      if (visible && !raf) { last = 0; raf = requestAnimationFrame(frame) }
      else if (!visible && raf) { cancelAnimationFrame(raf); raf = 0 }
    })
    io.observe(el)
    const onResize = () => { measureSet(); wrap(); layout() }
    window.addEventListener('resize', onResize)
    el.addEventListener('scroll', onScroll, { passive: true })
    el.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', onResize)
      el.removeEventListener('scroll', onScroll)
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [setCount])
  return ref
}
