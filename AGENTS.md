# AGENTS.md

## Project

This repo contains the AYSO Marketplace prototype.

## Brand source of truth

Use `docs/style-guide/DESIGN.md` as the brand reference.
Use the AYSO logo assets in `assets/logos/`.
Do not redraw, regenerate, distort, or reinterpret the AYSO mark.

## Design direction

The marketplace should feel like a modern Shopify-like ecommerce experience:

* Clean card-based layout
* Strong product and offer thumbnails
* Premium but approachable
* Mobile-responsive
* Easy for AYSO staff to understand
* Polished enough to feel like a final site

## Technical direction

This is currently a static prototype.
Use HTML, CSS, and JavaScript unless the existing project already uses another framework.
If simulating backend behavior, use local JavaScript state or localStorage.

## Page requirements

The prototype should include:

* A final-feeling Marketplace page
* A navigation-accessible Admin page for simulated backend inputs
* A navigation-accessible Explainers page
* A polished AYSO Benefits page

## Marketplace requirements

The main Marketplace page should not include leadership notes, internal commentary, or explainers.
Move those items to the Explainers page.
The Marketplace page should feel like a live ecommerce experience.

## Admin/backend simulation requirements

The Admin page should allow editing of:

* Sponsorship offer information
* Jersey placement pricing
* Budget
* AYSO National rev-share
* AYSO Benefits offers

When a budget is entered, automatically show a 20% AYSO National rev-share.
Example: if the budget is $100,000, show $20,000 as the AYSO National rev-share.

## AYSO Benefits requirements

Create a parent-friendly benefits page with offer cards for:

* Fanatics discount
* Disney’s Descendants tour
* LA Galaxy / MLS offer
* Disney World tickets

Each benefit should include:

* Brand thumbnail or logo area
* Offer name
* Discount amount
* Discount code field
* Unique redemption link field
* CTA button

Do not invent final external redemption URLs.
Use editable placeholder links unless verified URLs already exist in the repo.

## Brand thumbnails/logos

For AYSO, use the logo assets in `assets/logos/`.
For outside brands where official logo files are not available, use clean placeholder logo tiles or editable image URL fields.

## Constraints

* Preserve the current working prototype where practical.
* Do not delete useful content; move internal/explainer content to the Explainers page.
* Keep the project easy to run locally.
* Make minimal, high-confidence changes.
* Use clear file structure.

## Done means

* Marketplace page feels like the final user-facing site.
* Internal notes are removed from the Marketplace page.
* Explainers have their own page.
* Admin page can update marketplace sponsorship values.
* Admin page can update AYSO Benefits offers.
* AYSO Benefits page looks polished and useful for younger parents.
* Changes can be tested locally.
