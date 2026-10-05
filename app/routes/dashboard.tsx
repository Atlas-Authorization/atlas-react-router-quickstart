import { getAuth } from '@atlasauth/react-router';
import { redirect } from 'react-router';
import type { Route } from './+types/dashboard';

/**
 * A protected route. The loader runs on the server and verifies the session
 * locally with `getAuth` (config read from ATLAS_JWKS_URL / ATLAS_ISSUER in the
 * env). A signed-out visitor is redirected to sign-in before anything renders.
 */
export async function loader(args: Route.LoaderArgs) {
  const { userId, orgId } = await getAuth(args.request);
  if (!userId) throw redirect('/sign-in');
  return { userId, orgId };
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  return (
    <main style={{ maxWidth: 560, margin: '4rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Dashboard</h1>
      <p>This page is only reachable when you are signed in.</p>
      <p>
        Your user id is <code>{loaderData.userId}</code>
        {loaderData.orgId ? (
          <>
            {' '}
            (org <code>{loaderData.orgId}</code>)
          </>
        ) : null}
        .
      </p>
    </main>
  );
}
