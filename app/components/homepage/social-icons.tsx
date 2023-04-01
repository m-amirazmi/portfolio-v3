import {
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";

export const SocialIcons = () => {
  const { mode } = useLoaderData();
  const iconColor =
    mode === "dark"
      ? "bg-zinc-800 hover:text-teal-400 hover:bg-teal-400"
      : "bg-zinc-50 hover:text-teal-800 hover:bg-teal-800";
  return (
    <div className="mt-4 flex gap-4 text-xl">
      <Link
        to="https://www.linkedin.com/in/m-amirazmi/"
        target="_blank"
        className={`${iconColor} rounded-md bg-zinc-50 p-3 transition-colors duration-100 ease-linear  hover:bg-opacity-5`}
      >
        <FaLinkedinIn />
      </Link>
      <Link
        to="https://github.com/m-amirazmi"
        target="_blank"
        className={`${iconColor} rounded-md bg-zinc-50 p-3 transition-colors duration-100 ease-linear hover:bg-opacity-5`}
      >
        <FaGithubAlt />
      </Link>
      <Link
        to="https://wa.me/601119821105"
        target="_blank"
        className={`${iconColor} rounded-md bg-zinc-50 p-3 transition-colors duration-100 ease-linear hover:bg-opacity-5`}
      >
        <FaWhatsapp />
      </Link>
      <Link
        to="mailto:m.amirazmi@hotmail.com"
        target="_blank"
        className={`${iconColor} rounded-md bg-zinc-50 p-3 transition-colors duration-100 ease-linear hover:bg-opacity-5`}
      >
        <FaEnvelope />
      </Link>
    </div>
  );
};
