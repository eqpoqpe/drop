import { RefObject, useRef, useState } from "react";
import { DropRecv } from "./drop-recv";
import { EvenImage } from "./even-image";

export type ViaImageElementProps = { imageRef: RefObject<HTMLImageElement> };

export function DropImage() {
  const [openEvenImage, setOpenEvenImage] = useState(false);
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
