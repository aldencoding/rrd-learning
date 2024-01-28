import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="bg-red-800 text-white p-3 flex flex-row">
        <h2 className="mr-auto text-3xl">Farrel</h2>
        <ul className="flex flex-row gap-5 text-xl">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive
                ? "underline decoration-black underline-offset-4"
                : "no-underline decoration-white";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to={"about"}
            className={({ isActive }) => {
              return isActive
                ? "underline decoration-black underline-offset-4"
                : "no-underline decoration-white";
            }}
          >
            About
          </NavLink>
          <NavLink
            to={"help"}
            className={({ isActive }) => {
              return isActive
                ? "underline decoration-black underline-offset-4"
                : "no-underline decoration-white";
            }}
          >
            Help
          </NavLink>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
