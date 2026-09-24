import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useChatCycle, CHAT_STAGGER, CHAT_DELAY } from '../motion/chat-cycle.js'

const typingVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: CHAT_STAGGER, delayChildren: CHAT_DELAY } },
}
const charVariants = { hidden: { display: 'none' }, visible: { display: 'inline' } }

const iconProps = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', style: { '--icon-stroke-width': '1.6666666666666665' } }
const sp = { stroke: 'currentColor', strokeWidth: 'var(--icon-stroke-width)', strokeLinecap: 'round', strokeLinejoin: 'round' }
const spj = { stroke: 'currentColor', strokeWidth: 'var(--icon-stroke-width)', strokeLinejoin: 'round' }

const PROMPTS = [
  {
    category: 'Team stand-ups',
    swatch: 'bg-oats-green-200',
    text: 'What did I promise to do in my meetings this week?',
    icon: (
      <svg {...iconProps}>
        <circle {...sp} cx="12" cy="7" r="2.5" />
        <circle {...sp} cx="4.5" cy="9" r="2" />
        <circle {...sp} cx="19.5" cy="9" r="2" />
        <path d="M8.5 19.25H15.5C16.4665 19.25 17.25 18.4665 17.25 17.5C17.25 14.6005 14.8995 12.25 12 12.25C9.1005 12.25 6.75 14.6005 6.75 17.5C6.75 18.4665 7.5335 19.25 8.5 19.25Z" {...sp} />
        <path d="M3.75136 18.2498H2.50119C1.39662 18.2498 0.470353 17.3063 0.986732 16.3299C1.67862 15.0215 3.02859 14.0591 4.50136 13.812" {...sp} />
        <path d="M20.25 18.2498H21.5C22.6046 18.2498 23.5308 17.3063 23.0145 16.3298C22.3227 15.0215 20.9728 14.0591 19.5 13.812" {...sp} />
      </svg>
    ),
  },
  {
    category: 'Customer calls',
    swatch: 'bg-[#BDD7F0]',
    text: 'Which feature requests keep coming up in customer calls?',
    icon: (
      <svg {...iconProps}>
        <path d="M9.91699 6.86777L9.42226 5.18567C9.17191 4.3345 8.39074 3.75 7.50352 3.75H7.00236H5.72195C4.62914 3.75 3.72593 4.63017 3.84161 5.71684C4.08189 7.97389 4.79191 10.1738 5.93438 12.143C7.35756 14.596 9.40402 16.6424 11.857 18.0656C13.8365 19.2141 16.0078 19.8922 18.2539 20.1409C19.3518 20.2625 20.25 19.3546 20.25 18.25V16.4965C20.25 15.6093 19.6655 14.8281 18.8143 14.5777L17.1322 14.083C16.4366 13.8784 15.6849 14.0783 15.1827 14.6014C14.5934 15.2152 13.6645 15.3863 12.95 14.9242C11.4005 13.9222 10.0778 12.5995 9.07581 11.05C8.61373 10.3355 8.78479 9.40661 9.39863 8.81732C9.92173 8.31514 10.1216 7.56343 9.91699 6.86777Z" {...spj} />
      </svg>
    ),
  },
  {
    category: '1:1s',
    swatch: 'bg-[#F4CDA5]',
    text: 'What feedback have I gotten in my 1:1s this month?',
    icon: (
      <svg {...iconProps}>
        <path d="M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z" {...spj} />
        <path d="M12.0011 13.25C8.60997 13.25 6.03711 15.2643 4.9836 18.1129C4.5748 19.2182 5.51944 20.25 6.69796 20.25H17.3043C18.4828 20.25 19.4274 19.2182 19.0186 18.1129C17.9651 15.2643 15.3923 13.25 12.0011 13.25Z" {...spj} />
      </svg>
    ),
  },
  {
    category: 'Interviews',
    swatch: 'bg-[#D9C7EE]',
    text: "Which candidates stood out in this week's interviews?",
    icon: (
      <svg {...iconProps}>
        <path d="M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z" {...sp} />
        <path d="M11.8535 13.2513C8.53536 13.3088 6.02177 15.3058 4.9836 18.1129C4.5748 19.2182 5.51944 20.25 6.69796 20.25H12.5011M11.8535 13.2513C11.9025 13.2504 11.9517 13.25 12.0011 13.25C12.3532 13.25 12.6965 13.2717 13.0301 13.3138M11.8535 13.2513C11.2034 13.2626 10.5846 13.3483 10.0012 13.5M13.0301 13.3138C13.3638 13.3559 13.6878 13.4184 14.0015 13.5M13.0301 13.3138C13.7321 13.4024 14.3915 13.5812 15.0011 13.838" {...sp} />
        <path d="M18.25 15.25V18.25M18.25 18.25V21.25M18.25 18.25H15.25M18.25 18.25H21.25" {...sp} />
      </svg>
    ),
  },
]

export default function Chat() {
  const { ref, index, phase, onTyped } = useChatCycle(PROMPTS.length)
  const reduce = useReducedMotion()
  const swapped = useRef(false)
  if (index !== 0) swapped.current = true
  const prompt = PROMPTS[index]
  return (
    <section className="relative w-full overflow-x-clip bg-oats-green-300 py-20 text-ink-primary md:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-12 px-4 md:px-10 lg:grid-cols-2 lg:gap-8">
        <div>
          <p className="mb-5 font-quadrant text-editor tracking-[0.02em]">
            {"Granola Chat"}
          </p>
          <h2 className="font-quadrant text-6xl leading-[0.97] tracking-[-0.02em] md:text-7xl lg:text-[clamp(72px,7.5vw,120px)]">
            {"Perfect"}
            <br />
            {"meeting"}
            <br />
            {"memory"}
          </h2>
        </div>
        <div className="lg:w-160 xl:w-176">
          <div ref={ref} className="grid min-h-[260px] w-full grid-rows-[1fr_auto_auto] gap-8 rounded-[28px] bg-white px-5 pb-4 pt-6 shadow-[0px_8px_12px_-4px_rgba(0,0,0,0.05)] md:min-h-[320px]">
            <p className="min-h-[3lh] px-3 font-melange text-2xl font-normal leading-[1.15] tracking-[-0.01em] text-ink-secondary-strong md:min-h-[2lh] md:text-[39.43px] md:leading-[45.336px]">
              <span className="sr-only">{prompt.text}</span>
              <motion.span
                key={index}
                aria-hidden="true"
                initial="hidden"
                animate={phase === 'hidden' ? 'hidden' : 'visible'}
                variants={typingVariants}
                onAnimationComplete={(def) => def === 'visible' && onTyped()}
              >
                {[...prompt.text].map((ch, i) => (
                  <motion.span
                    key={i}
                    variants={charVariants}
                    style={{ display: 'none', backgroundColor: phase === 'selected' ? '#b8d5ff' : undefined }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </motion.span>
              <span
                aria-hidden="true"
                className="ml-[0.04em] inline-block h-[1.02em] w-[0.07em] min-w-[2.5px] rounded-[1px] bg-current align-[-0.12em]"
                style={{
                  animation: phase === 'resting' ? 'caret-blink 1.1s step-end infinite' : undefined,
                  visibility: phase === 'selected' ? 'hidden' : undefined,
                }}
              />
            </p>
            <motion.div
              key={index}
              className="flex w-fit origin-left items-center gap-2.5 rounded-xl bg-surface-tint-neutral p-2 pr-3"
              initial={reduce || (index === 0 && !swapped.current) ? false : { scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.55, bounce: 0.6 }}
            >
              <span className={`flex size-8 items-center justify-center rounded-lg text-ink-secondary ${prompt.swatch}`}>
                {prompt.icon}
              </span>
              <span className="whitespace-nowrap text-lg tracking-[0.02em] text-ink-secondary-strong">
                {prompt.category}
              </span>
            </motion.div>
            <div aria-hidden="true" className="flex items-center">
              <span className="flex size-11 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip size-5 text-ink-secondary-strong">
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </span>
              <span className="flex size-11 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-horizontal size-5 text-ink-secondary-strong">
                  <line x1="21" x2="14" y1="4" y2="4" />
                  <line x1="10" x2="3" y1="4" y2="4" />
                  <line x1="21" x2="12" y1="12" y2="12" />
                  <line x1="8" x2="3" y1="12" y2="12" />
                  <line x1="21" x2="16" y1="20" y2="20" />
                  <line x1="12" x2="3" y1="20" y2="20" />
                  <line x1="14" x2="14" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="10" y2="14" />
                  <line x1="16" x2="16" y1="18" y2="22" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
