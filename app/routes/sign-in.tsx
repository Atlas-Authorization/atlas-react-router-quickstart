import { SignIn } from '@atlasauth/react-router';

export default function SignInRoute() {
  return (
    <main style={{ maxWidth: 420, margin: '4rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <SignIn />
    </main>
  );
}
