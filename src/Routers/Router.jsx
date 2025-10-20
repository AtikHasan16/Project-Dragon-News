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
import NewsDetails from "../Pages/NewsDetails";
import PrivateRouter from "./PrivateRouter";
import Loading from "../Pages/Loading";
import ProfileLayout from "../Layouts/ProfileLayout";

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
        path: "/categories/:catId",
        loader: () => fetch("/news.json"),
        element: <CategoryNews></CategoryNews>,
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    loader: () => fetch("/news.json"),
    element: (
      <PrivateRouter>
        <NewsDetails></NewsDetails>,
      </PrivateRouter>
    ),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/authentication",
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Login></Login> },
      {
        path: "/authentication/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "profile",
    element: (
      <PrivateRouter>
        <ProfileLayout></ProfileLayout>
      </PrivateRouter>
    ),
  },
]);

export { router };
