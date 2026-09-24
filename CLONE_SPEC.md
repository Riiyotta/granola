Source: the original live marketing site (URL withheld)

# Granola homepage: clone spec

Measured live on 2026-09-23 with headless Chromium (Playwright 1.62) at **1440×900**, **1280×900** and **390×844** (mobile, iPhone UA, touch). All numbers come from `getComputedStyle` / `getBoundingClientRect`. Motion timings come from the site's own CSS (scroll-driven `animation-timeline`) and its JS bundles (GSAP 3.14.2 timelines, framer-motion). Nothing here is eyeballed. Where a value is approximate, the spec says so.

The live site is Next.js with **Tailwind v4**. Class names quoted below are the site's own, for reference. Build must translate them to Tailwind v3 config/arbitrary values; the tokens you need are in §0.

- `y` values are document offsets from the top of the page, with the cookie banner removed. `x` is the viewport x.
- Page height is **14310 px @1440**, **14057 @1280** and **12157 @390**.
- Container is `max-w-7xl` = **1280px**, `mx-auto`, with side padding **16px (<768)**, **40px (≥768)** and **0 at ≥1536 (2xl)**. At 1440 the content box is x=120 to 1320 (1200 wide). At 1280 it is x=40 to 1240.

---

## 0. Global tokens

### 0.1 Fonts (files already in `public/fonts/`)
- `melange` (300/400/500/600/400-italic). Stack: `melange, "melange Fallback"`. The fallback is `local("Arial")` with `ascent-override:97.42%; descent-override:32.31%; line-gap-override:0%; size-adjust:101.21%`. It is the body font (`<body>` computed font-family).
- `quadrant` (400). Stack: `quadrant, "quadrant Fallback"`. The fallback is `local("Arial")` with `ascent-override:90.20%; descent-override:29.91%; line-gap-override:18.30%; size-adjust:109.32%`. It is used for all display headings.
- `font-display: swap` for both. `html` has `-webkit-font-smoothing: antialiased` (`!antialiased`).
- Weight **430** (`font-book`) is used on buttons and meta chips. melange is loaded only at 300/400/500/600, so the browser synthesises 430 from 400. Set `font-weight:430` anyway to match.

### 0.2 Type scale (site's Tailwind v4 theme; note `text-base` is 14px)
| token | size / line-height | letter-spacing |
|---|---|---|
| text-2xs | 11px | – |
| text-xs | 12px / 16px | .02em |
| text-sm | 13px / 16px | .01em |
| text-base | 14px / 18px | .01em |
| text-lg | 16px / 20px | – |
| text-editor | 16px (lh 24 in use) | – |
| text-xl | 20px / 28px | – |
| text-2xl | 24px / 32px | – |
| text-3xl | 30px / 36px | – |
| text-4xl | 36px / 40px | – |
| text-5xl | 48px / 1 | – |
| text-6xl | 60px / 1 | – |
| text-7xl | 72px / 1 | – |

Breakpoints: `xs 24rem(384)`, `sm 40rem(640)`, `md 48rem(768)`, `lg 64rem(1024)`, `xl 80rem(1280)`, `2xl 96rem(1536)`, `3xl 120rem(1920)`. Some raw CSS also uses `min-width:1440px`.

### 0.3 Color tokens (light theme, used on this page)
| role | value |
|---|---|
| page / body bg (`bg-background`) | `#ffffff` |
| ink-primary / content-primary / fill-primary | `#292929` |
| fill-primary-hover | `#4e4d4b` |
| ink-secondary / content-secondary | `#72726e` |
| ink-secondary-strong | `#4e4d4b` |
| content-tertiary | `#9e9e99` |
| ink-tertiary | `#acada8` |
| ink-primary-inverse | `#fcfcf8` |
| body copy color on some `<p>` (inherited, measured) | `rgb(14,15,12)` = `#0e0f0c` |
| surface (cards, section bg) | `#f7f7f2` |
| surface-elevated | `#ffffff` |
| surface-tint-neutral / fill-soft / fill-highlight | `#625a220f` = rgba(98,90,34,.06) |
| fill-soft-hover / fill-highlight-strong | `#56512e1f` = rgba(86,81,46,.12) |
| border hairline | `#47432a33` = rgba(71,67,42,.2) |
| stroke (nav border, dropdown border) | `#d5d5d2` |
| hr in features/MCP | `#d9d9d9` |
| accent fill (hero CTA) | `#5b6f00`; hover `#4c5616` |
| ink-accent (caret, spinner, send btn) | `#788c15` |
| oats-green-200 | `#d1e043` ("New" pill, chip swatch) |
| oats-green-300 (Chat section bg, footer reveal bg, image tile bg) | `#b2c248` |
| oats-neutral-100 / 200 / 300 / 900 | `#f7f7f2` / `#eaebe5` / `#d5d5d2` / `#212121` |
| oats-blue-200 (chat text-selection highlight) | `#b8d5ff` |
| oats-pink-300 / yellow-300 / blue-300 | `#ff91e0` / `#ed9212` / `#4691e2` |
| dashed guide / ruled lines | `#DEDEDE` |
| traffic lights | `#ff736a`, `#febc2e`, `#19c332` (1px border rgba(0,0,0,.1)) |
| gradient-text sweep stops | `#febe29 40%, #ff91e0 45%, #cebef8 50%, #d2e4f8 55%, #d1e043 60%` |

### 0.4 Radii and shadows actually used
- Radii: `9999px` (all buttons, pills, nav pill), `28px` (chat card, pricing card top corners, brief card), `24px` (how-it-works app window), `16px` (how-it-works tiles, rounded-2xl), `12px` (hero app window `rounded-xl`, chat chip), `10px` ("New" pill), `8px` (dropdown panel, dropdown items, video thumbs frame), `6px` (nav dropdown icons), `4px` (feature images, floating images, video thumb tiles), `18%` (meeting-app tiles).
- Shadows:
  - Nav pill when scrolled (≥768px): `0 1px 2px rgba(0,0,0,.04), 0 6px 20px rgba(0,0,0,.06)`
  - App window (`shadow-xl`): `0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1)`
  - Floating pills (`shadow-md`): `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)`
  - Ask bar (`shadow-sm`): `0 1px 3px rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)`
  - Chat card: `0 8px 12px -4px rgba(0,0,0,.05)`
  - Pricing card: `0 4px 50px rgba(54,54,53,.25)`
  - Brief / action cards: `0 0 0 6px rgba(71,67,42,.05)` (brief) or `0 0 0 8px rgba(71,67,42,.05)` (actions)
  - Dropdown hero image: `0 0 36px rgba(0,0,0,.03)`

### 0.5 Easing tokens
- `ease-in-out`: `cubic-bezier(.4,0,.2,1)`
- `ease-out`: `cubic-bezier(0,0,.2,1)`
- `ease-in`: `cubic-bezier(.4,0,1,1)`
- `ease-out-expo`: `cubic-bezier(.16,1,.3,1)`
- `ease-in-out-expo`: `cubic-bezier(.87,0,.13,1)`
- Tailwind default `transition` is 150ms `cubic-bezier(.4,0,.2,1)`.

### 0.6 Shared components
- **Primary dark button** ("Download for free", "Download for mobile"):
  - Size: h **56px** (lg) / **48px** (<1024). `padding: 9px 24px` (px-6). Width w-full on mobile (<640) inside the pricing card and hero.
  - Shape: rounded-full, `display:inline-flex`, gap 4px (8px when an icon precedes the text).
  - Colors: bg `#292929`, text `#fcfcf8`. **Hover bg `#4e4d4b`, instant (no transition)**.
  - Text: melange 16px/18px, weight 430, ls .16px.
  - Trailing arrow icon 16×16 (`public/assets/cta-arrow.svg`).
- **Accent button** (hero only): same as the primary dark button, but bg `#5b6f00` and hover `#4c5616`.
- **Outline button** ("View pricing"): same box as the primary dark button. Transparent bg, 1px border `#292929`, text `#292929`. Hover bg rgba(98,90,34,.06).
- **Section kicker** ("Features", "Granola Chat", "Granola MCP Connector"): quadrant 16px/24px, ls .32px (0.02em), `#292929`, margin-bottom 20px.
- **Big section H2** (Chat/Features/MCP):
  - Font: quadrant, `font-size: clamp(72px, 7.5vw, 120px)` at ≥1024. That gives **108px @1440** and **96px @1280**. It is **72px** at 768–1023 and **60px** at <768.
  - `line-height: .97` (104.76px @1440). `letter-spacing: -0.02em` (-2.16px @1440). Color `#292929`.
- **Feature row header**:
  - Top rule: hr, 1px `#d9d9d9`.
  - Then `margin-top:16px`, grid `1fr 28rem` (lg), gap 12px. At 1440 the columns are 820px / 448px.
  - h3: quadrant 32px/1.05 (33.6px), ls -0.01em. It is 24px/25.2px at <768.
  - p: melange 22px/1.35 (29.7px), `#292929`. It is 16px/21.6px at <768.

---

## 1. Section map (top to bottom)

| # | Section | 1440: y / h | 1280: y / h | 390: y / h | Background |
|---|---|---|---|---|---|
| 0 | Nav (fixed) | top 8 / 56 | top 8 / 56 | top 0 / 56 | transparent → white when scrolled |
| 1a | Hero screen 1 | 0 / 900 | 0 / 900 | 0 / 647 | `#fff` |
| 1b | Hero screen 2 "Effortless notes" (lg only; mobile has its own copy) | 900 / 900 | 900 / 900 | 1688 / 544 | `#fff` |
| 1c | Sticky app demo layer (overlays 1a+1b) | sticky top 48 (lg) / 96 (mobile) | same | 647 / 569 | – |
| 2 | "For the doers" + logo wall | 1800 / 709 | 1800 / 703 | 2232 / 572 | headline on white; wall `#292929` |
| 3 | "Granola helps you before, during and after" | 2509 / 464 | 2503 / 464 | 2804 / 312 | `#fff` |
| 4 | How it works (desktop sticky tabs) | 2973 / 2452 | 2967 / 2452 | – | `#fff` |
| 4m | How it works (mobile stacked, `md:hidden`) | – | – | 3116 / 1882 | `#fff` |
| 5 | Granola Chat | 5425 / 582 | 5418 / 547 | 4997 / 705 | `#b2c248` |
| 6 | Testimonials | 6007 / 848 | 5965 / 848 | 5703 / 795 | `#292929` |
| 7 | Features | 6855 / 4663 | 6813 / 4475 | 6498 / 3047 | `#ffffff` |
| 8 | MCP connector | 11518 / 1151 | 11288 / 1128 | 9545 / 955 | `#f7f7f2` |
| 9 | Pricing CTA | 12669 / 749 | 12416 / 749 | 10500 / 532 | image `pricing-bg.jpg` |
| 10 | Footer (`mt-16` = 64px gap above) | 13482 / 828 | 13229 / 828 | 11095 / 1062 | `#fff` |
| 11 | Footer reveal panel (fixed, behind) | fixed bottom, h260 | same | same | `#b2c248` + 6 images |

Page wrapper: all of main + footer sits inside `div.min-h-svh.bg-background` (white). That wrapper is the element translated by the footer-reveal spring (§11). A 1px sentinel `div.-mt-px.h-px` is its last child.

---

## 2. Nav (section 0)

**Structure.**
- `header` is `position:fixed; inset-inline:0; z-index:50; top:0` (<768) / `top:8px` (≥768).
- Inside: container (max-w 1280, px 16/40) → `nav.navbar-pill` h56, flex, items-center.
- Inner row: `py-8px`, gap 1px (md). Three flex parts:
  1. **Left** (flex-1): logo link `aria-label="Granola home"`, href `/`, `md:pl-1`. Logo SVG `public/assets/granola-nav-logo.svg` (viewBox 0 0 5017 1350), rendered **h28 (w104)**, `mr-12px`, `relative top-1px`. Clicking the logo on `/` smooth-scrolls to top.
  2. **Center** (md+): `Features` (dropdown trigger), `Enterprise` (/enterprise), `Pricing` (/pricing), `Blog` (/blog), `Careers` (/jobs).
  3. **Right** (flex-1, justify-end): `Talk to sales` (lg+ only, `/contact/sales?source=nav`, 1px border rgba(71,67,42,.2)) and the `Download` button.

**Pill geometry @≥768.**
- `--pill-overhang: .5rem`
- `width: calc(100% + 2*8px + 1px)`, `margin-inline: calc(-8px - .5px)`, `padding-inline: 8px`
- `border: .5px solid transparent`, `border-radius: 9999px`
- Measured: x=111.5, w=1217 @1440.

**Pill geometry @<768.**
- `width: calc(100% + 2rem)`, `margin-inline:-1rem`, `padding-inline:1rem`
- `border-radius:0`, only `border-bottom: .5px solid transparent`

**Nav link** (text type):
- melange 14px, line-height 24px, ls .14px, `#292929`
- `padding: 6px 12px`, rounded-full, 1px transparent border
- Hover bg `#f7f7f2`, `transition: colors 200ms cubic-bezier(.4,0,.2,1)`
- Measured boxes @1440: Features x532 w82, Enterprise x614 w92, Pricing x706 w71, Blog x776 w55, Careers x832 w76. All h38 at y17.

**Talk to sales:** same as a nav link, plus 1px border `rgba(71,67,42,.2)` and `ml-4px`. Hover bg rgba(98,90,34,.06). Box x1097 w104 h38.

**Download button** (x1205 w115 **h40**):
- `padding: 0 12px`, rounded-full, `ml-4px`, 1px transparent border
- Content: Apple icon 20×16 + "Download", gap 4px, melange 14px/24px
- **Not scrolled:** bg rgba(98,90,34,.06), text `#292929`. Hover rgba(86,81,46,.12).
- **Scrolled:** bg `#5b6f00`, **text white**. Hover `#5b6f00` at 90% opacity.
- `transition: colors 300ms cubic-bezier(0,0,.2,1)`
- Label varies by OS (from JS): mac → Apple icon + "Download"; windows → Windows icon + "Download"; iOS/Android → the mobile header shows "Get the app" (measured at 390 with iPhone UA).

**Scroll behaviour** (JS: `scrollY > 0` → `data-scrolled="true"`, and `main` gets class `scrolled`):
- **Pill, desktop, scrolled:** bg `#ffffff`, border `.5px solid #d5d5d2` (renders 1px), box-shadow `0 1px 2px rgba(0,0,0,.04), 0 6px 20px rgba(0,0,0,.06)`.
- **Mobile, scrolled:** bg `#fff`, border-bottom `#d5d5d2`, no shadow, no radius.
- `transition: background-color .3s ease-out, border-color .3s ease-out, box-shadow .3s ease-out`.
- No backdrop blur on the nav itself. Nav position, width and height do not change on scroll (verified at scrollY 1, 10, 50, 100, 400, 2000).

**Features dropdown** (desktop, framer-motion, opens on hover):
- **Trigger hover:** bg `#f7f7f2` (200ms).
- **Panel:** `absolute top-full left:-140px`, `padding-top:24px`, `width:600px`, z-50.
  - **Closed:** `opacity:0; transform:translateY(14px); pointer-events:none`.
  - **Open:** `opacity:1; translateY(-5px)`.
  - **Timing:** y `duration .3s ease [0.165,0.84,0.44,1]`; opacity `duration .15s` with the same ease. Measured: fully open ≈ 370ms.
- **Inner card:** bg white, 1px `#d5d5d2`, radius 8px, padding 8px, flex-row with two halves (291px each).
- **Left half: 3 rows**, each h70, `padding: 10px 48px 10px 16px`, gap 16px, radius 8px. Hover bg `#f7f7f2`; subtitle hover color → `#292929`; `transition: all 150ms`.
  1. `nav-icon-notes-rebrand.png` (44×44, radius 6) + "Notepad" (melange 14/18 w500) + "The AI notepad for people in back-to-back meetings" (13/16 `#72726e`). The current page is marked by a 4×24 `#b2c248` rounded bar at left:2px, vertically centered.
  2. `nav-icon-chat-rebrand.png` + "Chat" / "AI chat that already knows what you're working on" (href `/chat`).
  3. `nav-icon-ios-rebrand.png` + "Granola for mobile" / "Meeting notes on the go and for your phone calls" (button; opens a phone modal).
- **Right half:** card link `/blog/granola-for-apple-watch`, padding 12, radius 8, hover bg `#f7f7f2`.
  - Image `assets/watchog.jpg`: 267×140, radius 6, shadow `0 0 36px rgba(0,0,0,.03)`, grows to shadow-sm on hover.
  - Then "Granola for Apple Watch" (14/17.5 w500) and "Learn more →" (13/16 `#72726e`), gap 4.

**Mobile header (390).**
- Logo at x16. Right side: "Get the app" button (h40), then the hamburger `button[aria-label="Open menu"]` (40×40, `p-2 -mr-2`, heroicons 24px; switches to an X icon and `aria-label="Close menu"`).
- **Mobile menu** `#mobile-menu`:
  - Layout: `position:fixed; inset-x:0; top:56px; bottom:0; z-40; display:flex; flex-direction:column; gap:16px; padding:16px; overflow-y:auto`.
  - Surface: `backdrop-filter: blur(16px)` (backdrop-blur-lg), bg `rgba(255,255,255,.8)`.
  - Animation (framer-motion default transition): initial `{opacity:0, y:-20}`, animate `{opacity:1, y:0}`, exit the same as initial. Measured: settles in ~310ms with ~2.3px overshoot (spring).
  - While open: `body{overflow:hidden}`.
- **Mobile menu contents:**
  - "Features" label (melange 16/20 w500, pt 4).
  - The 3 product rows (gap 24, no padding, icon 44px). The active page bar sits at left:-14px.
  - Links "Enterprise", "Pricing", "Blog", "Careers", "Talk to sales": each melange 16px/20 w500, py 4, row h28, gap 16.
  - `hr` with mt 24: 0.5px top border, color `rgba(106,108,106,.2)` (`--color-tertiary: #6a6c6a` at 20%).
  - The full footer link grid (same as §10, 2-column grid).

---

## 3. Hero (sections 1a, 1b, 1c)

**Wrapper:** `div.relative.w-full`. At lg+ it is `display:grid` with all children in grid-area 1/1 ("grid-pile"). At <1024 it is `min-h-[200vh]`.

### 1a. Screen 1 (h = 100vh at lg)
- **Section:** container max-w 1280, px 40, **pt 120px** (md:pt-30; pt 96 at <768), `min-h-screen` (lg), flex-col, justify-center (md).
- **Grid:** `lg:grid-cols-[60%_40%]`, gap 32px, items-center. Left col @1440: x120, y205, w720.
- **Left column:** flex-col, gap 32px, items-start.
  1. **Badge link** (`/blog/granola-for-apple-watch`)
     - Box: h32, `padding: 6px 12px 6px 6px`, radius full, bg `#f7f7f2`, gap 8.
     - "New" pill: `padding: 2px 8px`, radius 10px, bg `#d1e043`, melange 12px/16px w500 ls .24px `#292929` (41×20).
     - Label "Granola for Apple Watch": melange 13px/16px w500 ls .13px `#292929`.
     - Chevron 16px `#72726e` (`assets/hero-badge-arrow.svg`).
     - **Hover:** bg `#eaebe5` (150ms); chevron `translate-x: 2px` (transform 150ms).
     - Position: @1440 x120 y205 w235; @390 x16 y96.
  2. **H1** "The AI notepad for back-to-back meetings"
     - quadrant, `font-size: clamp(68px, 6vw, 110px)` (lg). Measured: **86.4px @1440**, **76.8px @1280**. sm+: 72px; <640: **48px**.
     - line-height .93 (80.35px @1440); letter-spacing -0.02em (-1.728px @1440); `max-width:10ch`; `text-wrap:balance`; color `#292929`.
     - Box @1440: x120 y269 w562 h321 (4 lines). @1280: y287 w499 h286. @390: y160 w312 h179.
  3. **Subcopy:** two `<p>` lines, "Notes, actions and memory." and "Without a meeting bot."
     - melange 20px/28px (lg:text-xl), color `#0e0f0c`. 16px/20px at <1024; 3xl: 24px.
     - @1440 y623.
  4. **CTA group:** flex-col, gap 24.
     - Accent button "Download for free" + arrow (199×56 @1440, href `https://example.com/download`). @390 with iPhone UA it reads "Download for iOS" (239×48), followed by a secondary "Get the Desktop app" link (14px w500, color rgb(106,108,106)).
     - Then row "Available for macOS, Windows, iOS, Android": gap 8, icon 24×24 (`assets/hero-platforms-icon.svg`), text melange 13px/16px ls .13px `#72726e`, `margin-top:4px` on the span. @1440 y791.

### 1b. Screen 2 "Effortless notes" (lg only: `hidden lg:block`, h 100vh = 900)
- **Section:** full container width 1280, no padding.
- **Grid:** `grid-cols-2`, `grid-template-rows: 1fr auto 6rem auto 1fr` (lg). Mobile: `0fr auto 4rem auto minmax(10rem,1fr)`, `max-w-2xl`. Inline `--notepad-row: 5rem`.
- **Dashed guides** (xl+ only): two 1px-wide absolute lines at inset-y 0, left:0 and right:0. `background-image: repeating-linear-gradient(to bottom, #DEDEDE 0 8px, transparent 8px 22px)`.
- **H1** "Effortless notes, enhanced instantly.": col 1, row 2. quadrant **48px/48px** (lg:text-5xl; 36/40 mobile; 3xl 60px), `max-w:24ch`, balance, `padding-left:40px` (md) / 24 (xs) / 16. Color `#0e0f0c`. @1440 x80 y1134 w640 h96.
- **Ruled notepad lines:** absolute layer spanning both cols, rows 4–6, starting at y1326 (h474).
  - `background-image: repeating-linear-gradient(to bottom, #DEDEDE 0, #DEDEDE 1px, transparent 1px, transparent 80px)`
  - `mask-image: linear-gradient(to right, black 0%, transparent 32%, transparent 68%, black 100%)`
- **Three note rows** (col 1, row 4, pl 40): each `<p>` is flex, items-center, gap 12, `min-height:80px`.
  - Icon `<img>` 50×50 object-contain: `roboto.svg`, `lock.svg`, `tick.svg`.
  - Text: melange 14px/18.9px (leading 1.35) ls .14px `#292929`. At <768 it is 16px/21.6px.
  - Bold parts `<strong>` weight 600:
    - "Uses your computer audio, **so doesn't invite a bot**"
    - "**Private by default**, easy to share if you choose"
    - "Works with **Zoom**, **Google Meet**, **Teams** and every other meeting app."
  - **Icon hover:** hovering a row applies an SVG filter to its icon: `feTurbulence type=turbulence baseFrequency=.02 numOctaves=2 seed=3` → `feDisplacementMap scale=4 xChannel R yChannel G`. filter region x/y -20%, w/h 140%. While hovered, baseFrequency cycles through `.02 + [-.02, .01, -.01, .02]` every 100ms (hand-drawn wobble); it resets on leave.
- **Right column:** an empty placeholder `aspect-4/6 max-w-96` (384×576, at x848 y1062 @1440). This is where the sticky demo lands after 100vh of scroll.

### 1c. Sticky demo layer (overlays 1a/1b)
- **Section:** `position:sticky; top:48px` (lg) / 96px (mobile), `h-screen` (lg), `pointer-events:none`.
- **Inner:** flex-center, `overflow:hidden`, `pt-40px -mt-40px` (mobile `pb-32px`). Then the container grid of 2 cols; the left col is empty.
- **Preview box** `.sticky-demo-preview`:
  - Size: `aspect-ratio 4/6`, `width:30vw` (lg), `max-width:384px`, `max-height:75vh`, `transform-origin:center`, `isolation:isolate`, grid-pile.
  - `lg:top: max(0px, calc(48px + min(27vw,345.6px,45vh) - 44vh))`.
  - Measured @1440 at scrollY=0 (includes scale 1.2): x886 y118 w461 h691. @390: x16 y647 w358 h537.
- **Floating images** (lg, behind the window; all `<img>` rounded 4px, object-cover):
  - `grey.jpg` (576×1024 natural): `left:0; top:-9%; width:100%`
  - `explosion.jpg` (819×1024): `left:-7.5%; top:2%; width:115%`
  - `green-poster.jpg` (563×1024): `left:9%; top:0; width:82%`
  - Mobile variants (<1024, z -10): grey `right:-10%; top:30%; w:60%; origin-left`; explosion `right:-10%; top:-8%; w:80%; origin-left`; green `left:-10%; top:-12%; w:60%; origin-bottom-right`.
- **App window** (z-10):
  - Box: flex-col, overflow-hidden, radius 12px, 1px border rgba(71,67,42,.2), bg `#f7f7f2`, shadow-xl.
  - **Title bar:** h44, pl 15.5px, gap 6.5px. Three 10px traffic-light dots (the gap measures 12px because of the 1px border).
  - **Body:** px 8, pb 64.
    - Title "Q3 GTM sync": quadrant 20px/28px, px 16, pt 12.
    - Meta chip row (mx 12, mt 8, py 4, gap 8): chip `min-h-24`, 1px hairline border, radius full, px 8, 10px font-book `#72726e`, containing a calendar icon 14 + "Today" and a people icon 14 + "4"; then a 24px round "+" button.
    - Notes area (mt 16, flex-1). Three grid-stacked layers:
      - (a) typed raw notes: melange 10px, leading 1.625, `#292929`, flex-col gap 8. Lines are "confirm ICP alignment", "Deal stalls - sales input", blank, "Q3 messaging rollout, are teams ready??". Caret: `inline-block w-px h-[1em] ml-px bg-#788c15 animate-pulse` (pulse 2s `cubic-bezier(.4,0,.6,1)` infinite).
      - (b) enhanced notes `.demo-enhanced`: bg `#f7f7f2`, 10px, leading 1.5, clip-path animated. Content, in order:
        - heading "ICP Alignment Confirmation" (grey, 600)
        - "•  Agreed to narrow Q3 focus to mid-market finance and ops buyers" (dark, pl 12)
        - "–  SMB deprioritised for the quarter" (grey, pl 28)
        - "–  Paid campaigns paused until ICP doc is confirmed" (grey, pl 28)
        - heading "Deal Stalls: Sales Input" (mt 1.5em)
        - "•  Jack flagged deals stalling at business case stage" (dark)
        - "–  Marketing to build a business case template" (grey)
        - "–  CS to share proof points from successful onboardings" (grey)
        - "•  Follow-up scheduled for Tuesday" (grey)
        - heading "Q3 Messaging Rollout"
        - "•  Sales and CS do not yet feel briefed on new messaging" (dark)
        - "–  Lunch and learn session agreed" (grey)
        - heading "Next Steps"
        - "•  Tanya: Update ICP doc and pause paid campaigns" (grey)
        - "•  Rob: Scope business case template by Tuesday" (grey)
        - "•  Jack: Collate CS proof points by Tuesday" (grey)
      - (c) "Enhancing notes" pill (absolute inset-x-8 top 0): flex, gap 8, radius full, hairline border, bg white, px 12, py 6, shadow-md. Contains a spinner (12px circle, border 2px `#788c15` with a transparent top, `spin 1s linear infinite`) and "Enhancing notes" (10px w500 `#72726e`).
  - **Bottom stack** (absolute inset-x-0 bottom 16, grid place-items-center; one visible at a time):
    - "Transcribing" pill: h40, gap 12, px 16, hairline border, white, shadow-md. Contains dancing bars + "Transcribing" (13px ls .01em `#72726e`).
    - "Generate notes" button: h40, px 16, gap 6, radius full, bg `#292929`, white 13px w500, sparkle icon 16px, shadow-md.
    - "My notes | Enhanced" toggle: w192, p 2, hairline border, white, shadow-md. Sliding highlight `absolute inset-y-2px left-2px w-[calc(50%-2px)]`, radius full, bg rgba(98,90,34,.06). Labels 10px w500, py 4.
  - **Dancing bars** (3 bars, each w4 radius full `#292929`, rendered as two halves translating in opposite directions):
    - bar1: height 12, amp 4, `dancing-bar-*-1` 0.6s, delay 0s
    - bar2: height 18, amp 5, `dancing-bar-*-3` 0.5s, delay .18s
    - bar3: height 13, amp 2.5, `dancing-bar-*-2` 0.92s, delay .33s
    - All `ease-in-out infinite alternate`, gap 4.
    - Keyframes: `top-1: translateY(0→-4px)`, `bottom-1: (0→4px)`, `top-2/bottom-2: ±2.5px`, `top-3/bottom-3: ±5px`.
- **Video-call thumbs** (z-20):
  - Position: `absolute; top:50%; right:-14%; width:28%` (lg). Mobile: `top:30%; right:-4%; width:24%; min-w 80px; max-w 96px`.
  - Frame: `.video-thumbs` flex-col, radius 8, bg black, padding 3px, gap 3px, 1px `#212121` border.
  - Two square tiles (radius 4, 1px `#212121` border, `transition: all .3s`), each a canvas painting a muted looping video (poster shown as background-image until frames arrive).
  - Controls row (pt 2, gap 6): three 26×14 pills, radius full. mic `#484844`, video `#484844`, phone `bg-red-500` (= oklch(.637 .237 25.331) ≈ `#fb2c36`); phone icon rotated 135°. Lucide icons 10px stroke 2.
  - Two random clips are picked per page load from 15 names: jack, camilla, paavan, rob, sirine, naomi, caroline, nickt, sean, clem, jullien, nickfil, will, angus, xiuting. Path: `/homepageAssets/call-videos/{name}-call{-512 if ≥768px}.mp4`, with `…-poster.jpg`. All 60 files are now in `public/assets/call-videos/`.
  - Video: `muted=true, loop=true, playsInline`, drawn to `<canvas>` via `requestVideoFrameCallback`. Mp4s are h264, 5.0s; 512×342 (`-512`) or 256×170.

### Hero motion

**A. Scroll-driven CSS** (`@supports (animation-timeline: scroll())`; all `animation-timeline: scroll(root)`, `fill-mode: both`):

| element | keyframes | range | timing |
|---|---|---|---|
| `.sticky-demo-preview` <1024 | `scale(1) → scale(.8)` | 0 → 100vh | linear |
| `.sticky-demo-preview` 1024–1439 | `translateY(-6vh) scale(1.2) → translateY(0) scale(1)` | 0 → 100vh | linear |
| `.sticky-demo-preview` ≥1440 | `translate(25%,-6vh) scale(1.2) → translate(0) scale(1)` | 0 → 100vh | linear |
| float-grey-lg | `translate(23%,21%) scale(1) → translate(0) scale(.75)` | 6vh → 56vh | `cubic-bezier(.7,0,.84,0)` |
| float-explosion-lg | `translate(24%,-6%) scale(1) → translate(0) scale(.75)` | 0 → 50vh | same |
| float-green-lg | `translate(-35%,10%) scale(1) → translate(0) scale(.75)` | 12vh → 62vh | same |
| float-*-sm | grey `translate(40%,10%)`, explosion `(45%,8%)`, green `(-45%,8%)`, each → `translate(0) scale(.2)` | same ranges as lg | same |
| all floating items (2nd anim) | `opacity 1 → 0` | 60vh → 80vh | linear |
| `.video-call-parallax` | `translateY(12%) → translateY(-45%)` | 0 → 120vh | linear |

Fallback without scroll timelines: static start transforms, and `main.scrolled .floating-item{opacity:0}`. The React clone can reproduce all of this with a scroll listener mapping `scrollY / innerHeight` to these ranges.

**B. GSAP timeline in the hero app window** (`repeat:-1`; plays only while in view, `margin:100px`). Time in seconds from timeline start:

1. **Reset** at each loop start:
   - Raw notes show the first 3 lines, plus an empty 4th line with the caret.
   - `.dq-grad` lines lose the `gradient-text-animate` class; notes scrollTop 0.
   - Enhanced layer: `autoAlpha 1`, `clip-path: inset(0 0 100% 0)`.
   - Enhancing pill: `autoAlpha 0, y 0, scale .95`. Generate button: `autoAlpha 0, y 0, scale .8`.
   - Toggle hidden (`autoAlpha 0, scale .94`), highlight at `xPercent 100`.
2. t=0: toggle → `autoAlpha 0, scale .85`, `.18s power2.in`.
3. t=0.04: Transcribing pill `fromTo autoAlpha 0 scale .6 → 1 / 1`, `.45s back.out(2.6)`.
4. t=0.30: type "Q3 messaging rollout, are teams ready??" character by character. Duration = chars/26 s (≈1.5s, linear, 26 chars/s).
5. Wait .25s. Then render the full notes with the caret on the last line.
6. +0.12s: Transcribing pill → `autoAlpha 0, scale .8`, `.25s power2.in`.
7. 0.08s after step 6 starts: "Generate notes" → `autoAlpha 1, scale 1`, `.38s back.out(2.2)`.
8. Click simulation, starting .18s after step 7 ends: `scale .96` (.1s power2.in) → `scale 1` (.12s power2.out). Then +.05s: `y 28, scale .85, autoAlpha 0` (.35s power2.in).
9. Label **enhance**:
   - Progress p 0 → 1 over **3.1s, `power1.in`**.
   - Each tick:
     - `revealY = p * max(0, clientH - (scrollH - enhancedH))`
     - `scroll = max(0,(p-.5)/.5) * maxScroll` (the notes area auto-scrolls in the second half)
     - enhanced `clip-path: inset(0 0 max(0, enhancedH - (revealY+scroll))px 0)`
     - Enhancing pill `y = revealY - 8`
     - Every `.dq-grad` line whose offsetTop ≤ revealY+scroll gets `gradient-text-animate`, i.e. `animation: bg-slide .4s ease-in-out forwards`, where `bg-slide` = background-position 100% → 0. This sweeps a pastel rainbow then settles to ink.
   - At the same moment: Enhancing pill `fromTo autoAlpha 0 scale .95 → 1/1`, `.28s power2.out`.
10. **morph** (enhance + 3.1):
    - Pill moves onto the bottom toggle position: `y`, `.5s power2.out`.
    - At +.42: pill `autoAlpha 0, scaleX → toggleWidth/pillWidth (min .7)`, `.22s power2.in`.
    - At +.40: toggle `fromTo autoAlpha 0 scale .88 → 1/1`, `.4s back.out(1.8)`; highlight shown under "Enhanced".
11. Hold .45s. **switch**: highlight `xPercent 100 → 0` (slides to "My notes"), `.28s power3.inOut`. Then hide the enhanced layer, restore the raw notes, remove the gradient classes, hold .12s, repeat.
12. Measured loop period ≈ **8.1–8.3s**.

Gradient-text CSS:
```
.gradient-text      { background-image: linear-gradient(90deg,#292929 0,#292929 33.33%,#febe29 40%,#ff91e0 45%,#cebef8 50%,#d2e4f8 55%,#d1e043 60%,transparent 66.67%,transparent); }
.gradient-text-grey { same, with #72726e in place of #292929 }
both: background-size:300% 100%; background-position:100% 0; -webkit-background-clip:text; background-clip:text; color:transparent; -webkit-text-fill-color:transparent;
.gradient-text-animate { animation: bg-slide .9s ease-in-out forwards }   /* .demo-enhanced overrides duration to .4s */
@keyframes bg-slide { from { background-position:100% 0 } to { background-position:0 0 } }
```

---

## 4. "For the doers" + logo wall (section 2)

- **Wrapper:** `overflow-x:clip`.
- **Headline row:** flex-center, `padding: 24px 40px` (md) / `20px 16px`, h208 @1440.
  - Invisible 1px trigger line at `top:50%` (`view-timeline-name: --doers-under`; `timeline-scope` on `.doers-scope`).
  - **H2 "For the doers":** quadrant `font-size: min(12vw,160px)` (**160px @1440**, 153.6 @1280, 46.8 @390), line-height 1, ls -0.015em (-2.4px), `white-space:nowrap`, centered, `#292929`. @1440: x223 y1824 w995 h160.
  - **Motion:** `doers-slide-under` `translateY(0) → translateY(130%)`, `animation-timeline: --doers-under`, `animation-range: cover 50%` (runs from when the trigger line is at mid-viewport until it leaves the top), linear, fill both. The headline slides down behind the dark block, which has z-index 10. Measured: translateY 159.5px at scrollY 1800, 208px (max) at 2250.
- **Dark block:**
  - Box: `position:relative; z-index:10`, bg `#292929`, `padding:16px 0`, width `calc(100% - 20px)` (lg; full width below). @1440: x0 y2008 w1420 h501.
  - To its right (lg only): a 20px-wide strip at `left:100%`, full height, containing `assets/star-slice.jpg` (60×1000 natural), object-cover.
  - Inner container: max-w 1280, px 40.
  - Kicker "Trusted by teams we admire": pt 48, quadrant 20px/21px (leading 1.05), ls .4px (0.02em), `#fcfcf8`, centered, text-pretty.
  - **Logo grid:** `grid-cols-6` (md) / `grid-cols-3`. Each cell is `height:200px` (md:h-50) / 96px, `padding:0 12px`, flex-center.
  - Logos are natural-size white SVGs at @1440:
    - Row 1: PostHog 98×17, Intercom 105×17, Figma 71×26 (translate-y 2px), Brex 76×20, Ramp 75×21, Replit 90×21
    - Row 2: Lovable 94×16, Cursor 87×21, Bumble 92×17, Asana 101×20, Vanta 68×17, Linear 81×20
    - Files: `assets/posthog.svg, intercom.svg, figma.svg, brex.svg, ramp.svg, replit.svg, lovable.svg, cursor.svg, bumble.svg, asana.svg, vanta.svg, linear.svg` (the un-suffixed ones; see manifest).
  - **Plus separators** (md+): an absolute row at `inset-x:16.6667%; top:50%; translateY(-50%)`, flex justify-between, with 5 zero-width spans. Each holds a 15×15 plus SVG (`assets/logo-wall-star.svg`: two 0.5px `#FCFCF8` rects) at the column boundaries between the two logo rows.
- No hover effects on logos; the logo wall has no marquee.

---

## 5. "Granola helps you before, during and after your meetings." (section 3)

- **Section:** container, `padding:160px 40px` (lg:py-40) / `96px 16px`, h464.
- **Grid:** 2 cols (lg); left col empty.
- **H2** in the right col: quadrant 48px/48px (lg:text-5xl; 36/40 mobile; 60 at 3xl), ls -0.015em (-0.72px), balance, color `#0e0f0c`. @1440: x720 y2669 w600 h144.

---

## 6. How it works (section 4 desktop ≥768; 4m mobile)

**Desktop section:**
- `display:grid; grid-template-columns: 1fr 1fr` (600/600 @1440), container px 40, h2452.
- `timeline-scope: --hiw-step-0, --hiw-step-1, --hiw-step-2`.

**Left column: sticky tab list**
- `position:sticky; top:96px`, flex-col, gap 16, `padding:48px 0`, `max-width:320px`.
- Three `<button>`s: "Before the meeting", "In the meeting", "After the meeting".
  - melange 14px/18px ls .14px.
  - Color: active `#292929`, others `#9e9e99`; `transition: color .5s cubic-bezier(.4,0,.2,1)`.
- Under each label: an underline track `mt-6px h-1px w-174px bg-#eaebe5` containing a fill bar `absolute -top-1px left-0 h-3px w-full`.
  - Fill color `#292929` for current/future steps, `#9e9e99` for passed steps.
  - The current step's fill uses `how-it-works-progress-fill`: `scaleX(0→1)`, transform-origin left, `animation-timeline: --hiw-step-N` (a view timeline on step N's right-column block), `animation-range: cover 50vh cover calc(100% - 50vh)`, linear.
  - Passed steps: `hiw-step-swipe-out` `scaleX(1→0)`, origin right, `.5s ease both`.
- Active step = the step block crossing viewport center (IntersectionObserver `rootMargin:"-50% 0px -50% 0px"`).
- Clicking a tab: `scrollIntoView({behavior:'smooth', block:'center'})` on that step; the observer is ignored for 900ms.

**Right column:** flex-col, gap 96, `padding:48px 0`. Per step:
- h3: quadrant 24px/25.2px, ls -0.24px, `#292929`.
- p: `mt-8px max-w-448px`, melange 16px/24px, `#0e0f0c`.
- `mt-24px` media tile: 600×600 (aspect-square), radius 16, overflow hidden, bg `#b2c248`, bg image `nature-2.png`. The live files are named `.png` but are JPEG data; local copies are `assets/nature-2.jpg` / `nature-3.jpg`. object-cover.
  - Step 0: image object-left. Step 1: nature-2, object-right. Step 2: nature-3.
  - Inside the tile is a stage `absolute inset-0`; below 768 it is 448×448 scaled by `--stage-scale = width/448`.

**Step copy:**
- 0 "Start your meeting prepared": "Granola syncs with your calendar and preps a Brief before every external meeting: who's attending, what you discussed last time, and what matters now."
- 1 "Give your full attention": "Don't choose between listening and taking good notes. Write down as much or as little as you like - Granola uses meeting context to write clear notes, personal to you."
- 2 "Post-meeting admin, done": "Notes, action items, and follow-ups are ready the moment the meeting ends, so you can move things forward."

**Step mockups:**

*Step 0.*
- App window at `left:7%; top:6.5%; w:70.7%; h:64%` (md), `origin-top-left`, **scale 1.5**.
  - Window: radius 24, hairline border, bg `#f7f7f2`, shadow-xl.
  - Title bar h44 with three 13px `#d5d5d2` dots, gap 8.
  - Title "Northwind Sync": quadrant 24px/32px.
  - Chip "Today · 2": min-h 28, px 10, 13px font-book `#72726e`, icons 16px.
  - Placeholder "Write notes..." (12px/19.5 `#acada8`). Static.
- Overlapping **Brief card** at `left:3.5%; top:55%` (md) / 50%, `width:93%`.
  - Box: radius 28, `padding:16px 24px 20px`, `background: linear-gradient(147deg,#ffffff 30%,#faf7f5 72%)`, shadow `0 0 0 6px rgba(71,67,42,.05)`, melange 17px (xl) / 16px (lg) / 14px, leading 1.625.
  - Header: sparkle-doc icon 18px + "Your Brief" `#72726e`.
  - p mt 16: LinkedIn icon 18px + "**Alex Park's** (VP at **Northwind**) team pushed back on pricing overnight, bringing a counter-proposal to today's call."
  - ul mt 16, gap 12, bullets `•` `#acada8`, gap 8:
    - "Alex email this morning **notes** the push-back is team-driven, not executive-level."
    - "Q3 implementation is a hard constraint on Northwind's side, **flagged** in prior syncs. Last delivery timeline **mentioned** targets August 2026."
    - "EU data residency is still open from the procurement intro two weeks ago; no update from Alex's side since."
  - `strong` is weight 500.

*Step 1.*
- App window centered: `w:60%`, `aspect-3/4`, `transform: translate(30%,0) scale(1.1)` (md). Mobile: `aspect 3/4.7`, `translate(35%,4%) scale(1.1)`.
- Video-thumbs column to its left: `right:100%; margin-right:8%; width:40%`, shadow-xl, controls shown.
- GSAP (starts when the step becomes active, `delay .35s`):
  1. Transcribing pill `autoAlpha 0 scale .6 → 1`, `.45s back.out(2.6)`.
  2. Type raw notes at 26 chars/s: "walked thru q3 priorities\n2 pulled fwd from q4\ntanya offered to pair on docs\njack - spec in-app tour".
  3. Wait .6s. Raw notes fade out (`.3s power2.in`).
  4. **enhance**: Transcribing out (`.25s`). "Ask anything" bar in (`fromTo scaleX .72 scaleY .9 → 1`, `.42s back.out(2.2)` at +.08). Clip-reveal p 0→1 over **2.6s power1.inOut**. Enhancing pill in `.28s`, then out `.3s`.
  - Plays once per activation (not looping).

*Step 2.*
- Same window as step 0, showing the fully enhanced notes (static, gradient classes already applied): "Q3 roadmap check-in / Walked through priorities for the quarter / Two initiatives pulled forward from Q4 / One project deprioritized pending more research / Design system rollout / Phase 1 shipping next week / Blocked on documentation site / Tanya offered to pair on the doc structure / Onboarding improvements / Brainstormed ways to improve new-user onboarding / Three angles: in-app tour, intro video, sample data / Jack to spec out the in-app tour direction / Next steps / Sam to draft doc outline by Friday / Jess to set up the A/B test plan / Sync again Friday".
- Overlay **action card** at `left:3.5%; top:56%; width:117%`:
  - Box: radius 28, bg white, padding 20, shadow `0 0 0 8px rgba(71,67,42,.05)`.
  - Three rows, each py 10, gap 16, separated by hairline borders.
  - Icon tile 56px (xl) / 48 (lg) / 44, radius 16 (xl) / 12, bg `#b2c248` at 20% opacity, icon 26px.
  - Labels (24px/32 at xl, 20 at lg, 16 below): "List actions", "Write follow-up email", "Draft project plan".
- "Ask anything" bar: h36, radius full, hairline border, bg `#f7f7f2`, pl 14, pr 4, shadow-sm, text 12px `#acada8`. Send button 28px round `#788c15` with a white up-arrow.

**Mobile (4m, <768):**
- Container `max-w-md` (448) px 16. Each step is a block with `padding:48px 0`:
  - Kicker (quadrant 16px/20 (text-lg) `#9e9e99`)
  - h3 (mt 8)
  - p (mt 8, 16/24)
  - 358×358 tile (mt 24)
- Mobile step blocks at y 3116 / 3751 / 4386, h 635 / 635 / 611.
- Step 1's demo plays when the tile crosses the viewport center.

---

## 7. Granola Chat (section 5)

- **Section:** bg `#b2c248`, `overflow-x:clip`, `padding:112px 0` (md:py-28) / 80px, color `#292929`. h582 @1440, h547 @1280.
- **Grid:** container px 40. `lg:grid-cols-2` (584/584), gap 32 (lg) / 48, items-start.
- **Left:**
  - Kicker "Granola Chat".
  - H2 "Perfect<br>meeting<br>memory" (big H2 style, three lines). @1440 h314.
- **Right:** width 704 (xl:w-176) / 640 (lg:w-160). Card:
  - Box: `display:grid; grid-template-rows:1fr auto auto; gap:32px; min-height:320px` (md) / 260, radius 28, bg white, `padding:24px 20px 16px`, shadow `0 8px 12px -4px rgba(0,0,0,.05)`. 704×320 @1440.
  - **Prompt** `<p>`: px 12, melange **39.43px/45.336px** (md) / 24px/1.15, ls -0.01em, color `#4e4d4b`, `min-height: 2lh` (md) / 3lh.
    - Contains an sr-only full prompt, plus per-character spans, plus the caret.
    - Caret: `inline-block; height:1.02em; width:.07em; min-width:2.5px; border-radius:1px; background:currentColor; vertical-align:-0.12em; margin-left:.04em`.
  - **Chip:** `w-fit`, origin-left, flex, gap 10, radius 12, bg rgba(98,90,34,.06), `padding:8px 12px 8px 8px`.
    - Icon tile: 32px, radius 8, swatch color, icon 18px `#72726e`.
    - Label: melange 16px/20px ls .32px `#4e4d4b`, nowrap.
  - **Footer row:** two 44×44 icon slots (lucide `paperclip`, `sliders-horizontal`; 20px, stroke 1.8, `#4e4d4b`).
- **Prompts** (cycle in order):

| category (chip) | swatch | prompt |
|---|---|---|
| Team stand-ups | `#d1e043` | What did I promise to do in my meetings this week? |
| Customer calls | `#BDD7F0` | Which feature requests keep coming up in customer calls? |
| 1:1s | `#F4CDA5` | What feedback have I gotten in my 1:1s this month? |
| Interviews | `#D9C7EE` | Which candidates stood out in this week's interviews? |

**Motion** (framer-motion; starts when the card is ≥60% in view):
- **Typing:** variants `visible: { staggerChildren: .045, delayChildren: .4 }`; each char goes from `display:none` to `display:inline`. That is ~22 chars/s (measured ~2 chars per 102ms).
- On complete → state `resting`: the caret gets `animation: caret-blink 1.1s step-end infinite` (keyframes: opacity 1 at 0/70/100%, 0 at 20/50%).
- After **2400ms** → `selected`: every char span gets bg `#b8d5ff` (text selection look) and the caret becomes `visibility:hidden`.
- After **650ms** → next prompt. The chip remounts with framer spring `{type:'spring', duration:.55, bounce:.6}` from `scale:.5` to 1 (measured overshoot to 1.116).
- Measured cycle ≈ **6.0s** per prompt.

---

## 8. Testimonials (section 6)

- **Section:** bg `#292929`, `overflow:hidden`, `padding:112px 0` (md) / 80px. h848.
- **H2** "Helping busy people through busy days":
  - quadrant **60px/60px** (lg:text-6xl) / 36px/40px, ls -0.015em, white, centered, `max-width:24ch`, balance, px 40 (md) / 16.
  - Margin-bottom 64 (md) / 48. @1440: x252 y6119 w936 h120.
- **Scroller:** `display:flex; gap:24px; overflow-x:auto; scroll-snap-type:x mandatory`, scrollbar hidden. The live page's drag-scroll wrapper sets inline `scroll-snap-type:none` while idle.
  - Leading spacer (snap-start): width `calc(max(0px,(100vw-80rem)/2) + 1rem)` (md) = **96px @1440**, 16px @1280. xs: `max(0,(100vw-80rem)/2)`. Trailing spacer: same width.
  - No autoplay, arrows or dots (scrollLeft stayed 0 over 6s). scrollWidth 3836 @1440.
- **Card** `<figure>`: `width:700px` (lg:w-175), basis 5/6 below lg, snap-start, h440 @1440. Inner:
  - Grid: `grid-cols-3` (md) / 1, gap 24, `padding:36px 56px` (md) / `36px 32px`, bg `#292929`, **border .5px white** (renders 1px), overflow hidden.
  - **Left (col-span-2):** flex-col, justify-between, gap 52 (md) / 32.
    - Logo `h-24px w-auto`, `filter: brightness(0) invert(1)`, object-left:
      - Linear: `assets/linear(1).svg` (live `/connectors/linear.svg`)
      - a16z: `assets/a16z.svg`
      - Vercel: `assets/vercel.svg` (live `/connectors/vercel.svg`)
      - Menlo: `assets/menlo-ventures.png`
      - Nat Friedman: no logo
    - Blockquote: quadrant 36px/1.1 (39.6px) (md) / 20px/1.25, white. The opening "“" hangs outside (`position:absolute; right:100%; top:0; margin-right:4px`); the closing "”" is inline.
    - figcaption: melange 16px/20px white; the title line is `rgba(255,255,255,.7)`.
  - **Right col** (md+, `min-height:256px`): portrait tile `absolute inset-x-0 bottom-0 aspect-square` (179×179 @1440), bg white. Layers, bottom to top:
    1. Pattern span: bg `#DEDEDE`, `mask-image` an SVG pattern. The pattern by index is 8×8 grid (both axes), 32×32 dot grid, 6 horizontal rows, then 4×4 grid (lines 1px, non-scaling). Mask size 100% 100%.
    2. Portrait `<img>`, object-contain, object-bottom.
    3. 1px border `#DEDEDE`.
    4. Inset ring .5px `#292929`.
  - **Hover** (on the card, `group`), all `transition-colors 300ms`: tile bg → pink `#ff91e0` / green `#b2c248` / yellow `#ed9212` / blue `#4691e2` (by index, cycling); pattern → `#666666`; border → `#666666`.
  - Mobile: the portrait instead renders as a 160×160 tile above the figcaption (`md:hidden`).
- **Card data:**
  1. "Granola was one of those things that just clicked instantly. It's seamless and very purpose-built." Karri Saarinen, CEO of Linear (`karri-saarinen.png` 552×553)
  2. "It's the easiest AI notetaker to start using “out of the box,” and it gets better with more meetings" Olivia Moore, Partner at Andreessen Horowitz
  3. "It's actually unbelievable how good Granola is." Guillermo Rauch, CEO of Vercel
  4. "If you are in a lot of meetings, this is a gamechanger." Deedy Das, Partner at Menlo Ventures
  5. "Granola generates the best meeting notes of anything I've tried so far." Nat Friedman (no title)

---

## 9. Features (section 7)

- **Section:** bg white, `padding:128px 40px` (md) / `80px 16px`. Inner max-w 1280 (at 1440 it is x80 to 1360, so it is **wider** than other sections: no inner px).
- Kicker "Features" (y6983 @1440).
- H2 "Works everywhere you do, how you do" (big H2 style, `max-width:15ch`; 1053×210 @1440).
- `mt-40px` (md:mt-10) / 32: primary dark "Download for free" (199×56).
- List `margin-top:128px` (md:mt-32) / 80, flex-col, gap **124px** (md:gap-31) / 80.
- Each item: feature row header (hr + grid 820/448), then media `margin-top:32px`.
- Media grid: `display:grid; gap:8px; grid-template-columns: var(--cols)` (md; 1 col below). The inline `--cols` is static.
- Each image tile: `position:relative; overflow:hidden; border-radius:4px; aspect-ratio:<w>/<h>`, with the `<img>` absolutely filling it, object-cover.

**Items:**
1. **"Humans in the room, not bots"**
   - Copy: "Granola doesn't join your meeting. Instead, it transcribes in the background while you stay present"
   - Media: `--cols:2.4306fr`, tile aspect **2732/1124** (1280×527 @1440), `feature-humans` (live `.webp` 2732×1124; local `assets/feature-humans.jpg` same dims)
2. **"Works with all meeting apps"**
   - Copy: "Zoom, Meet, Teams, Huddles, in-person, on-the-go: capture conversations wherever you have them."
   - Media: tile (mt 32, aspect 2732/1124) with `assets/bg.webp`. Over it, a flex-centered row with gap **6.45%** of three white tiles:
     - Each tile: `width:15.1%` (193px @1440), aspect-square, radius 18%, `border:2px solid rgba(0,0,0,.04)` (1px below md).
     - Logos: `zoom.png` at width 45%, `google-meet.svg` at 52.7%, `teams.png` at 53.9%.
3. **"Private by default, ready to share"**
   - Copy: "Your notes are just for you. Search them, polish them, analyze them, then send them as you like."
   - Media: `--cols:2.4306fr`, `feature-private` 2732/1124
4. **"Made for in-person meetings too"**
   - Copy: "Walking meetings, conferences or coffee catchups - use the iPhone or Android app to take notes anywhere."
   - Then `mt-24px` a primary dark **button** "Download for mobile": phone icon 16px *before* the text, gap 8, 224×56. It opens a send-to-phone modal; on iOS/Android it becomes "Download for iOS" / "Download for Android".
   - Media: `--cols: 0.8332fr 1.5801fr`, two tiles:
     - `feature-mobile-left`: aspect 939/1127, 439×527 @1440
     - `feature-mobile-right`: aspect 1776/1124, 833×527
5. **"Syncs with your calendar"**
   - Copy: "Granola integrates with your calendar and automatically detects upcoming meetings. One click, and you’ll have every conversation captured and easy to find." (wraps to 4 lines, h119)
   - Media: `--cols:2.4306fr`, `feature-calendar` 2732/1124
- Item boxes @1440 (y/h): 7460/665, 8249/665, 9038/665, 9826/745, 10695/694.
- No hover or scroll animation on feature images (the `--cols` did not change on hover or over time).

---

## 10. MCP connector (section 8)

- **Section:** bg `#f7f7f2`, `padding:128px 0` (md) / 80px. Container px 40.
- Kicker "Granola MCP Connector".
- H2 "Use your meeting notes anywhere" (big H2 style, `max-width:17ch`; 1193×210 @1440).
- CTA "Download for free" (mt 40).
- Block at `margin-top:128px` (md) / 80: hr `#d9d9d9`, then a grid `1fr 28rem` (740/448), gap 12:
  - h3 "No more copy-pasting meeting transcripts into AI tools." (`max-width:30ch`)
  - p "Connect Granola in a few clicks and your AI apps become aware of your meeting notes. So you can power what you’re working on with what you talked about." (22px/29.7)
- **Connector strip** at `margin-top:128px` (md) / 80:
  - Wrapper `overflow-x:clip`. Inner `margin-inline:-15vw; width:130vw`.
  - Scroller: `display:flex; align-items:center; overflow-x:auto` (hidden scrollbar), `padding-inline: 50%` (936px @1440), h154.
  - Items: 11 connectors repeated **5×**, in order Bolt, Figma, Manus, Replit, OpenAI, Claude, Cursor, Lovable, Tasklet, v0, Duckbill.
    - Files: `assets/bolt.svg, figma(1).svg, manus.svg, replit(1).svg, openai.svg, claude.svg, cursor(1).svg, lovable(1).svg, tasklet.svg, v0.svg, duckbill.svg` (live `/connectors/*.svg`).
  - Each item: `padding:0 22px` (md) / 12px. Inner tile **154×154** (md) / 112×112, `border:1px solid rgba(0,0,0,.1)`, bg white, `will-change:transform`. Logo img `size:55%`, object-contain.
- **Motion** (rAF, only while intersecting):
  - Auto-scroll `scrollLeft += 30px/s` (dt capped at 100ms). Measured ~29.4px/s.
  - Paused while pointer is down (drag); a user scroll resets the base.
  - Infinite: the wrapper (`repeat`) wraps scrollLeft when it jumps more than one clientWidth.
  - Every frame, per tile:
    - `i = min(|tileCenterX - vw/2| / (vw/2), 1)`
    - `scale = 0.59 + 0.41 * cos(i * π/2)` (1.0 at center, 0.59 at edges), set via the CSS `scale` property
    - Tiles get `translate: (m[k] - m_center)px 0` so gaps stay constant after scaling: cumulative offset `m[n] = m[prev] + tileW*(s[prev]+s[n])/2 + padding*2 - (c[n]-c[prev])`, normalised so the tile at viewport center has 0 offset.
  - Reduced motion: no autoscroll or scaling.

---

## 11. Pricing CTA (section 9)

- **Section:** `position:relative; overflow:hidden`, h749 (desktop) / 532 (390).
- **Background:** `<img>` `assets/pricing-bg.jpg` (1564×837), absolute fill, object-cover.
- **Inner:** max-w 1280 container, `padding: 96px 32px 0` (lg:px-8, md:pt-24). Mobile: `64px 16px 0` (sm:px-6 = 24).
- **Card** (x336 y12765 w768 h653 @1440):
  - `max-width:768px; margin:0 auto`, radius **28px 28px 0 0**, bg `#f7f7f2`, `padding:28px 48px 96px` (lg) / `28px 24px 64px`, shadow `0 4px 50px rgba(54,54,53,.25)`. It sits flush with the section bottom.
  - Traffic lights: three 14px dots (`#FF736A`, `#FEBC2E`, `#19C332`), border .5px rgba(0,0,0,.1), gap 10.
  - Content: `padding-top:56px` (md) / 40, flex-col, gap 40 (md) / 24, items-start.
    - H2 "Unlimited meeting notes for free": quadrant **88px/0.98** (86.24px) at lg; md 60, sm 48, base **36px/35.28**. ls -0.01em, balance. 672×259 @1440 (3 lines).
    - p "Take as many notes as you'd like. Upgrade to view and work with notes older than 30 days.": melange 24px/32px (lg:text-2xl; sm:text-xl 20/28; base 16/20), `max-width:42ch`.
    - Buttons: row gap 20 (sm+) / column gap 12, w-full on mobile. "Download for free" (primary dark, 199×56) + "View pricing" (outline, 141×56, href `/pricing`).

---

## 12. Footer (section 10) and footer reveal (section 11)

- **Footer:** `margin-top:64px`. Section: container max-w 1280, px 40 / 16, flex-col, gap 112 (lg) / 80 (md) / 64.
- Inner text defaults: melange, `line-height:.95`, `letter-spacing:.02em`, `#292929`.
- **Top row:** `md:flex md:justify-between` (mobile: 2-col grid, gap 32×24).
  - Left: column "Features".
  - Right: group `md:flex md:justify-end` with gap-x 80 (lg) / 48, containing the other three columns.
  - Column: flex-col, gap 6, items-start.
  - Heading: quadrant 24px/22.8px (0.95), ls -0.24px, `padding:4px 0; margin-bottom:8px`.
  - Link:
    - melange 14px, line-height 13.3px, ls .28px; `min-height:24px`; `padding:2px 0` (md) / `8px 0`
    - Always `text-decoration: underline`, decoration color transparent, `text-underline-offset:2px`
    - **Hover:** only `text-underline-offset` changes (2px → 4px), with `transition: all 150ms cubic-bezier(.4,0,.2,1)`. The class `hover:decoration-tertiary` is in the markup but has **no generated CSS rule** on the live site, so the underline stays transparent and **there is no visible hover change**. Replicate as-is (the underline stays invisible).
  - **Features** (@x120): Notepad `/`, Chat `/chat`, Mobile (button → phone modal)
  - **Product** (@x754): Pricing `/pricing`, Enterprise `/enterprise`, Integrations `/integrations`, AI notepad vs notetaker `/ai-note-taker`, For sales `/use-cases/sales`, For product management `/use-cases/product`, MCP `/mcp`, Explore more… `/explore`
  - **Company** (@x1000): Customers `/customers`, Careers `/jobs`, Press `https://example.com/press`, Events `/events`, Startup program `/startups`, Student program `/students`, Nonprofit program `/nonprofits`
  - **Resources** (@x1200): Blog `/blog`, Security `/security`, Transparency `/transparency`, Help Center `https://example.com/help-center`, Status `https://example.com/status`, Affiliates `https://partners.dub.co/granola?utm_source=website&utm_medium=Footer&utm_campaign=Affiliates`, Contact us `/contact`, Terms `/policies`, Privacy `https://example.com/privacy`, License `/third-party-licenses`
- **Bottom row:** `margin-top:64px; padding-bottom:64px`, flex, justify-between, items-center.
  - Social icons 20×20, gap 16, color `#72726e`, hover `#292929` (150ms). Files `assets/social-linkedin.svg`, `social-twitter.svg`, `social-youtube.svg`. Links: linkedin.com/company/meetgranola, twitter.com/meetgranola, youtube.com/@meetgranola.
  - Right: stacked pair (grid-pile, `group`), 14px `#72726e`, right-aligned.
    - "© Granola, Inc. 2026": on hover `translateX(-24ch)`, `transition: transform .7s cubic-bezier(.87,0,.13,1)`.
    - "Made with ♥ in Shoreditch": `clip-path: inset(0 0 0 100%)` → `inset(0)` on hover, `.5s cubic-bezier(.87,0,.13,1)`, hover delay .1s (md+ only).
- **Wordmark:** container `padding:40px 0 48px` (md) / pb 80, pointer-events none. SVG `assets/granola-footer-wordmark.svg` (viewBox 0 0 1498 316) at w100% (1200×253 @1440), fill currentColor `#292929`.

**Footer reveal** (JS `FooterReveal`, framer-motion `useSpring(0,{stiffness:260, damping:24, mass:.9})` bound to `y` of the `.min-h-svh` page wrapper):
- **Panel** `.footer-reveal-panel`: `position:fixed; inset-inline:0; bottom:0; height:260px; z-index:-1; overflow:hidden; contain: layout paint; background:#b2c248`.
  - Six stacked `<img>` (fill, object-cover, `opacity:0`, `will-change:opacity`): `footer-1.jpg` … `footer-6.jpg` (1024×576).
  - Reduced motion: the first image is shown.
- **Behaviour:** when the 1px sentinel at the page bottom is intersecting and the user wheels or touch-drags *down*:
  - `acc += deltaY` (never below 0)
  - `y = -260 * (1 - exp(-acc/500))`, spring-animated. The page lifts up to reveal the panel.
  - While lifted (acc > 0 or |y| ≥ .5), the images cycle: `index = floor(gsapTime / 0.15) % 6`, set by toggling `opacity` 0/1 (hard cut every **150ms**).
  - 0.14s after the last wheel event (or on touchend): `acc = 0`, spring back to 0.
- Wheel and touch listeners are passive.

---

## 13. Interaction and hover summary (measured before/after)

| element | rest | hover | transition |
|---|---|---|---|
| nav text link | transparent, `#292929` | bg `#f7f7f2` | colors 200ms `cubic-bezier(.4,0,.2,1)` |
| Talk to sales | transparent, border rgba(71,67,42,.2) | bg rgba(98,90,34,.06) | 200ms |
| nav Download (top) | rgba(98,90,34,.06) | rgba(86,81,46,.12) | 300ms `cubic-bezier(0,0,.2,1)` |
| nav Download (scrolled) | `#5b6f00`, white | `#5b6f00` at 90% | 300ms |
| hero badge | `#f7f7f2` | `#eaebe5`; chevron translate-x 2px | 150ms |
| hero CTA | `#5b6f00` | `#4c5616` | none (instant) |
| dark CTA | `#292929` | `#4e4d4b` | none |
| View pricing | transparent | rgba(98,90,34,.06) | none |
| dropdown row | transparent | `#f7f7f2`, subtitle → `#292929` | all 150ms |
| intro icon rows | – | turbulence wobble, 100ms steps | – |
| HIW tab | `#9e9e99` | (no hover change; click scrolls) | color 500ms |
| testimonial card | tile white, pattern `#DEDEDE` | tile pink/green/yellow/blue, pattern+border `#666666` | 300ms |
| footer link | underline transparent, offset 2px | offset 4px only (underline stays transparent, so no visible change) | all 150ms |
| footer social | `#72726e` | `#292929` | 150ms |
| copyright | "© Granola, Inc. 2026" | slides −24ch, "Made with ♥ in Shoreditch" clips in | .7s / .5s (+.1s) `cubic-bezier(.87,0,.13,1)` |

Focus rings use `ring-focus-ring` (`--oats-border-focus: #b2c24899`).

---

## 14. Motion inventory (everything that moves)

1. Nav background/border/shadow on scroll > 0 (300ms ease-out). Features dropdown (framer, 300ms `[.165,.84,.44,1]`). Mobile menu (framer default spring, y -20 → 0).
2. Hero scroll-driven: preview shrink, three floating images converge + fade, video-thumb parallax (§3A).
3. Hero app-window GSAP loop (~8.2s) with dancing bars, spinner, pulsing caret, gradient-text sweep (§3B).
4. Video thumbs: 5s looping muted mp4s on canvas.
5. "For the doers" headline slides under the dark block (view timeline).
6. How-it-works: sticky tabs, progress fill (view timeline), swipe-out, active-step GSAP demos (step 1 typing + enhance).
7. Chat card typing / blink / select / chip spring loop (~6s per prompt).
8. MCP connector strip: 30px/s autoscroll with cosine scale falloff.
9. Footer copyright hover swap; footer reveal overscroll spring with 150ms image flicker.
10. Hover transitions (§13); intro-icon turbulence.

Libraries detected: **GSAP 3.14.2** (`window.gsapVersions`, used via ES import; no `window.gsap` global and no ScrollTrigger), **framer-motion** (`window.MotionIsMounted`), Next.js. **No Lottie, no Lenis/smooth-scroll**, no page-level load/entrance animations: H1 and copy are opacity 1 at first paint and nothing fades in on scroll except the items listed above.

`document.getAnimations()` at load: 58, all CSS (scroll-timeline anims, bars, spinner, pulse, bg-slide). During scroll: 64.

Unused keyframes in the stylesheet (not on this page, ignore): marquee*, logoStroke*, shimmer, wiggle, accordion, chroma*, etc.

`prefers-reduced-motion: reduce` disables the footer image cycling, MCP autoscroll and chat-chip sweep, and shows the first footer image.

---

## 15. Things not measured / caveats

- The cookie banner (iubenda) was blocked for measurement and is not part of the clone.
- The Mac/Windows/iOS/Android CTA labels are OS-dependent. Desktop values were measured with a macOS UA ("Download", "Download for free"); mobile with an iPhone UA ("Get the app", "Download for iOS", "Get the Desktop app").
- The "send to phone" modal (behind "Download for mobile" / "Granola for mobile") and the webcam easter egg (clicking a video thumb requests the camera and swaps it into the tile) were not opened or measured.
- The chat card's per-prompt duration depends on prompt length (45ms/char + 400ms delay + 2400 + 650ms).
- All headline, paragraph and button labels listed are verbatim from the live DOM (straight apostrophes in this file stand in for the site's curly ’ in a few places; the site uses ’ and “ ”).
- For the asset list and missing-file report, see `ASSET_MANIFEST.md` in this directory.
