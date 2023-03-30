import type { LoaderFunction } from "react-router";

export default function ProjectsPage() {
  return <div>ProjectsPage</div>;
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const categoryParam = url.searchParams.get("category");
  console.log(categoryParam);
  return { message: "test" };
};
