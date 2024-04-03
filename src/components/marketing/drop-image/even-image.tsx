import { Dialog, DialogProps } from "@pretzel-ui/dialog";
import { useSpring, animated } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";
import { useLayoutEffect, useRef } from "react";
import { twJoin } from "tailwind-merge";
import { ViaImageElementProps } from "./drop-image";
import { calculateImageDisplaySize } from "../../../utils";
import { CrossCircledIcon, Share2Icon } from "@radix-ui/react-icons";

type EvenImageProps = Pick<DialogProps, "on"> &
  ViaImageElementProps & { cleanUp?: () => void };
type SideBarProps = {
  onClose?: () => void;
};

const useGesture = createUseGesture([dragAction, pinchAction]);

function SideBar(props: SideBarProps) {
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
          className={twJoin("my-3", "cursor-not-allowed", "text-neutral-300")}
        />
      </div>
    </div>
  );
}

export function EvenImage(props: EvenImageProps) {
  const { on, imageRef, cleanUp } = props;
  const ref = useRef<HTMLDivElement>(null);
  let [height, width] = [0, 0];

  if (on) {
    const result = calculateImageDisplaySize(
      imageRef.current!.width,
      imageRef.current!.height,
      0.7
    );

    height = result.height;
    width = result.width;
  }

  useLayoutEffect(() => {
    const handler = (e: Event) => e.preventDefault();

    document.addEventListener("gesturestart", handler);
    document.addEventListener("gesturechange", handler);
    document.addEventListener("gestureend", handler);

    return () => {
      document.removeEventListener("gesturestart", handler);
      document.removeEventListener("gesturechange", handler);
      document.removeEventListener("gestureend", handler);
    };
  }, []);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));

  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y] }) => {
        if (pinching) return cancel();

        api.start({ x, y });
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y } = ref.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);

          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];

        api.start({ scale: s, x, y });

        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 1, max: 20 }, rubberband: true },
    }
  );

  return (
    on && (
      <Dialog
        on={on}
        initialFocus={undefined}
        backdropBackground="backdrop-blur-xl"
        backdrop={true}
        onClose={() => {
          console.log("cleanup");
        }}
      >
        <div
          className={twJoin(
            "w-full",
            "h-full",
            "flex",
            "justify-center",
            "items-center"
          )}
        >
          <animated.div
            className={twJoin(
              "cursor-pointer",
              "relative",
              "overflow-hidden",
              "select-none"
            )}
            ref={ref}
            style={{
              width: width,
              height: height,
              ...style,
            }}
          >
            <img
              className={twJoin("w-full", "h-full", "absolute", "z-0")}
              src={imageRef.current?.src}
              alt=""
            />
            <div
              draggable={false}
              className={twJoin("w-full", "h-full", "absolute", "z-10")}
            ></div>
          </animated.div>

          <SideBar onClose={cleanUp} />
        </div>
      </Dialog>
    )
  );
}
