<p align="center">
  <img width="200" height="200" alt="tinylibrary-logo" src="https://github.com/user-attachments/assets/8f399b9c-1f5a-492d-afba-bb09e4acad5a" />
</p>

<h1 align="center">Tiny Library</h1>

<p align="center">
  A cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.
</p>

---

## About

Tiny Library is a small, curated book‑discovery site built with **Next.js**. Instead of endless algorithmic scrolling, it keeps the catalogue intentionally small so every book feels like a genuine recommendation. Visitors can browse the full collection, filter by category, search by title, and open a dedicated page for each book.

## Demo Link
https://tiny-library-nextjs-wine.vercel.app

## Screenshots

<!--
  Add your own screenshots below. A simple way to generate them:
  1. Run the app locally (`npm run dev`).
  2. Open it in your browser and resize the window (or use DevTools' device toolbar for mobile).
  3. Save the screenshots into a `docs/screenshots` folder in this repo, e.g.:
       docs/screenshots/desktop-home.png
       docs/screenshots/mobile-home.png
  4. Update the paths below to match your file names.
-->

### Desktop

| Home | Books | Book details |
|---|---|---|
| <img width="1210" height="693" alt="image" src="https://github.com/user-attachments/assets/6256e0de-ae5e-4952-a5ac-37469b26986d" /> | <img width="1210" height="693" alt="image" src="https://github.com/user-attachments/assets/93eae876-1f1d-4f2b-9e24-f13adeb9472d" /> |<img width="1212" height="666" alt="image" src="https://github.com/user-attachments/assets/93662ed9-b8ec-4dbf-b18f-fb920b16ccd4" />|


### Mobile

| Home | Books | Book details |
|---|---|---|
| <img width="394" height="760" alt="image" src="https://github.com/user-attachments/assets/53ecd032-f9b9-41f6-a585-5825b3de9e53" />|<img width="392" height="760" alt="image" src="https://github.com/user-attachments/assets/c11e94cb-e271-4b4a-9031-b060ce3671b0" />| <img width="395" height="758" alt="image" src="https://github.com/user-attachments/assets/8cb40343-046b-42da-a8a6-27164c0f844e" />|




## Features

- 🏠 **Home page** with a hero section and a call to action to browse books
- 📚 **Book catalogue** with a responsive grid of book cards (cover, title, author, category, likes)
- 🔍 **Search** for books by title
- 🏷️ **Category filtering** (fiction, non‑fiction, romance, fantasy, and more)
- 📖 **Book detail pages** with cover, category, author, like count, and date added
- ℹ️ **About page** describing the project's philosophy
- 📱 Fully **responsive** layout, from mobile to desktop

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (or your package manager of choice)

### Installation

```bash
# Clone the repository
git clone https://github.com/bara2brh/tiny-library-nextjs.git
cd tiny-library-nextjs/tiny-library

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build & run in production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project structure

```
tiny-library/
├── app/
│   ├── about/            # About page
│   ├── books/            # Books listing and book details ([id]) pages
│   ├── components/       # Navbar, NavLink, BookCard, BooksGrid, BookCategories
│   ├── data/              # Book data source
│   ├── types/             # Shared TypeScript types
│   ├── utils/             # Data-fetching / filtering helpers
│   ├── layout.tsx         # Root layout (fonts, navbar)
│   └── page.tsx           # Home page
├── public/                # Static assets (logo, hero images, book cover)
└── package.json
```

## Roadmap ideas

- Persist book data in a real database or CMS
- Add pagination or infinite scroll to the books grid
- User accounts and the ability to save favourites
- Real per‑book descriptions instead of placeholder text
