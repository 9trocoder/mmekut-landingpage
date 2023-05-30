import {createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/error-page";
import Homepage from "./pages/Homepage";
import Features from "./pages/Features"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />
  },

  {
    path: "/features",
    element: <Features />,
    errorElement: <ErrorPage />
  },

])

export default router;
