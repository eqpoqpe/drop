import { Dialog, DialogProps } from "@pretzel-ui/dialog";
import { useSpring, animated } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";
import { useLayoutEffect, useRef } from "react";
import { twJoin } from "tailwind-merge";
import { ViaImageElementProps } from "./drop-image";
import { calculateImageDisplaySize } from "../../../utils";
import { useHotkeys } from "react-hotkeys-hook";
import { SideBar } from "./side-bar";
import { Blur } from "./blur";

type EvenImageProps = Pick<DialogProps, "on"> &
  ViaImageElementProps & { cleanUp?: () => void };
type TermImageProps = { height: number; width: number; src: string } & Pick<
  EvenImageProps,
  "cleanUp"
>;

const useGesture = createUseGesture([dragAction, pinchAction]);

function TermImage(props: TermImageProps) {
  const { height, width, src, cleanUp } = props;
  const ref = useRef<HTMLDivElement>(null);

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
    <Dialog
      on={true}
      initialFocus={undefined}
      backdropBackground={twJoin("backdrop-blur-xl", "bg-black/95")}
      backdrop={true}
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
        <Blur>
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
              src={src}
              alt=""
            />
            <div
              draggable={false}
              className={twJoin("w-full", "h-full", "absolute", "z-10")}
            ></div>
          </animated.div>
        </Blur>

        <SideBar onClose={cleanUp} />
      </div>
    </Dialog>
  );
}

export function EvenImage(props: EvenImageProps) {
  const { on, imageRef, cleanUp } = props;

  useHotkeys("esc", () => {
    cleanUp?.();
  });

  if (on) {
    const { height, width } = calculateImageDisplaySize(
      imageRef.current!.width,
      imageRef.current!.height,
      0.7
    );

    return (
      <TermImage
        height={height}
        width={width}
        src={imageRef.current!.src}
        cleanUp={cleanUp}
      />
    );
  }

  return undefined;
}
