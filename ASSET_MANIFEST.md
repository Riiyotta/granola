Source: the original live marketing site (URL withheld)

# Asset manifest: Granola homepage

This lists every image, video, SVG and font the live homepage requests: network requests captured at 1440, 1280 and 390, plus lazily or randomly selected assets referenced in the JS bundles.

"Local file" is relative to `public/`. A local file is marked **identical** when its md5 matches the live original. It is marked **recompressed** when it has the same name and pixel dimensions but was re-encoded (saved via Next's image optimizer); these are fine to use.

No Lottie files or JSON animations are loaded. The only videos are the call clips.

## Fonts (already present in public/fonts/)
| live URL | local |
|---|---|
| /_next/static/media/468f6ca7592b58d2-s.p.woff2 (melange 300) | fonts/468f6ca7592b58d2* |
| /_next/static/media/20e854a24a032470-s.p.woff2 (melange 400) | fonts/20e854a24a032470* |
| /_next/static/media/5b7dea13d8cb4b8a-s.p.woff2 (melange 500) | fonts/5b7dea13d8cb4b8a* |
| /_next/static/media/24ab849dc6206ce6-s.p.woff2 (melange 600) | fonts/24ab849dc6206ce6* |
| /_next/static/media/cf3c2d32f7e0e5c5-s.p.woff2 (melange 400 italic) | fonts/cf3c2d32f7e0e5c5* |
| /_next/static/media/c7f97008bd38275e-s.p.woff2 (quadrant 400) | fonts/c7f97008bd38275e* |

## Nav
| live path | natural size | used at | local | status |
|---|---|---|---|---|
| /nav-icon-notes-rebrand.png | 414×414 | 44×44 | assets/nav-icon-notes-rebrand.png | identical |
| /nav-icon-chat-rebrand.png | 414×414 | 44×44 | assets/nav-icon-chat-rebrand.png | identical |
| /nav-icon-ios-rebrand.png | 414×414 | 44×44 | assets/nav-icon-ios-rebrand.png | identical |
| /blogImages/watchog.jpg | 2400×1260 (live original) | 267×140 | assets/watchog.jpg | recompressed, 1920×1008 (fine at display size) |
| inline SVG logo (viewBox 0 0 5017 1350) | – | h28 | assets/granola-nav-logo.svg | **extracted this run** |

## Hero
| live path | natural | local | status |
|---|---|---|---|
| /homepageAssets/intro-icons/roboto.svg | – | assets/roboto.svg | identical |
| /homepageAssets/intro-icons/lock.svg | – | assets/lock.svg | identical |
| /homepageAssets/intro-icons/tick.svg | – | assets/tick.svg | identical |
| /homepageAssets/floating-items/grey.jpg | 576×1024 | assets/grey.jpg | recompressed |
| /homepageAssets/floating-items/explosion.jpg | 819×1024 | assets/explosion.jpg | recompressed |
| /homepageAssets/floating-items/green-poster.jpg | 563×1024 | assets/green-poster.jpg | recompressed |
| inline badge chevron | 16×16 | assets/hero-badge-arrow.svg | **extracted this run** |
| inline CTA arrow | 16×16 | assets/cta-arrow.svg | **extracted this run** |
| inline "Available for…" platform icon | 40×40 viewBox, shown 24×24 | assets/hero-platforms-icon.svg | **extracted this run** |

### Call videos (random pair per load; `-512` variants at ≥768px)
Path pattern: `/homepageAssets/call-videos/{name}-call{-512?}.mp4` and `…{-512?}-poster.jpg`.

Names: jack, camilla, paavan, rob, sirine, naomi, caroline, nickt, sean, clem, jullien, nickfil, will, angus, xiuting.

- mp4: h264, 5.0s. `-512` is 512×342; the non-512 is 256×170.
- Posters: 510×342 / 254×170.
- Playback: muted, loop, playsInline, drawn to canvas.

| status | files |
|---|---|
| already present before this run | homepageAssets/call-videos/sean-call-512.mp4, sean-call-512-poster.jpg, xiuting-call-512.mp4, xiuting-call-512-poster.jpg |
| **downloaded this run** (all 60, into `public/assets/call-videos/`) | {jack,camilla,paavan,rob,sirine,naomi,caroline,nickt,sean,clem,jullien,nickfil,will,angus,xiuting}-call{.mp4, -poster.jpg, -512.mp4, -512-poster.jpg}. 56 of these were missing; the 4 sean/xiuting `-512` files are duplicated here so the set is complete in one folder (2.0 MB total). |

## Logo wall ("Trusted by teams we admire")
All **identical** to the local files:

| live path (/homepageAssets/logoWall/…) | local |
|---|---|
| posthog.svg | assets/posthog.svg |
| intercom.svg | assets/intercom.svg |
| figma.svg | assets/figma.svg (NOT `figma(1).svg`) |
| brex.svg | assets/brex.svg |
| ramp.svg | assets/ramp.svg |
| replit.svg | assets/replit.svg (NOT `replit(1).svg`) |
| lovable.svg | assets/lovable.svg (NOT `lovable(1).svg`) |
| cursor.svg | assets/cursor.svg (NOT `cursor(1).svg`) |
| bumble.svg | assets/bumble.svg |
| asana.svg | assets/asana.svg |
| vanta.svg | assets/vanta.svg |
| linear.svg | assets/linear.svg (NOT `linear(1).svg`) |
| star-slice.jpg (60×1000) | assets/star-slice.jpg (recompressed) |

Also: the inline plus separator is `assets/logo-wall-star.svg`, **extracted this run**.

## How it works
| live path | natural | local | status |
|---|---|---|---|
| /homepageAssets/how-it-works/nature-2.png (actually JPEG data) | 1024×682 | assets/nature-2.jpg | recompressed |
| /homepageAssets/how-it-works/nature-3.png (JPEG data) | 1024×682 | assets/nature-3.jpg | recompressed |

## Testimonials
| live path | natural | local | status |
|---|---|---|---|
| /homepageAssets/testimonials/karri-saarinen.png | 552×553 | assets/karri-saarinen.png | recompressed |
| /homepageAssets/testimonials/olivia-moore.png | 552×552 | assets/olivia-moore.png | recompressed |
| /homepageAssets/testimonials/guillermo-rauch.png | 552×561 | assets/guillermo-rauch.png | recompressed |
| /homepageAssets/testimonials/deedy-das.png | 552×561 | assets/deedy-das.png | recompressed |
| /homepageAssets/testimonials/nat-friedman.png | 552×553 | assets/nat-friedman.png | recompressed |
| /homepageAssets/testimonials/a16z.svg | 64×30 | assets/a16z.svg | identical |
| /homepageAssets/testimonials/menlo-ventures.png | 204×80 | assets/menlo-ventures.png | recompressed |
| /connectors/linear.svg | 127×32 | assets/linear(1).svg | identical |
| /connectors/vercel.svg | 123×25 | assets/vercel.svg | identical |

## Features
| live path | natural | local | status |
|---|---|---|---|
| /homepageAssets/features/feature-humans.webp | 2732×1124 | assets/feature-humans.jpg | same dims, JPEG re-encode |
| /homepageAssets/features/feature-private.webp | 2732×1124 | assets/feature-private.jpg | same |
| /homepageAssets/features/feature-mobile-left.webp | 939×1127 | assets/feature-mobile-left.jpg | same |
| /homepageAssets/features/feature-mobile-right.webp | 1776×1124 | assets/feature-mobile-right.jpg | same |
| /homepageAssets/features/feature-calendar.webp | 2732×1124 | assets/feature-calendar.jpg | same |
| /homepageAssets/features/meeting-apps/bg.webp | – | assets/bg.webp | identical |
| /homepageAssets/features/meeting-apps/zoom.png | 371×371 | assets/zoom.png | recompressed |
| /homepageAssets/features/meeting-apps/teams.png | 1280×1352 | assets/teams.png | recompressed |
| /homepageAssets/features/meeting-apps/google-meet.svg | 109×86 | assets/google-meet.svg | identical |

## MCP connector strip (/connectors/…)
All **identical**:

| live file | local |
|---|---|
| bolt.svg | assets/bolt.svg |
| figma.svg | assets/figma(1).svg |
| manus.svg | assets/manus.svg |
| replit.svg | assets/replit(1).svg |
| openai.svg | assets/openai.svg |
| claude.svg | assets/claude.svg |
| cursor.svg | assets/cursor(1).svg |
| lovable.svg | assets/lovable(1).svg |
| tasklet.svg | assets/tasklet.svg |
| v0.svg | assets/v0.svg |
| duckbill.svg | assets/duckbill.svg |

## Pricing / footer
| live path | natural | local | status |
|---|---|---|---|
| /homepageAssets/pricing-bg.jpg | 1564×837 | assets/pricing-bg.jpg | recompressed |
| /homepageAssets/footer/footer-1.jpg … footer-6.jpg | 1024×576 | assets/footer-1.jpg … footer-6.jpg | recompressed |
| inline footer wordmark (viewBox 0 0 1498 316) | – | assets/granola-footer-wordmark.svg | **extracted this run** |
| inline social icons | 20×20 | assets/social-linkedin.svg, social-twitter.svg, social-youtube.svg | **extracted this run** |

## Icons not saved as files
UI icons are Lucide/Heroicons, rendered inline. Use `lucide-react` equivalents:

- mic, video, phone (rotate 135°)
- paperclip, sliders-horizontal
- calendar, users, plus (meta chips)
- sparkles ("Generate notes")
- arrow-up (send)
- phone/smartphone ("Download for mobile")
- menu / x (mobile nav)

The Apple logo in the nav Download button is inline and not extracted; use any 20×16 Apple glyph.

## Pre-existing extras in public/ (not requested by the live homepage)
- `_next/static/media/green1/green2/pink1/pink2*.png`
- `styles/*.css`
- `favicon.svg`
