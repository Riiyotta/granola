import { useEffect, useMemo, useState } from 'react'
import { useBodyScrollLock } from '../motion/nav-scroll-state.js'
import './mobile-dialog.css'

// Dummy "Granola for mobile" dialog (live opens a radix dialog with a QR code + send-link form).
// Layout follows the live dialog; nothing here is functional: the QR code is decorative and
// "Send link" never sends anything. Open it from anywhere with openMobileDialog().
const OPEN_EVENT = 'granola:open-mobile-dialog'
const ANIM_MS = 150
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export function openMobileDialog() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

// Decorative QR-style pattern: three finder squares + seeded noise. Encodes nothing.
function DummyQr({ size = 92 }) {
  const cells = useMemo(() => {
    const n = 25
    let seed = 7
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    const inFinder = (x, y) => [[0, 0], [n - 7, 0], [0, n - 7]].some(([fx, fy]) => x >= fx - 1 && x < fx + 8 && y >= fy - 1 && y < fy + 8)
    const out = []
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (!inFinder(x, y) && rand() > 0.52) out.push([x, y])
    return { n, out }
  }, [])
  const finder = (x, y) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" fill="currentColor" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill="currentColor" />
    </g>
  )
  return (
    <svg viewBox={`0 0 ${cells.n} ${cells.n}`} width={size} height={size} shapeRendering="crispEdges" aria-label="QR code" role="img" className="text-black">
      {cells.out.map(([x, y]) => <rect key={`${x},${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />)}
      {finder(0, 0)}
      {finder(cells.n - 7, 0)}
      {finder(0, cells.n - 7)}
    </svg>
  )
}

const MEETINGS = [
  ['Team Stand-up (HoneyBot ...', '12:00 pm • 2 attendees'],
  ['📱 Mobile Pod Standup', '1:00 pm • 8 attendees'],
  ['[weekly hold] OMG review', '3:00 pm • 3 attendees'],
]

function PhoneMockup() {
  return (
    <div className="absolute left-[271px] top-[356px] w-[194px] h-[260px] rounded-t-[30px] border-[6px] border-b-0 border-[#1f1f1d] bg-[#f4f4ef] overflow-hidden shadow-xl">
      <div className="flex justify-between items-center px-3 pt-2 text-[7px] font-semibold text-[#1f1f1d]">
        <span>10:10</span>
        <span className="tracking-tight">LTE ▮▮▮ 100</span>
      </div>
      <div className="flex justify-end gap-2 items-center px-3 pt-3">
        <svg viewBox="0 0 20 20" className="w-3 h-3 text-content-secondary" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="9" r="5.5" /><path d="m13.5 13.5 3.5 3.5" /></svg>
        <img src="/assets/placeholder-avatar.svg" alt="" className="w-[18px] h-[18px] rounded-full" />
      </div>
      <p className="px-3 pt-2 font-quadrant text-[15px] text-ink-primary">{"My notes"}</p>
      <div className="flex justify-between px-3 pt-2 text-[6px] text-content-secondary">
        <span>{"Coming up"}</span>
        <span>{"Show more ⌃"}</span>
      </div>
      <div className="flex flex-col gap-1.5 px-2 pt-1.5">
        {MEETINGS.map(([title, meta]) => (
          <div key={title} className="flex gap-2 items-center p-1.5 bg-white rounded-lg">
            <div className="flex flex-col items-center justify-center w-[18px] h-[20px] rounded border border-stroke leading-none">
              <span className="text-[4px] font-semibold text-[#d64b3a]">{"JUL"}</span>
              <span className="text-[8px] text-ink-primary">{"1"}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[6.5px] font-semibold text-ink-primary truncate">{title}</p>
              <p className="text-[5px] text-content-secondary">{meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MobileDialog() {
  const [state, setState] = useState('closed') // closed | open | closing
  const [sent, setSent] = useState(false)
  useBodyScrollLock(state !== 'closed')

  useEffect(() => {
    const onOpen = () => { setSent(false); setState('open') }
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  const close = () => setState((s) => (s === 'open' ? 'closing' : s))

  useEffect(() => {
    if (state === 'closing') {
      const t = setTimeout(() => setState('closed'), ANIM_MS)
      return () => clearTimeout(t)
    }
    if (state !== 'open') return
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state])

  if (state === 'closed') return null
  const closing = state === 'closing'

  const onSubmit = (e) => {
    e.preventDefault() // dummy form: nothing is sent anywhere
    setSent(true)
    setTimeout(() => setSent(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-[100]" role="presentation">
      <div
        className="fixed inset-0 bg-black/60"
        style={{ animation: `${closing ? 'overlayHide' : 'overlayShow'} ${ANIM_MS}ms ${EASE} forwards` }}
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-dialog-title"
        className="fixed top-1/2 left-1/2 w-[calc(100vw-32px)] max-w-[521px] h-[565px] max-h-[calc(100svh-32px)] bg-white rounded-[20px] overflow-hidden shadow-2xl"
        style={{ transform: 'translate(-50%, -50%)', animation: `${closing ? 'contentHide' : 'contentShow'} ${ANIM_MS}ms ${EASE} forwards` }}
      >
        <button type="button" onClick={close} aria-label="Close" className="absolute top-5 right-5 z-10 p-1 rounded-full text-ink-primary hover:bg-oats-neutral-100 transition-colors cursor-pointer">
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 5l10 10M15 5L5 15" /></svg>
        </button>

        <div className="flex flex-col items-center px-6 pt-8 text-center">
          <h2 id="mobile-dialog-title" className="font-quadrant text-[28px] leading-tight tracking-[-0.01em] text-ink-primary">
            {"Granola for mobile"}
          </h2>
          <p className="mt-1 text-sm text-content-secondary">{"Scan the QR code to download the app"}</p>
          <div className="mt-5">
            <DummyQr />
          </div>
          <p className="mt-9 text-sm text-content-secondary">{"Or enter your email and we'll send you a link"}</p>
          <form onSubmit={onSubmit} className="flex items-center mt-4 w-full max-w-[365px] h-[42px] pl-5 pr-1.5 rounded-full border border-stroke">
            <input type="email" required placeholder="Your work email" aria-label="Your work email" className="flex-1 min-w-0 bg-transparent text-[15px] text-ink-primary placeholder:text-content-secondary outline-none" />
            <button type="submit" className="h-[30px] px-5 rounded-full bg-oats-green-500 hover:bg-oats-green-500/90 text-white text-[15px] font-medium transition-colors cursor-pointer whitespace-nowrap">
              {sent ? 'Sent ✓' : 'Send link'}
            </button>
          </form>
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-full pointer-events-none">
          <span className="absolute left-[153px] top-[333px] text-[11px] text-content-secondary">{"iOS"}</span>
          <span className="absolute left-[349px] top-[333px] text-[11px] text-content-secondary">{"Android"}</span>
          <img src="/assets/explosion.jpg" alt="" className="absolute left-0 top-[324px] w-[111px] h-[182px] object-cover rounded-r-[3px]" />
          <img src="/assets/grey.jpg" alt="" className="absolute left-[189px] top-[402px] w-[100px] h-[104px] object-cover object-left" />
          <img src="/assets/green-poster.jpg" alt="" className="absolute left-[450px] top-[389px] w-[80px] h-[156px] object-cover" />
          <PhoneMockup />
        </div>
      </div>
    </div>
  )
}
