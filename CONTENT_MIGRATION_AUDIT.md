# Squarespace content migration audit (draft)

Source: user-provided saved Squarespace pages (November 2026). Do not publish without Nancy's review.

## Confirmed migration gaps
- The current React treatment data includes eight summaries, but the saved **All Treatments** page lists many individual offerings and packages (e.g. mini/full lip filler, HA filler, tear trough filler, PRP and PRF, Fotona4D, Advanced 5D and more).
- Each treatment detail HTML contains substantial sections beyond its summary, including service details, FAQs, booking policies, and calls to action.
- Financing page contains Medicard details, including approval and payment claims that must be reverified.
- The original About page includes **Nova Medical Spa**, **Amelia Riles**, and **The Atelier** in template-like text. Do not migrate these as factual copy.
- The About page also names staff and medical director; confirm roles, names and permissions before publication.
- Before/after imagery and client testimonials require approval and rights/consent checks.
- Pricing, deposit, cancellation and refund policies must be confirmed as current.

## Implementation order
1. Complete structured data for full treatment catalog and detailed pages.
2. Migrate FAQ and booking policies into reusable content data.
3. Migrate About, Financing and Contact; mark uncertain copy for Nancy's review.
4. Inventory and map media files to pages.
5. Run TypeScript build, review UI, then merge only after approval.

## Current state
The draft PR is **not** a complete migration. It must remain unmerged until the above checks are completed.
