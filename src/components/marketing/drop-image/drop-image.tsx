import { RefObject, useRef } from "react";
import { DropRecv } from "./drop-recv";
import { EvenImage } from "./even-image";
import { useToggle } from "usehooks-ts";

export type ViaImageElementProps = { imageRef: RefObject<HTMLImageElement> };

export function DropImage() {
  const [openEvenImage, , setOpenEvenImage] = useToggle(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <>
      <EvenImage
        on={openEvenImage}
        imageRef={imageRef}
        cleanUp={() => {
          imageRef.current = null;
          setOpenEvenImage(false);
        }}
      />
      <DropRecv
        onDecoded={({ image }) => {
          imageRef.current = image;
          setOpenEvenImage(true);
        }}
      />
    </>
  );
}
