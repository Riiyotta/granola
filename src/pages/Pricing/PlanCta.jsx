import { useId, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { detectDevice } from '../../motion/nav-scroll-state.js'
import { useVaulDrawer } from '../../motion/pricing-page-drawer.js'

// Plan-card primary CTA. Live SSR renders a blank skeleton bar and swaps in the OS-specific label on
// hydration with no transition (sampled per rAF on live: skeleton -> label in one frame, span stays
// opacity:1 / transform:none). Per-OS markup captured from live with matching user agents:
//   mac / linux / unknown: <a> apple icon + "Download for Mac"         (Enterprise card: "Sign-up in app")
//   windows:               <a> windows icon + "  Download for Windows" (Enterprise card: "Sign-up in app")
//   android:               <a> android icon + "Download for Android" + drawer button "Get the Desktop app"
//                          (Enterprise card: Android link + drawer button "Sign-up in app")
//   ios:                   drawer button only: "Get the Desktop app"   (Enterprise card: "Sign-up in app")
const BTN = 'flex-none justify-center flex gap-2 items-center transition-all transform-gpu rounded-full font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden text-base lg:text-xl group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer whitespace-nowrap bg-oats-green-500 hover:bg-oats-green-500/90 text-white focus:ring-oats-green-500 border-0'
const DOWNLOAD_URL = '#'
const ANDROID_URL = '#'

const Gradient = () => <div className="absolute inset-0 bg-gradient-to-t from-transparent opacity-0 transition-all group-hover:opacity-50 to-white/10" />

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{ '--icon-stroke-width': 1.875 }}>
    <path d="M20.0035 7.15814C19.3171 7.5784 18.7485 8.16594 18.351 8.86579C17.9534 9.56563 17.74 10.3549 17.7305 11.1597C17.7332 12.0655 18.0016 12.9506 18.5024 13.7054C19.0032 14.4602 19.7144 15.0515 20.5479 15.4061C20.2193 16.4664 19.7329 17.4712 19.1051 18.3868C18.2069 19.6798 17.2677 20.9727 15.8387 20.9727C14.4096 20.9727 14.0421 20.1425 12.3952 20.1425C10.7892 20.1425 10.2175 21 8.91088 21C7.60426 21 6.69246 19.8022 5.6444 18.3323C4.25999 16.2732 3.49913 13.8583 3.45312 11.3774C3.45312 7.29427 6.10722 5.13028 8.72032 5.13028C10.1086 5.13028 11.2656 6.04208 12.1366 6.04208C12.9669 6.04208 14.2599 5.07572 15.8387 5.07572C16.6504 5.05478 17.4548 5.23375 18.1811 5.59689C18.9074 5.96003 19.5332 6.49619 20.0035 7.15814ZM15.0901 3.34726C15.7861 2.52858 16.18 1.49589 16.2062 0.421702C16.2074 0.280092 16.1937 0.13875 16.1654 0C14.9699 0.116777 13.8644 0.686551 13.0757 1.59245C12.3731 2.37851 11.9643 3.38362 11.9188 4.43697C11.9193 4.56507 11.933 4.69278 11.9597 4.81808C12.0539 4.8359 12.1496 4.84503 12.2455 4.84536C12.7964 4.80152 13.3327 4.64611 13.8217 4.38858C14.3108 4.13104 14.7423 3.77676 15.0901 3.34726Z" fill="currentColor" />
  </svg>
)
const WindowsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="88" width="88" viewBox="0 0 88 88" className="flex-none w-5 h-5">
    <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z" fill="currentColor" />
  </svg>
)
const AndroidIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="88" width="88" viewBox="0 0 512 512" className="flex-none w-5 h-5">
    <path d="M380.91 199l42.47-73.57a8.63 8.63 0 00-3.12-11.76 8.52 8.52 0 00-11.71 3.12l-43 74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69 8.36-109.52 23.35l-43-74.52a8.6 8.6 0 10-14.88 8.64L131 199C57.8 238.64 8.19 312.77 0 399.55h512c-8.19-86.78-57.8-160.91-131.09-200.55zM138.45 327.65a21.46 21.46 0 1121.46-21.46 21.47 21.47 0 01-21.46 21.46zm235 0a21.46 21.46 0 1121.46-21.46 21.47 21.47 0 01-21.46 21.46z" fill="currentColor" />
  </svg>
)
const DesktopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5">
    <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd" />
  </svg>
)
const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5 opacity-30">
    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
)
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mb-4 w-12 h-12 text-oats-pink-200">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const SPAN_STYLE = { opacity: 1, transform: 'none' }

function DownloadLink({ device, signup, mb }) {
  if (device === 'android') {
    return (
      <a href={ANDROID_URL} className={`${BTN} lg:pl-5 pr-6 mb-2 w-full rounded-full`}>
        <Gradient />
        <span className="flex gap-3 items-center whitespace-nowrap" style={SPAN_STYLE}>
          <AndroidIcon />
          <span className="text-base">{'Download for Android'}</span>
        </span>
      </a>
    )
  }
  let label
  if (signup) label = 'Sign-up in app'
  else if (device === 'windows') label = <><WindowsIcon />{'  Download for Windows'}</>
  else label = <div className="flex items-center gap-2"><AppleIcon />{'Download for Mac'}</div>
  return (
    <a href={DOWNLOAD_URL} className={`${BTN} lg:pl-5 pr-6 w-full rounded-full${mb ? ' mb-2' : ''}`}>
      <Gradient />
      <span className="flex gap-3 items-center whitespace-nowrap text-base" style={SPAN_STYLE}>
        {label}
      </span>
    </a>
  )
}

function DesktopDrawerButton({ label }) {
  const d = useVaulDrawer()
  const rid = useId().replace(/:/g, '')
  const id = `radix-_r_${rid}_`
  const state = d.open ? 'open' : 'closed'
  return (
    <>
      <button className={`${BTN} lg:pl-7 lg:pr-4 w-full rounded-full`} type="button" aria-haspopup="dialog" aria-expanded={d.open ? 'true' : 'false'} aria-controls={id} data-state={state} onClick={d.show}>
        <DesktopIcon />
        <span className="text-base">{label}</span>
        <ChevronIcon />
      </button>
      {d.mounted && createPortal(
        <>
          <div data-vaul-overlay="" data-vaul-snap-points="false" data-vaul-snap-points-overlay="true" data-state={state} className="fixed inset-0 z-50 bg-black/40" style={{ pointerEvents: 'auto' }} onClick={d.hide} />
          <div ref={d.drawerRef} role="dialog" id={id} aria-describedby={`${id}desc`} aria-labelledby={`${id}title`} data-state={state} data-vaul-drawer-direction="bottom" data-vaul-drawer="" data-vaul-delayed-snap-points="false" data-vaul-snap-points="false" data-vaul-custom-container="false" className="flex fixed right-0 bottom-0 left-0 flex-col p-4 mt-24 bg-white rounded-t-2xl z-100 focus:outline-hidden" tabIndex={-1} style={{ pointerEvents: 'auto' }} {...d.dragHandlers}>
            <div className="flex flex-col items-center w-full pt-4">
              <PhoneIcon />
              <h2 id={`${id}title`} className="text-2xl md:text-3xl font-quadrant tracking-[-0.015em] text-content-primary">{'On your phone?'}</h2>
              <p id={`${id}desc`} className="text-base text-center text-content-secondary mt-1">{"We'll email you a link to open later on your computer"}</p>
              <p className="mt-8 text-base text-center text-content-secondary" />
              <form className="flex relative z-20 flex-col items-center w-full pointer-events-auto mt-8" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1 items-center w-full max-w-md">
                  <div className="flex overflow-hidden gap-2 p-2 pl-0 w-full text-base bg-white rounded-full border border-stroke md:text-lg">
                    <input className="px-4 py-1 w-full text-base rounded-full lg:px-6 lg:py-2 md:text-lg focus:outline-hidden text-content-primary placeholder:text-content-secondary" placeholder="Your work email" required title="" type="email" name="email" />
                    <button className="flex-none px-6 py-1 font-medium rounded-full lg:pl-6 lg:pr-5 lg:py-1 bg-oats-green-500 hover:bg-oats-green-500/90 text-white focus:ring-2 focus:ring-oats-green-500 focus:ring-offset-2 focus:outline-hidden" type="submit">{'Send link'}</button>
                  </div>
                  <div className="flex justify-between items-baseline" />
                </div>
              </form>
              <div className="flex gap-4 mt-6 font-medium underline text-content-secondary hover:text-content-primary transition-colors">
                <a href={DOWNLOAD_URL}>{'Download for Mac'}</a>
                <a href={DOWNLOAD_URL}>{'Download for PC'}</a>
              </div>
            </div>
          </div>
        </>,
        document.body,
      )}
    </>
  )
}

// `signup` = Enterprise card variant.
export default function PlanCta({ signup = false }) {
  const device = useMemo(detectDevice, [])
  if (device === 'ios') {
    return (
      <div className="flex flex-col">
        <DesktopDrawerButton label={signup ? 'Sign-up in app' : 'Get the Desktop app'} />
      </div>
    )
  }
  if (device === 'android') {
    return (
      <div className="flex flex-col">
        <DownloadLink device={device} />
        <DesktopDrawerButton label={signup ? 'Sign-up in app' : 'Get the Desktop app'} />
      </div>
    )
  }
  return (
    <div className="flex flex-col">
      <DownloadLink device={device} signup={signup} />
    </div>
  )
}
