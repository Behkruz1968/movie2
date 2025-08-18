import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Movies from "../features/movies/pages/Movies";


const MainLayout = lazy(()=> import("../layout/MainLayout"))
const Home = lazy(()=> import("../features/home/pages/Home"))
const Bookmark = lazy(()=> import("../features/bookmark/pages/Bookmark"))

const MovieDetail = lazy(()=> import("../features/movies/pages/MovieDetail"))

const AppRoutes = () => {
  return useRoutes([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
          {index:true, element:<Home/> },
          {path:"bookmark", element:<Bookmark/> },
          {path:"movies", element:<Movies/> },
          {path:"movie/:id", element:<MovieDetail/> },
        ]
    }
  ]);
};

export default React.memo(AppRoutes);
