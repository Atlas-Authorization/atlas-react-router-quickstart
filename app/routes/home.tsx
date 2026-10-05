import { SignedIn, SignedOut, UserButton, useUser } from '@atlasauth/react-router';
import { Link } from 'react-router';

export default function Home() {
  const { user } = useUser();

  return (
    <main style={{ maxWidth: 560, margin: '4rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>atlas-react-router-quickstart</h1>
      <p>A starter React Router v7 app wired up with Atlas auth.</p>

      <SignedOut>
        <p>
          You are signed out. <Link to="/sign-in">Sign in</Link> to continue.
        </p>
      </SignedOut>

      <SignedIn>
        <p>Signed in as {user?.first_name ?? user?.id}.</p>
        <p>
          <Link to="/dashboard">Go to your dashboard</Link>
        </p>
        <UserButton />
      </SignedIn>
    </main>
  );
}
