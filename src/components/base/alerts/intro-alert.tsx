"use client";

import { Alert, AlertResultCallbackFn } from "@pretzel-ui/alert";
import { twJoin } from "tailwind-merge";
import Balancer from "react-wrap-balancer";
import { useState } from "react";
import { getIntroAlertState } from "../../../utils/storage-detector";
import { tokens } from "../../../constants";

export function IntroAlert() {
  const [isAlertOn, setIsAlertOn] = useState(getIntroAlertState);
  const closeHandle = ((result) => {
    if (result.cancel) close();

    if (result.confirm) {
      setIsAlertOn("ALTER");
      localStorage.setItem(tokens["Intro Alert"], "ALTER");
    }
  }) as AlertResultCallbackFn;

  return (
    <Alert
      on={isAlertOn !== "ALTER"}
      title="Now I Tell You"
      type="help"
      contents={[
        <div className={twJoin("mt-2", "text-neutral-700", "text-sm")} key="">
          <Balancer>
            There are always some things that are beyond our control, and you
            cannot disregard the consequences.
          </Balancer>
        </div>,
      ]}
      backdropBackground="text-white/75 backdrop-blur-md"
      confirmText="Continue"
      cancelText="No, I just want be kind"
      showCancel={true}
      onClose={closeHandle}
    />
  );
}
