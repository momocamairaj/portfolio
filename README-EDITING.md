# Editing Guide

This site is now organized so you can update most content by hand without touching React components.

## The Two Files You Edit

- `content/experiences.js`
  This controls all Selected Work cards and all work detail pages.
- `content/articles.js`
  This controls all Footnotes article listings and article pages.

Do not edit the React files in `src/components/` for normal content updates.

## Add A New Experience

1. Open `content/experiences.js`.
2. Copy one whole experience object.
3. Paste it inside the `experiences` array.
4. Change the text fields.
5. Change the `slug` to a short URL name using lowercase letters and hyphens.
6. Change the `coverImage` path if needed.
7. Save the file.

Your new entry will appear automatically on:

- `/work`
- `/work/your-slug`

## Experience Fields

- `title`
  The card title and default page title.
- `slug`
  The URL part. Example: `summer-internship` becomes `/work/summer-internship`.
- `category`
  A label for your own organization. It does not currently change the layout.
- `subtitle`
  Short secondary label shown on the card.
- `seasonOrYear`
  The date or date range.
- `shortDescription`
  The short paragraph used on the Selected Work card.
- `coverImage`
  The main card image path.
- `route`
  Leave this as `/work/your-slug`.
- `navTheme`
  Only keep this if you want the existing dark navigation style on that page.
- `detailPage`
  This controls the full experience page.

## Experience Page Fields

Inside `detailPage`:

- `eyebrow`
  Small label above the title.
- `title`
  Main page heading.
- `intro`
  The opening paragraphs at the top of the page.
- `sections`
  The content blocks lower on the page.

Most sections use this shape:

```js
{
  type: "media-text",
  title: "Section title",
  media: {
    type: "image",
    src: "/assets/images/example.jpg",
    alt: "Describe the image"
  },
  paragraphs: [
    "First paragraph.",
    "Second paragraph."
  ]
}
```

If you want a very simple new experience, copy an existing one and only replace the words and image paths.

## Add A New Article

1. Open `content/articles.js`.
2. Copy one whole article object.
3. Paste it inside the `articles` array.
4. Change the title, slug, date, subtitle, and description.
5. Replace the `body` paragraphs with your new article.
6. Make sure `draft: false` if you want it visible.
7. Save the file.

Your new entry will appear automatically on:

- `/footnotes`
- `/footnotes/your-slug`

## Article Fields

- `title`
  The article title.
- `slug`
  The URL part. Example: `my-new-note` becomes `/footnotes/my-new-note`.
- `date`
  Use `YYYY-MM-DD`. Articles sort newest first.
- `subtitle`
  The short line below the title.
- `description`
  Short summary for your own organization and future reuse.
- `byline`
  Author name.
- `draft`
  `false` means visible, `true` means hidden from the list.
- `body`
  An array of paragraphs. Each quoted line becomes one paragraph on the page.

Example:

```js
{
  title: "New Article",
  slug: "new-article",
  date: "2026-03-17",
  subtitle: "One-line summary.",
  description: "Short description.",
  byline: "Momoca Mairaj",
  draft: false,
  body: [
    "First paragraph.",
    "Second paragraph.",
    "Third paragraph."
  ]
}
```

## How To Add Images

Put image files here:

- `public/assets/images/`

Then reference them like this:

- `/assets/images/your-file-name.jpg`

Example:

- `/assets/images/pioneerworks.jpg`

Do not put routine content images in `src/assets/images/` unless you are intentionally changing code.

## How To Preview Changes In Vite

1. Open a terminal in the `portfolio` folder.
2. Run:

```bash
npm run dev
```

3. Open the local Vite address shown in the terminal.
4. Refresh the page after saving your edits.

## What Not To Delete

- Do not delete the `experiences` array wrapper in `content/experiences.js`.
- Do not delete the `articles` array wrapper in `content/articles.js`.
- Do not delete commas between entries.
- Do not delete the quotes around text.
- Do not change `export default experiences;` or `export default articles;`
- Do not rename image files after you have linked to them unless you also update the file path.

## Safe Editing Habit

For each new experience or article:

1. Copy an existing entry.
2. Change the words.
3. Change the slug.
4. Change the image path if needed.
5. Save and preview.

That is the safest way to maintain this site by hand.
