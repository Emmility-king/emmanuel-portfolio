# Emmanuel Olafisoye — Portfolio

Personal portfolio site for Emmanuel Olafisoye, full stack engineer.

Built with Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS v4, GSAP for entrance animations, and [Simple Icons](https://simpleicons.org/) for technology logos.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | Purpose                          |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Lint the project with ESLint     |

## Project structure

```
app/
  layout.tsx          Root layout, fonts, site-wide metadata
  page.tsx            Home page (hero + section directory)
  about/ contact/ education/ experience/ projects/ skills/
  not-found.tsx       404 page
  globals.css         All site styles
components/
  route-header.tsx    Shared header used by every section page
  motion-scope.tsx    Client wrapper that runs the GSAP animations
lib/
  site.ts             Site name, section list, and numbering helpers
public/
  me.jpg              Portrait used on the home page and for social previews
```

Pages are server components. Only `MotionScope` runs on the client, and it skips animations for visitors with `prefers-reduced-motion` enabled.

## Editing content

- **Navigation and section numbering:** `lib/site.ts`. Section numbers (01–06) come from the order of the `sections` array, so reordering it updates the home directory and every page header.
- **Page content:** each page keeps its data (experiences, projects, skills, and so on) in an array at the top of its `page.tsx`.
