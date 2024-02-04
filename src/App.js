import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "./Pages/SignIn";
import Problems from "./Pages/Problems";
import WorkSpace from "./Pages/WorkSpace";
import SignUp from "./Pages/SignUp";
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
