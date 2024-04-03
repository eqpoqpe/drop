import { PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";
import { Footer } from "../components/marketing/partials";
import { DropLogo } from "../components/base/logo";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={twJoin(
        "max-w-4xl",
        "flex",
        "items-center",
        "flex-col",
        "mx-auto",
        "box-border",
        "p-3"
      )}
    >
      <DropLogo />

      {children}

      <Footer />
    </main>
  );
}
