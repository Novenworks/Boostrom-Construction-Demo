# Boostrom Construction — speculative redesign

This repository is a **speculative Novenworks redesign** of [Boostrom Construction](https://www.boostromconstruction.com/). Boostrom Construction is **not** represented as a Novenworks client. Novenworks was not hired for this work.

Business marks, the Boostrom Construction name, and photography remain the property of their owners. They are used here only to show how the existing business could be presented more clearly.

## Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS

## Local setup

```bash
npm install
npm run process-assets   # optional if public/images already populated
npm run dev
```

Production build:

```bash
npm run build
npm start
```

Operator-only route: `/outreach` (noindex, unlinked).

## Contact truth

Estimate requests use the first-party phone and email. The homepage form opens a `mailto:` to `joshua@boostromconstruction.com`. It does not post to a fake backend.
