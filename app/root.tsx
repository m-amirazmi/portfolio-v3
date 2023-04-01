import { useState } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import tailwindStyles from "~/styles/tailwind.css";
import styles from "~/styles/main.css";
import { Layout } from "~/components/general/layout";
import navigationJson from "~/data/navigation.json";
import { redirect, json } from "@remix-run/node";
import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
  ActionFunction,
} from "@remix-run/node";
import { setDarkMode } from "~/utils/mode.server";
import { getDarkMode } from "~/utils/mode.server";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Amir Azmi | 👋 Welcome to my digital home",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwindStyles,
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function App() {
  const { mode } = useLoaderData();

  return (
    <html lang="en" className={mode}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const darkMode = await getDarkMode(request);

  const res = !darkMode
    ? await setDarkMode(request)
    : { mode: darkMode, headers: {} };
  return json(
    { mode: res.mode, navigationData: navigationJson },
    { headers: res.headers }
  );
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();

  if (request.method === "POST") {
    if (body.get("mode")) {
      const res = await setDarkMode(request);
      return json({ mode: res.mode }, { headers: res.headers });
    }
  }

  return redirect("/");
};
