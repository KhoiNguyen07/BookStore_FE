import React from "react";
import {useRoutes} from "react-router-dom";
import {path} from "../assets/path/path";
import HomePage from "../pages/HomePage/HomePage";

const useRouteCustom = () => {
  const elements = useRoutes([
    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
    {
      path: path.Homepage,
      element: <HomePage />,
    },
  ]);
  return elements;
};

export default useRouteCustom;
