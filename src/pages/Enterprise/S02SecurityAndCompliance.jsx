import FaqAccordion, { ssoAnswerHtml } from '../Pricing/FaqAccordion.jsx'
import { placeholder as ph } from '../../motion/pricing-page-collapsible.js'

// "Questions and answers": Radix accordion (type multiple, 0.2s ease-out height, 300ms chevron).
// Answer prose is neutral placeholder text sized to the live answer lengths; short link labels kept.
const ENTERPRISE_FAQ = [
  { q: "What's included in Enterprise?", triggerId: 'radix-_R_d2av5td2mivb_', contentId: 'radix-_R_4d2av5td2mivb_',
    answer: <p>{ph(167)}</p> },
  { q: 'How does Enterprise pricing work?', triggerId: 'radix-_R_l2av5td2mivb_', contentId: 'radix-_R_4l2av5td2mivb_',
    answer: <p>{ph(210).slice(0, -1)} <a href="/contact/sales?source=enterprise_page">contact our team</a>.</p> },
  { q: 'Do you train on my data?', triggerId: 'radix-_R_t2av5td2mivb_', contentId: 'radix-_R_4t2av5td2mivb_',
    answer: <p>{ph(59)}</p> },
  { q: 'Do you have SOC2 certification?', triggerId: 'radix-_R_152av5td2mivb_', contentId: 'radix-_R_552av5td2mivb_',
    answer: <p>{ph(94).slice(0, -1)} <a href="#">Trust page</a>. {ph(110).slice(0, -1)} <a href="#">Trust</a> and <a href="#">Security</a> pages.</p> },
  { q: 'What authentication methods do you support?', triggerId: 'radix-_R_1d2av5td2mivb_', contentId: 'radix-_R_5d2av5td2mivb_',
    answer: <p>{ph(180)}</p> },
  { q: 'How do I set up SSO?', triggerId: 'radix-_R_1l2av5td2mivb_', contentId: 'radix-_R_5l2av5td2mivb_',
    answer: <p>{ph(13).slice(0, -1)} <a href="mailto:sales@example.com">sales@example.com</a> {ph(26)}</p> },
  { q: 'What SSO providers do you support?', triggerId: 'radix-_R_1t2av5td2mivb_', contentId: 'radix-_R_5t2av5td2mivb_',
    answerHtml: ssoAnswerHtml(ph(47), ph(13).slice(0, -1), 'sales@example.com', ph(85)) },
  { q: 'How do you notify other participants that Granola is being used?', triggerId: 'radix-_R_252av5td2mivb_', contentId: 'radix-_R_652av5td2mivb_',
    answer: <p>{ph(240).slice(0, -1)} <a href="#">feature</a>. {ph(115)}</p> },
]
export default function S02SecurityAndCompliance() {
  return (
    <div className="flex flex-col gap-20 lg:gap-40">
      <section className="w-full bg-oats-neutral-100 py-12 lg:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:px-10 2xl:px-0">
          <p className="text-center font-quadrant text-xl tracking-[0.02em] text-ink-primary">
            {"Trusted by teams in tech, finance, media, and more"}
          </p>
          <div className="grid grid-cols-3 gap-y-2 md:grid-cols-6">
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="PostHog" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/posthog.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/posthog.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "123px", "aspectRatio": "98 / 17"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Intercom" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/intercom.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/intercom.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "131px", "aspectRatio": "105 / 17"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Figma" className="bg-ink-primary max-w-full translate-y-0.5" style={{"maskImage": "url(\"/homepageAssets/logoWall/figma.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/figma.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "89px", "aspectRatio": "71 / 26"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Brex" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/brex.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/brex.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "95px", "aspectRatio": "76 / 20"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Ramp" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/ramp.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/ramp.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "94px", "aspectRatio": "75 / 21"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Replit" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/replit.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/replit.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "113px", "aspectRatio": "90 / 21"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Lovable" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/lovable.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/lovable.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "99px", "aspectRatio": "755 / 129"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Cursor" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/cursor.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/cursor.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "109px", "aspectRatio": "87 / 21"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Bumble" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/bumble.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/bumble.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "115px", "aspectRatio": "92 / 16"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Asana" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/asana.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/asana.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "118px", "aspectRatio": "94 / 19"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Vanta" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/vanta.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/vanta.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "85px", "aspectRatio": "68 / 17"}} />
            </div>
            <div className="flex h-14 items-center justify-center px-3 lg:h-20">
              <span role="img" aria-label="Linear" className="bg-ink-primary max-w-full " style={{"maskImage": "url(\"/homepageAssets/logoWall/linear.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/linear.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain", "width": "101px", "aspectRatio": "81 / 20"}} />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-4 md:px-10 lg:grid-cols-2 2xl:px-0">
        <h2 className="text-balance font-quadrant text-3xl leading-[1.1] tracking-[-0.015em] text-ink-primary sm:text-4xl lg:text-[54px] ">
          {"Security and Compliance for IT & Legal"}
        </h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-quadrant text-xl text-ink-primary">
              {"Set data retention & controls"}
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" className="mt-1 shrink-0" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-check.svg" />
                <span className="text-base leading-snug text-ink-primary">
                  {"Transcript redaction and deletion available"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" className="mt-1 shrink-0" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-check.svg" />
                <span className="text-base leading-snug text-ink-primary">
                  {"Your conversation data is never used to train AI models"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" className="mt-1 shrink-0" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-check.svg" />
                <span className="text-base leading-snug text-ink-primary">
                  {"Choose where your data goes (like MCP, API & integrations)"}
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-quadrant text-xl text-ink-primary">
              {"Notify others when Granola is taking notes"}
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" className="mt-1 shrink-0" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-check.svg" />
                <span className="text-base leading-snug text-ink-primary">
                  {"Automatic notifications for when Granola is being used"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" className="mt-1 shrink-0" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-check.svg" />
                <span className="text-base leading-snug text-ink-primary">
                  {"Admins can turn on notifications for everyone in the workspace"}
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <img alt="" aria-hidden="true" loading="lazy" width="30" height="30" decoding="async" className="size-[30px] shrink-0 object-contain" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-soc2.png" />
              <span className="text-sm text-ink-primary">
                {"SOC 2 Type II"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img alt="" aria-hidden="true" loading="lazy" width="30" height="30" decoding="async" className="size-[30px] shrink-0 object-contain" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-eu-ai-act.svg" />
              <span className="text-sm text-ink-primary">
                {"EU AI Act"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img alt="" aria-hidden="true" loading="lazy" width="30" height="30" decoding="async" className="size-[30px] shrink-0 object-contain" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-gdpr.svg" />
              <span className="text-sm text-ink-primary">
                {"GDPR"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img alt="" aria-hidden="true" loading="lazy" width="30" height="30" decoding="async" className="size-[30px] shrink-0 object-contain" style={{"color": "transparent"}} src="/enterpriseAssets/essentials-hipaa.svg" />
              <span className="text-sm text-ink-primary">
                {"HIPAA"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 md:px-10 2xl:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <h2 className="text-balance font-quadrant text-3xl leading-[1.1] tracking-[-0.015em] text-ink-primary sm:text-4xl lg:text-[54px] ">
            {"We’re all about the details"}
          </h2>
          <div className="flex max-w-[60ch] flex-col gap-4 text-lg text-ink-primary lg:text-xl">
            <p>
              {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar."}
            </p>
          </div>
        </div>
        <hr className="hidden border-t border-hairline lg:block" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-10">
            <img alt="Granola capturing the intent and nuance behind what was said in a meeting, not just the raw transcript" loading="lazy" width="1152" height="730" decoding="async" className="h-auto w-full rounded" style={{"color": "transparent"}} sizes="(min-width: 1024px) 50vw, 100vw" src="/enterpriseAssets/understanding.webp" />
            <div className="flex flex-col gap-3">
              <h3 className="font-quadrant text-2xl tracking-[-0.02em] text-ink-primary">
                {"Understanding, not just transcribing"}
              </h3>
              <p className="text-lg leading-snug text-ink-primary">
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text."}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <img alt="Logos of the meeting platforms Granola supports, including Zoom, Teams, and Google Meet" loading="lazy" width="1152" height="730" decoding="async" className="h-auto w-full rounded" style={{"color": "transparent"}} sizes="(min-width: 1024px) 50vw, 100vw" src="/enterpriseAssets/meeting-apps.webp" />
            <div className="flex flex-col gap-3">
              <h3 className="font-quadrant text-2xl tracking-[-0.02em] text-ink-primary">
                {"Built for wherever the conversation happens"}
              </h3>
              <p className="text-lg leading-snug text-ink-primary">
                {"Whether it’s Zoom, Teams, GMeet, in person, on a call, over Slack Huddle, or even from your watch, Granola can take notes."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:px-10 lg:grid-cols-2 lg:gap-12 2xl:px-0">
        <div className="relative min-h-[420px] overflow-hidden rounded lg:min-h-[615px]">
          <img alt="Sunlit turquoise pool water" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="(min-width: 1024px) 50vw, 100vw" src="/enterpriseAssets/stats-photo-water.webp" />
          <div className="relative flex h-full w-full flex-col justify-center gap-4 p-8 lg:p-[60px]">
            <div className="flex flex-col gap-2 rounded bg-oats-neutral-100 p-6">
              <p className="font-quadrant text-2xl tracking-[-0.02em] text-ink-primary lg:text-[32px] lg:leading-tight">
                {"260+"}
              </p>
              <p className="text-lg text-content-secondary lg:text-[18px]">
                {"Hours saved annually per user"}
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded bg-oats-neutral-100 p-6">
              <p className="font-quadrant text-2xl tracking-[-0.02em] text-ink-primary lg:text-[32px] lg:leading-tight">
                {"69%"}
              </p>
              <p className="text-lg text-content-secondary lg:text-[18px]">
                {"Adoption rate across the entire company within 6 months"}
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded bg-oats-neutral-100 p-6">
              <p className="font-quadrant text-2xl tracking-[-0.02em] text-ink-primary lg:text-[32px] lg:leading-tight">
                {"61%"}
              </p>
              <p className="text-lg text-content-secondary lg:text-[18px]">
                {"Increase in meeting visibility with Granola"}
              </p>
            </div>
          </div>
        </div>
        <div className="order-first flex flex-col justify-center gap-8 lg:order-none lg:pl-4">
          <div className="flex flex-col gap-6">
            <span role="img" aria-label="Vanta" className="bg-ink-primary h-6 w-[98px] [mask-position:left]" style={{"maskImage": "url(\"/homepageAssets/logoWall/vanta.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/vanta.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
            <blockquote className="font-quadrant text-2xl leading-tight text-ink-primary lg:text-[32px]">
              {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so."}
            </blockquote>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <img alt="Kelly Bray" loading="lazy" width="49" height="49" decoding="async" className="size-12 rounded-lg object-cover" style={{"color": "transparent"}} src="/testimonialImages/kelly-bray.jpeg" />
              <div>
                <p className="text-lg font-medium text-ink-primary">
                  {"Kelly Bray"}
                </p>
                <p className="text-lg text-content-secondary">
                  {"SVP, Post Sales"}
                </p>
              </div>
            </div>
            <a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-medium transition-colors lg:h-14 lg:text-[18px] border border-ink-primary text-ink-primary hover:bg-ink-primary/5 self-start !h-12 !px-6 !text-[16px]" href="#">
              {"Read the case study"}
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 md:px-10 2xl:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <h2 className="text-balance font-quadrant text-3xl leading-[1.1] tracking-[-0.015em] text-ink-primary sm:text-4xl lg:text-[54px] ">
            {"Transparency, security and admin controls"}
          </h2>
          <p className="max-w-[60ch] text-lg text-ink-primary lg:text-xl">
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar places. Placeholder copy for this."}
          </p>
        </div>
        <hr className="hidden border-t border-hairline lg:block" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-6">
            <img alt="Video call with a transcribing watermark shown over the speaker's video" loading="lazy" width="1152" height="730" decoding="async" className="h-auto w-full rounded" style={{"color": "transparent"}} sizes="(min-width: 1024px) 50vw, 100vw" src="/enterpriseAssets/transparency-watermark-card.webp" />
            <p className="text-lg leading-snug text-ink-primary">
              {"Show a watermark on your video while transcribing so everyone in the meeting knows Granola is active."}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img alt="Meeting chat message telling participants Granola is transcribing the call" loading="lazy" width="1152" height="730" decoding="async" className="h-auto w-full rounded" style={{"color": "transparent"}} sizes="(min-width: 1024px) 50vw, 100vw" src="/enterpriseAssets/transparency-notify-card.webp" />
            <p className="text-lg leading-snug text-ink-primary">
              {"Automatically notify participants in the meeting chat when Granola starts transcribing."}
            </p>
          </div>
        </div>
        <hr className="border-t border-hairline" />
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"Transparency & admin controls"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Configure participant notifications to match your regional and legal requirements."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"No public model training"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Your conversation data is never used to train shared AI models."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"Flexible data retention"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Set retention windows that align with your compliance obligations."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"SSO / SAML"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Works with your existing identity provider. Zero additional setup for end users."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"SCIM provisioning"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Automate user provisioning and deprovisioning at scale."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"SOC 2 Type II certified"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Independently audited. Security documentation available for procurement."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"Domain management"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Consolidate free accounts and prevent shadow IT at scale."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"Admin dashboard"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Org-wide visibility and management from a single dashboard."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"Encryption"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Data encrypted in transit and at rest."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"HIPAA compliant"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Support for workloads with HIPAA requirements. Contact sales for a BAA."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"EU AI Act"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Aligned with the EU AI Act for responsible, transparent AI use."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-ink-primary">
              {"Audit API"}
            </p>
            <p className="text-lg leading-snug text-content-secondary">
              {"Pull workspace audit events into your security and compliance tools."}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-medium transition-colors lg:h-14 lg:text-[18px] border border-ink-primary text-ink-primary hover:bg-ink-primary/5 self-start !h-12 !px-6 !text-[16px]" href="#">
            {"Learn more about security"}
          </a>
          <a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-medium transition-colors lg:h-14 lg:text-[18px] border border-ink-primary text-ink-primary hover:bg-ink-primary/5 self-start !h-12 !px-6 !text-[16px]" href="#">
            {"Learn more about transparency"}
          </a>
        </div>
      </section>
      <section id="how-it-works" className="mx-auto grid w-full max-w-7xl scroll-mt-24 grid-cols-1 gap-12 px-4 md:px-10 lg:grid-cols-2 2xl:px-0">
        <div>
          <h2 className="text-balance font-quadrant text-3xl leading-[1.1] tracking-[-0.015em] text-ink-primary sm:text-4xl lg:text-[54px] ">
            {"Notes that work before, during, and after a call"}
          </h2>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-quadrant text-2xl font-normal leading-[1.05] tracking-[-0.01em] text-ink-primary">
                {"Be ready for any meeting"}
              </h3>
              <p className="text-[18px] leading-snug text-ink-primary">
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in."}
              </p>
            </div>
            <img alt="Granola Brief for a Northwind Sync meeting, prepped from past conversations" loading="lazy" width="1152" height="730" decoding="async" className="h-auto w-full rounded" style={{"color": "transparent"}} sizes="(min-width: 1024px) 50vw, 100vw" src="/enterpriseAssets/decision-prepared-card.webp" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-quadrant text-2xl font-normal leading-[1.05] tracking-[-0.01em] text-ink-primary">
                {"Ask away"}
              </h3>
              <p className="text-[18px] leading-snug text-ink-primary">
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands."}
              </p>
            </div>
            <img alt="Granola answering “What did Jack just say?” during a live video call" loading="lazy" width="1152" height="730" decoding="async" className="h-auto w-full rounded" style={{"color": "transparent"}} sizes="(min-width: 1024px) 50vw, 100vw" src="/enterpriseAssets/decision-ask-card.webp" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-quadrant text-2xl font-normal leading-[1.05] tracking-[-0.01em] text-ink-primary">
                {"Keep the momentum"}
              </h3>
              <p className="text-[18px] leading-snug text-ink-primary">
                {"Draft a follow-up email, summarise next steps for Slack, or create a brief that's grounded in exactly what was said."}
              </p>
            </div>
            <img alt="Granola drafting a Slack reply summarising a homepage redesign update" loading="lazy" width="1152" height="730" decoding="async" className="h-auto w-full rounded" style={{"color": "transparent"}} sizes="(min-width: 1024px) 50vw, 100vw" src="/enterpriseAssets/decision-momentum-card.webp" />
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-20 lg:py-28">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 md:px-10 2xl:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
            <h2 className="text-balance font-quadrant text-3xl leading-[1.1] tracking-[-0.015em] text-ink-primary sm:text-4xl lg:text-[54px] ">
              {"Good tools spread from person to person"}
            </h2>
            <p className="text-lg text-ink-primary lg:text-xl">
              {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar places.."}
            </p>
          </div>
          <hr className="hidden border-t border-hairline lg:block" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-10 rounded bg-white p-8 lg:justify-between lg:p-10">
              <div className="flex flex-col gap-8">
                <blockquote className="font-quadrant text-2xl leading-snug text-ink-primary lg:text-[32px]">
                  {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks."}
                </blockquote>
                <div className="flex items-center gap-4">
                  <img alt="Pedro Franceschi" loading="lazy" width="49" height="49" decoding="async" className="size-12 rounded-lg object-cover" style={{"color": "transparent"}} src="/testimonialImages/brex-testimonial-avatar.png" />
                  <div>
                    <p className="text-lg font-medium text-ink-primary">
                      {"Pedro Franceschi"}
                    </p>
                    <p className="text-lg text-content-secondary">
                      {"Founder and CEO at Brex"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span role="img" aria-label="Brex" className="bg-ink-primary h-6 w-[91px]" style={{"maskImage": "url(\"/homepageAssets/logoWall/brex.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/brex.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                <a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-medium transition-colors lg:h-14 lg:text-[18px] border border-ink-primary text-ink-primary hover:bg-ink-primary/5 !h-12 !px-6 !text-[16px]" href="#">
                  {"Read the case study"}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex grow flex-col justify-between gap-8 rounded bg-white p-8">
                <h3 className="max-w-[40ch] font-quadrant text-xl leading-snug text-ink-primary lg:text-2xl">
                  {"Zapier uses Granola to transform every conversation into a searchable source of truth"}
                </h3>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span role="img" aria-label="zapier" className="bg-ink-primary h-7 w-26 [mask-position:left]" style={{"maskImage": "url(\"/customerLogos/zapier.svg\")", "WebkitMaskImage": "url(\"/customerLogos/zapier.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                  <a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-medium transition-colors lg:h-14 lg:text-[18px] border border-ink-primary text-ink-primary hover:bg-ink-primary/5 !h-12 !px-6 !text-[16px]" href="#">
                    {"Read the case study"}
                  </a>
                </div>
              </div>
              <div className="flex grow flex-col justify-between gap-8 rounded bg-white p-8">
                <h3 className="max-w-[40ch] font-quadrant text-xl leading-snug text-ink-primary lg:text-2xl">
                  {"Vanta saves 260+ hours annually per user with Granola"}
                </h3>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span role="img" aria-label="vanta" className="bg-ink-primary h-5 w-[81px] [mask-position:left]" style={{"maskImage": "url(\"/homepageAssets/logoWall/vanta.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/vanta.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                  <a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-medium transition-colors lg:h-14 lg:text-[18px] border border-ink-primary text-ink-primary hover:bg-ink-primary/5 !h-12 !px-6 !text-[16px]" href="#">
                    {"Read the case study"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 md:px-10 2xl:px-0">
        <h2 className="text-balance font-quadrant text-3xl leading-[1.1] tracking-[-0.015em] text-ink-primary sm:text-4xl lg:text-[54px] text-center">
          {"Questions and answers"}
        </h2>
        <FaqAccordion items={ENTERPRISE_FAQ} />
      </section>
      <section className="relative w-full overflow-hidden">
        <img alt="" aria-hidden="true" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="100vw" src="/enterpriseAssets/cta-collage.jpg" />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-8 2xl:px-0">
          <div className="mx-auto w-full max-w-2xl rounded-t-[28px] bg-surface px-6 pb-16 pt-7 shadow-[0px_4px_50px_rgba(54,54,53,0.25)] sm:px-10 md:pb-24 lg:px-12">
            <div aria-hidden="true" className="flex items-center gap-2.5">
              <span className="size-3.5 rounded-full border-0.5 border-black/10 bg-[#FF736A]" />
              <span className="size-3.5 rounded-full border-0.5 border-black/10 bg-[#FEBC2E]" />
              <span className="size-3.5 rounded-full border-0.5 border-black/10 bg-[#19C332]" />
            </div>
            <div className="flex flex-col items-start gap-6 pt-10 md:gap-10 md:pt-14">
              <h2 className="text-balance font-quadrant text-4xl leading-[0.98] tracking-[-0.01em] text-ink-primary sm:text-5xl md:text-6xl lg:text-[88px]">
                {"Ready to make every conversation count?"}
              </h2>
              <p className="max-w-[42ch] text-lg text-ink-primary sm:text-xl lg:text-2xl">
                {"Talk to our enterprise team to see how Granola works across your organisation — from a single team to a company-wide deployment."}
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-5">
                <a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-medium transition-colors lg:h-14 lg:text-[18px] bg-ink-primary text-white hover:bg-ink-primary/90" href="/contact/sales?source=enterprise_page">
                  {"Talk to sales"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
