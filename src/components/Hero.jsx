import { useRef } from 'react'
import { HandDrawnRows } from './hero/HandDrawnRow.jsx'
import HeroDemoWindow from './hero/HeroDemoWindow.jsx'
import HeroVideoThumbs from './hero/HeroVideoThumbs.jsx'
import { useHeroScrollFallback } from '../motion/hero-scroll-fallback.js'

export default function Hero() {
  const rootRef = useRef(null)
  useHeroScrollFallback(rootRef)
  return (
    <div ref={rootRef} className="lg:grid-pile relative min-h-[200vh] lg:min-h-0 w-full">
      <div className="relative pb-12 lg:pb-0">
        <div className="relative">
          <section className="flex flex-col max-w-7xl mx-auto w-full px-4 md:px-10 2xl:px-0 items-start justify-start md:justify-center pt-24 md:pt-30 lg:min-h-screen h-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-center w-full">
              <div className="flex flex-col gap-8 items-start">
                <a className="group flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full bg-oats-neutral-100 hover:bg-oats-neutral-200 transition-colors" href="#">
                  <span className="px-2 py-0.5 text-xs font-medium rounded-[10px] bg-[#D1E043] text-content-primary">
                    {"New"}
                  </span>
                  <span className="text-sm font-medium text-ink-primary">
                    {"Granola for Apple Watch"}
                  </span>
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="size-4 shrink-0 text-ink-secondary transition-transform group-hover:translate-x-0.5">
                    <path d="M3.5 8h9m0 0L9 4.5M12.5 8L9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <h1 className="text-5xl sm:text-7xl font-quadrant text-ink-primary lg:text-[clamp(68px,6vw,110px)] leading-[0.93] tracking-[-0.02em] max-w-[10ch] text-balance">
                  {"The AI notepad for back-to-back meetings"}
                </h1>
                <div className="text-lg lg:text-xl 3xl:text-2xl">
                  <p>
                    {"Notes, actions and memory."}
                  </p>
                  <p>
                    {"Without a meeting bot."}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex flex-col items-start gap-3">
                    <a href="#" role="button" tabIndex={0} className="inline-flex items-center justify-center rounded-full font-book ring-focus-ring outline-none disabled:opacity-100 no-drag select-none text-ink-primary-inverse-static bg-fill-accent hover:bg-fill-accent-hover data-popup-open:bg-fill-accent-hover disabled:bg-fill-disabled disabled:text-ink-secondary py-[9px] gap-1 text-base h-12 w-full cursor-pointer px-6 text-[16px] sm:w-auto lg:h-14">
                      {"Download for free"}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="size-4">
                        <path d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-ink-secondary">
                    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-6 shrink-0">
                      <path d="M22.1137 9.29854C23.327 9.12219 26.7606 9.15242 27.276 10.5191C26.9821 12.2533 22.9676 10.9968 21.4283 11.0817C17.9473 11.2733 16.1922 12.9161 13.4731 14.7208C8.70209 17.8874 5.39937 25.6132 9.23225 30.5822C10.8198 32.6294 13.1625 33.9546 15.7339 34.2609C23.8312 35.2656 35.0209 26.2349 31.9327 17.4897C31.4243 16.048 29.9575 14.8478 30.1441 13.2929C30.4757 12.8151 30.3781 12.9542 30.9632 12.6928C31.8018 13.2334 32.3074 13.8379 32.7963 14.729C33.4775 15.9735 34.3648 18.4101 33.9859 19.8103C33.8912 20.1613 33.7909 20.587 33.7031 20.9422C33.8327 21.1287 33.9636 21.3138 34.0974 21.4974C34.0444 22.1562 33.5444 23.4008 33.2964 24.0897C33.0443 24.532 33.132 25.2334 32.969 25.6393C29.3487 34.6223 17.5893 40.0807 9.31611 33.5973C7.26455 31.9894 5.80933 29.1935 5.58966 26.7942C5.18514 22.8005 6.40997 18.8129 8.98654 15.7349C12.8179 11.1597 16.2075 9.82243 22.1137 9.29854Z" fill="currentColor" />
                      <path d="M33.7855 3.4707L34.0222 3.69942C33.8579 4.48617 34.1852 4.94292 34.6212 5.56544C30.2947 10.1803 27.1466 16.642 23.8815 22.0853C22.7657 23.9463 21.9564 26.0864 20.7682 27.9387L20.6261 28.0046C19.9477 28.3155 19.6775 28.5009 18.9908 28.2475C17.9168 27.2932 17.6257 20.7492 17.2928 18.6539C15.9151 19.8369 14.2561 21.8372 14.5737 23.7754L14.4316 24.5605C14.1084 24.9268 14.2742 24.8127 13.7254 24.945C11.1202 24.4281 13.8619 19.1953 15.0083 17.9989C19.4045 13.4147 19.8307 21.8754 19.9965 24.7573C20.8908 23.4005 21.7057 21.5217 22.547 20.1825C25.6686 15.2209 29.6846 7.36153 33.7855 3.4707Z" fill="currentColor" />
                    </svg>
                    <span className="mt-1">
                      {"Available for macOS, Windows, iOS, Android"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="hidden lg:block">
          <section className="h-screen flex flex-col items-center justify-center max-w-7xl mx-auto w-full 2xl:px-0 relative px-0 xs:px-0 md:px-0">
            <div className="relative grid h-full w-full max-w-2xl lg:max-w-none mx-auto grid-cols-1 lg:grid-cols-2 grid-rows-[0fr_auto_4rem_auto_minmax(10rem,1fr)] lg:grid-rows-[1fr_auto_6rem_auto_1fr] " style={{"--notepad-row": "5rem"}}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-px block lg:hidden xl:block" style={{"backgroundImage": "repeating-linear-gradient(to bottom, #DEDEDE 0 8px, transparent 8px 22px)"}} />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-px block lg:hidden xl:block" style={{"backgroundImage": "repeating-linear-gradient(to bottom, #DEDEDE 0 8px, transparent 8px 22px)"}} />
              <h1 className="col-start-1 row-start-2 text-4xl font-quadrant lg:text-5xl 3xl:text-6xl max-w-[24ch] text-balance pl-4 xs:pl-6 md:pl-10">
                {"Effortless notes, enhanced instantly."}
              </h1>
              <div className="pointer-events-none relative col-span-2 col-start-1 row-start-4 row-end-6">
                <div aria-hidden="true" className="absolute inset-y-0 left-0 right-0" style={{"backgroundImage": "repeating-linear-gradient(to bottom, #DEDEDE 0, #DEDEDE 1px, transparent 1px, transparent var(--notepad-row))", "maskImage": "linear-gradient(to right, black 0%, transparent 32%, transparent 68%, black 100%)", "WebkitMaskImage": "linear-gradient(to right, black 0%, transparent 32%, transparent 68%, black 100%)"}} />
              </div>
              <div className="relative col-start-1 row-start-4 font-melange text-md md:text-base font-normal leading-[1.35] text-ink-primary pl-4 xs:pl-6 md:pl-10 pr-8 xs:pr-10 md:pr-0 max-md:text-pretty">
                <HandDrawnRows />
              </div>
              <div className="hidden lg:flex lg:col-start-2 lg:row-start-1 lg:row-end-6 items-center justify-center">
                <div className=" aspect-4/6 w-full origin-center max-w-96" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="flex-col mx-auto w-full sticky top-24 lg:top-12 pointer-events-none flex items-center justify-center max-w-none px-0 xs:px-0 md:px-0 2xl:px-0 h-auto lg:h-screen">
        <div className="flex items-center justify-center w-full h-full max-w-screen overflow-hidden pt-10 -mt-10 pb-8 lg:pb-0 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full max-w-7xl mx-auto px-4  md:px-10 2xl:px-0">
            <div className="hidden lg:block" />
            <div className="flex flex-col items-center justify-center lg:justify-center-safe w-full">
              <div className="sticky-demo-preview aspect-4/6 w-full lg:w-[30vw] max-h-[75vh] lg:top-[max(0px,calc(48px+min(27vw,345.6px,45vh)-44vh))] origin-center max-w-96 relative z-0 isolate grid-pile">
                <div className="absolute inset-0 max-lg:hidden">
                  <div className="floating-item grid-pile float-grey-lg absolute left-0 top-[-9%] w-full">
                    <img alt="" loading="lazy" width="576" height="1024" decoding="async" className="h-full w-full rounded-[4px] object-cover" style={{"color": "transparent"}} sizes="(min-width: 1024px) 30vw, 80vw" src="/assets/grey.jpg" />
                  </div>
                  <div className="floating-item grid-pile float-explosion-lg absolute left-[-7.5%] top-[2%] w-[115%]">
                    <img alt="" loading="lazy" width="819" height="1024" decoding="async" className="h-full w-full rounded-[4px] object-cover" style={{"color": "transparent"}} sizes="(min-width: 1024px) 30vw, 80vw" src="/assets/explosion.jpg" />
                  </div>
                  <div className="floating-item grid-pile float-green-lg absolute left-[9%] top-0 w-[82%]">
                    <img alt="" loading="lazy" width="563" height="1024" decoding="async" className="h-full w-full rounded-[4px] object-cover" style={{"color": "transparent"}} sizes="(min-width: 1024px) 30vw, 80vw" src="/assets/green-poster.jpg" />
                  </div>
                </div>
                <div className="lg:hidden -z-10">
                  <div className="floating-item grid-pile float-grey-sm absolute right-[-10%] top-[30%] w-3/5 origin-left">
                    <img alt="" loading="lazy" width="576" height="1024" decoding="async" className="h-full w-full rounded-[4px] object-cover" style={{"color": "transparent"}} sizes="(min-width: 1024px) 30vw, 80vw" src="/assets/grey.jpg" />
                  </div>
                  <div className="floating-item grid-pile float-explosion-sm absolute right-[-10%] top-[-8%] w-4/5 origin-left">
                    <img alt="" loading="lazy" width="819" height="1024" decoding="async" className="h-full w-full rounded-[4px] object-cover" style={{"color": "transparent"}} sizes="(min-width: 1024px) 30vw, 80vw" src="/assets/explosion.jpg" />
                  </div>
                  <div className="floating-item grid-pile float-green-sm absolute left-[-10%] top-[-12%] w-3/5 origin-bottom-right">
                    <img alt="" loading="lazy" width="563" height="1024" decoding="async" className="h-full w-full rounded-[4px] object-cover" style={{"color": "transparent"}} sizes="(min-width: 1024px) 30vw, 80vw" src="/assets/green-poster.jpg" />
                  </div>
                </div>
                <HeroDemoWindow />
                <div className="absolute top-[30%] right-[-4%] z-20 w-[24%] min-w-20 max-w-24 lg:top-1/2 lg:right-[-14%] lg:w-[28%] lg:min-w-0 lg:max-w-none">
                  <HeroVideoThumbs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
