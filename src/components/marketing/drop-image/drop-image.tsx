"use client";

import { twJoin } from "tailwind-merge";
import { EvenImage } from "./even-image";

export function DropImage() {
  return (
    <>
      <EvenImage />

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
          await img.decode();
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
      >
        <p className={twJoin("mr-2")}>Drop your base64 file here</p>

        <sub className={twJoin("mt-2", "text-neutral-300")}>
          {"base64 image.jpg > image.jpg.base64"}
        </sub>
      </div>
    </>
  );
}
