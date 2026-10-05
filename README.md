# atlas-react-router-quickstart

A minimal React Router v7 (framework mode / SSR) app pre-wired with
[Atlas](https://atlasauth.net) auth, using `@atlasauth/react-router`.

The package re-exports the full `@atlasauth/react` surface, so the client
components (`<AtlasProvider>`, `<SignIn>`, `<SignedIn>`, `<UserButton>`,
`useUser`) and the server loader helper (`getAuth`) all come from this one
package.

## What it shows

- `app/root.tsx` — `<AtlasProvider>` mounted at the root.
- `app/routes/home.tsx` — a public home page with `<SignedIn>` / `<SignedOut>`
  and a `<UserButton>`.
- `app/routes/sign-in.tsx` — the `<SignIn>` flow.
- `app/routes/dashboard.tsx` — a protected route whose **server loader** calls
  `getAuth(request)` and redirects signed-out visitors to `/sign-in`.

## Run it

1. `npm install`
2. `cp .env.example .env`, then set `VITE_ATLAS_PUBLISHABLE_KEY`,
   `VITE_ATLAS_FRONTEND_API`, `ATLAS_JWKS_URL`, and `ATLAS_ISSUER` to the values
   from [atlasauth.net](https://atlasauth.net).
3. `npm run dev`

Open http://localhost:5173. Visit `/dashboard` to see loader-based protection.
