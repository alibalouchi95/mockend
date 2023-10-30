import Homepage from "./homepage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

const Navigator = () => {
  return <RouterProvider router={router} />
}

export default Navigator