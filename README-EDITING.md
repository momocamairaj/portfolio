# Editing Guide (Beginner-Friendly)

This file explains how to add or edit experience entries without changing component code.

## 1) Add a New Experience

All Selected Work cards are generated from one file:

- `content/experiences.json`

To add a new experience:

1. Open `content/experiences.json`.
2. Copy an existing object.
3. Paste it at the end of the array (add a comma between objects).
4. Update the fields.

Use this shape:

```json
{
  "id": "new-experience-id",
  "title": "Experience Title",
  "subtitle": "Short Subtitle",
  "seasonOrYear": "Spring 2026",
  "slug": "new-experience-slug",
  "coverImage": "/assets/images/example.jpg",
  "excerpt": "One or two sentences for the carousel card.",
  "route": "/work/new-experience-slug"
}
```

## 2) Where to Put Images

Place image files in:

- `src/assets/images/`

Then reference them in JSON with:

- `/assets/images/your-file-name.jpg`

Example:

- `"/assets/images/pioneerworks.jpg"`

## 3) How Selected Work Auto-Updates

Selected Work is rendered directly from `content/experiences.json` in:

- `src/components/Projects.jsx`

So when you add a new JSON object, the carousel automatically shows the new card.

## 4) Carousel Behavior (Already Wired)

The carousel logic is centralized in:

- `src/hooks/useCenteredCarousel.js`

The styling is centralized in:

- `src/styles.css` (look for `.work-carousel*` classes)

You do not need to manually place cards in JSX.

## 5) Experience Page Fade-In (Already Wired)

Fade-in behavior for major sections on work detail pages is centralized in:

- `src/hooks/useRevealOnScroll.js`
- `src/styles.css` (look for `.reveal-on-scroll` and `.is-visible`)

To make a new section fade in, add class:

- `reveal-on-scroll`

Example:

```jsx
<article className="project-detail__highlight reveal-on-scroll">...</article>
```
