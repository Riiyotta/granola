import { openMobileDialog } from './MobileDialog.jsx'
export default function Features() {
  return (
    <section className="w-full bg-white px-4 py-20 text-ink-primary md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-5 font-quadrant text-editor tracking-[0.02em]">
          {"Features"}
        </p>
        <h2 className="max-w-[15ch] font-quadrant text-6xl leading-[0.97] tracking-[-0.02em] md:text-7xl lg:text-[clamp(72px,7.5vw,120px)]">
          {"Works everywhere you do, how you do"}
        </h2>
        <div className="mt-8 md:mt-10">
          <a href="#" role="button" tabIndex={0} className="inline-flex items-center justify-center rounded-full font-book ring-focus-ring outline-none disabled:opacity-100 no-drag select-none text-ink-primary-inverse bg-fill-primary hover:bg-fill-primary-hover data-popup-open:bg-fill-primary-hover disabled:bg-fill-disabled disabled:text-ink-secondary py-[9px] gap-1 text-base h-12 w-full cursor-pointer px-6 text-[16px] sm:w-auto lg:h-14">
            {"Download for free"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="size-4">
              <path d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="mt-20 flex flex-col gap-20 md:mt-32 md:gap-31">
          <div>
            <hr className="border-t border-[#d9d9d9]" />
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_28rem]">
              <h3 className="text-pretty font-quadrant text-2xl leading-[1.05] tracking-[-0.01em] md:text-[32px]">
                {"Humans in the room, not bots"}
              </h3>
              <p className="font-melange text-lg leading-[1.35] md:text-[22px]">
                {"Granola doesn’t join your meeting. Instead, it transcribes in the background while you stay present"}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-(--cols)" style={{"--cols": "2.4306fr"}}>
              <div className="relative overflow-hidden rounded-[4px]" style={{"aspectRatio": "2732 / 1124"}}>
                <img alt="A Granola note beside a video call with six participants, with the Granola recording indicator transcribing in the background" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/feature-humans.jpg" />
              </div>
            </div>
          </div>
          <div>
            <hr className="border-t border-[#d9d9d9]" />
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_28rem]">
              <h3 className="text-pretty font-quadrant text-2xl leading-[1.05] tracking-[-0.01em] md:text-[32px]">
                {"Works with all meeting apps"}
              </h3>
              <p className="font-melange text-lg leading-[1.35] md:text-[22px]">
                {"Zoom, Meet, Teams, Huddles, in-person, on-the-go: capture conversations wherever you have them."}
              </p>
            </div>
            <div className="relative mt-8 overflow-hidden rounded-[4px]" style={{"aspectRatio": "2732 / 1124"}}>
              <img alt="" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/bg.webp" />
              <div className="absolute inset-0 flex items-center justify-center gap-[6.45%]">
                <div className="flex aspect-square w-[15.1%] items-center justify-center rounded-[18%] border border-black/4 bg-white md:border-2">
                  <img alt="Zoom" loading="lazy" width="371" height="371" decoding="async" className="h-auto" style={{"color": "transparent", "width": "45%"}} src="/assets/zoom.png" />
                </div>
                <div className="flex aspect-square w-[15.1%] items-center justify-center rounded-[18%] border border-black/4 bg-white md:border-2">
                  <img alt="Google Meet" loading="lazy" width="109" height="86" decoding="async" className="h-auto" style={{"color": "transparent", "width": "52.7%"}} src="/assets/google-meet.svg" />
                </div>
                <div className="flex aspect-square w-[15.1%] items-center justify-center rounded-[18%] border border-black/4 bg-white md:border-2">
                  <img alt="Microsoft Teams" loading="lazy" width="1280" height="1352" decoding="async" className="h-auto" style={{"color": "transparent", "width": "53.9%"}} src="/assets/teams.png" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr className="border-t border-[#d9d9d9]" />
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_28rem]">
              <h3 className="text-pretty font-quadrant text-2xl leading-[1.05] tracking-[-0.01em] md:text-[32px]">
                {"Private by default, ready to share"}
              </h3>
              <p className="font-melange text-lg leading-[1.35] md:text-[22px]">
                {"Your notes are just for you. Search them, polish them, analyze them, then send them as you like."}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-(--cols)" style={{"--cols": "2.4306fr"}}>
              <div className="relative overflow-hidden rounded-[4px]" style={{"aspectRatio": "2732 / 1124"}}>
                <img alt="A Granola note with a Share notes menu open, listing meeting participants to share with" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/feature-private.jpg" />
              </div>
            </div>
          </div>
          <div>
            <hr className="border-t border-[#d9d9d9]" />
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_28rem]">
              <h3 className="text-pretty font-quadrant text-2xl leading-[1.05] tracking-[-0.01em] md:text-[32px]">
                {"Made for in-person meetings too"}
              </h3>
              <p className="font-melange text-lg leading-[1.35] md:text-[22px]">
                {"Walking meetings, conferences or coffee catchups - use the iPhone or Android app to take notes anywhere."}
              </p>
            </div>
            <div className="mt-6">
              <button type="button" tabIndex={0} aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_r_4_" data-state="closed" className="inline-flex items-center justify-center rounded-full font-book ring-focus-ring outline-none disabled:opacity-100 no-drag select-none text-ink-primary-inverse bg-fill-primary hover:bg-fill-primary-hover data-popup-open:bg-fill-primary-hover disabled:bg-fill-disabled disabled:text-ink-secondary py-[9px] text-base h-12 cursor-pointer gap-2 px-6 text-[16px] lg:h-14 w-full sm:w-auto" onClick={(e) => { e.preventDefault(); openMobileDialog() }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                {"Download for mobile"}
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-(--cols)" style={{"--cols": "0.8332fr 1.5801fr"}}>
              <div className="relative overflow-hidden rounded-[4px]" style={{"aspectRatio": "939 / 1127"}}>
                <img alt="An iPhone home screen with the Granola app icon in the dock" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/feature-mobile-left.jpg" />
              </div>
              <div className="relative overflow-hidden rounded-[4px]" style={{"aspectRatio": "1776 / 1124"}}>
                <img alt="The Granola iPhone app showing notes from a coffee catch up meeting" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/feature-mobile-right.jpg" />
              </div>
            </div>
          </div>
          <div>
            <hr className="border-t border-[#d9d9d9]" />
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_28rem]">
              <h3 className="text-pretty font-quadrant text-2xl leading-[1.05] tracking-[-0.01em] md:text-[32px]">
                {"Syncs with your calendar"}
              </h3>
              <p className="font-melange text-lg leading-[1.35] md:text-[22px]">
                {"Granola integrates with your calendar and automatically detects upcoming meetings. One click, and you’ll have every conversation captured and easy to find."}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-(--cols)" style={{"--cols": "2.4306fr"}}>
              <div className="relative overflow-hidden rounded-[4px]" style={{"aspectRatio": "2732 / 1124"}}>
                <img alt="A macOS notification for a team stand up with a Granola button to join and take notes" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/feature-calendar.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
