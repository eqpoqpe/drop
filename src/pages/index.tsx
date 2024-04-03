import { twJoin } from "tailwind-merge";
import { MainLayout } from "../layouts/main-layout";
import { Suspense, lazy } from "react";
import { Loading } from "../components/base/fallback/loading";

const DropImageLazy = lazy(async () => {
  // for ux
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return import("../components/marketing/drop-image/index");
});

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {};
}

export function Component() {
  return (
    <MainLayout>
      <div
        className={twJoin(
          "w-full",
          "h-96",
          "bg-white",
          "flex",
          "justify-center",
          "items-center",
          "box-border",
          "py-3",
          "mt-5",
          "border",
          "border-solid",
          "border-neutral-200",
          "rounded-xl",
          "box-border",
          "py-5",
          "flex",
          "flex-col",
          "items-center"
        )}
      >
        <Suspense fallback={<Loading />}>
          <DropImageLazy />
        </Suspense>
      </div>
    </MainLayout>
  );
}
