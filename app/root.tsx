import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStyles from "~/styles/tailwind.css";
import styles from "~/styles/main.css";
import { Layout } from "~/components/general/layout";
import { useState } from "react";

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
  const [mode, setMode] = useState("dark");

  return (
    <html lang="en" className={mode}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout toggleMode={setMode} mode={mode}>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
