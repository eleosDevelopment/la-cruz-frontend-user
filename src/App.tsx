import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: (
      <ProtectedRoutes>
        <AppLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
