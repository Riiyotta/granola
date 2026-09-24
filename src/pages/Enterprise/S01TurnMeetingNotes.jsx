export default function S01TurnMeetingNotes() {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 md:px-10 lg:grid-cols-[1fr_auto] lg:pb-36 lg:pt-48 2xl:px-0">
      <div className="flex max-w-2xl flex-col items-start gap-7">
        <p className="font-quadrant text-xl tracking-[0.02em] text-ink-primary">
          {"Granola for Enterprise"}
        </p>
        <h1 className="text-balance font-quadrant text-3xl leading-[1.1] tracking-[-0.015em] text-ink-primary sm:text-4xl lg:text-[54px]">
          {"Turn meeting notes into company knowledge"}
        </h1>
        <p className="max-w-[48ch] text-lg text-ink-primary lg:text-2xl">
          {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in."}
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-medium transition-colors lg:h-14 lg:text-[18px] bg-ink-primary text-white hover:bg-ink-primary/90" href="/contact/sales?source=enterprise_page">
            {"Talk to sales"}
          </a>
        </div>
      </div>
      <img alt="Collage of space shuttles lifting off over a calendar grid" width="495" height="486" decoding="async" className="order-first h-auto w-full max-w-md lg:order-none lg:w-[495px]" style={{"color": "transparent"}} sizes="(min-width: 1024px) 495px, (min-width: 448px) 448px, 100vw" src="/enterpriseAssets/hero-collage-v2.png" />
    </section>
  )
}
