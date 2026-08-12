---
trigger: always_on
---

# UI/UX Core Rules & Design System Guidelines

When building, editing, or designing any UI/UX elements in this project:

1. **High Visual Impact**: Implement designs that look premium and state-of-the-art. Utilize glassmorphism, rich gradients, layered elevation shadows, dark mode themes, and modern typography (Plus Jakarta Sans, Inter, Outfit).
2. **Design Tokens**: Store all colors, spacing, font sizes, shadows, and transitions in CSS custom properties (`:root`). Avoid hardcoded inline colors.
3. **Micro-Interactions**: Include interactive states for buttons, inputs, links, cards, and modal popups. Use GPU-accelerated CSS properties (`transform`, `opacity`).
4. **Accessibility (a11y)**: Ensure keyboard focus rings are visible (`:focus-visible`), color contrast meets 4.5:1 ratio (WCAG 2.1 AA), and interactive touch targets are at least 44x44px.
5. **Mobile-First Responsiveness**: Ensure containers scale cleanly across mobile, tablet, desktop, and ultrawide viewports without horizontal scrollbars.
