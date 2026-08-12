---
name: ui-ux-accessibility-responsive
description: >-
  Standards for accessibility (WCAG 2.1 AA/AAA compliance), keyboard navigation, semantic HTML elements,
  touch target sizing, high contrast ratios, dynamic media queries, and mobile-first responsive layouts.
---

# UI/UX Accessibility & Responsive Layout Skill

Use this skill when implementing responsive web layouts, checking accessibility compliance (WCAG 2.1), setting up keyboard focus states, optimizing touch controls, or structuring semantic HTML5 markup.

---

## 1. Responsive Design Principles

1. **Mobile-First CSS**: Write base styles for small viewports first, then scale up using `min-width` media queries (`640px`, `768px`, `1024px`, `1280px`).
2. **Fluid Typography & Containers**: Use `clamp()` for dynamic scaling and CSS Grid / Flexbox for adaptive container flows.
3. **No Horizontal Overflow**: Always set `max-width: 100%` on images, canvas elements, and wide blocks. Ensure `box-sizing: border-box` globally.
4. **Touch Target Size**: Interactive controls (buttons, links, form inputs) must have a minimum interactive surface of `44x44px` on mobile screens.

---

## 2. Standard Responsive Breakpoints & Container Pattern

```css
/* Base Box-Sizing Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Fluid Container */
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1rem, 4vw, 2.5rem);
  padding-right: clamp(1rem, 4vw, 2.5rem);
}

/* Responsive Grid System */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: var(--space-6, 1.5rem);
}

/* Breakpoint Utility Reference */
/* Mobile (Default): < 640px */
/* Tablet: >= 640px */
@media (min-width: 640px) {
  .tablet-row { flex-direction: row; }
}

/* Desktop: >= 1024px */
@media (min-width: 1024px) {
  .desktop-grid { grid-template-columns: 280px 1fr; }
}
```

---

## 3. Web Accessibility (WCAG 2.1 AA) Rules

### A. Semantic HTML Hierarchy
Always use correct semantic tags instead of wrapping everything in `<div>` elements:
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Enforce a single `<h1>` per page. Heading levels must follow order (`h1` -> `h2` -> `h3`) without skipping levels.

### B. Visible & Custom Focus Rings
Never use `outline: none` without providing an accessible focus replacement:

```css
:focus-visible {
  outline: 2px solid var(--color-primary, #6366f1);
  outline-offset: 3px;
  border-radius: var(--radius-sm, 4px);
}

/* Remove default focus only for mouse users while retaining for keyboard */
button:focus:not(:focus-visible) {
  outline: none;
}
```

### C. Color Contrast & Text Readability
- **Standard Text (< 18pt)**: Contrast ratio must be at least **4.5:1** against the background.
- **Large Text (>= 18pt or 14pt bold)**: Contrast ratio must be at least **3.0:1**.
- **Interactive Controls & UI Components**: Border/fill contrast must be at least **3.0:1**.

### D. ARIA Roles & Screen Reader Attributes
- Buttons without visible text (e.g. icon buttons) **MUST** include `aria-label`:
  ```html
  <button aria-label="Close modal" class="btn-icon">
    <svg ... aria-hidden="true"></svg>
  </button>
  ```
- Dynamic content updates should use `aria-live="polite"` for status messages or notifications.
- Form inputs **MUST** be programmatically linked to `<label for="input-id">`.

---

## 4. Accessibility & Responsive Verification Checklist

- [ ] Page scales gracefully from 320px to 4K resolution without horizontal scrollbars.
- [ ] Tab key navigates logically through all interactive controls.
- [ ] Focus ring is clearly visible when navigating with keyboard.
- [ ] Text color contrast meets WCAG AA standard (4.5:1 ratio).
- [ ] All `<img>` tags have descriptive `alt` text (or `alt=""` for purely decorative graphics).
- [ ] Interactive elements have minimum `44x44px` touch target size on mobile.
