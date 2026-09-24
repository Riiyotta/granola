import { SharePopover, ShareFooter } from './Share.jsx'
import { POST_URL, POST_TITLE } from '../../motion/blog-share.js'

export default function S01GranolaForApple() {
  return (
    <article className="mb-32">
      <div className="flex flex-col items-center w-full mb-12 pt-40 px-6">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[68px] text-center font-quadrant leading-tighter tracking-[-0.015em] text-content-primary title">
            {"Granola for Apple Watch"}
          </h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center mt-6 mb-8 text-lg">
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-1 sm:gap-x-2">
              <div className="flex items-center gap-2">
                <img alt="Jack" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm md:rounded-lg size-6 md:size-8" style={{"color": "transparent"}} src="/team/jack.png" />
                <p className="mt-0 mb-0 sm:ml-1">
                  {"Jack"}
                </p>
              </div>
            </div>
            <p className="text-content-secondary">
              {"July 28"}
            </p>
            <SharePopover url={POST_URL} title={POST_TITLE} />
          </div>
        </div>
      </div>
      <section className="px-6 pt-40 mx-auto w-full max-w-2xl min-h-[80vh] !pt-0">
        <div className="prose-lg">
          <p>
            <img src="/blogImages/watchog.jpg" alt="Granola for Apple Watch" />
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page."}
          </p>
          {"\n"}
          <h2 id="start-with-a-tap">
            <a href="#start-with-a-tap" className="anchor" />
            {"Start with a tap"}
          </h2>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph."}
          </p>
          {"\n"}
          <h2 id="the-best-wearable-is-one-you-already-have">
            <a href="#the-best-wearable-is-one-you-already-have" className="anchor" />
            {"The best wearable is one you already have"}
          </h2>
          {"\n"}
          <p>
            <img src="/blogImages/watch5.jpg" alt="The best wearable is one you already have" />
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length."}
          </p>
          {"\n"}
          <h2 id="your-notes-wherever-you-work">
            <a href="#your-notes-wherever-you-work" className="anchor" />
            {"Your notes, wherever you work"}
          </h2>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the."}
          </p>
          {"\n"}
          <h2 id="a-limited-edition-strap-made-by-hand">
            <a href="#a-limited-edition-strap-made-by-hand" className="anchor" />
            {"A limited edition strap, made by hand"}
          </h2>
          {"\n"}
          <p>
            <img src="/blogImages/watch2.jpg" alt="A limited edition strap, made by hand" />
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar places. Placeholder copy for this block.."}
          </p>
          {"\n"}
          <h2 id="available-today">
            <a href="#available-today" className="anchor" />
            {"Available today"}
          </h2>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with."}
          </p>
          {"\n"}
          <p>
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands."}
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex gap-3 items-center">
            <img alt="Jack" loading="lazy" width="24" height="24" decoding="async" className="rounded-lg size-10" style={{"color": "transparent"}} src="/team/jack.png" />
            <p className="mt-0 mb-0 font-medium">
              {"Jack, "}
              <span className="font-normal text-content-secondary">
                {"Marketing"}
              </span>
            </p>
          </div>
        </div>
        <ShareFooter url={POST_URL} title={POST_TITLE} />
      </section>
    </article>
  )
}
