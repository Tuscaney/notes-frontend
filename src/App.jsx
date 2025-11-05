import { useAuth } from "react-oidc-context";

export default function App() {
  const auth = useAuth();

  if (auth.isLoading) return <p className="p-6">Loading auth...</p>;
  if (auth.error) return <p className="p-6 text-red-600">Auth error: {String(auth.error)}</p>;

  if (!auth.isAuthenticated) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold">Notes App</h1>
        <button
          onClick={() => auth.signinRedirect()}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <p className="text-xl">Hello, {auth.user?.profile?.email || "user"}</p>
      <button
        onClick={() => auth.signoutRedirect()}
        className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-900"
      >
        Sign Out
      </button>
    </div>
  );
}

