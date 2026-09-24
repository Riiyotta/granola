# granola-clone — a pixel-fidelity clone of a real meeting-notes SaaS product, built React + Vite + Tailwind v3

Source: granola-clone — a pixel-fidelity clone of a real meeting-notes SaaS product, built React + Vite + Tailwind v3 · Homepage measured live via Playwright (see CLONE_SPEC.md); other 7 routes built from src/ and a live-pages/ HTML capture
Status: **measured-from-mirror** · production approved: **false**
8 routes · 8 templates · 27 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Home, Chat, Enterprise) account for 3 of 8 routes (38%). The remaining 5 routes span 5 templates.

| template | routes | share |
|---|---:|---:|
| Home | 1 | 13% |
| Chat | 1 | 13% |
| Enterprise | 1 | 13% |
| Pricing | 1 | 13% |
| Blog index | 1 | 13% |
| Blog article | 1 | 13% |
| Careers | 1 | 13% |
| Contact sales | 1 | 13% |

## Page chrome

**8 routes carry chrome = `full`** — Home, Chat, Enterprise, Pricing, Blog index, Blog article, Careers, Contact sales.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `shell.navbar` | SHELL | 8 | 8 | `src/components/Navbar.jsx` | Present identically on all 8 routes. |
| `shell.footer` | SHELL | 8 | 8 | `src/components/Footer.jsx, src/components/FooterReveal.jsx` | Present identically on all 8 routes. |
| `conversion.footer-cta` | CONVERSION | 6 | 6 | `src/components/footer-cta/index.jsx` | Present on 6 routes: every route except Home (uses conversion.pricing-cta instead) and Enterprise (routes to sales, not self-serve), per the cta:true/false flag in src/App.jsx's PAGES map. |
| `hero.marketing` | HERO | 1 | 1 | `src/components/Hero.jsx` | Home only (1 route). |
| `social-proof.logo-wall` | PROOF | 1 | 1 | `src/components/Doers.jsx` | Home only (1 route). |
| `content.statement` | CONTENT | 1 | 1 | `src/components/Hero.jsx` | Home only (1 route), rendered inline within Hero.jsx's sibling flow. |
| `explainer.how-it-works` | EXPLAINER | 1 | 1 | `src/components/HowItWorksDesktop.jsx, src/components/HowItWorksMobile.jsx, src/components/HowItWorksIntro.jsx` | Home only (1 route). |
| `product.chat-demo` | EXPLAINER | 1 | 1 | `src/components/Chat.jsx` | Home only (1 route). |
| `social-proof.testimonials` | PROOF | 1 | 1 | `src/components/Testimonials.jsx` | Home only (1 route). |
| `feature-grid.marketing` | EXPLAINER | 1 | 1 | `src/components/Features.jsx` | Home only (1 route). |
| `integration.connector-strip` | EXPLAINER | 1 | 1 | `src/components/Mcp.jsx` | Home only (1 route). |
| `conversion.pricing-cta` | CONVERSION | 1 | 1 | `src/components/Pricing.jsx` | Home only (1 route) — the route-specific substitute for conversion.footer-cta. |
| `hero.chat-page` | HERO | 1 | 1 | `src/pages/Chat/S01AiChatThat.jsx` | Chat only (1 route). |
| `feature-grid.chat-scenarios` | EXPLAINER | 1 | 1 | `src/pages/Chat/S02AskAway.jsx` | Chat only (1 route). |
| `hero.enterprise` | HERO | 1 | 1 | `src/pages/Enterprise/S01TurnMeetingNotes.jsx` | Enterprise only (1 route). |
| `trust.security-compliance` | EXPLAINER | 1 | 1 | `src/pages/Enterprise/S02SecurityAndCompliance.jsx (imports src/pages/Pricing/FaqAccordion.jsx)` | Enterprise only (1 route). |
| `pricing.plan-tiers` | PRICING | 1 | 1 | `src/pages/Pricing/S01GranolaHowYou.jsx, PlanCta.jsx` | Pricing only (1 route). |
| `social-proof.single-quote` | PROOF | 1 | 1 | `src/pages/Pricing/S02Block.jsx` | Pricing only (1 route). |
| `pricing.compare-table` | PRICING | 1 | 1 | `src/pages/Pricing/S03ComparePlans.jsx` | Pricing only (1 route). |
| `faq.things-worth-noting` | PRICING | 1 | 1 | `src/pages/Pricing/S04ThingsWorthNoting.jsx, FaqAccordion.jsx` | Pricing only (1 route). |
| `content.resource-links` | CONTENT | 1 | 1 | `src/pages/Pricing/S05Resources.jsx` | Pricing only (1 route). |
| `social-proof.tweet-wall` | PROOF | 1 | 1 | `src/pages/Pricing/S06WhatPeopleAre.jsx, tweets-data.js` | Pricing only (1 route). |
| `social-proof.logo-marquee` | PROOF | 1 | 1 | `src/pages/Pricing/S07HelpingTheWorld.jsx` | Pricing only (1 route). |
| `content.blog-list` | CONTENT | 1 | 1 | `src/pages/Blog/S01Blog.jsx` | Blog only (1 route). |
| `content.article-body` | CONTENT | 1 | 1 | `src/pages/BlogAppleWatch/S01GranolaForApple.jsx, Share.jsx` | BlogAppleWatch only (1 route). |
| `careers.jobs-page` | CONTENT | 1 | 1 | `src/pages/Jobs/S01BuildToolsThat.jsx, HeroCollage.jsx, LifeGallery.jsx, TeamSection.jsx` | Jobs only (1 route). |
| `form.contact-sales` | CONTENT | 1 | 1 | `src/pages/ContactSales/S01TalkToUs.jsx, TallyContactForm.jsx` | Contact Sales only (1 route). |

**3 shared sections** appear in more than one template and belong in a component library.

**24 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Home — `template.home`

1 route · `/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×8 |
| 2 | HERO | `hero.marketing` | page-local |
| 3 | PROOF | `social-proof.logo-wall` | page-local |
| 4 | CONTENT | `content.statement` | page-local |
| 5 | EXPLAINER | `explainer.how-it-works` | page-local |
| 6 | EXPLAINER | `product.chat-demo` | page-local |
| 7 | PROOF | `social-proof.testimonials` | page-local |
| 8 | EXPLAINER | `feature-grid.marketing` | page-local |
| 9 | EXPLAINER | `integration.connector-strip` | page-local |
| 10 | CONVERSION | `conversion.pricing-cta` | page-local |
| 11 | SHELL | `shell.footer` | shared ×8 |

### Chat — `template.chat`

1 route · `/chat` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×8 |
| 2 | HERO | `hero.chat-page` | page-local |
| 3 | EXPLAINER | `feature-grid.chat-scenarios` | page-local |
| 4 | CONVERSION | `conversion.footer-cta` | shared ×6 |
| 5 | SHELL | `shell.footer` | shared ×8 |

### Enterprise — `template.enterprise`

1 route · `/enterprise` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×8 |
| 2 | HERO | `hero.enterprise` | page-local |
| 3 | EXPLAINER | `trust.security-compliance` | page-local |
| 4 | SHELL | `shell.footer` | shared ×8 |

### Pricing — `template.pricing`

1 route · `/pricing` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×8 |
| 2 | PRICING | `pricing.plan-tiers` | page-local |
| 3 | PROOF | `social-proof.single-quote` | page-local |
| 4 | PRICING | `pricing.compare-table` | page-local |
| 5 | PRICING | `faq.things-worth-noting` | page-local |
| 6 | CONTENT | `content.resource-links` | page-local |
| 7 | PROOF | `social-proof.tweet-wall` | page-local |
| 8 | PROOF | `social-proof.logo-marquee` | page-local |
| 9 | CONVERSION | `conversion.footer-cta` | shared ×6 |
| 10 | SHELL | `shell.footer` | shared ×8 |

### Blog index — `template.blog-index`

1 route · `/blog` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×8 |
| 2 | CONTENT | `content.blog-list` | page-local |
| 3 | CONVERSION | `conversion.footer-cta` | shared ×6 |
| 4 | SHELL | `shell.footer` | shared ×8 |

### Blog article — `template.article`

1 route · `/blog/granola-for-apple-watch` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×8 |
| 2 | CONTENT | `content.article-body` | page-local |
| 3 | CONVERSION | `conversion.footer-cta` | shared ×6 |
| 4 | SHELL | `shell.footer` | shared ×8 |

### Careers — `template.careers`

1 route · `/jobs` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×8 |
| 2 | CONTENT | `careers.jobs-page` | page-local |
| 3 | CONVERSION | `conversion.footer-cta` | shared ×6 |
| 4 | SHELL | `shell.footer` | shared ×8 |

### Contact sales — `template.contact-form`

1 route · `/contact/sales` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×8 |
| 2 | CONTENT | `form.contact-sales` | page-local |
| 3 | CONVERSION | `conversion.footer-cta` | shared ×6 |
| 4 | SHELL | `shell.footer` | shared ×8 |

## Section reference

### SHELL

_Chrome present on every route: fixed navigation and the site footer (plus its overscroll reveal panel)._

**`shell.navbar`** — Fixed top navigation: logo, Features dropdown, Enterprise/Pricing/Blog/Careers links, Talk to sales, Download button. Background/shadow transitions on scroll.

· Present identically on all 8 routes. · appears on 8 routes · implemented by `src/components/Navbar.jsx`

**`shell.footer`** — Site-wide link directory (Features/Product/Company/Resources columns), social icons, copyright line with a hover-swap 'Made with love in Shoreditch' easter egg, and the overscroll footer-reveal image panel.

· Present identically on all 8 routes. · appears on 8 routes · implemented by `src/components/Footer.jsx, src/components/FooterReveal.jsx`

### HERO

_The page-opening block for a given route: headline, primary CTA, and the route's signature visual/demo._

**`hero.marketing`** — The homepage hero: 'New' badge linking to the Apple Watch post, H1 'The AI notepad for back-to-back meetings', subcopy, accent download CTA, platform availability line, and a sticky app-window demo with GSAP-looped typing/enhance animation plus scroll-driven floating images and video-call thumbs.

· Home only (1 route). · appears on 1 routes · implemented by `src/components/Hero.jsx`

**`hero.chat-page`** — Chat page hero: headline/subheadline, a self-typing prompt demo in a 3D-tilted floating card, and animated wave-bar tiles.

· Chat only (1 route). · appears on 1 routes · implemented by `src/pages/Chat/S01AiChatThat.jsx`

**`hero.enterprise`** — Enterprise hero: kicker, headline, body, 'Talk to sales' CTA, and a hero collage image — routes to sales rather than self-serve download.

· Enterprise only (1 route). · appears on 1 routes · implemented by `src/pages/Enterprise/S01TurnMeetingNotes.jsx`

### PROOF

_Social proof: customer logos, testimonials, quotes, tweet walls._

**`social-proof.logo-wall`** — 'For the doers' headline sliding under a dark block containing a 12-logo grid of real customer companies (PostHog, Intercom, Figma, Brex, Ramp, Replit, Lovable, Cursor, Bumble, Asana, Vanta, Linear).

· Home only (1 route). · appears on 1 routes · implemented by `src/components/Doers.jsx`

**`social-proof.testimonials`** — Horizontally drag-scrollable card wall of 5 named, high-profile customer quotes (Linear/Vercel/a16z/Menlo Ventures CEOs and partners) with hover-tinted portrait tiles.

· Home only (1 route). · appears on 1 routes · implemented by `src/components/Testimonials.jsx`

**`social-proof.single-quote`** — A single large-format customer endorsement (Pedro Franceschi, Brex) with a case-study link, between the plan tiers and the comparison table.

· Pricing only (1 route). · appears on 1 routes · implemented by `src/pages/Pricing/S02Block.jsx`

**`social-proof.tweet-wall`** — Masonry wall of 6 embedded tweet-style posts, broader/higher-volume social proof than the curated testimonials card wall.

· Pricing only (1 route). · appears on 1 routes · implemented by `src/pages/Pricing/S06WhatPeopleAre.jsx, tweets-data.js`

**`social-proof.logo-marquee`** — Continuously CSS-marquee-scrolling customer logo strip, distinct from the static logo-wall grid on Home.

· Pricing only (1 route). · appears on 1 routes · implemented by `src/pages/Pricing/S07HelpingTheWorld.jsx`

### EXPLAINER

_Product explanation and how-it-works walkthroughs._

**`explainer.how-it-works`** — Three-stage scroll-synced walkthrough (before/during/after the meeting) with sticky tabs and per-step app-window/brief-card/action-card mockups; separate desktop (sticky tabs) and mobile (stacked) implementations.

· Home only (1 route). · appears on 1 routes · implemented by `src/components/HowItWorksDesktop.jsx, src/components/HowItWorksMobile.jsx, src/components/HowItWorksIntro.jsx`

**`product.chat-demo`** — 'Granola Chat' section with a self-typing, prompt-cycling demo card (4 category/prompt pairs) proving contextual memory.

· Home only (1 route). · appears on 1 routes · implemented by `src/components/Chat.jsx`

**`feature-grid.marketing`** — 5-item feature list (humans not bots, works with all meeting apps, private by default, made for in-person, syncs with calendar), each with a header/body pair and supporting image tile(s).

· Home only (1 route). · appears on 1 routes · implemented by `src/components/Features.jsx`

**`integration.connector-strip`** — MCP connector positioning: kicker, headline, body copy, and an auto-scrolling strip of 11 AI-tool integration logos with cosine-falloff scaling.

· Home only (1 route). · appears on 1 routes · implemented by `src/components/Mcp.jsx`

**`feature-grid.chat-scenarios`** — 3 concrete chat-usage scenario cards (during a meeting, in a folder, across meetings) making the 'ask anything' promise tangible.

· Chat only (1 route). · appears on 1 routes · implemented by `src/pages/Chat/S02AskAway.jsx`

**`trust.security-compliance`** — Trust strip plus an 8-item FAQ accordion addressing SOC2/SSO/data-training objections, reusing the Pricing page's FaqAccordion component directly.

· Enterprise only (1 route). · appears on 1 routes · implemented by `src/pages/Enterprise/S02SecurityAndCompliance.jsx (imports src/pages/Pricing/FaqAccordion.jsx)`

### CONVERSION

_Dedicated download/signup/sales CTA blocks, distinct from the CTA embedded in a hero._

**`conversion.footer-cta`** — A 3-block promo banner (bg-oats-green-300) driving a final download/signup conversion, placed just above the footer.

· Present on 6 routes: every route except Home (uses conversion.pricing-cta instead) and Enterprise (routes to sales, not self-serve), per the cta:true/false flag in src/App.jsx's PAGES map. · appears on 6 routes · implemented by `src/components/footer-cta/index.jsx`

**`conversion.pricing-cta`** — Final homepage conversion card over a background image, with dual CTAs (download vs. view pricing).

· Home only (1 route) — the route-specific substitute for conversion.footer-cta. · appears on 1 routes · implemented by `src/components/Pricing.jsx`

### PRICING

_Plan tiers, plan comparison, and pricing-page-specific FAQ/resources._

**`pricing.plan-tiers`** — Headline/subheadline and the plan-tier grid (Basic plus paid tiers) with per-plan CTAs — the pricing page's primary conversion surface.

· Pricing only (1 route). · appears on 1 routes · implemented by `src/pages/Pricing/S01GranolaHowYou.jsx, PlanCta.jsx`

**`pricing.compare-table`** — Sticky-header feature-comparison table across all plan tiers.

· Pricing only (1 route). · appears on 1 routes · implemented by `src/pages/Pricing/S03ComparePlans.jsx`

**`faq.things-worth-noting`** — 8-item FAQ accordion on pricing/data/compliance objections, sharing the FaqAccordion component with trust.security-compliance.

· Pricing only (1 route). · appears on 1 routes · implemented by `src/pages/Pricing/S04ThingsWorthNoting.jsx, FaqAccordion.jsx`

### CONTENT

_The substantive unique body content of a route: blog list, article prose, careers listings, a contact form._

**`content.statement`** — A single-line brand statement bridging the logo wall and the how-it-works section.

· Home only (1 route), rendered inline within Hero.jsx's sibling flow. · appears on 1 routes · implemented by `src/components/Hero.jsx`

**`content.resource-links`** — 3-card grid surfacing secondary trust/education content (security, transparency, help docs).

· Pricing only (1 route). · appears on 1 routes · implemented by `src/pages/Pricing/S05Resources.jsx`

**`content.blog-list`** — A filterable index of blog/press posts (All/Blog/Press chip filter) — the sole content of the Blog route.

· Blog only (1 route). · appears on 1 routes · implemented by `src/pages/Blog/S01Blog.jsx`

**`content.article-body`** — Full long-form prose body of a single blog article, with author byline, date, and share popover — the sole content of the BlogAppleWatch route.

· BlogAppleWatch only (1 route). · appears on 1 routes · implemented by `src/pages/BlogAppleWatch/S01GranolaForApple.jsx, Share.jsx`

**`careers.jobs-page`** — The full careers page as one continuous multi-zone section: hero statement, open-role listings grouped by category, and team stats/photos.

· Jobs only (1 route). · appears on 1 routes · implemented by `src/pages/Jobs/S01BuildToolsThat.jsx, HeroCollage.jsx, LifeGallery.jsx, TeamSection.jsx`

**`form.contact-sales`** — Headline plus an embedded real third-party Tally lead-capture form — the sole content of the Contact Sales route, and the one deliberate exception to the router's no-outbound-links constraint.

· Contact Sales only (1 route). · appears on 1 routes · implemented by `src/pages/ContactSales/S01TalkToUs.jsx, TallyContactForm.jsx`
