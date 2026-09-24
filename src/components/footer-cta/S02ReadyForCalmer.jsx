export default function S02ReadyForCalmer() {
  return (
    <div className="flex flex-col col-span-full gap-4 text-left max-w-full px-3 sm:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-balance tracking-[-0.015em] font-quadrant text-3xl sm:text-4xl md:text-5xl lg:text-[68px]">
        {"Ready for "}
        <span className="relative inline-block">
          <span className="sr-only">
            {"calmer"}
          </span>
          <img alt="" aria-hidden="true" loading="lazy" width="400" height="200" decoding="async" className="inline-block h-[1.2em] w-auto -translate-y-[0.3em] translate-x-[0.1em]" style={{"color": "transparent"}} src="/handwriting/handwriting-calmer.svg" />
        </span>
        {", more productive meetings?"}
      </h2>
      <p className="col-span-2 max-w-4xl text-2xl text-content-secondary font-light text-balance text-lg sm:text-xl lg:text-2xl">
        {"Try Granola for a few meetings today. It's free to get started."}
      </p>
    </div>
  )
}
