import { useDarkMode } from "usehooks-ts";

const faviconDark = "/drop-dark.svg";
const faviconLight = "/drop.svg";

const favEl = document.querySelector("link[rel=icon]");

export function Favicon() {
  const { isDarkMode } = useDarkMode({});

  if (isDarkMode) favEl?.setAttribute("href", faviconDark);
  else favEl?.setAttribute("href", faviconLight);

  return undefined;
}
