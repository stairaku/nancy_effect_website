# Pre-launch route and content audit

Reviewed against the current React route definitions and treatment slugs on 2026-11-18. This is a source-code review, **not** a browser or build test.

## Confirmed broken or missing destinations
- **Footer:** `/treatments/laser-treatments` is not a catalog slug. Existing alternatives: `/treatments/fotona-laser-skin-treatments` and `/treatments/fotona-laser-hair-removal`. Choose with Nancy which to promote. Reserved for Sue's footer work.
- **Footer:** Privacy Policy and Terms of Service appear as plain text; no corresponding routes are defined. Obtain approved legal copy before creating links.
- **Booking:** online booking portal and new-client inquiry form URLs are not yet available in the React site.
- **Results:** `ResultsPage.tsx` is currently a placeholder heading; approved before/after media and consent are needed.

## Confirmed existing destinations
- Main routes: `/`, `/the-nancy-effect`, `/treatments`, `/treatments/:slug`, `/results`, `/about`, `/faq`, `/contact`, `/financing`, `/book`.
- Treatment slugs: `neuromodulators`, `dermal-fillers`, `radiesse`, `prp-prf-injections`, `fat-dissolving-injections`, `fotona-laser-hair-removal`, `fotona-laser-skin-treatments`, `microneedling`.

## Source/content approval blockers
- Confirm all clinical descriptions, risks, pricing, duration and downtime with Nancy.
- Confirm deposits, refunds, cancellations, rescheduling, and consultation terms.
- Confirm contact details, hours, staff roles and financing terms.
- Confirm ownership/consent for before-and-after photos and testimonials.
- Verify booking, financing and social URLs before enabling outbound CTAs.

## Next engineering steps
- **Assistant:** centralize repeated non-UI data, continue audit, create missing-content checklists, fix safe broken links outside Sue's reserved components.
- **Sue:** footer polish, typed `TreatmentCard`, category filter with `useState`, accessible mega menu.
- **QA:** run `npm run build`, `npm run lint`, test routes and layouts on mobile, tablet and desktop. None of these checks have been executed by this audit.
