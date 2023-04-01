import { Link, useLoaderData } from "@remix-run/react";
import {SocialIcons} from '~/components/homepage/social-icons'

export const Hero = () => {
  const { mode } = useLoaderData();
  const linkTextColor = mode === "dark" ? "text-teal-400" : "text-teal-800";

  return (
    <section className="h-full py-20">
      <div className="flex h-full flex-col justify-center gap-4">
        <h1 className="text-5xl font-bold md:text-6xl">Hi, I&apos;m Amir 👋</h1>
        <p>Welcome to my digital home.</p>
        <p className="max-w-xl">
          I&apos;m a Kuala Lumpur-based{" "}
          <span className="font-semibold">front-end developer</span> who
          specializes in creating applications using{" "}
          <Link
            className={`${linkTextColor} underline hover:text-teal-600`}
            to="/projects?category=reactjs"
          >
            ReactJS
          </Link>
          -based technologies such as{" "}
          <Link
            className={`${linkTextColor} underline hover:text-teal-600`}
            to="/projects?category=nextjs"
          >
            NextJS
          </Link>{" "}
          and{" "}
          <Link
            className={`${linkTextColor} underline hover:text-teal-600`}
            to="/projects?category=remixjs"
          >
            RemixJS
          </Link>
          . Through this blog, I'll be sharing my thoughts, opinions, and
          projects.
        </p>
       <SocialIcons />
      </div>
    </section>
  );
};
