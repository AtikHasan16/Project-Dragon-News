import { createBrowserRouter } from "react-router";
import RootLayout from "../Main/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Error/ErrorPage";
import CategoryNews from "../Pages/CategoryNews";

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
        loader: () => fetch("/public/news.json"),
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
    element: <div>Authentication layout</div>,
  },
]);

export { router };
