import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "./Pages/SignIn";
import Problems from "./Pages/Problems";
import WorkSpace from "./Pages/WorkSpace";
import SignUp from "./Pages/SignUp";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
