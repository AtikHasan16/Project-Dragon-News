import { createBrowserRouter } from "react-router";
import RootLayout from "../Main/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Error/ErrorPage";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AuthLayout from "../Layouts/AuthLayout";

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
        path: "categories/:catId",
        loader: () => fetch("/news.json"),
        element: <CategoryNews></CategoryNews>,
        hydrateFallbackElement: <div>Loading...</div>,
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
    path: "/authentication",
    element: <AuthLayout></AuthLayout>,
    children: [
      { index: true, element: <Login></Login> },
      {
        path: "/authentication/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export { router };
