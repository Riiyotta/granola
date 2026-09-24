import { HandDrawnRows } from './hero/HandDrawnRow.jsx'

export default function EffortlessNotesMobile() {
  return (
    <div className="lg:hidden">
      <section className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full 2xl:px-0 relative px-0 xs:px-0 md:px-0 h-auto">
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
  )
}
