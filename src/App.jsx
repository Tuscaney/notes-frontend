import RequireAuth from "./auth/RequireAuth";
import UserBadge from "./components/UserBadge";
import Notes from "./pages/Notes";

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <UserBadge />
      <hr />
      <RequireAuth>
        <Notes />
      </RequireAuth>
    </div>
  );
}



