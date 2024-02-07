import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "./Pages/SignIn";
import Problems from "./Pages/Problems";
import WorkSpace from "./Pages/WorkSpace";
import SignUp from "./Pages/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { initializeUser } from "./redux/features/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
function App() {
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
        },
      ],
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeUser());
  }, []);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
