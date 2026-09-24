import TallyContactForm from './TallyContactForm.jsx'

export default function S01TalkToUs() {
  return (
    <section id="sales-contact" className="flex overflow-visible relative flex-col gap-8 lg:gap-16 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl mt-16">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col gap-2 items-center mb-8 lg:gap-4">
          <h1 className="text-4xl lg:text-5xl font-quadrant text-center">
            {"Talk to us"}
          </h1>
          <p className="text-xl font-light leading-snug text-center text-content-secondary text-balance">
            {"Interested in a Granola Enterprise or Business plan? Got questions about how it works? Let us know how we can help"}
          </p>
        </div>
        <TallyContactForm />
      </div>
    </section>
  )
}
