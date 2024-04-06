import { useState } from "react";
import { twJoin } from "tailwind-merge";
import { Loading } from "../../base/fallback/loading";
import { toast } from "sonner";

type DropRecvProps = {
  onDecoded?: (event: { image: HTMLImageElement }) => void;
};

export function DropRecv(props: DropRecvProps) {
  const { onDecoded } = props;
  const [decoding, setDecoding] = useState(false);

  if (decoding) {
    return <Loading />;
  } else {
    return (
      <div
        className={twJoin(
          "w-full",
          "h-full",
          "flex",
          "justify-center",
          "items-center",
          "select-none",
          " text-neutral-500",
          "flex-col"
        )}
        onDrop={async (event) => {
          event.preventDefault();

          const file = event.dataTransfer.files[0];
          const img = new Image();

          img.src = "data:image/png;base64," + (await file.text());

          setDecoding(true);

          try {
            await new Promise((resolve) => setTimeout(resolve, 300));
            await img.decode();

            onDecoded?.({ image: img });
          } catch (error) {
            toast.error("It does not look like a base64 file of image");
          } finally {
            setDecoding(false);
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
      >
        <p className={twJoin("mr-2", "text-neutral-300")}>
          Drop your Base64 file here
        </p>
      </div>
    );
  }
}
