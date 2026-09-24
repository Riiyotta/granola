import { useRef } from 'react'
import { useHeroDemoLoop, ENHANCED, RAW_INITIAL_HTML } from '../../motion/hero-demo-loop.js'

const cx = (...a) => a.filter(Boolean).join(' ')

function enhancedClass(e, i) {
  return cx(
    'dq-grad',
    e.kind === 'heading' ? cx('gradient-text-grey font-semibold', i > 0 && 'mt-[1.5em]') : e.grey ? 'gradient-text-grey' : 'gradient-text',
    e.kind === 'bullet' && (e.indent === 1 ? 'pl-7' : 'pl-3'),
  )
}

// Hero app window ("Q3 GTM sync"). Markup is the original's; motion in motion/hero-demo-loop.js.
export default function HeroDemoWindow() {
  const root = useRef(null)
  const raw = useRef(null)
  const scroller = useRef(null)
  const enhancedWrap = useRef(null)
  const enhanced = useRef(null)
  const pill = useRef(null)
  const transcribing = useRef(null)
  const generate = useRef(null)
  const toggle = useRef(null)
  const highlight = useRef(null)
  useHeroDemoLoop({ root, raw, scroller, enhancedWrap, enhanced, pill, transcribing, generate, toggle, highlight })

  return (
    <div ref={root} aria-hidden="true" className="relative z-10 flex h-full w-full flex-col overflow-hidden select-none rounded-xl border border-px md:border-hairline bg-surface shadow-xl">
      <div className="flex h-11 shrink-0 items-center gap-[6.5px] bg-surface pl-[15.5px]">
        <span className="size-[10px] shrink-0 rounded-full border border-black/10 bg-[#ff736a]" />
        <span className="size-[10px] shrink-0 rounded-full border border-black/10 bg-[#febc2e]" />
        <span className="size-[10px] shrink-0 rounded-full border border-black/10 bg-[#19c332]" />
      </div>
      <div className="flex flex-1 flex-col px-2 pt-0 pb-16">
        <div className="px-4 pt-3 font-quadrant text-xl text-ink-primary">
          {"Q3 GTM sync"}
        </div>
        <div className="mx-3 mt-2 flex flex-wrap items-start gap-2 py-1">
          <div className="flex min-h-6 items-center gap-2 rounded-full border border-hairline px-2 text-[10px] font-book text-ink-secondary">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "2.142857142857143"}} className="shrink-0 text-ink-secondary">
                <path d="M3.75 6.75C3.75 5.64543 4.64543 4.75 5.75 4.75H18.25C19.3546 4.75 20.25 5.64543 20.25 6.75V18.25C20.25 19.3546 19.3546 20.25 18.25 20.25H5.75C4.64543 20.25 3.75 19.3546 3.75 18.25V6.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.75 9.75H20.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.75 4.75V2.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.25 4.75V2.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {"Today"}
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "2.142857142857143"}} className="shrink-0 text-ink-secondary">
                <path d="M11.25 7C11.25 8.79493 9.79493 10.25 8 10.25C6.20507 10.25 4.75 8.79493 4.75 7C4.75 5.20507 6.20507 3.75 8 3.75C9.79493 3.75 11.25 5.20507 11.25 7Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.75 7.5C19.75 9.01878 18.5188 10.25 17 10.25C15.4812 10.25 14.25 9.01878 14.25 7.5C14.25 5.98122 15.4812 4.75 17 4.75C18.5188 4.75 19.75 5.98122 19.75 7.5Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.9998 12.75C4.85865 12.75 2.85968 14.9867 2.08106 18.126C1.80134 19.2539 2.73936 20.25 3.90137 20.25H12.0982C13.2602 20.25 14.1983 19.2539 13.9185 18.126C13.1399 14.9867 11.1409 12.75 7.9998 12.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.7516 19.25H20.3476C21.5105 19.25 22.4539 18.2489 22.1353 17.1305C21.4023 14.557 19.6704 12.75 17.0016 12.75C16.5555 12.75 16.1356 12.8005 15.7422 12.8966" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {"4"}
            </span>
          </div>
          <div className="flex size-6 items-center justify-center rounded-full border border-hairline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "2.142857142857143"}} className="shrink-0 text-ink-tertiary">
              <path d="M11.25 19.25H4.75C3.64543 19.25 2.75 18.3546 2.75 17.25V5.75C2.75 4.64543 3.64543 3.75 4.75 3.75H8.92963C9.59834 3.75 10.2228 4.0842 10.5937 4.6406L11.4063 5.8594C11.7772 6.4158 12.4017 6.75 13.0704 6.75H19.25C20.3546 6.75 21.25 7.64543 21.25 8.75V10.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 13.75V17V20.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.75 17H18H21.25" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="relative mt-4 min-h-0 flex-1">
          <div className="absolute inset-0 grid min-h-0" style={{ gridTemplateAreas: "'stack'", gridTemplateRows: 'minmax(0, 1fr)', gridTemplateColumns: 'minmax(0, 1fr)' }}>
            <div className="min-h-0 overflow-hidden px-4" style={{ gridArea: 'stack' }}>
              <div ref={raw} className="flex flex-col gap-2 pb-6 font-melange text-[10px] leading-relaxed text-ink-primary [&_p]:min-h-[1.1em]" dangerouslySetInnerHTML={{ __html: RAW_INITIAL_HTML }} />
            </div>
            <div ref={scroller} className="min-h-0 overflow-hidden px-4" style={{ gridArea: 'stack' }}>
              <div ref={enhancedWrap} className="relative pb-6">
                <div ref={enhanced} className="demo-enhanced flex flex-col bg-surface font-melange text-[10px] leading-normal" style={{ clipPath: 'inset(0px 0px 100% 0px)' }}>
                  {ENHANCED.map((e, i) => (
                    <p key={i} className={enhancedClass(e, i)}>
                      {e.kind === 'bullet' ? (e.indent === 1 ? '–  ' : '•  ') : ''}
                      {e.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-2 top-0">
            <div ref={pill} style={{ visibility: 'hidden', opacity: 0 }} className="flex w-full items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-3 py-1.5 shadow-md">
              <span className="size-3 animate-spin rounded-full border-2 border-ink-accent border-t-transparent" />
              <span className="text-[10px] font-medium text-ink-secondary">{'Enhancing notes'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-4 grid place-items-center" style={{ gridTemplateAreas: "'stack'" }}>
        <div ref={transcribing} style={{ gridArea: 'stack', visibility: 'hidden', opacity: 0 }}>
          <div className="flex h-10 items-center gap-3 rounded-full border border-hairline bg-surface-elevated px-4 shadow-md">
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
            <span className="text-sm tracking-[0.01em] text-ink-secondary">
              {"Transcribing"}
            </span>
          </div>
        </div>
        <div ref={generate} style={{ gridArea: 'stack', visibility: 'hidden', opacity: 0 }}>
          <div className="flex h-10 items-center gap-1.5 rounded-full bg-fill-primary px-4 text-sm font-medium text-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4">
              <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
            </svg>
            {"Generate notes"}
          </div>
        </div>
        <div ref={toggle} style={{ gridArea: 'stack', visibility: 'hidden', opacity: 0 }}>
          <div className="relative flex w-48 rounded-full border border-hairline bg-surface-elevated p-0.5 shadow-md">
            <div ref={highlight} className="absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-fill-highlight" />
            <span className="relative z-10 flex-1 py-1 text-center text-[10px] font-medium text-ink-primary">{'My notes'}</span>
            <span className="relative z-10 flex-1 py-1 text-center text-[10px] font-medium text-ink-primary">{'Enhanced'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
