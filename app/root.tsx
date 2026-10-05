import { AtlasProvider } from '@atlasauth/react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * The client Atlas context, mounted at the root so every route can use the
 * React hooks/components. `@atlasauth/react-router` re-exports the whole
 * `@atlasauth/react` surface, so the provider comes from this one package.
 */
export default function App() {
  return (
    <AtlasProvider
      publishableKey={import.meta.env.VITE_ATLAS_PUBLISHABLE_KEY ?? ''}
      frontendApi={import.meta.env.VITE_ATLAS_FRONTEND_API ?? 'https://atlasauth.net'}
    >
      <Outlet />
    </AtlasProvider>
  );
}
