# Frontend implementation roadmap

## Completed in this PR
- Centralized clinic contact details in `src/data/clinicContact.ts`.
- Reused those details in the Contact page and treatment booking information.
- Preserved existing draft content and launch-review warnings.

## Independent implementation tasks (assistant)
- Audit and consolidate repeated contact information in the remaining pages.
- Validate all internal routes against `src/App.tsx` before launch.
- Organize draft content and list missing source/approval dependencies.
- Improve accessibility and responsive layout in existing content pages.

## Sue's React learning track (do not implement for her)
1. **Treatment filters:** Build a controlled category filter with `useState`, typed category values, and a derived filtered list.
2. **Reusable TreatmentCard:** Extract the repeated treatment card markup into a typed component with props.
3. **Mega menu:** Implement a keyboard-accessible treatment navigation with responsive behavior.
4. **Footer responsive polish:** Finish the locally developed footer, then add mobile layout and link checks.

## Launch blockers requiring Nancy's approval
- Treatment pricing, medical claims, downtime, booking and cancellation policies.
- Final staff names/roles, images and permissions, booking portal and inquiry form URLs.
- Clinic address, phone, hours, social links and legal policy pages.

**Important:** The footer currently on `main` is an old placeholder. Sue has a newer local footer. Do not replace or redesign the footer in automated PRs until her local changes are committed.
