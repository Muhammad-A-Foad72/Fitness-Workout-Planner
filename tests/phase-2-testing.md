# RepWise — Phase 2 UI Verification & Manual Test Report

**Course:** SW302 — User Interface Development, Fall 2026  
**Application:** RepWise — Fitness & Workout Planner  
**Scope owner:** Role C — Workout Flow & Accessibility  
**Report prepared:** 4 November 2026  
**Project phase:** Phase 2 — UI/UX Design & Static Prototype  
**Repository:** [Fitness-Workout-Planner](https://github.com/Muhammad-A-Foad72/Fitness-Workout-Planner)  
**Design reference:** [RepWise Figma](https://www.figma.com/design/vVUuqttfBMIvrZrHyw0PIc/RepWise-%C2%B7-SW302-Phase-2?node-id=2-3)

> **Evidence policy:** This is a verification log based on the supplied screenshots, a review of the repository's static HTML/Tailwind source, and the team's reported responsive checks. It does **not** claim that every test was independently executed. Tests lacking direct evidence are marked *Not recorded* or *Needs verification*. Fill those in only after performing them.

## 1. Purpose and acceptance criteria

Phase 2 requires a static HTML5 + **locally installed** Tailwind CSS prototype (no CDN dependency), desktop and mobile layouts, accessible semantic markup, and consistency with the Figma mockups. The project contains nine application pages: Landing, Login, Register, Dashboard, Exercise Library, Exercise Details, Routine Builder, Active Workout, and Profile & Settings.

**Role C owns:**

- `frontend/pages/routine-builder.html` — responsive workout routine form.
- `frontend/pages/workout.html` — responsive active workout screen.
- Cross-page responsive and accessibility checks, with a manual report under `/tests`.

**Target verification:** layouts at approximately 390px mobile and 1440px desktop; additional intermediate widths (e.g. 768px) where possible. Look for unintended horizontal scrolling, obscured content, readable labels, usable touch targets, and keyboard focus. Test one form-invalid state and navigation patterns.

## 2. Test environment and evidence

| Field | Recorded value | Evidence / qualification |
|---|---|---|
| Application URL | `http://127.0.0.1:5500/frontend/pages/...` | Visible in user screenshots (local Live Server) |
| Browser | Chromium-based desktop browser | Browser screenshot; exact version not recorded |
| Platform | Windows desktop | Visible in screenshots |
| Responsive viewport | **391 × 652 px** | Exercise Library responsive emulation screenshot |
| Desktop viewport | Desktop-size browser window | Images provided; exact CSS viewport was not measured |
| Styling | Tailwind CSS v4 CLI + local generated stylesheet | `package.json` and page `<link>` inspection; pages visibly styled |
| Lighthouse run | **Dashboard page only** | Screenshot of audit scores; device mode and detailed audit JSON not supplied |
| Test date | 4 November 2026 (report) | Browser screenshot date; individual run timestamps not fully logged |

### Screenshot evidence included in this folder

| ID | File | What it demonstrates |
|---|---|---|
| E01 | [dashboard-lighthouse.png](evidence/dashboard-lighthouse.png) | Dashboard Lighthouse summary scores |
| E02 | [exercise-library-mobile.png](evidence/exercise-library-mobile.png) | Exercise Library at **391 × 652px** in responsive mode |
| E03 | [dashboard-desktop.png](evidence/dashboard-desktop.png) | Dashboard cards/charts/sidebar visible at desktop size |
| E04 | [routine-builder-desktop.png](evidence/routine-builder-desktop.png) | Routine Builder form, desktop summary/sidebar, first exercise row |
| E05 | [active-workout-desktop.png](evidence/active-workout-desktop.png) | Active Workout progress, set rows, desktop exercise sidebar |

**Evidence limitations:** the screenshots show only the portions of the pages in view; they cannot demonstrate hidden lower sections, end-to-end behavior, full Figma equivalence, or every screen width. No mobile screenshot of Routine Builder or Active Workout was supplied for this report.

## 3. Lighthouse: recorded result

**Audited page:** `frontend/pages/dashboard.html` (local Live Server)

| Category | Screenshot score (0–100) | Observation |
|---|---:|---|
| Performance | **98** | Excellent result for the captured run |
| Accessibility | **100** | No issues detected by that Lighthouse run's automated accessibility audits |
| Best Practices | **100** | All evaluated checks passed in the captured run |
| SEO | **100** | On-page SEO checks passed in the captured run |

**Interpretation:** Google Lighthouse is an automated page audit tool. It can run against localhost; it does not require deployment, indexing by Google, or public internet exposure. Scores describe **the tested page and run only**, not the entire nine-page app. An Accessibility score of 100 is **not** proof of full WCAG compliance; keyboard usability, reading order, focus behavior, dialogs, responsive overflow, and screen-reader behavior still need manual checks. Performance can vary by device, browser and test conditions.

**Not available:** exported Lighthouse HTML/JSON details, precise emulation mode, per-page scores for the other eight pages, axe results, or documented screen-reader findings.

## 4. Evidence-based page review

| Page | Desktop screenshot | Mobile screenshot | Current finding |
|---|---|---|---|
| Landing (`index.html`) | — | — | No screenshot evidence in this report |
| Login (`login.html`) | — | — | No screenshot evidence in this report |
| Register (`register.html`) | — | — | No screenshot evidence in this report |
| **Dashboard (`dashboard.html`)** | **E03** | — | Visible sidebar, stat cards, bar chart and doughnut chart appear well arranged; **E01** records Lighthouse scores |
| **Exercise Library (`exercises.html`)** | — | **E02** | Search, sort and filter sections are readable in the visible 391px viewport; no obvious clipped content in screenshot |
| Exercise Details (`exercise.html`) | — | — | No screenshot evidence in this report |
| **Routine Builder (`routine-builder.html`)** | **E04** | — | Form labels, day choices, summary card and Save/Cancel controls visible in the desktop crop |
| **Active Workout (`workout.html`)** | **E05** | — | Progress, four set rows and desktop exercise list visible in the desktop crop |
| Profile & Settings (`profile.html`) | — | — | No screenshot evidence in this report |

**Team-reported observation:** responsive behavior was checked manually and no problems were noticed. Because the exact page-by-page viewports and results were not logged, this remains **user-reported**, not an independently verified pass for all nine pages.

## 5. Role C: static source review

### 5.1 Routine Builder

**Present in source:**

- Semantic `<main>`, `<form id="routine-form">`, sections with headings, and description/summary content.
- Required routine name with a visible `<label>` and linked hint via `aria-describedby`.
- Optional description `<textarea>` and seven training-day checkboxes grouped by `<fieldset>` / `<legend>`.
- Four numbered exercise rows with sets, reps, rest, reorder and remove controls; an Add Exercise link.
- Responsive `xl:` form/summary split; mobile summary shown above the form; sticky desktop summary.
- Fixed mobile Save/Cancel bar. Its Save button is associated with the form through `form="routine-form"`.

**Still to verify in-browser:** 390px and 768px overflow, fixed bar obscuring the last field, required-name validation, keyboard sequence, and alignment against the exact Figma mobile frame.

### 5.2 Active Workout

**Present in source:**

- Semantic `<main>`, visible routine heading, elapsed-time `<time>` and native `<progress>` element (`6 of 14` sets).
- Current exercise (Bent-Over Row), set checkboxes inside a `<fieldset>`, and readable set status text.
- Rest timer (`01:12` static display), ±15-second/Skip controls, and Next Up section.
- Desktop “All exercises” side column; responsive `<details>` / `<summary>` alternative for smaller widths.
- Bottom-fixed Finish Workout link below `xl`, and desktop Finish Workout action at `xl`.

**Still to verify in-browser:** 390px layout, `details` disclosure interaction, focus order, visibility of fixed Finish action, minimum button/checkbox tap areas, and Figma match.

### 5.3 Expected static-only limitations — **not Phase 2 defects**

Phase 2 intentionally has no JavaScript or backend. The time displays do not count down, routine-row move/remove buttons do not update DOM state, and visible summary statistics do not recalculate dynamically. Form submission/navigation is illustrative; saving persistent workout data belongs to later phases. Do not label these as failures against a **static** prototype requirement.

## 6. Manual test cases and execution log

**Status definitions:**

- **Observed** = directly supported by screenshot or static source review, limited to what is visible/inspectable.
- **User-reported** = described as checked by a team member without per-case evidence.
- **Needs verification** = no direct test outcome recorded; do not count as a pass.
- **Failed** = observed defect with reproducible steps and evidence (none supplied so far).

| ID | Page(s) | Action / expected result | Recorded status | Evidence / next action |
|---|---|---|---|---|
| R-01 | Routine Builder | Open at 1440px; summary occupies desktop side column | **Observed (visible region)** | E04 |
| R-02 | Routine Builder | Open at ~390px; summary moves above form and Save bar stays usable | **Needs verification** | Capture mobile screenshot and scroll to bottom |
| R-03 | Routine Builder | Clear routine name; submit; native required validation blocks navigation | **Needs verification** | Perform browser test; note validation result |
| R-04 | Routine Builder | Tab through all fields/actions; visible and logical focus sequence | **Needs verification** | Keyboard-only check |
| R-05 | Routine Builder | Form extends to footer without content hidden behind fixed Save bar | **Needs verification** | Inspect at 390px with last field in view |
| W-01 | Active Workout | Open at 1440px; progress/side list are arranged correctly | **Observed (visible region)** | E05 |
| W-02 | Active Workout | At ~390px, exercise list becomes disclosure and Finish remains accessible | **Needs verification** | Capture mobile screenshot; open disclosure |
| W-03 | Active Workout | Checkboxes can receive keyboard focus and toggle using Space | **Needs verification** | Keyboard-only check |
| W-04 | Active Workout | All visible mobile touch targets are comfortably operable | **Needs verification** | Inspect actual element bounds |
| D-01 | Dashboard | Lighthouse metrics recorded for locally served page | **Observed** | E01: 98 / 100 / 100 / 100 |
| D-02 | Dashboard | Desktop summary cards and charts display | **Observed (visible region)** | E03 |
| E-01 | Exercise Library | Search and filter layout readable at 391px | **Observed (visible region)** | E02 |
| G-01 | All 9 pages | At 390/768/1440px, no unintended horizontal scroll or overlaps | **User-reported overall** | Record specific page/width outcomes to confirm |
| G-02 | All 9 pages | Keyboard focus visible; mobile menu and disclosures work | **Needs verification** | Tab, Shift+Tab, Enter, Space, Escape |
| G-03 | All 9 pages | Inputs have useful labels and headings have meaningful hierarchy | **Needs verification** | Inspect each page; axe optional |
| G-04 | All 9 pages | Lighthouse Accessibility or axe checks documented per page | **Needs verification** | Only Dashboard Lighthouse screenshot is available |
| G-05 | Own 2 pages | Visual comparison with exported Figma desktop/mobile mockups | **Needs verification** | Export frames and log differences |

### Quick manual workflow for completing missing entries

1. Start the app using `npm ci` then `npm run build`; open HTML pages with Live Server.
2. In DevTools, set **Responsive** widths to **390**, **768**, and **1440** CSS pixels. Check the top, middle, and bottom of each page and scroll horizontally if possible.
3. For Routine Builder, clear **Routine name**, activate **Save routine**, and record whether HTML required validation appears. Restore the value afterward.
4. Use only **Tab**, **Shift+Tab**, **Enter**, **Space**, and **Escape** for focus/control tests; don't assume mouse behavior proves keyboard support.
5. On Workout mobile, expand **All exercises**, scroll to the bottom, and confirm the fixed **Finish workout** action does not cover content.
6. Run Lighthouse Accessibility on important pages; if available, run axe DevTools and attach issue details. Document the browser, width, time, score, and any findings.
7. Export Figma desktop/mobile frames for the two owned pages to compare geometry, typography, and component placement (the exact comparison was not executed here).
8. Change a *Needs verification* entry to *Passed* or *Failed* **only after** running the check; record evidence and details of any defects.

## 7. Issue log

| ID | Severity | Issue / observation | Status |
|---|---|---|---|
| INFO-01 | Informational | Interactive operations such as live countdown and routine row reordering are not implemented in the Phase 2 static prototype. | Expected / out of scope |
| EVID-01 | Documentation | Lighthouse proof currently covers Dashboard only; other scores are not evidenced. | Follow-up |
| EVID-02 | Documentation | Mobile screenshots for Role C's two owned pages have not been attached to this report. | Follow-up |
| EVID-03 | Documentation | Keyboard, axe, and Figma pixel-level verification results are not logged. | Follow-up |

**Confirmed functional/visual defects:** None demonstrated by the material supplied. This does **not** mean that all tests passed.

If a defect is found, add: **ID, page, viewport, browser, steps to reproduce, expected behavior, actual behavior, screenshot, severity, owner, fix, retest result.**

## 8. Phase 2 completion / handoff

| Deliverable | Current evidence | Handoff assessment |
|---|---|---|
| HTML pages for both Role C screens | Files present in repo and desktop screenshots | Implemented; verify mobile and exact Figma alignment |
| Tailwind setup (non-CDN) | `package.json`, `input.css`, generated stylesheet path | Configured in repo; build was reported working locally |
| Dashboard Lighthouse | E01 | Recorded: 98 Performance, 100 Accessibility, 100 Best Practices, 100 SEO |
| Cross-page responsive review | Team report + limited screenshots | Partially documented; complete page-by-page matrix |
| Keyboard/axe accessibility | No result supplied | Pending documentation |
| Figma visual parity | Design link available; no matched frame exports | Not verified in this report |
| Git contribution | This report + evidence files prepared | Commit/PR should link to this report; do not claim authorship of unchanged HTML |

### Suggested PR summary

> Add a Phase 2 responsive/accessibility verification log for RepWise, including the recorded Dashboard Lighthouse scores, screenshot evidence, static source review of Routine Builder and Active Workout, and a clearly labeled checklist of remaining manual tests. No functional changes to the UI are included.

### Discussion reminders

- **Why HTML/Tailwind, not React yet?** Phase 2 is a static design prototype; later phases implement React and data/state.
- **Why `fieldset` + `legend`?** They group related training-day or set inputs with a readable group name.
- **Why `required` and `aria-describedby` on routine name?** Browser-native validation plus an explicit description linked to the input.
- **Why `form="routine-form"` on mobile Save?** The fixed bar sits outside the `<form>`, but its button still submits that form.
- **How does desktop become mobile?** `xl:` switches form/summary placement and hides/shows alternative layouts; exercise rows use container queries to adapt to the **row container's** width.
- **What does Lighthouse 100 Accessibility mean?** No violations detected by those automated Lighthouse checks in that run, not a complete WCAG audit.

---

**Reviewer note:** This file is an evidence-backed working report. Before course submission, the responsible student should verify pending checks, correct any inaccurate observations, and add results of tests they actually performed. Keep the submission consistent with the course's academic-integrity rules.
