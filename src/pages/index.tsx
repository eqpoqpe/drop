import { twJoin } from "tailwind-merge";
import { MainLayout } from "../layouts/main-layout";
import { Suspense, lazy } from "react";
import { Loading } from "../components/base/fallback/loading";
import { usePolicyContext } from "../providers/policy-provider";

const DropImageLazy = lazy(async () => {
  return import("../components/marketing/drop-image/index");
});

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  return {};
}

export function Component() {
  const { allow } = usePolicyContext();

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
        {allow && (
          <Suspense fallback={<Loading />}>
            <DropImageLazy />
          </Suspense>
        )}
      </div>
    </MainLayout>
  );
}
