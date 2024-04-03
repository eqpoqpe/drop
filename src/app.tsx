import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { Fallback } from "./components/base/fallback/fallback";
import { IntroAlert } from "./components/base/alerts/intro-alert";
import "@pretzel-ui/alert/style.css";
import { PolicyProvider } from "./providers/policy-provider";
import { getIntroAlertState } from "./utils/storage-detector";
import { Toaster } from "sonner";
import { Favicon } from "./components/features/favicon";

const initialPolicy = () => (getIntroAlertState() === "ALTER" ? true : false);

function App() {
  return (
    <PolicyProvider initialState={initialPolicy}>
      <Favicon />
      <Toaster position="top-center" />
      <IntroAlert />
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </PolicyProvider>
  );
}

export default App;
