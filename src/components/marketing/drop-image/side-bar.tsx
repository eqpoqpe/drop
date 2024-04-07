import {
  CrossCircledIcon,
  InfoCircledIcon,
  Share2Icon,
} from "@radix-ui/react-icons";
import { twJoin } from "tailwind-merge";

type SideBarProps = {
  onClose?: () => void;
};

export function SideBar(props: SideBarProps) {
  const { onClose } = props;

  return (
    <div className={twJoin("absolute", "bottom-0")}>
      <div
        className={twJoin(
          "flex",
          "flex-row",
          "bg-black/75",
          "backdrop-blur-lg",
          "mb-5",
          "box-border",
          "py-3",
          "border",
          "border-solid",
          "border-neutral-800",
          "rounded-xl",
          "box-border"
        )}
      >
        <CrossCircledIcon
          className={twJoin("mx-3", "cursor-pointer", "text-neutral-300")}
          onClick={onClose}
        />
        <Share2Icon
          className={twJoin(
            "mx-3",
            true && "cursor-not-allowed",
            true && "text-neutral-700"
          )}
        />
        <InfoCircledIcon
          className={twJoin("mx-3", "cursor-pointer", "text-neutral-300")}
        />
      </div>
    </div>
  );
}
