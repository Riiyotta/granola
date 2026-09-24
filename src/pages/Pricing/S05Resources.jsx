export default function S05Resources() {
  return (
    <section id="resources" className="flex overflow-visible relative flex-col gap-8 lg:gap-16 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl">
      <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
          {"Resources"}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-0 md:gap-6 md:grid-cols-3 w-full">
        <a className="flex flex-col p-4 mb-4 rounded-lg transition-all border border-stroke hover:border-oats-neutral-300 bg-white/60 hover:bg-white hover:-translate-y-1" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-green-300 size-6">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
          </svg>
          <h3 className="mt-4 text-xl font-quadrant leading-tight mb-1">
            {"Security"}
          </h3>
          <p className="font-medium">
            {"How we secure your data & privacy"}
          </p>
        </a>
        <a href="#" className="flex flex-col p-4 mb-4 rounded-lg transition-all border border-stroke hover:border-oats-neutral-300 bg-white/60 hover:bg-white hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-blue-200 size-6">
            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
          </svg>
          <h3 className="mt-4 text-xl font-quadrant leading-tight mb-1">
            {"Policies"}
          </h3>
          <p className="font-medium">
            {"Everything you need to know our terms"}
          </p>
        </a>
        <a href="#" className="flex flex-col p-4 mb-4 rounded-lg transition-all border border-stroke hover:border-oats-neutral-300 bg-white/60 hover:bg-white hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-purple-200 size-6">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>
          <h3 className="mt-4 text-xl font-quadrant leading-tight mb-1">
            {"Other FAQs"}
          </h3>
          <p className="font-medium">
            {"All other questions you may have"}
          </p>
        </a>
      </div>
    </section>
  )
}
