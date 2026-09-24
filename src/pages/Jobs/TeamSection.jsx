import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { TEAM_MEMBERS } from './teamMembers.js'
import {
  TEAM_CARD_SPRING,
  TEAM_CARD_TRANSITION,
  TEAM_FILTERS,
  TEAM_HIDE_DELAY,
  roleAreas,
  shuffle,
  tileOpacity,
  useCanHover,
} from '../../motion/jobs-motion.js'

// "The team" block on live /jobs (client component), rebuilt from the live bundle:
//  - filter chips (order shuffled on mount); a chip dims non-matching tiles (grey overlay,
//    300ms) and disables their hover; clicking the active chip again resets to Everyone.
//  - desktop (hover + fine pointer): hovering a tile shows a card spanning up to 4 columns x 2
//    rows below (or above, near the bottom) the tile row. It fades/scales in over 140ms and its
//    x/y follow tiles through a spring (stiffness 420, damping 32, mass .45); other tiles fade
//    by grid distance (1 - .12*d, min .5). Leaving hides it after 120ms.
//  - touch: tapping a tile opens a bottom drawer (vaul) with the member's links.

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const GlobeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className={className}>
    <path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 14.899 14.899 0 0 1 1.663 4.472 8.547 8.547 0 0 0 1.84-1.662ZM13.326 7.825a13.43 13.43 0 0 0-2.413-5.773 8.087 8.087 0 0 0-1.826 0 13.43 13.43 0 0 0-2.413 5.773A8.473 8.473 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675ZM6.514 9.376A9.98 9.98 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 0 1-.351 3.759A13.54 13.54 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 0 1-.352-3.758ZM5.285 7.074a14.9 14.9 0 0 1 1.663-4.471 8.028 8.028 0 0 0-3.503 2.81c.529.638 1.149 1.199 1.84 1.66ZM17.334 6.798a7.973 7.973 0 0 1 .614 4.115 13.47 13.47 0 0 1-3.178 1.72 15.093 15.093 0 0 0 .174-3.939 10.043 10.043 0 0 0 2.39-1.896ZM2.666 6.798a10.042 10.042 0 0 0 2.39 1.896 15.196 15.196 0 0 0 .174 3.94 13.472 13.472 0 0 1-3.178-1.72 7.973 7.973 0 0 1 .615-4.115ZM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 0 1-1.72 3.178 8.099 8.099 0 0 1-1.826 0 13.47 13.47 0 0 1-1.72-3.178c.855.151 1.735.23 2.633.23ZM14.357 14.357a14.912 14.912 0 0 1-1.305 3.04 8.027 8.027 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305ZM6.948 17.397a8.027 8.027 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 0 0 1.305 3.04Z" />
  </svg>
)
const ArrowIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className={className}>
    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
  </svg>
)
function SocialIcon({ label, className }) {
  if (label === 'LinkedIn') return <LinkedInIcon className={className} />
  if (label === 'X') return <XIcon className={className} />
  return <GlobeIcon className={className} />
}

function linksOf(m) {
  const out = []
  if (m.linkedIn) out.push({ href: m.linkedIn, label: 'LinkedIn' })
  if (m.twitter) out.push({ href: m.twitter, label: 'X' })
  if (m.website) out.push({ href: m.website, label: 'Website' })
  return out
}
const firstName = (m) => m.name.trim().split(/\s+/)[0] || m.name

function CardAvatar({ member, size, style }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="overflow-hidden relative self-center rounded-lg shrink-0" style={{ ...style, width: size, height: size }}>
      <img src={member.avatar} width="64" height="64" alt="" aria-hidden="true" loading="lazy" decoding="async" className="object-cover absolute inset-0 size-full" style={{ color: 'transparent' }} />
      <img
        src={member.avatar}
        width="128"
        height="128"
        alt={member.name}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        ref={(el) => el?.complete && setLoaded(true)}
        className={'object-cover absolute inset-0 transition-opacity duration-150 size-full ' + (loaded ? 'opacity-100' : 'opacity-0')}
        style={{ color: 'transparent' }}
      />
    </div>
  )
}

function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active ? 'true' : 'false'}
      onClick={onClick}
      className={'px-3 py-1 text-sm rounded-full border transition-colors cursor-pointer ' + (active ? 'border-oats-neutral-450 bg-oats-neutral-100 text-content-primary' : 'border-stroke text-oats-neutral-700 hover:bg-oats-neutral-100')}
    >
      {label}
    </button>
  )
}

// vaul bottom drawer: slideFromBottom / slideToBottom, 500ms cubic-bezier(.32,.72,0,1);
// overlay uses the original `animate-in fade-in duration-200` classes.
const DRAWER_EASE = 'cubic-bezier(0.32, 0.72, 0, 1)'
function MemberDrawer({ member, onClose }) {
  const [shown, setShown] = useState(member)
  const [closing, setClosing] = useState(false)
  const ref = useRef(null)
  if (member && member !== shown) {
    setShown(member)
    setClosing(false)
  }
  if (!member && shown && !closing) setClosing(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const a = el.animate(
      closing ? [{ transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,100%,0)' }] : [{ transform: 'translate3d(0,100%,0)' }, { transform: 'translate3d(0,0,0)' }],
      { duration: 500, easing: DRAWER_EASE, fill: closing ? 'forwards' : 'none' },
    )
    if (closing) a.onfinish = () => { setShown(null); setClosing(false) }
    return () => a.cancel()
  }, [closing, shown])

  useEffect(() => {
    if (!shown || closing) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [shown, closing, onClose])

  if (!shown) return null
  const links = linksOf(shown)
  return createPortal(
    <>
      <div aria-hidden="true" onClick={onClose} className="fixed inset-0 z-50 duration-200 pointer-events-auto bg-black/40 animate-in fade-in touch-none" />
      <div
        ref={ref}
        role="dialog"
        data-state={closing ? 'closed' : 'open'}
        data-vaul-drawer-direction="bottom"
        data-vaul-drawer=""
        tabIndex={-1}
        className="flex fixed right-0 bottom-0 left-0 flex-col gap-4 p-4 pb-8 bg-white rounded-t-2xl z-100 focus:outline-hidden"
        style={{ pointerEvents: 'auto', touchAction: 'none', willChange: 'transform' }}
      >
        <div className="mx-auto w-12 h-1.5 rounded-full bg-oats-neutral-200" />
        <div>
          <div className="flex gap-4 items-center">
            <img alt={shown.name} loading="lazy" width="64" height="64" decoding="async" className="object-cover rounded-lg size-16" style={{ color: 'transparent' }} src={shown.avatar} />
            <div>
              <h2 className="font-medium text-content-primary">{firstName(shown)}</h2>
              <p className="text-sm leading-snug text-content-secondary">{shown.role}</p>
            </div>
          </div>
          {links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center px-4 py-2.5 rounded-full border border-stroke text-content-primary">
                  <SocialIcon label={l.label} className="size-4" />
                  {l.label}
                  <ArrowIcon className="size-4 text-content-tertiary" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>,
    document.body,
  )
}

export default function TeamSection() {
  const members = TEAM_MEMBERS
  const canHover = useCanHover()
  const reduced = useReducedMotion()
  const gridRef = useRef(null)
  const timer = useRef(null)
  const activeEl = useRef(null)
  const [hovered, setHovered] = useState(null) // member
  const [layout, setLayout] = useState({ width: 0, minHeight: 0, above: false, columns: 0 })
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [drawer, setDrawer] = useState(null)
  const [filter, setFilter] = useState(null)

  const areas = useMemo(() => new Map(members.map((m) => [m.id, roleAreas(m.role)])), [members])
  const available = useMemo(() => TEAM_FILTERS.filter((f) => members.some((m) => areas.get(m.id)?.has(f.id))), [members, areas])
  const [chips, setChips] = useState(available)
  useEffect(() => setChips(shuffle(available)), [available])

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, TEAM_CARD_SPRING)
  const springY = useSpring(rawY, TEAM_CARD_SPRING)
  const x = reduced ? rawX : springX
  const y = reduced ? rawY : springY

  useEffect(() => () => timer.current && clearTimeout(timer.current), [])

  const setPos = useCallback(
    (px, py, jump) => {
      rawX.set(px)
      rawY.set(py)
      if (jump) {
        springX.jump(px)
        springY.jump(py)
      }
    },
    [rawX, rawY, springX, springY],
  )

  const measure = useCallback(
    (el, jump) => {
      const grid = gridRef.current
      const w = el.offsetWidth
      if (!grid || !w) return
      const gap = parseFloat(getComputedStyle(grid).columnGap) || 0
      const step = w + gap
      const cols = Math.max(1, Math.round((grid.clientWidth + gap) / step))
      const span = Math.min(cols, 4)
      const col = Math.round(el.offsetLeft / step)
      const row = Math.round(el.offsetTop / step)
      const startCol = Math.min(col, cols - span)
      const above = (row + 2) * cols + startCol + span - 1 >= members.length && row >= 2
      setLayout({ width: span * step - gap, minHeight: 2 * step - gap, above, columns: cols })
      setPos(startCol * step, above ? row * step - gap : (row + 1) * step, jump)
    },
    [setPos, members.length],
  )

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
  }
  const hide = () => {
    activeEl.current = null
    setHovered(null)
    setHoveredIdx(null)
  }
  const scheduleHide = () => {
    clearTimer()
    timer.current = setTimeout(hide, TEAM_HIDE_DELAY)
  }
  const show = (m, i, el, jump) => {
    clearTimer()
    activeEl.current = el
    measure(el, jump)
    setHovered(m)
    setHoveredIdx(i)
  }

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const ro = new ResizeObserver(() => activeEl.current && measure(activeEl.current, true))
    ro.observe(grid)
    return () => ro.disconnect()
  }, [measure])

  useEffect(() => {
    if (hovered && filter !== null && !areas.get(hovered.id)?.has(filter)) hide()
  }, [filter, hovered, areas])

  const cardLinks = hovered ? linksOf(hovered) : []

  return (
    <>
      <div className="col-span-5 h-px bg-stroke" />
      <div className="col-span-2 text-xl leading-tight text-content-secondary">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-quadrant tracking-[-0.015em] text-balance text-content-primary">
          {'The team'}
        </h2>
        <p className="mt-4 text-xl lg:text-2xl text-balance text-oats-neutral-700 font-light">
          {"We're a friendly bunch"}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-6" role="group" aria-label="Filter the team by area">
          <Chip label="Everyone" active={filter === null} onClick={() => setFilter(null)} />
          {chips.map((c) => (
            <Chip key={c.id} label={c.label} active={filter === c.id} onClick={() => setFilter(filter === c.id ? null : c.id)} />
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <div
          ref={gridRef}
          className="grid relative grid-cols-6 gap-1.5 sm:grid-cols-10 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-10"
          onMouseLeave={scheduleHide}
          onKeyDown={(e) => e.key === 'Escape' && hide()}
        >
          {members.map((m, i) => {
            const links = linksOf(m)
            const dim = filter !== null && !areas.get(m.id)?.has(filter)
            const props = {
              className:
                'block relative rounded-lg transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-content-primary ' +
                (dim ? 'cursor-default' : 'hover:z-10 hover:scale-110'),
              style: { opacity: tileOpacity(i, hoveredIdx, layout.columns) },
              tabIndex: dim ? -1 : undefined,
              'aria-label': links[0] ? `${m.name} — ${m.role} (${links[0].label})` : `${m.name} — ${m.role}`,
              onMouseEnter: (e) => {
                if (canHover === false) return
                if (dim) {
                  clearTimer()
                  hide()
                  return
                }
                show(m, i, e.currentTarget, hovered === null)
              },
              onMouseLeave: scheduleHide,
              onFocus: (e) => {
                if (canHover !== false && !dim) show(m, i, e.currentTarget, true)
              },
              onBlur: scheduleHide,
            }
            const inner = (
              <>
                <img alt={m.name} loading="lazy" width="64" height="64" decoding="async" className="object-cover w-full rounded-lg aspect-square" style={{ color: 'transparent' }} src={m.avatar} />
                <span aria-hidden="true" className={'absolute inset-0 rounded-lg bg-oats-neutral-200 transition-opacity duration-300 ' + (dim ? 'opacity-100' : 'opacity-0')} />
              </>
            )
            return links[0] ? (
              <a
                key={m.id}
                href={links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (dim) return e.preventDefault()
                  if (canHover === false) {
                    e.preventDefault()
                    setDrawer(m)
                  }
                }}
                {...props}
              >
                {inner}
              </a>
            ) : (
              <button key={m.id} type="button" onClick={() => !dim && canHover === false && setDrawer(m)} {...props}>
                {inner}
              </button>
            )
          })}
          <AnimatePresence>
            {hovered && layout.width > 0 && (
              <motion.div
                className="absolute top-0 left-0 z-20"
                style={{ width: layout.width, x, y, originX: 0, originY: layout.above ? 1 : 0 }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={TEAM_CARD_TRANSITION}
              >
                <div
                  aria-hidden="true"
                  className={'flex absolute left-0 w-full bg-white rounded-lg border-[0.5px] shadow-lg border-stroke ' + (layout.above ? 'bottom-0' : 'top-0')}
                  style={{ minHeight: layout.minHeight }}
                  onMouseEnter={clearTimer}
                  onMouseLeave={scheduleHide}
                >
                  <div className="flex flex-col flex-1 p-2.5 min-w-0">
                    <p className="text-lg font-medium leading-tight truncate text-content-primary">{firstName(hovered)}</p>
                    <p className="mt-0.5 text-xs leading-snug text-content-secondary">{hovered.role}</p>
                    {cardLinks.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-2 mt-auto">
                        {cardLinks.map((l) => (
                          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} title={l.label} className="p-1.5 rounded-md transition-colors cursor-pointer bg-oats-neutral-100 hover:bg-oats-neutral-200 text-content-primary">
                            <SocialIcon label={l.label} className="size-4" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <CardAvatar key={hovered.id} member={hovered} size={layout.minHeight - 20} style={{ marginRight: 10 }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <MemberDrawer member={drawer} onClose={() => setDrawer(null)} />
    </>
  )
}
