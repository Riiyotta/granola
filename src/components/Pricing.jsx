export default function Pricing() {
  return (
    <section className="relative w-full overflow-hidden">
      <img alt="" aria-hidden="true" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="100vw" src="/assets/pricing-bg.jpg" />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-8 2xl:px-0">
        <div className="mx-auto w-full max-w-3xl rounded-t-[28px] bg-surface px-6 pb-16 pt-7 shadow-[0px_4px_50px_rgba(54,54,53,0.25)] sm:px-10 md:pb-24 lg:px-12">
          <div aria-hidden="true" className="flex items-center gap-2.5">
            <span className="size-3.5 rounded-full border-0.5 border-black/10 bg-[#FF736A]" />
            <span className="size-3.5 rounded-full border-0.5 border-black/10 bg-[#FEBC2E]" />
            <span className="size-3.5 rounded-full border-0.5 border-black/10 bg-[#19C332]" />
          </div>
          <div className="flex flex-col items-start gap-6 pt-10 md:gap-10 md:pt-14">
            <h2 className="text-balance font-quadrant text-4xl leading-[0.98] tracking-[-0.01em] text-ink-primary sm:text-5xl md:text-6xl lg:text-[88px]">
              {"Unlimited meeting notes for free"}
            </h2>
            <p className="max-w-[42ch] text-lg text-ink-primary sm:text-xl lg:text-2xl">
              {"Take as many notes as you’d like. Upgrade to view and work with notes older than 30 days."}
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-5">
              <a href="#" role="button" tabIndex={0} className="inline-flex items-center justify-center rounded-full font-book ring-focus-ring outline-none disabled:opacity-100 no-drag select-none text-ink-primary-inverse bg-fill-primary hover:bg-fill-primary-hover data-popup-open:bg-fill-primary-hover disabled:bg-fill-disabled disabled:text-ink-secondary py-[9px] gap-1 text-base h-12 w-full cursor-pointer px-6 text-[16px] sm:w-auto lg:h-14">
                {"Download for free"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="size-4">
                  <path d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" role="button" tabIndex={0} className="inline-flex items-center justify-center rounded-full font-book ring-focus-ring outline-none disabled:opacity-100 no-drag select-none border bg-transparent text-oats-neutral-800 dark:border-oats-off-white-a20 dark:text-oats-neutral-50 hover:bg-oats-off-black-a6 dark:hover:bg-oats-off-white-a6 data-popup-open:bg-oats-off-black-a6 dark:data-popup-open:bg-oats-off-white-a6 disabled:bg-transparent disabled:text-ink-secondary dark:disabled:bg-transparent dark:disabled:text-oats-neutral-500 py-[9px] gap-1 text-base h-12 w-full cursor-pointer px-6 text-[16px] sm:w-auto lg:h-14 border-fill-primary">
                {"View pricing"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
