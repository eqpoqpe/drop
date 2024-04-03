import { PropsWithChildren, createContext, useContext, useState } from "react";

type PolicyContext = {
  allow: boolean;
  setAllow: (n: boolean) => void;
};
type PolicyProviderProps = PropsWithChildren<{
  initialState?: () => PolicyContext["allow"];
}>;

const policyContext = createContext<PolicyContext | undefined>(undefined);

export function PolicyProvider(props: PolicyProviderProps) {
  const { children, initialState } = props;
  const [allow, setAllow] = useState(initialState ?? false);

  return (
    <policyContext.Provider value={{ allow, setAllow }}>
      {children}
    </policyContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePolicyContext = () =>
  useContext(policyContext) as PolicyContext;
