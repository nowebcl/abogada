---
name: ui-ux-animation-interactions
description: >-
  Best practices for micro-interactions, fluid CSS transitions, spring timing curves, skeleton loaders,
  interactive hover/active states, modal slide-ins, and GPU-accelerated motion performance.
---

# UI Animations & Micro-Interactions Skill

Use this skill when implementing UI motion, page transition effects, hover animations, skeleton loading placeholders, modal dialogues, toast notifications, or micro-feedback interactions.

---

## 1. Principles of Motion Design

1. **Purposeful Motion**: Every animation must serve a communicative purpose (giving feedback, showing visual spatial relationships, or drawing attention).
2. **Speed & Duration**:
   - Small micro-interactions (clicks, toggles): **100ms – 200ms**.
   - Medium component transitions (cards, dropdowns, tooltips): **200ms – 300ms**.
   - Large dynamic layouts (modals, drawer overlays, full page state change): **300ms – 400ms**.
3. **Natural Easing (Curves)**: Avoid `linear` timing for UI movements. Use cubic-bezier curves for natural spring/deceleration feel.
4. **GPU-Accelerated Properties**: Only animate high-performance properties (`transform`, `opacity`, `filter`). Avoid animating `height`, `width`, `margin`, or `top`/`left` directly as they trigger costly browser layout reflows.

---

## 2. Easing Curve Tokens

```css
:root {
  /* Ease Out (Deceleration - elements entering screen) */
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);

  /* Ease In-Out (Smooth state transformations) */
  --ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);

  /* Elastic / Spring Bounce (Playful feedback) */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-bounce-back: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

---

## 3. High-Impact CSS Motion Patterns

### A. Modal / Dialog Scale & Fade Overlay
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  display: grid;
  place-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 250ms var(--ease-out-expo);
  z-index: 1000;
}

.modal-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.modal-content {
  background: var(--bg-surface-1, #12141d);
  border: 1px solid var(--border-medium, rgba(255, 255, 255, 0.15));
  border-radius: var(--radius-lg, 16px);
  padding: var(--space-8, 2rem);
  width: min(90%, 540px);
  transform: scale(0.92) translateY(10px);
  transition: transform 300ms var(--ease-spring);
}

.modal-overlay.active .modal-content {
  transform: scale(1) translateY(0);
}
```

### B. Skeleton Loader Pulse Animation
```css
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 25%,
    rgba(255, 255, 255, 0.09) 37%,
    rgba(255, 255, 255, 0.04) 63%
  );
  background-size: 400% 100%;
  animation: skeleton-shimmer 1.4s ease infinite;
  border-radius: var(--radius-sm, 6px);
}

@keyframes skeleton-shimmer {
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### C. Active Button Click Feedback (Scale Down Press)
```css
.btn-interactive {
  transition: transform 150ms var(--ease-in-out-smooth), box-shadow 150ms ease;
  will-change: transform;
}

.btn-interactive:hover {
  transform: translateY(-2px);
}

.btn-interactive:active {
  transform: translateY(1px) scale(0.97);
}
```

### D. Toast Notification Slide-In
```css
.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: var(--bg-surface-2, #1b1e2e);
  border: 1px solid var(--border-medium, rgba(255, 255, 255, 0.12));
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--shadow-lg);
  transform: translateY(100px) scale(0.9);
  opacity: 0;
  transition: transform 350ms var(--ease-spring), opacity 250ms ease;
  z-index: 2000;
}

.toast.show {
  transform: translateY(0) scale(1);
  opacity: 1;
}
```

---

## 4. Respect User Motion Preferences

Always wrap decorative or non-essential animations with `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
