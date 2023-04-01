import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Hero } from "~/components/homepage/hero";
import { Projects } from "~/components/homepage/projects";

import homepageJson from "~/data/homepage.json";
import { getDarkMode } from "~/utils/mode.server";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const darkMode = await getDarkMode(request);

  const url = new URL(request.url);
  const p = url.searchParams.get("p") || "react";
  const projects = homepageJson.projects.filter((i) => i.category === p);

  return json({ mode: darkMode, homepageData: { ...homepageJson, projects } });
};
