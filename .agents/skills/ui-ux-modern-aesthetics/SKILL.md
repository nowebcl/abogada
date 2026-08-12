---
name: ui-ux-modern-aesthetics
description: >-
  Design rules and CSS patterns for creating visually stunning visual interfaces, including dark mode elegance,
  glassmorphism, vibrant backdrop-blur cards, soft glow effects, high-contrast typography, and luxury UI polish.
---

# UI/UX Modern Visual Aesthetics & Glassmorphism

Use this skill when designing web applications that require a premium, cutting-edge visual aesthetic ("wow factor"), such as modern dashboards, SaaS landing pages, portfolio tools, and AI web applications.

---

## 1. The Modern Aesthetic Stack

A visually stunning UI relies on depth, light, contrast, and refined typography:

1. **Layered Depth & Elevation**: Use multiple subtle background surfaces rather than flat single colors.
2. **Glassmorphism & Backdrop Blurs**: Create translucent overlays (`backdrop-filter: blur(16px)`) with crisp borders.
3. **Subtle Glow Accents**: Use Radial Gradients or Box Shadows with low opacity brand colors to guide eye attention.
4. **Micro-Borders**: Use 1px borders with subtle gradients or low-opacity white/black to define shape edges crisp.
5. **Gradient Text**: Accent headlines with smooth multi-color linear gradients (`background-clip: text`).

---

## 2. Reusable CSS Aesthetic Snippets

### A. Glassmorphism Card (Dark Mode Premium)
```css
.glass-card {
  background: rgba(18, 20, 29, 0.65);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg, 16px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.glass-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5), 0 0 20px rgba(120, 119, 198, 0.15);
}
```

### B. Gradient Headline Text
```css
.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 40%, #818cf8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.text-gradient-vibrant {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f43f5e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

### C. Glowing Button (Interactive Accent)
```css
.btn-glow {
  position: relative;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: #ffffff;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-full, 9999px);
  border: none;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.btn-glow::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transition: left 0.6s ease;
}

.btn-glow:hover {
  transform: scale(1.03);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.7);
}

.btn-glow:hover::before {
  left: 100%;
}
```

### D. Ambient Background Mesh Glow
```css
.bg-mesh-glow {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background-color: #090a0f;
}

.bg-mesh-glow::before {
  content: '';
  position: absolute;
  top: -10%; left: 20%;
  width: 50vw; height: 50vw;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%);
  filter: blur(80px);
}

.bg-mesh-glow::after {
  content: '';
  position: absolute;
  bottom: 10%; right: 15%;
  width: 40vw; height: 40vw;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(0,0,0,0) 70%);
  filter: blur(80px);
}
```

---

## 3. UI Composition Rules

1. **Hierarchy First**: The primary call to action (CTA) must be the most visually prominent element on screen.
2. **Spacing Oxygen**: Never crowd text or buttons. Give elements breathing room (minimum 16-24px padding inside cards, 32-48px between sections).
3. **Empty States with Flair**: Designing empty tables or lists should feature soft illustrations, friendly helper copy, and an actionable primary button.
4. **Refined Icons**: Use uniform SVG icon sets (Lucide Icons, Heroicons, Feather Icons) with explicit `stroke-width` (1.5px to 2px for modern look).
