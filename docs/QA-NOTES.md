# QA notes

Date: 13 Sep 2026. Production `next start` on localhost:3011 after `next build`.

## Desktop ~1440px

- Sticky espresso header, white logo, phone CTA — pass
- Hero: vanity readable, overlay contrast, headline not viewport-consuming — pass
- Proof strip four columns — pass
- Service cards 2×2, honest crops — pass
- Work grid captions wrap — pass
- Approach split photos — pass
- Form fields ≥ 44px, mailto disclosed — pass
- Footer contacts + CSLB lookup; `/outreach` not linked — pass
- No horizontal overflow; no pageerrors — pass

## Mobile ~390px

- Logo + Call + hamburger — pass
- Menu opens/closes, 44px rows — pass
- Hero CTAs wrap, type readable over vanity — pass
- Service cards stack — pass
- No horizontal overflow; no pageerrors — pass

## Intermediate 768px

- No overflow — pass

## `/outreach`

- noindex metadata; not in sitemap/nav/footer
- Image 404s until capture files exist (expected pre-capture)
