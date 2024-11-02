import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import CoffeesDetails from "../Pages/CoffeesDetails";
import CategoryCards from "../Components/CategoryCards";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/deahboard",
        element: <CoffeesDetails></CoffeesDetails>,
      },
    ],
  },
]);


export default router; 