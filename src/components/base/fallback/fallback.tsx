import { twJoin } from "tailwind-merge";
import { RotatingLines } from "../../ui/spinner";

export function Fallback() {
  return (
    <div
      className={twJoin(
        "w-full",
        "h-full",
        "flex",
        "justify-center",
        "items-center"
      )}
    >
      <RotatingLines />
    </div>
  );
}
