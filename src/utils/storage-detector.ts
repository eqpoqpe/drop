import { tokens } from "../constants";

export const getIntroAlertState = () =>
  typeof window !== "undefined"
    ? localStorage.getItem(tokens["Intro Alert"])
    : null;
