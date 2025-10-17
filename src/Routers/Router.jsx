import { createBrowserRouter } from "react-router";
import RootLayout from "../Main/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "career",
        element: <Career></Career>,
      },
    ],
  },
  {
    path: "",
    element: "",
  },
]);

export { router };
