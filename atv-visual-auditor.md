---
name: atv-visual-auditor
description: Heuristic review of generated HTML/Tailwind templates to prevent low-legibility issues, check contrast, responsive flow, and CTA visibility.
---

# Skill: Adventure Site Visual Auditor
# Context: Heuristic review of generated HTML/Tailwind templates.
# Target: Quality assurance check.

## Purpose
Act as a strict UI/UX inspector. Run immediately after components are built to prevent "over-designed" interfaces or low-legibility issues caused by aggressive color pairing.

## Verification Checklist
1. **Contrast Check:** Are text tags overlaid on dynamic dark background components perfectly legible? (Ensure text uses `text-zinc-100` or `text-white`).
2. **CTA Placement:** Is the main action ("Reservar") buried under layout noise? Ensure it stands out cleanly.
3. **Responsive Flow:** Are large multi-column specs tables wrapping gracefully into singular block rows on small screens (`grid-cols-1 md:grid-cols-3`)?
4. **Output Format:** Provide direct, clean code rewrites for lines that violate these rules.
