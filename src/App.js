import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <></>,
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
