import {createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/error-page";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />
  }
])

export default router;
