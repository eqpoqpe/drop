import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Balancer from "react-wrap-balancer";
import { twJoin } from "tailwind-merge";

const copyright = (
  <div
    className={twJoin(
      "max-w-lg",
      "text-center",
      "mt-5",
      "text-neutral-700",
      "text-sm",
      "select-none"
    )}
  >
    <Balancer>
      Created by{" "}
      <a href="https://github.com/eqpoqpe/" target="_blank">
        <span className={twJoin("underline", "cursor-pointer")}>
          Ryan Martin
        </span>
      </a>{" "}
      in 2024, released under the MIT license.
    </Balancer>
  </div>
);

export function Footer() {
  return (
    <footer
      className={twJoin(
        "w-full",
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
      <h2 className={twJoin("text-2xl", "font-medium", "select-none")}>
        About Drop <span className={twJoin("text-lg")}>{"╮(╯▽╰)╭"}</span>
      </h2>

      <div
        className={twJoin(
          "max-w-lg",
          "text-center",
          "mt-5",
          "text-neutral-700",
          "text-sm",
          "pb-7"
        )}
      >
        <Balancer>
          The existence of this project only makes you more painful and anxious.
          It makes you feel like you are in a dark desert. Fearful, helpless,
          thirsty.
        </Balancer>
      </div>

      <a
        href={"https://github.com/eqpoqpe/drop"}
        className={twJoin("w-fit")}
        target="_blank"
      >
        <GitHubLogoIcon width={22} height={22} />
      </a>

      {copyright}
    </footer>
  );
}
