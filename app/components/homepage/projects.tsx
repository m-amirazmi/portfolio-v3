import { Link, useLoaderData, useLocation } from "@remix-run/react";
import type { IProject, IProjectsTab } from "~/utils/types";

export const Projects = () => {
  const { homepageData, mode } = useLoaderData();
  const { search } = useLocation();
  const items: IProject[] = homepageData.projects;
  const tabs: IProjectsTab[] = homepageData.projects_tab;

  const tabColors =
    mode === "dark"
      ? " hover:text-teal-400 hover:bg-teal-400"
      : "hover:bg-teal-800 hover:text-teal-800";
  const tabActive =
    mode === "dark"
      ? "text-teal-400  bg-opacity-5"
      : " text-teal-800 bg-opacity-5";

  return (
    <section className="pb-20">
      <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between">
        <h2 className="mb-4 text-2xl font-bold md:mb-0">Projects</h2>
        <ul className="mb-0 flex flex-row items-center justify-start gap-2 text-sm">
          {tabs
            .filter((i) => i.id === "all")
            .map((i) => {
              return (
                <Link
                  key={i.id}
                  to={i.id !== "all" ? "?p=" + i.id : i.url}
                  className={`${tabColors} rounded px-3 py-1 transition-colors duration-100 ease-linear hover:bg-opacity-5`}
                >
                  {i.name}
                </Link>
              );
            })}
        </ul>
      </div>
      <div className="mt-4 flex items-center gap-4 text-center">
        {tabs
          .filter((i) => i.id !== "all")
          .map((i) => {
            return (
              <Link
                to={"?p="+i.id}
                key={i.id}
                className={`${tabColors} ${
                  search.includes(i.id) || (!search && i.default)
                    ? mode === 'dark' ? 'bg-teal-400 ' + tabActive : 'bg-teal-800 ' + tabActive
                    : mode === 'dark' ? 'bg-zinc-800 bg-opacity-50' : 'bg-zinc-50 bg-opacity-50'
                } flex-1 rounded-md p-4 transition-colors duration-100 ease-linear hover:bg-opacity-5`}
              >
                {i.name}
              </Link>
            );
          })}
      </div>
      <div className="flex flex-row flex-nowrap gap-4 overflow-x-auto py-4 scrollbar-hide">
        {items.map((i) => {
          return (
            <Link
              to=""
              key={i.id}
              className="h-80 flex-[0_0_204.8px] rounded-md bg-zinc-500 bg-opacity-10 transition duration-150 ease-out hover:-translate-y-1 hover:text-teal-800 hover:shadow-lg"
            >
              <div className="flex h-full w-full flex-col justify-end p-4">
                <h4>{i.title}</h4>
                <p>{i.category}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
