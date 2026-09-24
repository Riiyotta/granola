import { useRef, useState } from 'react'
import { useHiwCenterActive } from '../motion/hiw-center-observer.js'
import { useHiwStepDemo } from '../motion/hiw-demo.js'
import { useHiwStageScale } from '../motion/hiw-stage-scale.js'
import { useHiwVideoThumbs } from '../motion/hiw-video-thumbs.js'
import { pickHeroCallVideos } from '../motion/hero-call-videos.js'

// Live mobile (<768): stacked steps, no tabs. Each tile has its own centre-line
// IntersectionObserver; only step 1 ("In the meeting") has a demo to play.
export default function HowItWorksMobile() {
  const rootRef = useRef(null)
  const step1TileRef = useRef(null)
  const step1Active = useHiwCenterActive(step1TileRef)
  useHiwStageScale(rootRef)
  useHiwVideoThumbs(rootRef)
  // Same two random callers as the hero, picked once per page load.
  const [callers] = useState(pickHeroCallVideos)
  useHiwStepDemo(step1TileRef, step1Active)
  return (
    <div ref={rootRef} className="md:hidden flex flex-col max-w-md mx-auto w-full px-4 ">
      <div className="flex flex-col py-12">
        <p className="font-quadrant text-lg text-content-tertiary">
          {"Before the meeting"}
        </p>
        <h3 className="font-quadrant text-2xl font-normal leading-[1.05] tracking-[-0.01em] text-ink-primary mt-2">
          {"Start your meeting prepared"}
        </h3>
        <p className="mt-2">
          {"Granola syncs with your calendar and preps a Brief before every external meeting: who’s attending, what you discussed last time, and what matters now."}
        </p>
        <div aria-hidden="true" className="mt-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-oats-green-300">
            <img alt="" loading="lazy" decoding="async" className="object-cover object-left" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(min-width: 768px) 50vw, 100vw" src="/assets/nature-2.jpg" />
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 size-full origin-top-left max-md:size-[448px] max-md:transform-[scale(var(--stage-scale))]" style={{"--stage-scale": "1"}}>
                <div className="absolute left-[7%] top-[6.5%] h-[87.3%] w-[96.4%] origin-top-left scale-105 md:h-[64%] md:w-[70.7%] md:scale-150">
                  <div aria-hidden="true" className="flex flex-col overflow-hidden select-none rounded-3xl border border-hairline bg-surface shadow-xl absolute inset-0">
                    <div className="flex h-11 shrink-0 items-center gap-2 bg-surface pl-[15.5px]">
                      <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                      <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                      <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col px-2 pt-0 pb-6">
                      <div className="px-4 pt-3 font-quadrant text-2xl text-ink-primary">
                        {"Northwind Sync"}
                      </div>
                      <div className="mx-3 mt-2 flex flex-wrap items-start gap-2 py-1">
                        <div className="flex min-h-7 items-center gap-2 rounded-full border border-hairline px-2.5 text-sm font-book text-ink-secondary">
                          <span className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="shrink-0 text-ink-secondary">
                              <path d="M3.75 6.75C3.75 5.64543 4.64543 4.75 5.75 4.75H18.25C19.3546 4.75 20.25 5.64543 20.25 6.75V18.25C20.25 19.3546 19.3546 20.25 18.25 20.25H5.75C4.64543 20.25 3.75 19.3546 3.75 18.25V6.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M3.75 9.75H20.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7.75 4.75V2.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16.25 4.75V2.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {"Today"}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="shrink-0 text-ink-secondary">
                              <path d="M11.25 7C11.25 8.79493 9.79493 10.25 8 10.25C6.20507 10.25 4.75 8.79493 4.75 7C4.75 5.20507 6.20507 3.75 8 3.75C9.79493 3.75 11.25 5.20507 11.25 7Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M19.75 7.5C19.75 9.01878 18.5188 10.25 17 10.25C15.4812 10.25 14.25 9.01878 14.25 7.5C14.25 5.98122 15.4812 4.75 17 4.75C18.5188 4.75 19.75 5.98122 19.75 7.5Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7.9998 12.75C4.85865 12.75 2.85968 14.9867 2.08106 18.126C1.80134 19.2539 2.73936 20.25 3.90137 20.25H12.0982C13.2602 20.25 14.1983 19.2539 13.9185 18.126C13.1399 14.9867 11.1409 12.75 7.9998 12.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M17.7516 19.25H20.3476C21.5105 19.25 22.4539 18.2489 22.1353 17.1305C21.4023 14.557 19.6704 12.75 17.0016 12.75C16.5555 12.75 16.1356 12.8005 15.7422 12.8966" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {"2"}
                          </span>
                        </div>
                      </div>
                      <div className="relative mt-4 min-h-0 flex-1">
                        <div className="absolute inset-0 grid min-h-0" style={{"gridTemplateAreas": "'stack'", "gridTemplateRows": "minmax(0, 1fr)", "gridTemplateColumns": "minmax(0, 1fr)"}}>
                          <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                            <div className="font-melange text-xs leading-relaxed text-ink-tertiary" style={{"opacity": "1", "visibility": "inherit"}}>
                              {"Write notes..."}
                            </div>
                          </div>
                          <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                            <div style={{"visibility": "hidden", "opacity": "0"}} className="whitespace-pre-line font-melange text-xs leading-relaxed text-ink-primary" />
                          </div>
                          <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                            <div className="relative pb-16">
                              <div style={{"visibility": "hidden", "opacity": "0", "clipPath": "inset(0px 0px 100% 0px)"}} className="demo-enhanced flex flex-col bg-surface font-melange text-xs leading-normal">
                                <p className="hiw-grad gradient-text-grey font-semibold">
                                  {"Q3 roadmap check-in"}
                                </p>
                                <p className="hiw-grad gradient-text pl-3">
                                  {"•  Walked through priorities for the quarter"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Two initiatives pulled forward from Q4"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  One project deprioritized pending more research"}
                                </p>
                                <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em]">
                                  {"Design system rollout"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Phase 1 shipping next week"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Blocked on documentation site"}
                                </p>
                                <p className="hiw-grad gradient-text pl-3">
                                  {"•  Tanya offered to pair on the doc structure"}
                                </p>
                                <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em]">
                                  {"Onboarding improvements"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Brainstormed ways to improve new-user onboarding"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Three angles: in-app tour, intro video, sample data"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Jack to spec out the in-app tour direction"}
                                </p>
                                <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em]">
                                  {"Next steps"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Sam to draft doc outline by Friday"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Jess to set up the A/B test plan"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3">
                                  {"•  Sync again Friday"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-x-2 top-0">
                          <div style={{"visibility": "hidden", "opacity": "0", "translate": "none", "rotate": "none", "scale": "none", "transform": "scale(0.95, 0.95)"}} className="flex w-full items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-3 py-1.5 shadow-md">
                            <span className="size-3 animate-spin rounded-full border-2 border-ink-accent border-t-transparent" />
                            <span className="text-xs font-medium text-ink-secondary">
                              {"Enhancing notes"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-4 grid place-items-center">
                      <div style={{"visibility": "hidden", "opacity": "0"}} className="flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-3.5 py-1.5 shadow-md">
                        <div className="flex items-center gap-1">
                          <span className="relative w-1" style={{"height": "20px"}}>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "12px", "animation": "dancing-bar-top-1 0.6s ease-in-out 0s infinite alternate"}} />
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "12px", "animation": "dancing-bar-bottom-1 0.6s ease-in-out 0s infinite alternate"}} />
                            </span>
                          </span>
                          <span className="relative w-1" style={{"height": "28px"}}>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "18px", "animation": "dancing-bar-top-3 0.5s ease-in-out 0.18s infinite alternate"}} />
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "18px", "animation": "dancing-bar-bottom-3 0.5s ease-in-out 0.18s infinite alternate"}} />
                            </span>
                          </span>
                          <span className="relative w-1" style={{"height": "18px"}}>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "13px", "animation": "dancing-bar-top-2 0.92s ease-in-out 0.33s infinite alternate"}} />
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "13px", "animation": "dancing-bar-bottom-2 0.92s ease-in-out 0.33s infinite alternate"}} />
                            </span>
                          </span>
                        </div>
                        <span className="text-xs font-medium text-ink-secondary">
                          {"Transcribing"}
                        </span>
                      </div>
                    </div>
                    <div style={{"visibility": "hidden", "opacity": "0"}} className="absolute inset-x-0 bottom-0 px-4 pb-6">
                      <div aria-hidden="true" className="flex h-9 w-full items-center gap-2 rounded-full border border-hairline bg-surface pl-3.5 pr-1 shadow-sm">
                        <span className="flex-1 truncate font-melange text-xs text-ink-tertiary">
                          {"Ask anything"}
                        </span>
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink-accent">
                          <svg className="size-3 text-white" viewBox="0 0 11 13" fill="none">
                            <path d="M5.5 1V12M5.5 1L1 5.5M5.5 1L10 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[28px] px-6 pt-4 pb-5 font-melange text-sm lg:text-base xl:text-[17px] leading-relaxed text-ink-primary bg-[linear-gradient(147deg,#ffffff_30%,#faf7f5_72%)] shadow-[0_0_0_6px_rgba(71,67,42,0.05)] absolute left-[3.5%] top-[50%] w-[93%] md:top-[55%]">
                  <div className="flex items-center gap-1.5 text-ink-secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.6666666666666665"}} className="shrink-0">
                      <path d="M4.75 21.25C4.75 12.5443 7.98555 3.83854 17.4854 2.76152C18.6032 2.6348 19.5382 3.57295 19.1675 4.62149C18.0685 7.7308 14.7721 9.88335 14.7721 9.88335L15.7256 10.5838C16.4185 11.0929 16.7047 11.9815 16.2775 12.7225C15.153 14.6732 12.2368 18.15 5.73462 18.15" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {"Your Brief"}
                  </div>
                  <p className="mt-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.6666666666666665"}} aria-label="LinkedIn" className="mr-1.5 inline-block align-[-0.18em] text-ink-secondary">
                      <path d="M19.65 3H4.35C3.99196 3 3.64858 3.14223 3.39541 3.39541C3.14223 3.64858 3 3.99196 3 4.35V19.65C3 20.008 3.14223 20.3514 3.39541 20.6046C3.64858 20.8578 3.99196 21 4.35 21H19.65C20.008 21 20.3514 20.8578 20.6046 20.6046C20.8578 20.3514 21 20.008 21 19.65V4.35C21 3.99196 20.8578 3.64858 20.6046 3.39541C20.3514 3.14223 20.008 3 19.65 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.625C6.74056 8.61616 6.4406 8.51632 6.18758 8.33797C5.93456 8.15962 5.7397 7.91066 5.62737 7.6222C5.51503 7.33374 5.49019 7.01857 5.55595 6.71607C5.6217 6.41358 5.77515 6.13716 5.9971 5.92138C6.21906 5.70559 6.49968 5.55999 6.80391 5.50278C7.10814 5.44556 7.42248 5.47927 7.70766 5.59969C7.99284 5.7201 8.23622 5.92189 8.40737 6.17983C8.57853 6.43778 8.66987 6.74044 8.67 7.05C8.66289 7.47331 8.4885 7.8766 8.18495 8.17173C7.88139 8.46685 7.47335 8.62982 7.05 8.625ZM18.3 18.3H15.6V14.034C15.6 12.756 15.06 12.297 14.358 12.297C14.1522 12.3107 13.9511 12.3649 13.7663 12.4566C13.5815 12.5482 13.4166 12.6755 13.2811 12.831C13.1457 12.9866 13.0422 13.1674 12.9768 13.363C12.9114 13.5586 12.8853 13.7652 12.9 13.971C12.8955 14.0129 12.8955 14.0551 12.9 14.097V18.3H10.2V10.2H12.81V11.37C13.0733 10.9695 13.435 10.6433 13.8605 10.4227C14.286 10.2021 14.761 10.0944 15.24 10.11C16.635 10.11 18.264 10.884 18.264 13.404L18.3 18.3Z" fill="currentColor" />
                    </svg>
                    <strong className="font-medium">
                      {"Alex Park’s"}
                    </strong>
                    {" (VP at "}
                    <strong className="font-medium">
                      {"Northwind"}
                    </strong>
                    {") team pushed back on pricing overnight, bringing a counter-proposal to today’s call."}
                  </p>
                  <ul className="mt-4 flex flex-col gap-3">
                    <li className="flex gap-2">
                      <span aria-hidden="true" className="text-ink-tertiary">
                        {"•"}
                      </span>
                      <span>
                        {"Alex email this morning "}
                        <strong className="font-medium">
                          {"notes"}
                        </strong>
                        {" the push-back is team-driven, not executive-level."}
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span aria-hidden="true" className="text-ink-tertiary">
                        {"•"}
                      </span>
                      <span>
                        {"Q3 implementation is a hard constraint on Northwind’s side, "}
                        <strong className="font-medium">
                          {"flagged"}
                        </strong>
                        {" in prior syncs. Last delivery timeline "}
                        <strong className="font-medium">
                          {"mentioned"}
                        </strong>
                        {" targets August 2026."}
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span aria-hidden="true" className="text-ink-tertiary">
                        {"•"}
                      </span>
                      <span>
                        {"EU data residency is still open from the procurement intro two weeks ago; no update from Alex’s side since."}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12">
        <p className="font-quadrant text-lg text-content-tertiary">
          {"In the meeting"}
        </p>
        <h3 className="font-quadrant text-2xl font-normal leading-[1.05] tracking-[-0.01em] text-ink-primary mt-2">
          {"Give your full attention"}
        </h3>
        <p className="mt-2">
          {"Don’t choose between listening and taking good notes. Write down as much or as little as you like - Granola uses meeting context to write clear notes, personal to you."}
        </p>
        <div ref={step1TileRef} aria-hidden="true" className="mt-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-oats-green-300">
            <img alt="" loading="lazy" decoding="async" className="object-cover object-right" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(min-width: 768px) 50vw, 100vw" src="/assets/nature-2.jpg" />
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 size-full origin-top-left max-md:size-[448px] max-md:transform-[scale(var(--stage-scale))]" style={{"--stage-scale": "1"}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[60%] max-md:aspect-[3/4.7] max-md:transform-[translate(35%,4%)_scale(1.1)] md:aspect-3/4 md:transform-[translate(30%,0%)_scale(1.1)]">
                    <div aria-hidden="true" className="flex flex-col overflow-hidden select-none rounded-3xl border border-hairline bg-surface shadow-xl absolute inset-0">
                      <div className="flex h-11 shrink-0 items-center gap-2 bg-surface pl-[15.5px]">
                        <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                        <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                        <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col px-2 pt-0 pb-6">
                        <div className="px-4 pt-3 font-quadrant text-2xl text-ink-primary">
                          {"Northwind Sync"}
                        </div>
                        <div className="mx-3 mt-2 flex flex-wrap items-start gap-2 py-1">
                          <div className="flex min-h-7 items-center gap-2 rounded-full border border-hairline px-2.5 text-sm font-book text-ink-secondary">
                            <span className="flex items-center gap-1">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="shrink-0 text-ink-secondary">
                                <path d="M3.75 6.75C3.75 5.64543 4.64543 4.75 5.75 4.75H18.25C19.3546 4.75 20.25 5.64543 20.25 6.75V18.25C20.25 19.3546 19.3546 20.25 18.25 20.25H5.75C4.64543 20.25 3.75 19.3546 3.75 18.25V6.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.75 9.75H20.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.75 4.75V2.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.25 4.75V2.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              {"Today"}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="shrink-0 text-ink-secondary">
                                <path d="M11.25 7C11.25 8.79493 9.79493 10.25 8 10.25C6.20507 10.25 4.75 8.79493 4.75 7C4.75 5.20507 6.20507 3.75 8 3.75C9.79493 3.75 11.25 5.20507 11.25 7Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.75 7.5C19.75 9.01878 18.5188 10.25 17 10.25C15.4812 10.25 14.25 9.01878 14.25 7.5C14.25 5.98122 15.4812 4.75 17 4.75C18.5188 4.75 19.75 5.98122 19.75 7.5Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.9998 12.75C4.85865 12.75 2.85968 14.9867 2.08106 18.126C1.80134 19.2539 2.73936 20.25 3.90137 20.25H12.0982C13.2602 20.25 14.1983 19.2539 13.9185 18.126C13.1399 14.9867 11.1409 12.75 7.9998 12.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.7516 19.25H20.3476C21.5105 19.25 22.4539 18.2489 22.1353 17.1305C21.4023 14.557 19.6704 12.75 17.0016 12.75C16.5555 12.75 16.1356 12.8005 15.7422 12.8966" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              {"2"}
                            </span>
                          </div>
                        </div>
                        <div className="relative mt-4 min-h-0 flex-1">
                          <div className="absolute inset-0 grid min-h-0" style={{"gridTemplateAreas": "'stack'", "gridTemplateRows": "minmax(0, 1fr)", "gridTemplateColumns": "minmax(0, 1fr)"}}>
                            <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                              <div className="font-melange text-xs leading-relaxed text-ink-tertiary" style={{"opacity": "1", "visibility": "inherit"}}>
                                {"Write notes..."}
                              </div>
                            </div>
                            <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                              <div style={{"visibility": "hidden", "opacity": "0"}} className="whitespace-pre-line font-melange text-xs leading-relaxed text-ink-primary" />
                            </div>
                            <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                              <div className="relative pb-16">
                                <div style={{"visibility": "hidden", "opacity": "0", "clipPath": "inset(0px 0px 100% 0px)"}} className="demo-enhanced flex flex-col bg-surface font-melange text-xs leading-normal">
                                  <p className="hiw-grad gradient-text-grey font-semibold">
                                    {"Q3 roadmap check-in"}
                                  </p>
                                  <p className="hiw-grad gradient-text pl-3">
                                    {"•  Walked through priorities for the quarter"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Two initiatives pulled forward from Q4"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  One project deprioritized pending more research"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em]">
                                    {"Design system rollout"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Phase 1 shipping next week"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Blocked on documentation site"}
                                  </p>
                                  <p className="hiw-grad gradient-text pl-3">
                                    {"•  Tanya offered to pair on the doc structure"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em]">
                                    {"Onboarding improvements"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Brainstormed ways to improve new-user onboarding"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Three angles: in-app tour, intro video, sample data"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Jack to spec out the in-app tour direction"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em]">
                                    {"Next steps"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Sam to draft doc outline by Friday"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Jess to set up the A/B test plan"}
                                  </p>
                                  <p className="hiw-grad gradient-text-grey pl-3">
                                    {"•  Sync again Friday"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pointer-events-none absolute inset-x-2 top-0">
                            <div style={{"visibility": "hidden", "opacity": "0", "translate": "none", "rotate": "none", "scale": "none", "transform": "scale(0.95, 0.95)"}} className="flex w-full items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-3 py-1.5 shadow-md">
                              <span className="size-3 animate-spin rounded-full border-2 border-ink-accent border-t-transparent" />
                              <span className="text-xs font-medium text-ink-secondary">
                                {"Enhancing notes"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-4 grid place-items-center">
                        <div style={{"visibility": "hidden", "opacity": "0"}} className="flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-3.5 py-1.5 shadow-md">
                          <div className="flex items-center gap-1">
                            <span className="relative w-1" style={{"height": "20px"}}>
                              <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-1 rounded-full bg-ink-primary" style={{"height": "12px", "animation": "dancing-bar-top-1 0.6s ease-in-out 0s infinite alternate"}} />
                              </span>
                              <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-1 rounded-full bg-ink-primary" style={{"height": "12px", "animation": "dancing-bar-bottom-1 0.6s ease-in-out 0s infinite alternate"}} />
                              </span>
                            </span>
                            <span className="relative w-1" style={{"height": "28px"}}>
                              <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-1 rounded-full bg-ink-primary" style={{"height": "18px", "animation": "dancing-bar-top-3 0.5s ease-in-out 0.18s infinite alternate"}} />
                              </span>
                              <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-1 rounded-full bg-ink-primary" style={{"height": "18px", "animation": "dancing-bar-bottom-3 0.5s ease-in-out 0.18s infinite alternate"}} />
                              </span>
                            </span>
                            <span className="relative w-1" style={{"height": "18px"}}>
                              <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-1 rounded-full bg-ink-primary" style={{"height": "13px", "animation": "dancing-bar-top-2 0.92s ease-in-out 0.33s infinite alternate"}} />
                              </span>
                              <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-1 rounded-full bg-ink-primary" style={{"height": "13px", "animation": "dancing-bar-bottom-2 0.92s ease-in-out 0.33s infinite alternate"}} />
                              </span>
                            </span>
                          </div>
                          <span className="text-xs font-medium text-ink-secondary">
                            {"Transcribing"}
                          </span>
                        </div>
                      </div>
                      <div style={{"visibility": "hidden", "opacity": "0"}} className="absolute inset-x-0 bottom-0 px-4 pb-6">
                        <div aria-hidden="true" className="flex h-9 w-full items-center gap-2 rounded-full border border-hairline bg-surface pl-3.5 pr-1 shadow-sm">
                          <span className="flex-1 truncate font-melange text-xs text-ink-tertiary">
                            {"Ask anything"}
                          </span>
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink-accent">
                            <svg className="size-3 text-white" viewBox="0 0 11 13" fill="none">
                              <path d="M5.5 1V12M5.5 1L1 5.5M5.5 1L10 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-full top-0 mr-[8%] w-[40%]">
                      <div className="video-thumbs flex-col items-stretch border flex rounded-lg bg-black p-[3px] gap-[3px] border-oats-neutral-900 shadow-xl">
                        <div className="relative overflow-hidden w-full rounded-sm transition-all duration-300 border aspect-square border-oats-neutral-900 pointer-events-auto">
                          <canvas aria-hidden="true" className="absolute inset-0 z-0 h-full w-full object-cover" width="512" height="288" style={{"backgroundImage": `url("${callers[0].poster}")`, "backgroundSize": "cover", "backgroundPosition": "center center"}} />
                        </div>
                        <div className="relative overflow-hidden w-full rounded-sm transition-all duration-300 border aspect-square border-oats-neutral-900 pointer-events-auto">
                          <canvas aria-hidden="true" className="absolute inset-0 z-0 h-full w-full object-cover" width="512" height="322" style={{"backgroundImage": `url("${callers[1].poster}")`, "backgroundSize": "cover", "backgroundPosition": "center center"}} />
                        </div>
                        <div aria-hidden="true" className="flex items-center justify-center gap-1.5 pt-0.5">
                          <span className="flex items-center justify-center rounded-full w-[26px] h-[14px] text-white bg-[#484844]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic size-2.5">
                              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                              <line x1="12" x2="12" y1="19" y2="22" />
                            </svg>
                          </span>
                          <span className="flex items-center justify-center rounded-full w-[26px] h-[14px] text-white bg-[#484844]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-2.5">
                              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                              <rect x="2" y="6" width="14" height="12" rx="2" />
                            </svg>
                          </span>
                          <span className="flex items-center justify-center rounded-full w-[26px] h-[14px] text-white bg-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone size-2.5 rotate-135">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12">
        <p className="font-quadrant text-lg text-content-tertiary">
          {"After the meeting"}
        </p>
        <h3 className="font-quadrant text-2xl font-normal leading-[1.05] tracking-[-0.01em] text-ink-primary mt-2">
          {"Post-meeting admin, done"}
        </h3>
        <p className="mt-2">
          {"Notes, action items, and follow-ups are ready the moment the meeting ends, so you can move things forward."}
        </p>
        <div aria-hidden="true" className="mt-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-oats-green-300">
            <img alt="" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(min-width: 768px) 50vw, 100vw" src="/assets/nature-3.jpg" />
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 size-full origin-top-left max-md:size-[448px] max-md:transform-[scale(var(--stage-scale))]" style={{"--stage-scale": "1"}}>
                <div className="absolute left-[7%] top-[6.5%] h-[87.3%] w-[96.4%] origin-top-left scale-105 md:h-[64%] md:w-[70.7%] md:scale-150">
                  <div aria-hidden="true" className="flex flex-col overflow-hidden select-none rounded-3xl border border-hairline bg-surface shadow-xl absolute inset-0">
                    <div className="flex h-11 shrink-0 items-center gap-2 bg-surface pl-[15.5px]">
                      <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                      <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                      <span className="size-[13px] shrink-0 rounded-full bg-fill-disabled" />
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col px-2 pt-0 pb-6">
                      <div className="px-4 pt-3 font-quadrant text-2xl text-ink-primary">
                        {"Northwind Sync"}
                      </div>
                      <div className="mx-3 mt-2 flex flex-wrap items-start gap-2 py-1">
                        <div className="flex min-h-7 items-center gap-2 rounded-full border border-hairline px-2.5 text-sm font-book text-ink-secondary">
                          <span className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="shrink-0 text-ink-secondary">
                              <path d="M3.75 6.75C3.75 5.64543 4.64543 4.75 5.75 4.75H18.25C19.3546 4.75 20.25 5.64543 20.25 6.75V18.25C20.25 19.3546 19.3546 20.25 18.25 20.25H5.75C4.64543 20.25 3.75 19.3546 3.75 18.25V6.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M3.75 9.75H20.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7.75 4.75V2.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16.25 4.75V2.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {"Today"}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="shrink-0 text-ink-secondary">
                              <path d="M11.25 7C11.25 8.79493 9.79493 10.25 8 10.25C6.20507 10.25 4.75 8.79493 4.75 7C4.75 5.20507 6.20507 3.75 8 3.75C9.79493 3.75 11.25 5.20507 11.25 7Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M19.75 7.5C19.75 9.01878 18.5188 10.25 17 10.25C15.4812 10.25 14.25 9.01878 14.25 7.5C14.25 5.98122 15.4812 4.75 17 4.75C18.5188 4.75 19.75 5.98122 19.75 7.5Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7.9998 12.75C4.85865 12.75 2.85968 14.9867 2.08106 18.126C1.80134 19.2539 2.73936 20.25 3.90137 20.25H12.0982C13.2602 20.25 14.1983 19.2539 13.9185 18.126C13.1399 14.9867 11.1409 12.75 7.9998 12.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M17.7516 19.25H20.3476C21.5105 19.25 22.4539 18.2489 22.1353 17.1305C21.4023 14.557 19.6704 12.75 17.0016 12.75C16.5555 12.75 16.1356 12.8005 15.7422 12.8966" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {"2"}
                          </span>
                        </div>
                      </div>
                      <div className="relative mt-4 min-h-0 flex-1">
                        <div className="absolute inset-0 grid min-h-0" style={{"gridTemplateAreas": "'stack'", "gridTemplateRows": "minmax(0, 1fr)", "gridTemplateColumns": "minmax(0, 1fr)"}}>
                          <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                            <div className="font-melange text-xs leading-relaxed text-ink-tertiary" style={{"opacity": "0", "visibility": "hidden"}}>
                              {"Write notes..."}
                            </div>
                          </div>
                          <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                            <div style={{"visibility": "hidden", "opacity": "0"}} className="whitespace-pre-line font-melange text-xs leading-relaxed text-ink-primary" />
                          </div>
                          <div style={{"gridArea": "stack"}} className="min-h-0 overflow-hidden px-4">
                            <div className="relative pb-16">
                              <div style={{"visibility": "inherit", "opacity": "1", "clipPath": "inset(0px)"}} className="demo-enhanced flex flex-col bg-surface font-melange text-xs leading-normal">
                                <p className="hiw-grad gradient-text-grey font-semibold gradient-text-animate">
                                  {"Q3 roadmap check-in"}
                                </p>
                                <p className="hiw-grad gradient-text pl-3 gradient-text-animate">
                                  {"•  Walked through priorities for the quarter"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Two initiatives pulled forward from Q4"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  One project deprioritized pending more research"}
                                </p>
                                <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em] gradient-text-animate">
                                  {"Design system rollout"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Phase 1 shipping next week"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Blocked on documentation site"}
                                </p>
                                <p className="hiw-grad gradient-text pl-3 gradient-text-animate">
                                  {"•  Tanya offered to pair on the doc structure"}
                                </p>
                                <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em] gradient-text-animate">
                                  {"Onboarding improvements"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Brainstormed ways to improve new-user onboarding"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Three angles: in-app tour, intro video, sample data"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Jack to spec out the in-app tour direction"}
                                </p>
                                <p className="hiw-grad gradient-text-grey font-semibold mt-[1.5em] gradient-text-animate">
                                  {"Next steps"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Sam to draft doc outline by Friday"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Jess to set up the A/B test plan"}
                                </p>
                                <p className="hiw-grad gradient-text-grey pl-3 gradient-text-animate">
                                  {"•  Sync again Friday"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-x-2 top-0">
                          <div style={{"visibility": "hidden", "opacity": "0"}} className="flex w-full items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-3 py-1.5 shadow-md">
                            <span className="size-3 animate-spin rounded-full border-2 border-ink-accent border-t-transparent" />
                            <span className="text-xs font-medium text-ink-secondary">
                              {"Enhancing notes"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-4 grid place-items-center">
                      <div style={{"visibility": "hidden", "opacity": "0"}} className="flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-3.5 py-1.5 shadow-md">
                        <div className="flex items-center gap-1">
                          <span className="relative w-1" style={{"height": "20px"}}>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "12px", "animation": "dancing-bar-top-1 0.6s ease-in-out 0s infinite alternate"}} />
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "12px", "animation": "dancing-bar-bottom-1 0.6s ease-in-out 0s infinite alternate"}} />
                            </span>
                          </span>
                          <span className="relative w-1" style={{"height": "28px"}}>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "18px", "animation": "dancing-bar-top-3 0.5s ease-in-out 0.18s infinite alternate"}} />
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "18px", "animation": "dancing-bar-bottom-3 0.5s ease-in-out 0.18s infinite alternate"}} />
                            </span>
                          </span>
                          <span className="relative w-1" style={{"height": "18px"}}>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "13px", "animation": "dancing-bar-top-2 0.92s ease-in-out 0.33s infinite alternate"}} />
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1 rounded-full bg-ink-primary" style={{"height": "13px", "animation": "dancing-bar-bottom-2 0.92s ease-in-out 0.33s infinite alternate"}} />
                            </span>
                          </span>
                        </div>
                        <span className="text-xs font-medium text-ink-secondary">
                          {"Transcribing"}
                        </span>
                      </div>
                    </div>
                    <div style={{"visibility": "hidden", "opacity": "0"}} className="absolute inset-x-0 bottom-0 px-4 pb-6">
                      <div aria-hidden="true" className="flex h-9 w-full items-center gap-2 rounded-full border border-hairline bg-surface pl-3.5 pr-1 shadow-sm">
                        <span className="flex-1 truncate font-melange text-xs text-ink-tertiary">
                          {"Ask anything"}
                        </span>
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink-accent">
                          <svg className="size-3 text-white" viewBox="0 0 11 13" fill="none">
                            <path d="M5.5 1V12M5.5 1L1 5.5M5.5 1L10 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="flex flex-col gap-4 rounded-[28px] bg-surface-elevated p-5 font-melange shadow-[0_0_0_8px_rgba(71,67,42,0.05)] absolute left-[3.5%] top-[50%] w-[117%] md:top-[56%]">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 py-2.5">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-oats-green-300/20 lg:size-12 xl:size-14 xl:rounded-2xl">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.153846153846154"}} className="text-ink-primary">
                          <path d="M11.75 16.25H20.25M11.75 7.75H20.25M3.75 8.625L5.41667 9.75L8.75 5.25M3.75 17.625L5.41667 18.75L8.75 14.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-lg text-ink-primary lg:text-xl xl:text-2xl">
                        {"List actions"}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 py-2.5 border-t border-hairline">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-oats-green-300/20 lg:size-12 xl:size-14 xl:rounded-2xl">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.153846153846154"}} className="text-ink-primary">
                          <path d="M3 5.63635L10.9761 10.3898C11.6069 10.7657 12.3931 10.7657 13.0239 10.3898L21 5.63635" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" />
                          <path d="M2.75 7.95C2.75 6.8299 2.75 6.26984 2.96799 5.84202C3.15973 5.46569 3.46569 5.15973 3.84202 4.96799C4.26984 4.75 4.8299 4.75 5.95 4.75H18.05C19.1701 4.75 19.7302 4.75 20.158 4.96799C20.5343 5.15973 20.8403 5.46569 21.032 5.84202C21.25 6.26984 21.25 6.8299 21.25 7.95V16.05C21.25 17.1701 21.25 17.7302 21.032 18.158C20.8403 18.5343 20.5343 18.8403 20.158 19.032C19.7302 19.25 19.1701 19.25 18.05 19.25H5.95C4.8299 19.25 4.26984 19.25 3.84202 19.032C3.46569 18.8403 3.15973 18.5343 2.96799 18.158C2.75 17.7302 2.75 17.1701 2.75 16.05V7.95Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" />
                        </svg>
                      </span>
                      <span className="text-lg text-ink-primary lg:text-xl xl:text-2xl">
                        {"Write follow-up email"}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 py-2.5 border-t border-hairline">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-oats-green-300/20 lg:size-12 xl:size-14 xl:rounded-2xl">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.153846153846154"}} className="text-ink-primary">
                          <path d="M19.8358 10.3492L18.6507 9.16416C17.8697 8.38311 16.6033 8.38311 15.8223 9.16416L7.75 17.2364V21.2499H11.7635L19.8358 13.1777C20.6168 12.3966 20.6168 11.1303 19.8358 10.3492Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.75 3.75H20.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.75 7.75H10.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.75 11.75H7.2522" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-lg text-ink-primary lg:text-xl xl:text-2xl">
                        {"Draft project plan"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
