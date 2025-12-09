# AI Coding Guide for Fish Compass

- Project scope: static single-page web app (no build step) defined by [index.html](../index.html), [styles.css](../styles.css), [script.js](../script.js); serve via local file or `npx serve .` for CORS-safe asset loading.
- UI layout: controls panel and results panel live in [index.html](../index.html); JS logic is bundled directly through `<script type="module" src="script.js">`.
- Core data models live in [script.js](../script.js): `regionRules` (six regional etiquette presets), `directionMap` (8-entry compass with degrees/story/tip), `tableBlueprints` (round/oval/square seating semantics), `vibeProfiles` (tone copy presets). Extend these objects to add new logic.
- Orientation math: `composePlan()` combines selected region, entry direction, table type, seat count, and vibe to compute `orientationDegree`, host/vice angles, clock labels, and copy strings; outputs rendered via `renderPlan()`.
- Dial interaction: the door direction dial uses pointer/wheel/arrow keys (`handleDialPointerDown/Move/Up`, `handleDialWheel`, `handleDialKeyDown`), snapping to 0.5° increments and mapping to nearest `directionMap` key through `nearestDirectionKey()`.
- Seating rendering: `buildSeatMarkers()` plots seats with `polarToCartesian()` and `degreeToClock()`; host seat is index 0, vice seat picked by minimal angular distance to `viceDegree`; markers rendered in `renderSeatMarkers()` within `#seatRing`.
- Table shape handling: `buildSeatMarkers()` switches geometry per table (`round` fixed radius, `oval` ellipse calc, `square` edge distance); `tableBlueprints` control toast direction/labels shown in cards.
- Asset pipeline: `assetSources` sets fish/seat/table images with cache-busting `BUILD_ID`; `--fish-image`/`--seat-image` CSS vars drive visuals. Table PNG contours (if provided) are sampled via `preloadTableContours()` → `extractContourFromImage()` → `sampleContour()` to influence seat spacing; keep transparent backgrounds and centered artwork.
- Copy/screenshot UX: `handleCopy()` writes the `summary` string to clipboard with feedback; `screenshotMode` toggles `.screenshot-mode` class to hide narrative blocks (see CSS selectors in [styles.css](../styles.css)).
- Custom selects: native `<select>` elements are hidden (`.sr-hidden`) and replaced with styled widgets (`createCustomSelect()`, `initCustomSelects()`); when updating/adding selects, ensure `data-sync` attribute triggers `handleUpdate()`.
- Rendering bindings: all DOM refs collected in `refs`; `handleUpdate()` recomputes plan and feeds `renderPlan()`. Changing default values should update both the hidden input `entryDirection` and related labels/tags in [index.html](../index.html).
- Reset & defaults: `resetForm()` resets to region `north`, direction `north`, table `round`, seats `10`, vibe `balanced`, `screenshot=false`; `BUILD_ID` currently `2025-12-09`.
- Styling notes: dark neon glassmorphism theme; CSS variables at the top of [styles.css](../styles.css) (`--accent`, `--accent-2`) are overwritten per region during render. Seat/table classes: `stage-table--{round|oval|square}`.
- Assets directory: `资源/鱼`, `资源/座椅`, `资源/桌子` (if added) hold PNG/WebP art; [script.js](../script.js) expects WebP defaults. Keep transparency to enable contour detection.
- Accessibility: dial slider uses `aria-valuenow`/`aria-valuetext`; cards/results live-updated. When adding inputs, set `aria-label` and include `data-sync` for state updates.
- Deployment: GitHub Pages friendly—push to `main` and enable Pages root (see [README.md](../README.md)). No bundler or server required.
- When extending logic: prefer augmenting `regionRules`/`tableBlueprints`/`vibeProfiles` rather than scattering conditionals; keep `orientation.tagline` and `explanation/story/legend` aligned for consistent UI copy.
- Guardrails: keep angles normalized via `normalizeDegree()`; use `angularDistance()` when matching angles; avoid mutating `latestPlan` outside `handleUpdate()`.
- Testing/verification: after edits, open [index.html](../index.html) in a browser and verify dial rotation, seat markers, copy button, and screenshot mode; asset changes should reflect with cache-busting query.

If anything above is unclear or missing for your task, tell me which part needs more detail and I’ll refine this guide.