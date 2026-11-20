import { NavLink, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="layout">
      <header className="top-bar">
        <strong>Study Planner</strong>
        <nav>
          <NavLink to="/" end>
            Tasks
          </NavLink>
          <NavLink to="/stats">Stats</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
