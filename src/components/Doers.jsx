export default function Doers() {
  return (
    <div className="flex flex-col w-full overflow-x-clip">
      <section className="doers-scope relative">
        <div className="relative flex items-center justify-center px-4 py-5 md:px-10 md:py-6">
          <div aria-hidden="true" className="doers-trigger pointer-events-none absolute inset-x-0 top-1/2 h-px" />
          <h2 className="doers-headline whitespace-nowrap text-center font-quadrant text-[min(12vw,160px)] leading-none tracking-[-0.015em] text-ink-primary">
            {"For the doers"}
          </h2>
        </div>
        <div className="relative z-10 w-full bg-fill-primary py-4 lg:w-[calc(100%-20px)]">
          <div aria-hidden="true" className="absolute left-full top-0 hidden h-full w-5 lg:block">
            <img alt="" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="20px" src="/assets/star-slice.jpg" />
          </div>
          <div className="mx-auto w-full max-w-7xl px-4 md:px-10">
            <p className="pt-12 text-center font-quadrant text-xl leading-[1.05] tracking-[0.02em] text-ink-primary-inverse text-pretty">
              {"Trusted by teams we admire"}
            </p>
            <div className="relative grid grid-cols-3 md:grid-cols-6">
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="PostHog" loading="lazy" width="98" height="17" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/posthog.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Intercom" loading="lazy" width="105" height="17" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/intercom.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Figma" loading="lazy" width="71" height="26" decoding="async" className="h-auto max-w-full translate-y-0.5" style={{"color": "transparent"}} src="/assets/figma.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Brex" loading="lazy" width="76" height="20" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/brex.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Ramp" loading="lazy" width="75" height="21" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/ramp.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Replit" loading="lazy" width="90" height="21" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/replit.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Lovable" loading="lazy" width="94" height="16" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/lovable.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Cursor" loading="lazy" width="87" height="21" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/cursor.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Bumble" loading="lazy" width="92" height="16" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/bumble.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Asana" loading="lazy" width="101" height="20" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/asana.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Vanta" loading="lazy" width="68" height="17" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/vanta.svg" />
              </div>
              <div className="flex h-24 items-center justify-center px-3 md:h-50">
                <img alt="Linear" loading="lazy" width="81" height="20" decoding="async" className="h-auto max-w-full " style={{"color": "transparent"}} src="/assets/linear.svg" />
              </div>
              <div aria-hidden="true" className="absolute inset-x-[16.6667%] top-1/2 hidden -translate-y-1/2 justify-between md:flex">
                <span className="flex w-0 justify-center">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                    <rect x="7.25" width="0.5" height="15" fill="#FCFCF8" />
                    <rect x="15" y="7.25" width="0.5" height="15" transform="rotate(90 15 7.25)" fill="#FCFCF8" />
                  </svg>
                </span>
                <span className="flex w-0 justify-center">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                    <rect x="7.25" width="0.5" height="15" fill="#FCFCF8" />
                    <rect x="15" y="7.25" width="0.5" height="15" transform="rotate(90 15 7.25)" fill="#FCFCF8" />
                  </svg>
                </span>
                <span className="flex w-0 justify-center">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                    <rect x="7.25" width="0.5" height="15" fill="#FCFCF8" />
                    <rect x="15" y="7.25" width="0.5" height="15" transform="rotate(90 15 7.25)" fill="#FCFCF8" />
                  </svg>
                </span>
                <span className="flex w-0 justify-center">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                    <rect x="7.25" width="0.5" height="15" fill="#FCFCF8" />
                    <rect x="15" y="7.25" width="0.5" height="15" transform="rotate(90 15 7.25)" fill="#FCFCF8" />
                  </svg>
                </span>
                <span className="flex w-0 justify-center">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                    <rect x="7.25" width="0.5" height="15" fill="#FCFCF8" />
                    <rect x="15" y="7.25" width="0.5" height="15" transform="rotate(90 15 7.25)" fill="#FCFCF8" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
