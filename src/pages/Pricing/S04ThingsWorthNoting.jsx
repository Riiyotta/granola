import FaqAccordion, { ssoAnswerHtml } from './FaqAccordion.jsx'
import { placeholder as ph } from '../../motion/pricing-page-collapsible.js'

// Answers use neutral placeholder prose sized to the live answer lengths (characters per text run),
// so open heights match live; links keep their short live labels.
const ITEMS = [
  { q: "What's the difference between Enterprise and Business?", triggerId: 'radix-_R_1kav5td2mivb_', contentId: 'radix-_R_hkav5td2mivb_',
    answer: <p>{ph(118)} </p> },
  { q: 'What admin controls will I have?', triggerId: 'radix-_R_2kav5td2mivb_', contentId: 'radix-_R_ikav5td2mivb_',
    answer: <p>{ph(276)}</p> },
  { q: 'What are your integration capabilities?', triggerId: 'radix-_R_3kav5td2mivb_', contentId: 'radix-_R_jkav5td2mivb_',
    answer: <p>{ph(141).slice(0, -1)} <a href="#">here</a>.</p> },
  { q: 'Do you train any models on my data?', triggerId: 'radix-_R_4kav5td2mivb_', contentId: 'radix-_R_kkav5td2mivb_',
    answer: <p>{ph(310)}</p> },
  { q: 'Is Granola SOC 2 / HIPAA compliant?', triggerId: 'radix-_R_5kav5td2mivb_', contentId: 'radix-_R_lkav5td2mivb_',
    answer: <p>{ph(87).slice(0, -1)} <a href="#">trust centre</a>. {ph(89).slice(0, -1)} <a href="mailto:sales@example.com">sales@example.com</a> {ph(11)}</p> },
  { q: 'Does Granola have SSO?', triggerId: 'radix-_R_6kav5td2mivb_', contentId: 'radix-_R_mkav5td2mivb_',
    answer: <><p>{ph(232)}</p><p>{ph(13).slice(0, -1)} <a href="mailto:sales@example.com">sales@example.com</a> {ph(25)}</p></> },
  { q: 'What SSO providers do you support?', triggerId: 'radix-_R_7kav5td2mivb_', contentId: 'radix-_R_nkav5td2mivb_',
    answerHtml: ssoAnswerHtml(ph(47), ph(13).slice(0, -1), 'sales@example.com', ph(85)) },
  { q: 'How do you notify other participants that Granola is being used?', triggerId: 'radix-_R_8kav5td2mivb_', contentId: 'radix-_R_okav5td2mivb_',
    answer: <p>{ph(240).slice(0, -1)} <a href="#">feature</a>. {ph(115)}</p> },
]

export default function S04ThingsWorthNoting() {
  return (
    <section id="faq" className="flex overflow-visible relative flex-col gap-8 lg:gap-16 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl">
      <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
          {"Things worth noting"}
        </h2>
      </div>
      <FaqAccordion items={ITEMS} />
    </section>
  )
}
