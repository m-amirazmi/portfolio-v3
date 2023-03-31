import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/general/footer";
import { Header } from "~/components/general/header";
import type { IProps, IPropsLayout } from "~/utils/types";

export const Layout: React.FC<IProps & IPropsLayout> = ({
  mode,
  toggleMode,
}) => {
  return (
    <div className="max-w-screen flex min-h-screen flex-col items-start justify-start bg-zinc-100 text-zinc-800 transition-colors duration-200 ease-linear dark:bg-zinc-900 dark:text-zinc-100">
      <Header mode={mode} toggleMode={toggleMode} />
      <main className="mx-auto h-full w-full max-w-6xl px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
