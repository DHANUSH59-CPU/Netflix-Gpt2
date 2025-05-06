import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Add createBrowserRouter to imports
import Body from "./components/Body";
import Login from "./components/Login";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Body />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;


// problems faced:
// importing createBrowserRouter
// Add this : <RouterProvider router={appRouter} /> 