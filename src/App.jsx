import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

const AppLayout = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [dispatch]);

  return user ? <Body /> : <Navigate to="/" />;
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
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

// problems faced:
// importing createBrowserRouter
// Add this : <RouterProvider router={appRouter} />
