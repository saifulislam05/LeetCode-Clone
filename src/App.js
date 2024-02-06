import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "./Pages/SignIn";
import Problems from "./Pages/Problems";
import WorkSpace from "./Pages/WorkSpace";
import SignUp from "./Pages/SignUp";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
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
          path: "/problems/:problem",
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
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
