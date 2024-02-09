import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "./Pages/SignIn";
import Problems from "./Pages/Problems";
import WorkSpace from "./Pages/WorkSpace";
import SignUp from "./Pages/SignUp";
import { useDispatch } from "react-redux";
import { initializeUser } from "./redux/features/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

import { subscribeToProblems } from "./redux/features/problemSlice";
function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Problems />,
        },
        {
          path: "/problems/:problemId",
          element: <WorkSpace />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        }
      ],
    },
  ]);

  useEffect(() => {

    dispatch(initializeUser());

  }, []);

  useEffect(() => {
    dispatch(initializeUser());
    
    const unsubscribe = dispatch(subscribeToProblems()); // Subscribe to real-time updates

    return () => {
      unsubscribe(); 
    };
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
