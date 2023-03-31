import { Link } from "@remix-run/react";
import type { IPropsProjects } from "~/utils/types";

export const Projects: React.FC<IPropsProjects> = ({ items }) => {
  return (
    <section className="pb-20">
      <h2 className="mb-4 text-2xl font-bold">Projects</h2>
      <div className="flex flex-row flex-nowrap gap-2 overflow-x-auto">
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
