import { Link, NavLink } from "@remix-run/react";
import { FaMoon, FaSun } from "react-icons/fa";
import type { IPropsLayout } from "~/utils/types";

export const Header: React.FC<IPropsLayout> = ({ mode, toggleMode }) => {
  return (
    <section className="h-full w-full">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex items-start justify-between gap-2 py-4">
          <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
            <Link to="/" className="text-2xl font-semibold">
              Amir Azmi
            </Link>
            <div className="flex items-center gap-6">
              <nav className="flex gap-4">
                <NavLink to="/about" className="hover:text-teal-700">
                  About
                </NavLink>
                <NavLink to="/projects" className="hover:text-teal-700">
                  Projects
                </NavLink>
                <NavLink to="/blog" className="hover:text-teal-700">
                  Blog
                </NavLink>
                <NavLink to="/contact" className="hover:text-teal-700">
                  Connect
                </NavLink>
              </nav>
              <div
                onClick={() => toggleMode(mode === "dark" ? "" : "dark")}
                className={`ml-auto md:ml-0 cursor-pointer rounded-md border  border-opacity-20 p-2 text-opacity-80 transition-colors duration-100 ease-linear hover:border-opacity-50 hover:text-opacity-100 ${
                  mode === "dark"
                    ? "border-zinc-100 bg-zinc-800 text-yellow-300"
                    : "border-zinc-500 bg-zinc-200 text-zinc-900"
                }`}
              >
                {mode === "dark" ? <FaSun /> : <FaMoon />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
