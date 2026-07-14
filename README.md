# Portfolio

My personal website, built with Next.js and Tailwind CSS. Design inspired by [nevflynn.com](https://nevflynn.com).

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

## About

This is the source code for my personal site — a place to share who I am, what I've built, and what I'm currently working on. It's built as a modern Next.js App Router project with MDX content, a draggable bento-style layout, and an interactive map.

## Features

- 🗺️ **Interactive map** powered by Mapbox GL, showing places I've lived
- 📝 **MDX-driven content** for posts and projects
- 🧩 **Drag-and-drop grid layout** for a customizable, playful homepage
- 🌗 **Light/dark theme** support
- 📊 **Analytics** via Vercel Analytics
- ⚡ **Fast and lightweight**, built on the Next.js App Router with Tailwind CSS 4

## Tech Stack

| Category        | Tools                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------- |
| Framework       | [Next.js](https://nextjs.org) 16 (App Router)                                                |
| Language        | TypeScript                                                                                   |
| Styling         | [Tailwind CSS](https://tailwindcss.com) 4                                                    |
| Content         | [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)                              |
| Map             | [Mapbox GL](https://www.mapbox.com/) / [react-map-gl](https://visgl.github.io/react-map-gl/) |
| Layout          | [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout)                  |
| Theming         | [next-themes](https://github.com/pacocoursey/next-themes)                                    |
| Data fetching   | [SWR](https://swr.vercel.app/)                                                               |
| Package manager | [pnpm](https://pnpm.io)                                                                      |
| Deployment      | [Vercel](https://vercel.com)                                                                 |

## Project Structure

```
.
├── app/          # App Router routes, layouts, and pages
├── components/   # Reusable UI components
├── config/       # Site configuration (metadata, nav, etc.)
├── content/      # MDX content (posts, projects, etc.)
├── hooks/        # Custom React hooks
├── lib/          # Utilities and shared logic
└── public/       # Static assets
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/installation)

### Installation

```bash
git clone https://github.com/bymaul/portfolio.git
cd portfolio
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory. At minimum, you'll need a Mapbox access token for the map feature:

```bash
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_access_token
```

Get a free token from [mapbox.com](https://account.mapbox.com/access-tokens/).

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). Pushing to `master` triggers an automatic deployment. To deploy your own copy:

1. Fork/clone this repo
2. Import it into [Vercel](https://vercel.com/new)
3. Add the required environment variables (see above)
4. Deploy 🚀

## License

This project is open source. Feel free to explore the code for inspiration, but please don't copy the content, design, or branding as your own.
