import { useAuth } from "react-oidc-context";

export default function RequireAuth({ children }) {
  const auth = useAuth();

  if (auth.isLoading) return <p>Loading auth...</p>;
  if (auth.error) return <p style={{ color: "red" }}>Auth error: {String(auth.error)}</p>;

  if (!auth.isAuthenticated) {
    // Redirect to Cognito Hosted UI; show a minimal message so the UI isn't empty
    auth.signinRedirect();
    return <p>Redirecting to sign in…</p>;
  }

  return <>{children}</>;
}
