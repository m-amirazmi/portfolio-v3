import {
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="h-[500px]">
      <div className="flex h-full flex-col justify-center gap-4">
        <h1 className="text-6xl font-bold">Hi, I&apos;m Amir 👋</h1>
        <p>Welcome to my digital home.</p>
        <p className="max-w-xl">
          I&apos;m a Kuala Lumpur-based{" "}
          <span className="font-semibold">front-end developer</span> who
          specializes in creating applications using{" "}
          <Link
            className="text-teal-800 underline hover:text-teal-600"
            to="/projects?category=reactjs"
          >
            ReactJS
          </Link>
          -based technologies such as{" "}
          <Link
            className="text-teal-800 underline hover:text-teal-600"
            to="/projects?category=nextjs"
          >
            NextJS
          </Link>{" "}
          and{" "}
          <Link
            className="text-teal-800 underline hover:text-teal-600"
            to="/projects?category=remixjs"
          >
            RemixJS
          </Link>
          . Through this blog, I'll be sharing my thoughts, opinions, and
          projects.
        </p>
        <div className="mt-4 flex gap-4 text-xl">
          <Link
            to=""
            className="rounded-md bg-zinc-50 p-3 hover:bg-teal-700 hover:bg-opacity-5 hover:text-teal-700"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to=""
            className="rounded-md bg-zinc-50 p-3 hover:bg-teal-700 hover:bg-opacity-5 hover:text-teal-700"
          >
            <FaGithubAlt />
          </Link>
          <Link
            to=""
            className="rounded-md bg-zinc-50 p-3 hover:bg-teal-700 hover:bg-opacity-5 hover:text-teal-700"
          >
            <FaWhatsapp />
          </Link>
          <Link
            to=""
            className="rounded-md bg-zinc-50 p-3 hover:bg-teal-700 hover:bg-opacity-5 hover:text-teal-700"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </section>
  );
}
