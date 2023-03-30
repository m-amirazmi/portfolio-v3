import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/general/footer";
import { Header } from "~/components/general/header";
import type { IProps } from "~/utils/types";

export const Layout: React.FC<IProps> = () => {
  return (
    <div className="max-w-screen flex min-h-screen flex-col items-start justify-start bg-zinc-100 text-zinc-800">
      <Header />
      <main className="mx-auto h-full w-full max-w-6xl px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
