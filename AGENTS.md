# AGENTS.md

Router for this speculative Novenworks demo. Read the linked file; do not dump new process here.

| Need | Canonical file |
| --- | --- |
| What this repo is, how to run it, speculative disclosure | [README.md](README.md) |
| Verified facts, conflicts, agency check, omissions | [docs/RESEARCH-BRIEF.md](docs/RESEARCH-BRIEF.md) |
| Downloaded first-party files, dimensions, provenance | [docs/ASSET-INVENTORY.md](docs/ASSET-INVENTORY.md) |
| Which photograph belongs on which section | [docs/ASSET-PLAN.md](docs/ASSET-PLAN.md) |
| Responsive QA notes | [docs/QA-NOTES.md](docs/QA-NOTES.md) |
| Operator pitch, email, what not to say | [docs/OUTREACH-NOTES.md](docs/OUTREACH-NOTES.md) |
| BEFORE/AFTER capture rules and files | [docs/DELIVERABLES.md](docs/DELIVERABLES.md) |
| Decision log | [CHANGELOG.md](CHANGELOG.md) |

## Hard rules (pointers, not a second spec)

- Fact integrity and asset gates: `docs/RESEARCH-BRIEF.md`, `docs/ASSET-INVENTORY.md`, `docs/ASSET-PLAN.md`
- `/outreach` is operator-only: noindex, not in prospect nav, footer, or sitemap
- GitHub destination: `Novenworks/Boostrom-Construction-Demo`. Existing `main` had prior work; this Cursor rebuild lives on `cursor-clean-rebuild`
- Do not treat prior GitHub `main` as source material
- Do not present Wix template/stock photography as Boostrom completed work

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
