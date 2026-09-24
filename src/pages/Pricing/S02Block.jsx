export default function S02Block() {
  return (
    <section id="testimonial" className="flex overflow-visible relative flex-col gap-8 lg:gap-16 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl">
      <div className="flex flex-col col-span-full gap-6 items-center mx-auto">
        <blockquote className="max-w-3xl text-2xl text-center md:text-3xl text-balance font-quadrant">
          {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks."}
        </blockquote>
        <div className="flex gap-4 items-center -ml-2">
          <img src="/testimonialImages/brex-testimonial-avatar.png" alt="Pedro Franceschi" className="rounded-lg size-10 md:size-12 bg-oats-neutral-200" />
          <div className="flex flex-col text-base">
            <span className="font-semibold leading-tight">
              {"Pedro Franceschi"}
            </span>
            <p className="text-content-secondary">
              {"Founder and CEO, Brex"}
            </p>
          </div>
        </div>
        <a className="flex items-center justify-center px-8 h-12 lg:h-14 text-base font-medium text-content-primary bg-oats-green-100 hover:bg-oats-green-100/70 rounded-full transition-all" href="#">
          {"Read the case study"}
        </a>
      </div>
    </section>
  )
}
