import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Hero } from "~/components/homepage/hero";
import { Projects } from "~/components/homepage/projects";

export default function HomePage() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <Projects items={projects} />
    </>
  );
}

export const loader: LoaderFunction = () => {
  const homepageData = {
    projects: [
      {
        id: "1",
        title: "Lorem Ipsum Title",
        category: "React",
      },
      {
        id: "2",
        title: "Lorem Ipsum Title",
        category: "React",
      },
      {
        id: "3",
        title: "Lorem Ipsum Title",
        category: "React",
      },
      {
        id: "4",
        title: "Lorem Ipsum Title",
        category: "React",
      },
      {
        id: "5",
        title: "Lorem Ipsum Title",
        category: "React",
      },
    ],
  };

  return homepageData;
};
