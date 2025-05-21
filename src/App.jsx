import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import VideoCardComponent from "./components/VideoCardComponent";
// import VideoPage from "./components/VideoPage";

const AppLayout = () => {
  const user = useSelector((store) => store.user);
  if (!user) return <Navigate to="/" replace />;
  return <Body />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/body",
    element: <AppLayout />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/video/:id",
    element: <VideoCardComponent />,
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

// problems faced:
// importing createBrowserRouter
// Add this : <RouterProvider router={appRouter} />
