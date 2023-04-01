import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Hero } from "~/components/homepage/hero";
import { Projects } from "~/components/homepage/projects";

import homepageJson from "~/data/homepage.json";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const p = url.searchParams.get("p") || "react";

  const projects = homepageJson.projects.filter((i) => i.category === p);

  return { homepageData: { ...homepageJson, projects } };
};
