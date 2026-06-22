# AYSO Brand Design System

**Version:** 1.0
**Last updated:** May 2026
**Status:** Draft — for National Review
**Format:** DESIGN.md — optimized for AI design tools (Claude Design, Stitch, v0, Cursor, etc.)
**Companion document:** AYSO Product Design System (governs MyAYSO app and digital product surfaces)

---

## 0. How to Use This Document

You are an AI design tool generating creative work for **AYSO — American Youth Soccer Organization**. Read this entire document before generating anything. Apply it to every output. When this document and a user prompt conflict, this document wins for brand-defining decisions (logo, color, type, voice). The user prompt wins for content, layout, and context-specific creative direction.

**The single most important instruction:** AYSO photography and real-world texture do the heavy lifting. Restraint is the brand's superpower. When in doubt, simplify, and let the mark and the people in the photograph carry the composition.

**The system has two registers:**
- **Register A (Institutional)** — Nike-clean, restrained, confident. National communications, official documents, championships, registration, signage.
- **Register B (Lifestyle)** — Aviator Nation × modern retro Americana. Fan wear, social, regional events, '64 Heritage Collection, season openers.

Both registers share the same logo, color tokens, and typography. The aesthetic shifts through grading, texture, and layout posture — never through changing the foundation.

---

## 1. Brand at a Glance

**AYSO** (American Youth Soccer Organization) is a 60-year-old, volunteer-powered, national nonprofit running community-based youth soccer for **400,000+ players across 500+ regions**. Founded 1964, Torrance, California. The original American youth soccer culture — predating MLS, predating the World Cup ever coming to America, predating professional soccer here as a thing.

**Core idea:** Every Child Plays.
**Founding principle:** No tryouts. No cuts. Balanced teams. Half a game minimum, every game.
**Brand position:** The community youth soccer experience that still belongs to the kids who play it, the families who raise them, and the volunteers who show up on Saturday morning.

**Brand is written:** AYSO (one word, all caps, never "AY/SO" or "Ayso")

**Reference brands:** Aviator Nation (lifestyle warmth, modern retro Americana) × Nike (production restraint, athletic discipline, photography-forward storytelling). Both held together by the AYSO heritage badge and a single typography system.

---

## 2. Operating Principles

Every design decision should be testable against these principles.

1. **Every Child Plays.** Designs must be legible and operable for the widest possible audience — 6-year-old players, 70-year-old grandparents, volunteer coaches reading on a phone in the sun. Accessibility is brand.
2. **Genuine over polished.** Real parents, real volunteers, real players. Always. Stock photography of children is forbidden.
3. **Quietly energetic.** Warm and active without being loud. Saturated accents are earned, not sprinkled.
4. **Photography does the work.** The brand's most powerful asset is its imagery. Design frames it, never competes with it.
5. **Restraint is the posture.** White space, simplicity, and discipline read premium. Crowding reads cheap.
6. **Volunteer-friendly.** Coaches, refs, and team parents are the spine of the org. Anything they touch must be self-evident on first use, with zero training.
7. **Two registers, one system.** Institutional clean and lifestyle warm both belong — held together by shared color, type, and the AYSO mark.

---

## 3. Logo System — The AYSO Marks

AYSO has two operating marks. Use the right one for the context. All approved logo files are stored in the GitHub repo at `/assets/logos/` and are the canonical source for production use — never regenerate or redraw the marks from scratch.

**Visual reference:** See the file structure and naming convention in Section 3F below. Logo files render directly in GitHub — click any SVG in the repo to preview it.

---

### 3A. The AYSO Badge (Master Mark)

**Description:** A circular seal containing the AYSO square in the center. Around the upper arc: "AMERICAN YOUTH SOCCER ORGANIZATION" in red. Around the lower arc: "EST. 1964" in blue. Outer ring border in black. The square fill is Heritage Blue with the letters AY (top row) and SO (bottom row) in black, set in a Clarendon-family bold slab serif, divided by a horizontal rule.

**Formal name:** The AYSO Badge.
**Conversational name:** the Badge.
**File prefix:** `ayso-badge-`.

**When to use the Badge:**
- Official documents, certificates, championship awards
- Formal signage and dimensional graphics
- The "About AYSO" sections of websites and reports
- Tier I lifestyle merchandise where heritage authenticity is the point
- Annual reports, board materials, NAGM official collateral
- Anywhere AYSO is being represented as an institution

**Construction rules (never violate):**
- Never separate the square from the circular ring in the Badge
- Never recolor outside the approved colorways (see 3D)
- Never rotate, distort, stretch, or skew
- Never place over busy photography without a solid color buffer
- Never reproduce smaller than 1.25 inches (90px) — arc text becomes illegible
- Clear space: minimum 1/4 of the Badge diameter on all sides

---

### 3B. The AYSO Mark (Modern Flex Mark)

**Description:** The standalone AYSO square (without the surrounding circular seal). Square container with AY (top row) and SO (bottom row) in the AYSO Clarendon-family serif letterform, divided by a horizontal rule.

**Formal name:** The AYSO Mark.
**Conversational name:** the Mark.
**File prefix:** `ayso-mark-`.

**When to use the Mark:**
- Modern applications where the Badge would feel too formal
- Apparel branding, hat embroidery, social profile images at small sizes
- Co-branded lockups (AYSO + Region)
- The Lock / Canvas / Remix system (see Section 4)
- App icons, favicons, small UI applications
- Activations and event branding where AYSO needs to feel current

**Construction rules:**
- Letters always remain in the AYSO serif letterform unless executing an approved Remix
- AY always on top row, SO always on bottom, divided by horizontal rule
- Square proportions are exact — never stretch into a rectangle
- Minimum size 0.75 inch (54px) — letterforms must remain legible
- Clear space: minimum 1/2 the cap height of the letters on all sides

---

### 3C. Co-branded Lockup (AYSO + Region)

**Pattern:** AYSO Mark on the left → vertical rule → Region name and identifier on the right.

**Rules:**
- AYSO mark always appears first (left position) — it is always the hero
- AYSO mark must be at least equal in visual weight to the regional element, never smaller
- Vertical rule sits at 50% opacity of the dominant text color
- Regional name in Roboto Bold, all caps; Region number in Space Mono, all caps, smaller
- Lockup reads left-to-right in all left-to-right contexts (no exceptions)
- For exact spacing between the AYSO mark and adjacent text, see the Shim System

**Visual reference for spacing:** ![Shim System](assets/reference-guides/shim-system.png)

Full shim system specifications are documented in `/assets/reference-guides/shim-system.svg`.

---

### 3D. Approved Colorways

Each mark is available in four colorways. The colorway you use depends on the surface the mark will sit on, the register (institutional vs. lifestyle), and the contrast required.

**RWB (Red/White/Blue) — Hero / Brand Default**
- Heritage Blue square fill, Signal Red arc text, black letterforms and outer ring
- The default hero version of the mark
- Use on Field White or Cream surfaces
- Files: `ayso-badge-rwb.svg`, `ayso-mark-rwb.svg`

**White — All-White Treatment**
- Entire mark in pure white (#FFFFFF)
- For maximum contrast on dark backgrounds — Navy, Black, dark photography
- Use when the lifestyle register calls for high-contrast clarity
- Files: `ayso-badge-white.svg`, `ayso-mark-white.svg`

**Field White — Brand-Matched Off-White**
- Entire mark in Field White (#F7F8FA)
- For dark backgrounds where a brand-matched off-white reads more refined than pure white
- Use in Tier I lifestyle merchandise, Aviator Nation register, premium contexts
- Files: `ayso-badge-field-white.svg`, `ayso-mark-field-white.svg`

**Black — Monochrome Treatment**
- Entire mark in Pure Black (#0A0A0A)
- For light backgrounds where a single-color treatment is required
- Use in single-color printing contexts, embroidery on light fabrics, low-contrast applications
- Files: `ayso-badge-black.svg`, `ayso-mark-black.svg`

---

### 3E. Choosing the Right Logo File

The `/assets/logos/` folder contains transparent variants and composite (background-baked) variants of each mark. Use this decision logic to choose the correct file:

**Light backgrounds (Field White, Cream, light photography):**
Use the RWB transparent version. The black elements provide natural contrast.
- `ayso-badge-rwb.svg`
- `ayso-mark-rwb.svg`

**Dark backgrounds (Navy, Black, dark photography):**
Choose between two options:

- **For maximum contrast** — use the White transparent version (pure white, clinical clarity)
  - `ayso-badge-white.svg`, `ayso-mark-white.svg`
- **For brand-refined lifestyle** — use the Field White transparent version (matches brand off-white)
  - `ayso-badge-field-white.svg`, `ayso-mark-field-white.svg`

**Single-color light backgrounds:**
Use the Black transparent version. Suitable for monochrome printing, light fabric embroidery, low-contrast applications.
- `ayso-badge-black.svg`, `ayso-mark-black.svg`

**Uncertain or user-controlled backgrounds (email, web, dark-mode capable apps):**
Use a composite variant with the background baked in. This protects against dark-mode inversion and unpredictable rendering environments. Composites are available for the most common surface combinations:

- `ayso-badge-rwb-on-field-white.svg` — RWB on Field White (default safe choice)
- `ayso-badge-rwb-on-white.svg` — RWB on pure White
- `ayso-badge-white-on-black.svg` — White on Black
- `ayso-badge-field-white-on-black.svg` — Field White on Black
- `ayso-badge-black-on-white.svg` — Black on White
- `ayso-badge-black-on-field-white.svg` — Black on Field White

**Production printing where the paper provides the background:**
Use the transparent version. The unprinted paper becomes the background. No composite needed.

**Never use the transparent version on a Field White or Cream page that might be viewed in dark mode.** Dark-mode rendering can invert the page background, leaving the black elements of the mark with no contrast. Use a composite variant instead for any digital surface where dark mode is possible.

---

### 3F. Registered Mark (®) Versions

The ® symbol provides legal notice that AYSO is a registered trademark. Each colorway is available in both standard and registered (®) versions. The `-r` suffix in the filename indicates the registered version.

**Use the ® version when:**
- The mark appears on goods being sold (apparel, merchandise)
- The mark is featured prominently on marketing materials promoting AYSO
- The piece is a legal document, contract, or vendor agreement
- This is the first or most prominent use of AYSO on the piece

**Use the standard (non-®) version when:**
- The mark appears in casual editorial mentions or social copy
- The use is small enough that the ® symbol would be illegible (small app icons, favicons, embroidery below 0.75 inch)
- The mark has already appeared with ® elsewhere on the same piece (subsequent uses don't require the symbol)
- The use is internal-only and not customer-facing

**When in doubt:** Use the ® version on the first and most prominent placement of the mark, and the standard version for subsequent uses on the same piece.

**Example file pairs:**
- `ayso-badge-rwb.svg` (standard) and `ayso-badge-rwb-r.svg` (registered)
- `ayso-badge-rwb-on-field-white.svg` (standard) and `ayso-badge-rwb-r-on-field-white.svg` (registered)

---

### 3G. File Naming Convention

All logo files follow this pattern:

```
{org}-{mark-type}-{colorway}-{modifier}.{ext}
```

**Components:**
- `{org}` — always `ayso`
- `{mark-type}` — `badge` or `mark`
- `{colorway}` — `rwb`, `white`, `field-white`, or `black`
- `{modifier}` — optional. May include `-r` (registered) and/or `-on-{background-color}` (composite)
- `{ext}` — `svg` or `png`

**Order of modifiers:** `-r` comes before `-on-{background}`. Example: `ayso-badge-rwb-r-on-field-white.svg`.

**Naming rules:**
- All lowercase
- Hyphens only (no underscores, no spaces, no mixed case)
- Power-of-2 sizes for PNG files where applicable (e.g., `-512`)
- No year or version suffixes — version history lives in Git

---

### 3H. Folder Structure

The logo library is organized as follows:

```
/assets/logos/
├── badge/
│   ├── svg/
│   │   ├── ayso-badge-rwb.svg
│   │   ├── ayso-badge-rwb-r.svg
│   │   ├── ayso-badge-rwb-on-field-white.svg
│   │   ├── ayso-badge-rwb-r-on-field-white.svg
│   │   ├── ayso-badge-rwb-on-white.svg
│   │   ├── ayso-badge-rwb-r-on-white.svg
│   │   ├── ayso-badge-white.svg
│   │   ├── ayso-badge-white-r.svg
│   │   ├── ayso-badge-white-on-black.svg
│   │   ├── ayso-badge-white-r-on-black.svg
│   │   ├── ayso-badge-field-white.svg
│   │   ├── ayso-badge-field-white-r.svg
│   │   ├── ayso-badge-field-white-on-black.svg
│   │   ├── ayso-badge-field-white-r-on-black.svg
│   │   ├── ayso-badge-black.svg
│   │   ├── ayso-badge-black-r.svg
│   │   ├── ayso-badge-black-on-white.svg
│   │   ├── ayso-badge-black-on-field-white.svg
│   │   ├── ayso-badge-black-r-on-white.svg
│   │   └── ayso-badge-black-r-on-field-white.svg
│   └── png/
│       └── (512×512 versions of each variant, generated on demand)
└── mark/
    ├── svg/
    │   └── (Mark variants — coming soon)
    └── png/
        └── (Mark PNGs — coming soon)
```

**SVG and PNG distinction:** SVG files are the source of truth — scalable, editable, font-outlined, used by designers and AI tools. PNG files are rasterized snapshots at specific sizes for end-use contexts where SVG isn't supported. PNG files are generated from the corresponding SVG using the project's export workflow.

---

### 3I. Master Source Files (Internal Only)

The editable master files for the Badge and Mark are maintained as Adobe Illustrator (.ai) files outside of this repository. They are accessible only to the AYSO National Brand Team and authorized design partners.

The .ai files contain all colorway variants as separate artboards within a single document, allowing coordinated updates across the variant set. All SVG and PNG files in this repository are exported from these master files — never edit the distribution SVGs directly without first updating the master.

**On-demand formats (EPS, large-format PNG, vendor-specific exports)** are generated from the .ai master only when a specific production need requires them. Standard SVG and 512×512 PNG variants in this repository cover the vast majority of use cases.

---

### 3J. AI Generation Notes

When generating any AYSO mark for output, AI tools should:

1. **Pull the actual file from the repo when possible.** The canonical source files at `/assets/logos/` are the only legitimate AYSO marks. Do not regenerate the badge or mark from scratch.

2. **Choose the correct colorway** using the decision logic in Section 3E. Default to RWB on light backgrounds; default to Field White (lifestyle) or White (high-contrast) on dark backgrounds.

3. **Apply the ® version** when generating commercial or promotional materials. Apply the standard version for casual editorial or small-application contexts.

4. **Respect the construction rules.** Never modify the letterforms, the proportions, or the geometry of the marks. The Lock/Canvas/Remix system (Section 4) governs what may flex.

5. **Apply the Shim System** for spacing between the mark and any adjacent text. See the visual reference at `/assets/reference-guides/shim-system.png`.
#### Definitions

- **AYSO Square** — The inner square inside the Heritage Badge containing
  the AY/SO letterforms. This is the measurement anchor for the entire
  shim system.
- **Main Shim** — Width or height equal to **1/4 the height of the AYSO
  Square**. Default spacing for all primary lockups.
- **Alternative Shim** — Width or height equal to **1/8 the height of the
  AYSO Square** (half the main shim). Reserved for constrained
  applications.

#### When to Use Each

**Main Shim — default for:**
- AYSO mark + headline text lockups
- AYSO mark + region name (co-branded lockups, see Section 3C)
- AYSO mark + program name (Kickstart, EXTRA, Alliance, EPIC)
- AYSO mark + sponsor mark (when permitted)
- All primary marketing and event applications

## Trademark Notice

AYSO® and the AYSO badge are registered trademarks of the American Youth 
Soccer Organization. Use of the ® symbol is 
required in commercial contexts; see DESIGN.md Section 3F for usage rules.

- **Alternative Shim — only for:**
- Small social avatars and app icons paired with text
- Embroidery applications where physical space is constrained
- Jersey numbers paired with the mark
- Any application where the Main Shim would force the lockup off the
  available surface

#### Text Height Rule

Adjacent headline text height must match the height of the AYSO Square
(measured cap-height to baseline). For multi-line headlines, the combined
text block height — including line-height — should approximately equal
the height of the square. This keeps the lockup balanced regardless of
how many lines of text are set.

#### Vertical Lockups

The shim system applies identically to vertical lockups (mark above text).
Main Shim = 1/4 the height of the AYSO Square, applied as vertical
spacing. Text width should approximately match the width of the badge.

#### Hard Rules

- Never reduce the shim below the Alternative Shim measurement
- Never increase the shim beyond the Main Shim measurement (text begins
  to feel disconnected from the mark)
- Never set adjacent text larger than the AYSO Square — text must never
  overpower the mark
- Always vertically center text to the midpoint of the AYSO Square in
  horizontal lockups
- Always horizontally center text to the midpoint of the badge in
  vertical lockups

#### AI Generation Note

When generating any AYSO lockup, calculate spacing as a function of the
AYSO Square height before placing adjacent elements. Default to the Main
Shim. Use the Alternative Shim only when the deliverable explicitly
requires constrained dimensions.

---

## 4. The Lock / Canvas / Remix System

This is how AYSO maintains brand consistency while enabling regional expression and event-specific creativity. Every visual decision falls into one of these three categories.

### 4A. The Lock (Never Changes)

These elements are inviolable across all generations:

- The AYSO letterform style — Clarendon-family bold serif with the specific AYSO proportions
- The AY/SO arrangement (AY top, SO bottom, divided by horizontal rule)
- The square shape itself — never rounded, never elongated, never tilted
- The order in co-branded lockups (AYSO first, always)
- The brand name spelled "AYSO"

**AI instruction:** When generating any AYSO mark, the letterforms and arrangement must match the established pattern. Do not redraw the letters. Do not substitute fonts within the mark unless executing an approved Remix.

### 4B. The Canvas (Where Regional Identity Lives)

These elements can flex based on region, season, or context:

- The fill color of the square (can become regional accent color)
- The stroke and letter color (can adapt to regional palette)
- Texture or subtle pattern *inside* the square boundary (woven fabric, photographic fill, washed effect)
- The accent color used in surrounding design
- Photography style and grading
- Background context

**AI instruction:** Regions are permitted one signature accent color beyond the national palette. When a regional context is specified, apply that accent color to the square fill and surrounding accent elements while keeping AYSO letterforms intact.

### 4C. The Remix (Special Events — Approval Required)

For special occasions, the AYSO letterform itself can take on a different personality. The square shape and AY/SO arrangement remain — the typographic style of the letters changes.

**Approved remix categories:**
- **Heritage Anniversary** — distressed, washed, vintage type treatment
- **Summer Festival** — playful, warm, festival-feel letterforms (Aviator Nation register)
- **Youth Celebration** — bolder, brighter, kid-energy letterforms
- **Championship** — gold-foil, premium, ceremonial letterforms

**AI instruction:** Remixes require national approval before public use. When a user requests an unusual letterform treatment, generate the variant but flag it explicitly: "REMIX — Requires national brand approval before use." Do not auto-publish a Remix without this flag.

---

## 5. Color Tokens

Color is precise. Use these exact values. Do not introduce gradients or unauthorized tints unless explicitly part of the design system.

**Visual reference:** ![AYSO Color Palette](assets/reference-guides/color-palette.png)

### 5A. Primary Foundation

```
--ayso-heritage-blue:    #1B5FA7    /* Pantone 286 C — primary dominant, badge fill */
--ayso-signal-red:       #D63A2F    /* Pantone 485 C — hero brand red, badge arc text */
--ayso-field-white:      #F7F8FA    /* Pantone 9161 C — primary surface, breathing room */
--ayso-pure-black:       #0A0A0A    /* Letterforms, body text, structural elements */
```

**Foundation rules:**
- Heritage Blue is the dominant brand color — appears in some form on virtually every piece in the institutional register
- Signal Red is the hero brand red — used for the Heritage Badge arc text and brand accent moments. Never used as a functional UI color (that's Crimson's job)
- Heritage Blue and Signal Red together create the RWB master mark; this combination is reserved for the Heritage Badge and patriotic moments
- Pure Black is for letterforms, type, and structural elements; never used as a wash or fill on large surfaces

### 5B. Extended Palette (Lifestyle / Register B)

```
--ayso-navy:             #1A2744    /* Lifestyle dominant — premium fan wear */
--ayso-camel:            #C4935A    /* Heritage warmth — Tier I lifestyle */
--ayso-cream:            #F2EDE4    /* Vintage paper, washed cotton */
--ayso-vintage-gold:     #D4A843    /* Premium accents, embroidery */
--ayso-sky:              #418FDE    /* Pantone 279 C — lighter blue option */
--ayso-washed-blue:      #6B8AA8    /* Aged Heritage Blue — vintage register */
--ayso-grass:            #3D6B3E    /* Field, seasonal — used sparingly */
--ayso-sunset-orange:    #E8602C    /* Warm flash — summer, kids events */
```

**Extended palette rules:**
- Navy (#1A2744) is the lifestyle dominant. Deeper and more premium than Heritage Blue. Used for fan wear, premium merchandise, and Register B applications.
- Camel and Cream are the warmth pair — they appear together in Aviator Nation-register applications
- Vintage Gold is reserved for premium tier and embroidery — not used in primary print or digital surfaces
- Sky is the lighter blue option for apparel, youth-program contexts, and any moment where Heritage Blue or Navy would feel too heavy. It is never used as the primary brand color in institutional materials.
- Washed Blue is reserved for the Aviator Nation register — aged photography, retro merchandise, vintage treatments. Distinct from Sky in mood: Washed Blue feels lived-in, Sky feels fresh.
- Grass and Sunset Orange are flash colors — accent only, never dominant

### 5C. Functional & Neutral Palette

```
--ayso-crimson:          #B52F26    /* Pantone 7622 C — critical UI states */
--ayso-cloud:            #B7CCE6    /* Pantone 277 C — informational panels */
--ayso-blush:            #FBEAEA    /* Pantone 698 C — soft feedback surfaces */
--ayso-mist:             #D1D5DB    /* Cool Gray 2 C — panels, dividers */
--ayso-fog:              #6B7280    /* Pantone 431 C — secondary text */
```

**Functional palette rules:**
- Crimson is exclusively for errors, alerts, and critical UI states — never used as a brand decorative red. Signal Red carries the brand red role; Crimson carries the functional warning role. The two are never used in the same composition.
- Cloud and Blush are soft surfaces for informational and feedback contexts. Both work well as background fills for callout panels, status messages, and gentle visual emphasis without competing with the primary palette.
- Mist and Fog form the neutral hierarchy for UI structure. Mist for panels, cards, and dividers. Fog for secondary text, captions, and supporting information that should recede from primary content.

### 5D. UI Token Mapping

For digital applications and product surfaces, brand colors map to semantic UI tokens. Use the semantic tokens in product code rather than referencing brand colors directly.

```
--status-success:        #2F7A3F    /* Wins, RSVP confirmed, paid, complete */
--status-warning:        #D49A2E    /* Weather hold, pending, expiring */
--status-danger:         #B52F26    /* (Crimson) — errors, canceled, overdue */
--status-info:           #1B5FA7    /* (Heritage Blue) — neutral updates */

--text-primary:          #0A0A0A    /* Default body text */
--text-secondary:        #6B7280    /* (Fog) — captions, metadata */
--text-tertiary:         #99A0AA    /* Placeholders, disabled */

--surface-page:          #F7F8FA    /* Outermost background, light register */
--surface-card:          #FFFFFF    /* Cards, sheets, content containers */
--surface-sunk:          #F2EDE4    /* (Cream) — inset wells, empty states */
--surface-info:          #B7CCE6    /* (Cloud) — informational panels */
--surface-feedback:      #FBEAEA    /* (Blush) — soft feedback */

--divider:               #D1D5DB    /* (Mist) — hairlines, separators */
```

### 5E. Regional Accent Slot

```
--ayso-regional-accent:   [HEX]     /* One color per region — submitted for approval */
```

Each AYSO region may register one signature accent color, used in regional materials only — never in national communications. It must:

- Sit comfortably alongside Navy or Heritage Blue without clashing
- Maintain readability at typical apparel embroidery sizes
- Be supplied as a hex value with optional Pantone reference
- Be approved by AYSO national before regional rollout

Approved regional accent colors are documented in the repo as they're registered. See CONTRIBUTING.md for the regional accent submission process.

### 5F. Color Ratio Rules

For any AYSO composition, use these ratios as targets:

- **60–70% foundation** — Heritage Blue (Register A) or Navy (Register B)
- **15–20% breathing room** — Field White or Cream
- **8–12% warmth accent** — Camel, Vintage Gold, or Signal Red
- **5–10% regional accent** — Where applicable

Signal Red is a punctuation, never a wash. Regional accents never exceed 10%. Sky and Washed Blue, when used, count toward the foundation budget — they do not get their own additional allocation.

### 5G. Forbidden Color Combinations

These combinations are absolute. No prompt overrides them.

- **Signal Red + Grass Green** together (too "soccer-cliché," too literal)
- **Heritage Blue + Navy** in the same composition (visually too similar, creates muddy reads)
- **Crimson used as a brand decorative red** — Crimson is a functional UI color only. Use Signal Red for brand moments.
- **Signal Red + Crimson together** — they read as the same color and create visual confusion
- **Sunset Orange dominant** — it is always an accent, never a primary surface
- **Pastel tints of any brand color** — the brand does not use pastels (Blush is the exception, and only for functional feedback surfaces)
- **Neon or fluorescent versions** of any color
- **Black backgrounds with color text** — AYSO is not a luxury brand; use Navy or Field White instead
- **Sky as the institutional primary** — Sky is a lighter blue for lifestyle and youth contexts only; institutional materials use Heritage Blue

### 5H. Contrast Rules

- Body text on any surface must hit **WCAG AA 4.5:1** minimum
- Interactive elements (buttons, links, form fields) must hit **3:1** against adjacent surfaces
- Large display text (24pt+) may meet **WCAG AA Large 3:1** minimum
- Status colors must never carry meaning alone — pair with an icon or text label
- Cloud and Blush surfaces require Pure Black or Navy text for readability — never colored text on these surfaces
- Sky and Washed Blue require Field White or Cream text when used as background fills

---

## 6. Typography

Two typefaces. Two clear roles. The system is intentionally tight — discipline reads premium.

### 6A. Roboto — Primary Typeface

Roboto carries the entire content load: display headlines, subheads, body copy, captions, button labels. The family's range from Light (300) to Black (900) gives the system a single coherent voice with controlled weight contrast.

```
font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
weights in active use: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)
```

**Why Roboto:** The bolder weights (700 / 900) capture the "crisp bold lines of a soccer field" — geometric, athletic, scoreboard-modern. The lighter weights handle body copy with grace. One family does the work of three with no visual chaos.

### 6B. Space Mono — Utility Typeface

Space Mono is the labels-and-data layer. It is never used for display or body — only for utility moments where monospace creates visual contrast and machine-precision feel.

```
font-family: 'Space Mono', ui-monospace, 'SF Mono', Menlo, monospace;
weights in active use: 400 (Regular), 700 (Bold)
text-transform: uppercase (default for labels)
letter-spacing: 0.15em to 0.30em
```

**Use for:** Labels, tags, dates, locations, regional identifiers, captions, metadata, navigation, eyebrow text.

### 6C. The AYSO Letterform (within the mark only)

The letters AY and SO inside the AYSO square are set in a **Clarendon-family bold slab serif** with specific proportions established by the historic AYSO mark. This letterform exists only inside the square — not used for headlines, body text, or any other application. Treat it as a logotype, not a typeface.

### 6D. Type Scale (16px base)

| Token | Size / Line | Weight | Use |
|---|---|---|---|
| `--text-display-xl` | 96 / 100 | 900 (Black) | Hero moments, brand statements, environmental graphics |
| `--text-display` | 72 / 76 | 900 (Black) | Marketing hero, scoreboard, championship moments |
| `--text-h1` | 48 / 52 | 700 (Bold) | Page titles, primary headlines |
| `--text-h2` | 36 / 42 | 700 (Bold) | Section titles |
| `--text-h3` | 28 / 34 | 700 (Bold) | Subsection titles |
| `--text-h4` | 22 / 28 | 500 (Medium) | Card titles, list headers |
| `--text-h5` | 18 / 24 | 500 (Medium) | Small section headers |
| `--text-body-lg` | 18 / 28 | 300 (Light) | Editorial body, marketing paragraphs |
| `--text-body` | 16 / 24 | 400 (Regular) | Default body text |
| `--text-body-strong` | 16 / 24 | 500 (Medium) | Body emphasis |
| `--text-small` | 14 / 20 | 400 (Regular) | Metadata, captions |
| `--text-micro` | 12 / 16 | 500 (Medium) | Eyebrow labels (Space Mono, uppercase, +0.2em tracking) |
| `--text-data-lg` | 32 / 36 | 700 (Bold) | Score, big numbers (Space Mono, tabular-nums) |
| `--text-data` | 16 / 20 | 400 (Regular) | Tabular data (Space Mono, tabular-nums) |

### 6E. Typography Rules

- **One H1 per screen.** Subsequent sections step down.
- **Sentence case for body and CTAs.** All caps reserved for Roboto Black display headlines and Space Mono utility labels.
- **Line length** for body copy: 50–75 characters.
- **Numerals in tables, scores, and times use Space Mono** with `font-variant-numeric: tabular-nums` so columns align.
- **Display weights are earned.** Roboto Black at 96pt is for hero moments only — overuse kills its impact.
- **Body is light.** Default body text is Roboto 300 (Light) or 400 (Regular) — Roboto 500+ in body reads as shouting.
- **No italics on display.** Roboto italics are acceptable in body copy for genuine emphasis or quotations only.

### 6F. Typography Hierarchy Example

```
DISPLAY (Roboto 900, 72pt):       EVERY CHILD PLAYS.
EYEBROW (Space Mono, 12pt):       SPRING 2026 REGISTRATION
H2 (Roboto 700, 36pt):            Now Open
BODY (Roboto 300, 18pt):          AYSO has been the place where every child
                                  plays since 1964. No tryouts, no cuts,
                                  balanced teams, and a community that still
                                  shows up on Saturday.
CTA (Roboto 500, 16pt):           Register your child →
META (Space Mono, 11pt):          REGION 105 · BEVERLY HILLS · TUE-SAT 9AM-12PM
```

---

## 7. Photography Direction

Photography is AYSO's most powerful brand asset. The photographs do the work — the design system frames them, doesn't compete with them.

### 7A. Subject Direction

**Always show:**
- Real AYSO families — not models, not athletic stock
- A genuine range of ages (3–19), abilities, ethnicities, body types, skill levels
- Effort and imperfection — the trap that didn't quite work, the laugh after a missed kick, the slide tackle, the throw-in
- Community texture — chalk lines, cones, water bottles, folding chairs, snack bags, scoreboards (small ones, real ones)
- Generational warmth — coach who's clearly someone's parent, sibling on the sideline, grandparent in a lawn chair
- The badge worn proudly — jersey, polo, hat, scarf, hoodie
- EPIC players (players with disabilities) integrated into mainstream creative — never siloed
- Range of weather, range of light, range of seasons (fall and spring both)
- Volunteers in their element — confident coaches, refs who know the kids, board members at folding tables

**Never show:**
- Pristine "club photoshoot" aesthetics — over-polished, over-styled, identical kits
- Empty-stadium hero shots — AYSO is community, not spectacle
- "Future pro" framing — we are not selling scholarships
- Single-skill-level imagery where every kid looks like a future starter
- Stock-photo "diversity" that feels assembled — real groups look like real groups
- Anti-club body language — visible scoreboards being knocked over, mocking imagery
- Sentimental melodrama — the brand is warm, not weepy
- Empty "lifestyle" shots without people — the people are the point

### 7B. Technical Direction

**Light:**
- Natural light, golden hour preferred
- Slightly underexposed in shadows — never overexposed
- Cloudy / overcast acceptable and often beautiful for AYSO
- Avoid harsh midday sun unless the subject demands it

**Color grading:**
- Warm grade for Register B (lifestyle) — slight orange/amber pull, lifted blacks, soft contrast
- Neutral grade for Register A (institutional) — accurate color, full contrast, clean whites
- Never oversaturated — AYSO is not a sports drink commercial
- Skin tones must read true — no grading that distorts complexion

**Composition:**
- Mix of formats: 4:5 portrait for social, 16:9 horizontal for hero web, 1:1 square for Instagram feed
- Subject often slightly off-center — feels documentary, not posed
- Negative space welcomed — let the subject breathe
- Foreground/background depth using shallow focus for portraits
- Wide environmental shots for context — but with people in them

**Avoid:**
- Heavy retouching — pores, sweat, grass stains, and joy are all part of the brand
- Dramatic film simulations that overpower the subject
- Studio lighting that flattens reality
- HDR that crushes natural light

### 7C. Casting Direction

**Yes:**
- Real families (recruited locally per region preferred)
- Coaches and refs who actually coach and ref for AYSO
- Children who actually play in AYSO
- Volunteers caught in real moments
- Range of body types, athleticism, and skill genuinely represented

**No:**
- Professional child models
- Adult athletes posing as parents
- Anyone in the frame whose presence reads as "cast for diversity"
- Kids who look like they came from a club tryout

---

## 8. Composition & Layout

### 8A. Spacing Scale

A 4px base. Always use tokens, never raw pixels.

```
--space-0:    0
--space-1:    4px
--space-2:    8px
--space-3:    12px
--space-4:    16px
--space-5:    24px
--space-6:    32px
--space-7:    48px
--space-8:    64px
--space-9:    96px
--space-10:   128px
```

### 8B. Radius Scale

```
--radius-sm:    6px      /* Inputs, chips */
--radius-md:    10px     /* Buttons, small cards */
--radius-lg:    16px     /* Cards, sheets */
--radius-xl:    24px     /* Hero panels, modals */
--radius-full:  9999px   /* Avatars, pills */
```

The AYSO Square Mark itself uses approximately 4px radius — sharp but not severe.

### 8C. Grid Foundation

- **Mobile:** 4-column, 16px gutter, 16px margin
- **Tablet:** 8-column, 20px gutter, 24px margin
- **Desktop:** 12-column, 24px gutter, max content width 1200px (1440px for hero photography)

### 8D. Hierarchy Rules

- One hero element per composition. Never two competing focal points.
- Logo placement: Top-left for institutional layouts; bottom-left or top-center for lifestyle
- White space is structural, not decorative — the brand uses it as a positioning statement
- Photography fills containers edge-to-edge when used; never crops with awkward gutters

### 8E. Layout Patterns

**The Field Pattern (Register A — Institutional):**
- Hero photograph (full bleed or large container)
- Roboto Black headline overlaid bottom-left or below image
- Space Mono eyebrow above headline
- Roboto Light body
- Generous white/cream space around all elements

**The Heritage Pattern (Register B — Lifestyle):**
- Photograph with warm grade
- Roboto Black large display on Cream or Camel surface
- '64 or heritage motif as supporting graphic
- Aviator Nation-style horizontal stripe accents permitted
- Vintage paper texture acceptable as background

**The Editorial Pattern (Both registers):**
- Magazine-style multi-column layout
- Pull quotes in Roboto Bold
- Body in Roboto Light
- Captions in Space Mono
- Photo-driven, text-supported

### 8F. Composition Principles

- **Let it breathe.** White space is the most powerful tool in the system.
- **Show the human.** A composition without a person should be the exception, not the rule.
- **One mark, one moment.** Don't pile logos, sponsor marks, or regional marks together. Co-branded lockups are an exception, but stop there.
- **Premium through restraint.** Nothing in the layout should compete with the subject.
- **Asymmetry over center-weighting.** AYSO compositions are off-center, documentary-feeling, intentional.

---

## 9. Iconography

- **Library:** Phosphor Icons — Regular weight at 16/20/24px, Bold weight only for filled or emphasis states
- **Custom sport icons** (whistle, ball, cleat, cone, jersey, field) drawn on a 24px grid with a 1.75px stroke weight
- Stroke style: round caps, round joins, single-weight throughout
- **Color:** Heritage Blue or Navy on light backgrounds; Cream or White on dark backgrounds; Camel for premium accents
- Never decorative — every icon has a label nearby or an `aria-label`
- Avoid emoji in product UI. Emoji are acceptable in user-generated content (team chat) and external comms (parent emails)

---

## 10. Voice and Copy Direction

### 10A. Voice Pillars

| AYSO is... | AYSO is not... |
|---|---|
| Warm | Sentimental |
| Confident | Cocky |
| Honest | Cynical |
| Self-aware | Self-deprecating |
| Inviting | Pleading |
| Inclusive | Performatively inclusive |
| Plainspoken | Flat |
| Joyful | Saccharine |
| Rooted | Old-fashioned |
| Modern | Trendy |

### 10B. Reference Tone

- Wieden+Kennedy at its best — confident, human, distinctively voiced, never trying too hard
- Patagonia's clarity of conviction
- Team USA / USOPC's institutional pride and warmth

### 10C. Brand Voice Rules (Marketing & External)

- **Mobile-first.** If a line doesn't work on a phone screen, cut it.
- **Talk to the parent, for the kid.** The parent decides; the kid is who it's for.
- **No internal jargon.** "Pathway" is fine internally; "where soccer can take your kid" is better in the wild.
- **Earn the line.** Headlines should reward the reader. No filler.
- **Sentence-case CTAs.** "Register your child," not "REGISTER YOUR CHILD."
- **All caps reserved** for Roboto Black display headlines and Space Mono utility labels.

### 10D. Approved Phrases

These are tested, on-brand expressions to use freely:
- "Everyone Plays®"

### 10E. Phrases to Avoid

- "Unlock your child's potential" (corporate, performance-coded)
- "Best-in-class" (jargon)
- "Empowering the next generation" (cliché)
- "Experience the AYSO difference" (corporate)
- "Join the AYSO family" (overused; we are a community, not a family)
- "Future stars" (we are not selling scholarships)
- Any phrase with "leverage," "ecosystem," or "synergy"

### 10F. The Audience Reality

AYSO talks to two parents simultaneously:

- **The Believer** — values community, often a former AYSO kid, sees club soccer as too much too soon. Driver: belonging, legacy, community.
- **The Waverer** — feeling the pull of club soccer, especially at 9–11U. Wants their kid to develop. Driver: child's future, fear of falling behind.

The brand must speak to both. The Believer needs reassurance AYSO still stands for what it has always stood for. The Waverer needs evidence AYSO is serious about quality, development, and a real Perform pathway.

**Recruitment is mom-led at first; retention pulls in dad's voice as players get older.** Both decisions are joint. Acquisition messaging leans warmth and joy; retention messaging adds development credibility.

### 10G. Posture Toward Competitors

The chief competitor is club soccer — pay-to-play, tryout-based, $2,000–$3,000+ per season.

- **We do not attack.** We do not name them, we do not mock them.
- **We are fluent in what they offer** and honest about it. Some kids genuinely want and benefit from that path.
- **We trust parents to make the right decision** when they have full information.
- **We are confident in our story.** A child who plays AYSO from 5U through high school has had a great childhood in soccer.

Internal phrase: **"We're not against club. We're for kids."**

---

## 11. Program Architecture

AYSO is structured as a three-tier player pathway, plus specialty programs.

### 11A. PLAY — Entry Tier
- **AYSO Kickstart** — Jamboree-style for ages 3–7. First taste of soccer. Joyful, low-pressure, no scoreboard.
- **AYSO Play!** — Camps, clinics, school partnerships in underserved areas.

**Visual register:** Lifestyle (B). Color leans Cream, Camel, Sunset Orange. Photography: tiny cleats, big grins, parents on blankets.

### 11B. PRIME — The Core
- **AYSO** — The community recreational soccer experience. Saturday mornings, balanced teams, neighborhood fields.

**Visual register:** Both (A and B). Color: Heritage Blue or Navy dominant, full palette permitted. Photography: the Saturday morning ritual — orange slices, post-game tunnel, kids running and falling and laughing.

### 11C. PERFORM — Top Tier
- **AYSO EXTRA** — Tryout-based internal AYSO competitive circuit.
- **AYSO Alliance** — Tryout-based, club-style playing experience within AYSO.

**Visual register:** Institutional (A) leaning. Color: Navy and Heritage Blue dominant, restrained warmth accents. Photography: focused, capable, but never "future-pro." Earned through commitment, not selection. Still part of the community.

### 11D. Specialty Programs
- **AYSO EPIC** (formerly VIP) — Players with disabilities. Integrated into mainstream creative, never siloed.
- **AYSO Adult Soccer** — Aged-out players, parents, volunteers. Soccer for life.

### 11E. Sunsetted
- **AYSO United** — Sunsetted Spring 2026. Do not feature in new creative.

---

## 12. Apparel & Merchandise System

AYSO apparel operates in three tiers.

### 12A. Tier I — Lifestyle / Heritage
**Goal:** Worn off the field. Aviator Nation × heritage Americana.
**Items:** '64 Heritage Hat, washed crewneck sweatshirts, coach jackets, premium totes, blankets, dad hats.
**Materials:** Washed cotton twill, midweight fleece, waxed cotton, brushed wool blends. Never synthetic.
**Color:** Navy, Camel, Cream dominant. Vintage Gold for premium accents.
**Branding:** Embroidered AYSO mark only — no screen print. Maximum 3 thread colors.
**Register:** B (Lifestyle)

### 12B. Tier II — Event / Fan
**Goal:** Worn at events and on weekends.
**Items:** Tournament t-shirts, hoodies, trucker hats, quarter-zips, jogger sets, region-specific colorways.
**Materials:** Standard cotton/poly blends. Screen print acceptable.
**Color:** Full palette permitted including regional accents.
**Branding:** AYSO mark prominent; regional name and event name supporting.
**Register:** Mixed.

### 12C. Tier III — On-Field / Functional
**Goal:** Worn during play.
**Items:** Player jerseys, training tops, shorts, socks, practice bibs, kit bags, water bottles.
**Materials:** Performance fabrics permitted (only tier where this is true).
**Color:** Heritage Blue, Navy, Field White dominant. Functional contrast colors permitted.
**Branding:** AYSO mark prominent on chest or front.
**Register:** A (Institutional / clean)

### 12D. Hero Product: The '64 Heritage Hat

The single most important piece of AYSO merchandise. The brand's wearable signature.

**Specs:**
- 6-panel structured crown, mid-profile, pre-curved brim, brass-finish closure
- Crown: Washed navy cotton twill or washed wool blend
- Brim: Camel or khaki cotton twill
- Embroidery: AYSO mark or "64" mark on front in cream or vintage gold thread, max 3 thread colors

**Approved colorways:**
1. Washed Navy crown / Camel brim / Cream embroidery
2. Washed Navy crown / Cream brim / Vintage Gold embroidery
3. Black crown / Camel brim / Field White embroidery

---

## 13. Activation & Event Standards

### 13A. NAGM (National Convention)
**Register:** A (Institutional) primary, with B accents for merchandise area.
**Treatment:** Full environmental brand takeover. Heritage Badge prominent. Limited-edition '64 merchandise drops. Real AYSO families and coaches showcased.

### 13B. Regional Tournaments
**Register:** B (Lifestyle) leaning.
**Treatment:** AYSO mark always top-left on banners. Regional accent color on one feature element. Generous white space. Photography of real families from the region.

### 13C. Season Openers
**Register:** B (Lifestyle).
**Treatment:** Heritage feel. Cream or Camel base. Aviator Nation-style horizontal stripes acceptable. "See you at the field" or similar warm CTA.

### 13D. Championships
**Register:** A (Institutional) with heritage gold accents.
**Treatment:** Heritage Badge prominent. Vintage Gold for awards and recognition. Restrained, ceremonial.

### 13E. World Cup 2026 Tailwind
The men's FIFA World Cup is being co-hosted across North America in June–July 2026. Visual creative through summer 2026 should feel **timely and patriotic without being about the World Cup itself** (we don't have those rights). Lean into "this is the year your kid wants to play soccer."

---

## 14. Safeguarding & Privacy

A youth org carries obligations a typical brand doesn't. These rules apply across all AYSO surfaces — brand and product.

### 14A. Photos of Minors
- All photography of minors requires explicit guardian opt-in stored at the player level
- Surfaces displaying photos must check the consent flag every render — never cache the permission
- Players whose families have opted out must never appear in regional or national imagery, including B-roll, group shots, and crowd scenes

### 14B. Communication
- Direct messaging between adults and players is disabled by default
- Coach-to-player messages route through the team channel with a guardian copied
- Public-facing content never uses a player's full name without guardian consent

### 14C. Location & Schedule Privacy
- Location of practices and games is visible only to authenticated team members and league admins
- Practice and game locations are never indexed publicly or shared on social without league approval

### 14D. Volunteer Verification
- Background-check status for coaches and volunteers is shown as a badge on their profile (Verified / Pending / Expired)
- The underlying record is admin-only and never displayed publicly

### 14E. Display Conventions for Minors
- **Public surfaces:** First name + last initial only (e.g., "Maya R.")
- **Authenticated surfaces:** Full name acceptable when the viewer is a parent, coach, or league admin
- **Never display a player's age publicly.** Display the division (e.g., U10) instead

---

## 15. AI Designer Generation Rules

When generating creative for AYSO, follow this checklist:

### 15A. Pre-flight checks
1. Identify the deliverable type and which Register (A or B) applies
2. Identify if a regional context applies — if yes, apply regional accent within the Canvas system
3. Identify if any element triggers a Remix request — if yes, flag for approval
4. Check whether minors will appear in imagery — verify safeguarding rules from Section 14

### 15B. Logo selection
- Heritage Badge for institutional, formal, ceremonial, or heritage-merchandise contexts
- AYSO Square Mark for modern, system-driven, small-application, or co-branded contexts
- Never modify the letterforms inside the mark (unless executing approved Remix)

### 15C. Color selection
- Primary surface = Heritage Blue (Register A) or Navy (Register B)
- Apply 60/20/15/5 ratio (foundation/breathing/accent/regional)
- Verify no forbidden combinations (Section 5F)

### 15D. Typography
- Roboto for all content (display, headlines, body, captions)
- Space Mono for utility/labels only
- Verify pairing rules and weight discipline (Section 6E)

### 15E. Photography
- Real families, not stock
- Effort and imperfection visible
- AYSO branding present on at least one subject
- Warm grade for Register B, neutral for Register A
- EPIC and diversity integrated, never siloed or tokenized
- Safeguarding consent confirmed

### 15F. Composition
- One hero element
- White space as structural device
- Asymmetry preferred
- Restraint as the brand's posture

### 15G. Copy
- Mobile-first
- Talk to parent, for the kid
- Voice pillars active (warm/confident/honest/etc.)
- No forbidden phrases (Section 10E)

### 15H. Final review
- Does this feel like Saturday morning at an AYSO field?
- Does the photography do the work?
- Is the AYSO mark unmistakably present and properly applied?
- Is the composition restrained enough to feel premium?
- Would a real AYSO parent recognize themselves in this?

If the answer to any of these is no, regenerate with corrections.

---

## 16. Hard Constraints — Never Violate

These are absolute. No prompt overrides them.

1. **Never modify the AYSO letterforms** inside the mark unless executing an approved, flagged Remix.
2. **Never spell the brand any way other than AYSO** (one word, all caps).
3. **Never use stock photography of children.** AYSO photography must be real or commissioned authentic imagery.
4. **Never display a minor's photo, full name, or age** without verified guardian consent (Section 14).
5. **Never feature AYSO United** in new creative — sunsetted Spring 2026.
6. **Never generate content that mocks, attacks, or names competitors.** AYSO posture is "we're for kids," never "against club."
7. **Never use political symbolism, ideological framing, or partisan imagery.** AYSO is broadly bipartisan.
8. **Never suggest AYSO is a pipeline to professional soccer** or college scholarships.
9. **Never depict children unsafely** — no helmet-less risk imagery, no misrepresentation of supervision, no sponsorships that conflict with youth-sports values (alcohol, gambling, etc.).
10. **Never use the Heritage Badge below 1.25 inches** or the Square Mark below 0.75 inches.
11. **Never replace photography with illustration** as the dominant hero. AYSO is a photography-first brand.

---

## 17. Quick Reference — The Brand in One Page

**WHO:** AYSO. American Youth Soccer Organization. Founded 1964. 400K+ players, 500+ regions.
**WHAT:** Community youth soccer where every child plays. No tryouts, no cuts, balanced teams.
**WHO IT'S FOR:** Parents 25–45, suburban-dominant but expanding, a mix of Believers (community-first) and Waverers (development-conscious).
**HOW IT FEELS:** Saturday morning. Cut grass. Orange slices. The coach who knows your kid's name. Genuine, not polished.
**LOOKS LIKE:** Heritage Badge for institutional moments. AYSO Square Mark for everything else. Heritage Blue and Navy dominant. Camel and Cream for warmth. Real photography doing the heavy lifting. Roboto Black when shouting, Roboto Light when talking, Space Mono when labeling.
**SOUNDS LIKE:** Wieden+Kennedy at their best. Patagonia conviction. Team USA institutional warmth. Confident, plainspoken, joyful, rooted, modern.
**REFERENCE BRANDS:** Aviator Nation (lifestyle warmth) × Nike (production restraint).
**THE TEST:** Does this feel like Saturday morning at an AYSO field? If yes, we're on. If no, start over.

---

## Appendix A — Token Quick Reference (CSS)

```css
:root {
  /* === COLOR — PRIMARY FOUNDATION === */
  --ayso-heritage-blue:    #1B5FA7;
  --ayso-signal-red:       #D63A2F;
  --ayso-field-white:      #F7F8FA;
  --ayso-pure-black:       #0A0A0A;

  /* === COLOR — EXTENDED / LIFESTYLE === */
  --ayso-navy:             #1A2744;
  --ayso-camel:            #C4935A;
  --ayso-cream:            #F2EDE4;
  --ayso-vintage-gold:     #D4A843;
  --ayso-grass:            #3D6B3E;
  --ayso-sunset-orange:    #E8602C;
  --ayso-washed-blue:      #6B8AA8;

  /* === COLOR — FUNCTIONAL / UI === */
  --status-success:        #2F7A3F;
  --status-warning:        #D49A2E;
  --status-danger:         #C1392B;
  --status-info:           #1B5FA7;
  --text-primary:          #0A0A0A;
  --text-secondary:        #5A6470;
  --text-tertiary:         #99A0AA;
  --surface-page:          #F7F8FA;
  --surface-card:          #FFFFFF;
  --surface-sunk:          #F2EDE4;
  --divider:               #E0DDD4;

  /* === SPACING === */
  --space-0:    0;
  --space-1:    4px;
  --space-2:    8px;
  --space-3:    12px;
  --space-4:    16px;
  --space-5:    24px;
  --space-6:    32px;
  --space-7:    48px;
  --space-8:    64px;
  --space-9:    96px;
  --space-10:   128px;

  /* === RADIUS === */
  --radius-sm:    6px;
  --radius-md:    10px;
  --radius-lg:    16px;
  --radius-xl:    24px;
  --radius-full:  9999px;

  /* === SHADOW === */
  --shadow-sm:    0 1px 2px rgba(10,10,10,0.06);
  --shadow-md:    0 4px 12px rgba(10,10,10,0.08);
  --shadow-lg:    0 12px 32px rgba(10,10,10,0.10);

  /* === TYPOGRAPHY === */
  --font-primary:    'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-mono:       'Space Mono', ui-monospace, 'SF Mono', Menlo, monospace;

  --text-display-xl:    96px / 100px;
  --text-display:       72px / 76px;
  --text-h1:            48px / 52px;
  --text-h2:            36px / 42px;
  --text-h3:            28px / 34px;
  --text-h4:            22px / 28px;
  --text-h5:            18px / 24px;
  --text-body-lg:       18px / 28px;
  --text-body:          16px / 24px;
  --text-small:         14px / 20px;
  --text-micro:         12px / 16px;
}
```

---

## Appendix B — Document Structure Notes

This document is the **AYSO Brand Design System**. It governs everything brand-facing: logo, color, type, photography, voice, marketing, apparel, regional identity, fan wear, events.

A separate **AYSO Product Design System** governs digital product surfaces (the MyAYSO app, registration software, scheduling tools, coach/ref tools). The product system inherits color and type tokens from this document, then adds product-specific patterns: game cards, roster rows, schedule lists, form fields, motion guidelines, accessibility standards, and content patterns for dates/scores/names.

Both documents share Section 14 (Safeguarding & Privacy) verbatim.

---

**End of AYSO Brand Design System v1.0**
**Maintained by:** AYSO National Brand Team
**Update cadence:** Quarterly review, annual major revision
**Contributions:** Open a PR or contact `brand@ayso.org`
