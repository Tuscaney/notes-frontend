import RequireAuth from "./auth/RequireAuth";
import UserBadge from "./components/UserBadge";

function Notes() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Your Notes</h2>
      <p>(Tomorrow you'll fetch/save notes owned by the current user.)</p>
    </div>
  );
}

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


