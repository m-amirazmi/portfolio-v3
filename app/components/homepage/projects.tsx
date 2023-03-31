import { Link } from "@remix-run/react";
import type { IPropsProjects } from "~/utils/types";

export const Projects: React.FC<IPropsProjects> = ({ items }) => {
  return (
    <section className="pb-20">
      <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between">
        <h2 className="mb-4 text-2xl font-bold">Projects</h2>
        <ul className="mb-4 flex flex-row items-center justify-start gap-2 text-sm">
          <Link
            to="?p=react"
            className="rounded bg-zinc-50 px-3 py-1 hover:bg-teal-700 hover:bg-opacity-5 hover:text-teal-700"
          >
            ReactJS
          </Link>
          <Link
            to="?p=next"
            className="rounded bg-zinc-50 px-3 py-1 hover:bg-teal-700 hover:bg-opacity-5 hover:text-teal-700"
          >
            NextJS
          </Link>
          <Link
            to="?p=remix"
            className="rounded bg-zinc-50 px-3 py-1 hover:bg-teal-700 hover:bg-opacity-5 hover:text-teal-700"
          >
            RemixJS
          </Link>
          <Link
            to="/projects"
            className="rounded bg-teal-700 bg-opacity-75 px-3 py-1 text-zinc-50 hover:bg-opacity-90"
          >
            View All
          </Link>
        </ul>
      </div>
      <div className="flex flex-row flex-nowrap gap-2 overflow-x-auto pb-4">
        {items.map((i) => {
          return (
            <Link
              to=""
              key={i.id}
              className="h-80 flex-[0_0_211.2px] bg-zinc-200 hover:text-teal-800"
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
