# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
defines a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File                           | URL                                                     |
| ------------------------------ | ------------------------------------------------------- |
| `index.tsx`                    | `/`                                                     |
| `about.tsx`                    | `/about`                                                |
| `services.tsx`                 | `/services`                                             |
| `services/woodwork.tsx`        | `/services/woodwork`                                    |
| `services/interior-design.tsx` | `/services/interior-design`                             |
| `services/renovation.tsx`      | `/services/renovation`                                  |
| `projects.tsx`                 | `/projects`                                             |
| `property.tsx`                 | `/property`                                             |
| `reviews.tsx`                  | `/reviews`                                              |
| `contact.tsx`                  | `/contact`                                              |
| `users/index.tsx`              | `/users`                                                |
| `users/$id.tsx`                | `/users/:id` (dynamic — bare `$`, no curly braces)      |
| `posts/{-$category}.tsx`       | `/posts/:category?` (optional segment)                  |
| `files/$.tsx`                  | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx`                  | layout route (renders children via `<Outlet />`)        |
| `__root.tsx`                   | app shell — wraps every page; preserve `<Outlet />`     |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.
