import { useAuth } from "react-oidc-context";

export default function UserBadge() {
  const auth = useAuth();

  if (auth.isLoading) return <span>Checking session...</span>;

  if (!auth.isAuthenticated) {
    return (
      <button onClick={() => auth.signinRedirect()}>
        Sign In
      </button>
    );
  }

  const sub = auth.user?.profile?.sub;      // stable Cognito user id
  const email = auth.user?.profile?.email;  // requires 'email' scope

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <span>Signed in as <strong>{email || sub}</strong></span>
      <button onClick={() => auth.signoutRedirect()}>Sign Out</button>
    </div>
  );
}
