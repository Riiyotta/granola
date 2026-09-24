import { openMobileDialog } from './MobileDialog.jsx'
import { useState } from 'react'
import { detectDevice } from '../motion/nav-scroll-state.js'

// Live /chat download CTA (the original site chunk 5995, DownloadButton). The server renders a
// skeleton ("h-4 rounded-lg bg-black/5", width 24ch) and the client swaps in the OS label on
// hydration with AnimatePresence initial={false} -> no enter animation, an instant swap.
//   mac / linux / unknown -> Apple icon + "Download for Mac"
//   windows               -> Windows icon + "\u00a0\u00a0Download for Windows"
//   android               -> "Download for Android" + "Get the Desktop app" (send-to-phone trigger)
//   ios                   -> "Get the Desktop app" + secondary "Download for Mobile"
// The recipes-section instance is identical except its container ("items-center" instead of
// "md:flex-row") and a trailing "w-fit" on every button.
// The footer "Ready for calmer…" card uses the hero variant, plus (mac/windows only) a light
// "Download for Mobile" button that opens the send-to-phone dialog on live.
// Not ported: the send-to-phone radix dialogs those buttons open on live.

function MobileSecondary() {
  return (
    <div className="flex flex-col">
      <button className="flex-none justify-center flex gap-2 items-center transition-all transform-gpu rounded-full font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden text-base lg:text-xl group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer whitespace-nowrap bg-oats-green-100 text-content-primary border-0 hover:bg-oats-green-100/70 lg:pl-5 pr-6" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" onClick={(e) => { e.preventDefault(); openMobileDialog() }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5">
          <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
          <path fillRule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clipRule="evenodd" />
        </svg>
        <span>
          {"Download for Mobile"}
        </span>
      </button>
    </div>
  )
}

function MacCta({ container, fit, secondary }) {
  return (
    <div className={container}>
      <div className="flex flex-col">
        <a href="#" className={"flex-none justify-center flex gap-2 items-center transition-all transform-gpu rounded-full font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden text-base lg:text-xl group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer whitespace-nowrap bg-oats-green-500 hover:bg-oats-green-500/90 text-white focus:ring-oats-green-500 border-0 lg:pl-5 pr-6" + fit}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent opacity-0 transition-all group-hover:opacity-50 to-white/10" />
          <span className="flex gap-3 items-center whitespace-nowrap" style={{"opacity": "1", "transform": "none"}}>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{"--icon-stroke-width": "1.875"}}>
                <path d="M20.0035 7.15814C19.3171 7.5784 18.7485 8.16594 18.351 8.86579C17.9534 9.56563 17.74 10.3549 17.7305 11.1597C17.7332 12.0655 18.0016 12.9506 18.5024 13.7054C19.0032 14.4602 19.7144 15.0515 20.5479 15.4061C20.2193 16.4664 19.7329 17.4712 19.1051 18.3868C18.2069 19.6798 17.2677 20.9727 15.8387 20.9727C14.4096 20.9727 14.0421 20.1425 12.3952 20.1425C10.7892 20.1425 10.2175 21 8.91088 21C7.60426 21 6.69246 19.8022 5.6444 18.3323C4.25999 16.2732 3.49913 13.8583 3.45312 11.3774C3.45312 7.29427 6.10722 5.13028 8.72032 5.13028C10.1086 5.13028 11.2656 6.04208 12.1366 6.04208C12.9669 6.04208 14.2599 5.07572 15.8387 5.07572C16.6504 5.05478 17.4548 5.23375 18.1811 5.59689C18.9074 5.96003 19.5332 6.49619 20.0035 7.15814ZM15.0901 3.34726C15.7861 2.52858 16.18 1.49589 16.2062 0.421702C16.2074 0.280092 16.1937 0.13875 16.1654 0C14.9699 0.116777 13.8644 0.686551 13.0757 1.59245C12.3731 2.37851 11.9643 3.38362 11.9188 4.43697C11.9193 4.56507 11.933 4.69278 11.9597 4.81808C12.0539 4.8359 12.1496 4.84503 12.2455 4.84536C12.7964 4.80152 13.3327 4.64611 13.8217 4.38858C14.3108 4.13104 14.7423 3.77676 15.0901 3.34726Z" fill="currentColor" />
              </svg>
              {"Download for Mac"}
            </div>
          </span>
        </a>
      </div>
      {secondary && <MobileSecondary />}
    </div>
  )
}

function WindowsCta({ container, fit, secondary }) {
  return (
    <div className={container}>
      <div className="flex flex-col">
        <a href="#" className={"flex-none justify-center flex gap-2 items-center transition-all transform-gpu rounded-full font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden text-base lg:text-xl group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer whitespace-nowrap bg-oats-green-500 hover:bg-oats-green-500/90 text-white focus:ring-oats-green-500 border-0 lg:pl-5 pr-6" + fit}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent opacity-0 transition-all group-hover:opacity-50 to-white/10" />
          <span className="flex gap-3 items-center whitespace-nowrap" style={{"opacity": "1", "transform": "none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="88" width="88" viewBox="0 0 88 88" className="flex-none w-5 h-5">
              <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z" fill="currentColor" />
            </svg>
            {"  Download for Windows"}
          </span>
        </a>
      </div>
      {secondary && <MobileSecondary />}
    </div>
  )
}

function IosCta({ container, fit }) {
  return (
    <div className={container}>
      <div className="flex flex-col">
        <button className={"flex-none justify-center flex gap-2 items-center transition-all transform-gpu rounded-full font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden text-base lg:text-xl group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer whitespace-nowrap bg-oats-green-500 hover:bg-oats-green-500/90 text-white focus:ring-oats-green-500 border-0 lg:pl-7 lg:pr-4" + fit} type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5">
            <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd" />
          </svg>
          <span>
            {"Get the Desktop app"}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5 opacity-30">
            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col">
        <a href="#" className={"flex-none justify-center flex gap-2 items-center transition-all transform-gpu rounded-full font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden text-base lg:text-xl group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer whitespace-nowrap bg-oats-green-500 hover:bg-oats-green-500/90 text-white focus:ring-oats-green-500 border-0 lg:pl-5 pr-6" + fit} onClick={(e) => { e.preventDefault(); openMobileDialog() }}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent opacity-0 transition-all group-hover:opacity-50 to-white/10" />
          <span className="flex gap-3 items-center whitespace-nowrap" style={{"opacity": "1", "transform": "none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5">
              <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
              <path fillRule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clipRule="evenodd" />
            </svg>
            <span>
              {"Download for Mobile"}
            </span>
          </span>
        </a>
      </div>
    </div>
  )
}

function AndroidCta({ container, fit }) {
  return (
    <div className={container}>
      <div className="flex flex-col">
        <a href="#" className={"flex-none justify-center flex gap-2 items-center transition-all transform-gpu rounded-full font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden text-base lg:text-xl group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer whitespace-nowrap bg-oats-green-500 hover:bg-oats-green-500/90 text-white focus:ring-oats-green-500 border-0 lg:pl-5 pr-6 mb-2" + fit}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent opacity-0 transition-all group-hover:opacity-50 to-white/10" />
          <span className="flex gap-3 items-center whitespace-nowrap" style={{"opacity": "1", "transform": "none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="88" width="88" viewBox="0 0 512 512" className="flex-none w-5 h-5">
              <path d="M380.91 199l42.47-73.57a8.63 8.63 0 00-3.12-11.76 8.52 8.52 0 00-11.71 3.12l-43 74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69 8.36-109.52 23.35l-43-74.52a8.6 8.6 0 10-14.88 8.64L131 199C57.8 238.64 8.19 312.77 0 399.55h512c-8.19-86.78-57.8-160.91-131.09-200.55zM138.45 327.65a21.46 21.46 0 1121.46-21.46 21.47 21.47 0 01-21.46 21.46zm235 0a21.46 21.46 0 1121.46-21.46 21.47 21.47 0 01-21.46 21.46z" fill="currentColor" />
            </svg>
            <span>
              {"Download for Android"}
            </span>
          </span>
        </a>
        <button className={"flex-none justify-center flex gap-2 items-center transition-all transform-gpu rounded-full font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden text-base lg:text-xl group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer whitespace-nowrap bg-oats-green-500 hover:bg-oats-green-500/90 text-white focus:ring-oats-green-500 border-0 lg:pl-7 lg:pr-4" + fit} type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5">
            <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd" />
          </svg>
          <span>
            {"Get the Desktop app"}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5 opacity-30">
            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col" />
    </div>
  )
}

const BY_DEVICE = { mac: MacCta, windows: WindowsCta, ios: IosCta, android: AndroidCta }

export default function DownloadCta({ placement = 'hero' }) {
  const [device] = useState(detectDevice)
  const Cta = BY_DEVICE[device] || MacCta
  const container = placement === 'recipes' ? 'flex flex-col gap-2 items-center' : 'flex flex-col gap-2 md:flex-row'
  const fit = placement === 'recipes' ? ' w-fit' : ''
  return <Cta container={container} fit={fit} secondary={placement === 'footer'} />
}
