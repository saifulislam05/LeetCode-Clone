import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Problems from "./Pages/Problems";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Problems/>,
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
