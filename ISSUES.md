# CSS Layout & Style Analysis - https://still.bz

## Summary
The website suffers from a critical lack of global styling. The primary stylesheet (`styles.css`) is incomplete, containing only logic for a "Two-Eyed Seeing" view toggle. As a result, core layout elements (navigation, footer, typography, grid systems) are unstyled across all pages unless specific inline styles are present.

## Critical Issues

### 1. `styles.css` is Incomplete
- **Issue:** The main stylesheet (`styles.css`) is only ~56 lines long and contains **only** styles for `.view-toggle` and `data-view-mode` attributes.
- **Impact:** There are no global definitions for:
    - CSS Reset / Normalize (causing inconsistent rendering across browsers)
    - Base Typography (fonts, sizes, line-heights for `body`, `h1`-`h6`, `p`)
    - Layout Containers (e.g., `.container`, `.section-content`)
    - Navigation Bar (`nav`, `ul`, `li`, `a` are unstyled lists)
    - Footer (`footer` is unstyled)
    - Buttons (except specific inline overrides)
    - Mobile Responsiveness (media queries are missing)

### 2. `projects.html` is Unstyled
- **Issue:** This page relies entirely on external classes (`.card`, `.cards-grid`, `.section-content`, `.page-section`) which are **not defined** in `styles.css` and **not defined** inline.
- **Impact:**
    - The "Cards Grid" displays as a vertical stack of unstyled block elements.
    - Images and text have no layout structure.
    - Navigation is a raw bulleted list.
    - The page looks like a plain HTML document from the 1990s.

### 3. Navigation is Broken Globally
- **Issue:** The `<nav>` element containing the main menu is present on all pages but lacks CSS.
- **Impact:**
    - The menu appears as a standard vertical bulleted list.
    - It pushes the main content down significantly.
    - It is not responsive (no hamburger menu for mobile).
    - The "Support" button is just a link in a list item.

### 4. Layout Fragmentation (Inline Styles)
- **Issue:** `index.html`, `timeline.html`, and `bsv-calculator.html` use `<style>` blocks in their `<head>` to define page-specific layouts.
- **Impact:**
    - **Inconsistency:** Visual styles (colors, spacing, fonts) differ between pages because they don't share a source of truth.
    - **Maintenance:** Updating a common element (like a button style) requires editing every HTML file.
    - **Responsiveness:** The inline styles (e.g., `grid-template-columns: 1fr 1fr` in calculator, `width: 50%` in timeline) often lack media queries, likely causing broken layouts on mobile devices.

### 5. Specific Page Issues

#### `timeline.html`
- **Issue:** Uses a central line layout (`left: 50%`) with `width: 50%` for items.
- **Impact:** Without media queries to stack these vertically on small screens, the content will likely overlap the central line or be illegible on mobile devices.

#### `bsv-calculator.html`
- **Issue:** Uses `grid-template-columns: 1fr 1fr` for results.
- **Impact:** On mobile screens, this will squish the content into narrow columns, making it hard to read.

## Recommendations
1.  **Restore/Create `styles.css`:** Move the common inline styles (typography, nav, footer) into `styles.css`.
2.  **Define Layout Classes:** Create CSS rules for `.card`, `.cards-grid`, `.section-content`, `.page-section` in `styles.css`.
3.  **Implement Navigation CSS:** Style the `<nav>` to be a horizontal flex/grid bar with a mobile responsive state.
4.  **Remove Inline Styles:** Refactor `index.html`, `timeline.html`, and `bsv-calculator.html` to use the shared stylesheet.
