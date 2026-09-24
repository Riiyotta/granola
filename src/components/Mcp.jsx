import { useMcpStrip } from '../motion/mcp-strip.js'

const CONNECTORS = [
  ['Bolt', '/assets/bolt.svg'],
  ['Figma', '/assets/figma%281%29.svg'],
  ['Manus', '/assets/manus.svg'],
  ['Replit', '/assets/replit%281%29.svg'],
  ['OpenAI', '/assets/openai.svg'],
  ['Claude', '/assets/claude.svg'],
  ['Cursor', '/assets/cursor%281%29.svg'],
  ['Lovable', '/assets/lovable%281%29.svg'],
  ['Tasklet', '/assets/tasklet.svg'],
  ['v0', '/assets/v0.svg'],
  ['Duckbill', '/assets/duckbill.svg'],
]
const COPIES = 5

export default function Mcp() {
  const stripRef = useMcpStrip(COPIES)
  return (
    <section className="w-full bg-surface py-20 text-ink-primary md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10">
        <p className="mb-5 font-quadrant text-editor tracking-[0.02em]">
          {"Granola MCP Connector"}
        </p>
        <h2 className="max-w-[17ch] font-quadrant text-6xl leading-[0.97] tracking-[-0.02em] md:text-7xl lg:text-[clamp(72px,7.5vw,120px)]">
          {"Use your meeting notes anywhere"}
        </h2>
        <div className="mt-8 md:mt-10">
          <a href="#" role="button" tabIndex={0} className="inline-flex items-center justify-center rounded-full font-book ring-focus-ring outline-none disabled:opacity-100 no-drag select-none text-ink-primary-inverse bg-fill-primary hover:bg-fill-primary-hover data-popup-open:bg-fill-primary-hover disabled:bg-fill-disabled disabled:text-ink-secondary py-[9px] gap-1 text-base h-12 w-full cursor-pointer px-6 text-[16px] sm:w-auto lg:h-14">
            {"Download for free"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="size-4">
              <path d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="mt-20 md:mt-32">
          <hr className="border-t border-[#d9d9d9]" />
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_28rem]">
            <h3 className="font-quadrant text-2xl leading-[1.05] tracking-[-0.01em] md:text-[32px] max-w-[30ch]">
              {"No more copy-pasting meeting transcripts into AI tools."}
            </h3>
            <p className="font-melange text-lg leading-[1.35] md:text-[22px]">
              {"Connect Granola in a few clicks and your AI apps become aware of your meeting notes. So you can power what you’re working on with what you talked about."}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-clip mt-20 md:mt-32">
        <div className="-mx-[15vw] w-[130vw]">
          <div ref={stripRef} blossom-carousel="true" className="hide-scrollbar flex w-full items-center overflow-x-auto" style={{"maxInlineSize": "none", "--snap-type": "none", "scrollSnapType": "none"}} has-snap="true" has-repeat="true" has-overflow="true">
            {Array.from({ length: COPIES }).flatMap((_, copy) =>
              CONNECTORS.map(([name, src]) => (
                <div key={`${copy}-${name}`} className="shrink-0 px-3 md:px-[22px]">
                  <div data-mcp-tile="" className="flex size-28 items-center justify-center border border-black/10 bg-white will-change-transform md:size-[154px]">
                    <img alt={copy === 0 ? `${name} logo` : ""} loading="lazy" width="85" height="85" decoding="async" className="size-[55%] object-contain" style={{"color": "transparent"}} src={src} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
