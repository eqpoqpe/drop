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
    <div className={twJoin("absolute", "right-0")}>
      <div
        className={twJoin(
          "bg-white/75",
          "backdrop-blur-lg",
          "mr-2",
          "box-border",
          "px-3",
          "border",
          "border-solid",
          "border-neutral-200",
          "rounded-xl",
          "box-border"
        )}
      >
        <CrossCircledIcon
          className={twJoin("my-3", "cursor-pointer")}
          onClick={onClose}
        />
        <Share2Icon
          className={twJoin(
            "my-3",
            true && "cursor-not-allowed",
            true && "text-neutral-300"
          )}
        />
        <InfoCircledIcon className={twJoin("my-3")} />
      </div>
    </div>
  );
}
