import { Dialog } from "@pretzel-ui/dialog";
import { useSpring, animated } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";
import { useEffect, useRef } from "react";
import { twJoin } from "tailwind-merge";

const useGesture = createUseGesture([dragAction, pinchAction]);

export function EvenImage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        offset: [s, a],
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

        api.start({ scale: s, rotateZ: a, x, y });

        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 2, max: 20 }, rubberband: true },
    }
  );

  return (
    <Dialog
      on={true}
      initialFocus={undefined}
      backdropBackground="backdrop-blur-xl"
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
          className={twJoin("w-20", "h-20", "bg-red-300", "cursor-pointer")}
          ref={ref}
          style={style}
        ></animated.div>
      </div>
    </Dialog>
  );
}
