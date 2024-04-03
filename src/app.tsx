import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { Fallback } from "./components/base/fallback/fallback";
import { IntroAlert } from "./components/base/alerts/intro-alert";
import "@pretzel-ui/alert/style.css";

function App() {
  return (
    <>
      <IntroAlert />
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </>
  );
}

export default App;
