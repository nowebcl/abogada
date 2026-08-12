---
name: ui-ux-design-system
description: >-
  Guidelines and standards for architecting premium modern UI design systems, color tokens,
  typography scales, fluid spacing, CSS variables, dark/light themes, and cohesive visual language.
---

# UI/UX Design System & Theme Engine

Use this skill when establishing design systems, color palettes, typography scales, CSS tokens, or defining consistent baseline styles across web applications.

---

## 1. Core Principles of Premium Design Systems

1. **Tokenized Architecture**: Never hardcode colors, padding, fonts, or shadow values inline. Define all visual tokens as standard CSS custom properties (`:root`).
2. **Harmonious Color Palettes**: Avoid default browser colors (`red`, `blue`, `#000`). Use cohesive HSL / OKLCH color spaces with defined semantic intent (Primary, Secondary, Surface, Accent, Neutral, State).
3. **Typographic Hierarchy**: Use clear font scaling (e.g. Minor Third `1.2` or Major Third `1.25`) with fluid typography (`clamp()`). Pair a high-clarity sans-serif (Inter, Outfit, Plus Jakarta Sans, Roobert) with appropriate weight weights.
4. **8px Grid System**: Use an 8-point (or 4-point) spatial scale for margins, padding, line-heights, and component dimensions (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`).
5. **Theme Versatility**: Build built-in support for Dark Mode (`prefers-color-scheme` or `[data-theme="dark"]`) using CSS custom properties.

---

## 2. Standard CSS Design Tokens Template

```css
:root {
  /* Brand & Accent Colors (Modern HSL Palette) */
  --primary-hue: 250;
  --primary-sat: 84%;
  --primary-light: 60%;
  
  --color-primary: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
  --color-primary-hover: hsl(var(--primary-hue), var(--primary-sat), 50%);
  --color-primary-active: hsl(var(--primary-hue), var(--primary-sat), 40%);
  --color-primary-alpha: hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.15);

  --color-accent: hsl(320, 85%, 60%);
  --color-accent-glow: hsla(320, 85%, 60%, 0.35);

  /* Surface & Background (Sleek Dark Theme Default) */
  --bg-app: #090a0f;
  --bg-surface-1: #12141d;
  --bg-surface-2: #1b1e2e;
  --bg-surface-3: #262a3f;
  --bg-glass: rgba(255, 255, 255, 0.04);
  
  /* Text & Contrast */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-inverse: #090a0f;

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.16);
  --border-focus: var(--color-primary);

  /* Typography Scale */
  --font-family-main: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;

  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);
  --text-sm: clamp(0.875rem, 0.83rem + 0.25vw, 0.9375rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
  --text-lg: clamp(1.125rem, 1.05rem + 0.38vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --text-3xl: clamp(2rem, 1.6rem + 2vw, 3rem);
  --text-hero: clamp(2.5rem, 2rem + 3vw, 4rem);

  /* Spacing Scale (8px Grid) */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem;  /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem;    /* 16px */
  --space-6: 1.5rem;  /* 24px */
  --space-8: 2rem;    /* 32px */
  --space-12: 3rem;   /* 48px */
  --space-16: 4rem;   /* 64px */

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Elevation Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.35);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 25px var(--color-primary-alpha);

  /* Motion */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 3. Light / Dark Theme Switching

Always implement seamless mode switching using clean variable overrides:

```css
[data-theme="light"] {
  --bg-app: #f8fafc;
  --bg-surface-1: #ffffff;
  --bg-surface-2: #f1f5f9;
  --bg-surface-3: #e2e8f0;
  --bg-glass: rgba(0, 0, 0, 0.03);

  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --text-inverse: #ffffff;

  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-medium: rgba(0, 0, 0, 0.16);

  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

---

## 4. Design System Checklist

- [ ] Has a distinct visual personality (modern, high contrast, clean typography).
- [ ] CSS variable based so themes can be customized dynamically.
- [ ] Uses Google Fonts (Inter, Plus Jakarta Sans, Outfit) loaded asynchronously.
- [ ] Consistent spacing scale based on 4px / 8px.
- [ ] Accessible color contrasts (4.5:1 minimum ratio for standard text).
