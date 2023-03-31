import { Link, NavLink } from "@remix-run/react";

export const Header = () => {
  return (
    <section className="h-full w-full">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex items-start justify-between gap-2 py-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-2xl font-semibold">
              Amir Azmi
            </Link>
            <nav className="flex gap-4">
              <NavLink to="/about" className="hover:text-teal-700">
                About
              </NavLink>
              <NavLink to="/services" className="hover:text-teal-700">
                Services
              </NavLink>
              <NavLink to="/projects" className="hover:text-teal-700">
                Projects
              </NavLink>
              <NavLink to="/blog" className="hover:text-teal-700">
                Blog
              </NavLink>
              <NavLink to="/contact" className="hover:text-teal-700">
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
