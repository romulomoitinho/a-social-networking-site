import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import { MenuProvider } from "./context/MenuContext";
import "./App.css";
import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import MarketplacePage from "./pages/marketplace-page";
import ProtectedRoute from "./context/ProtectedRouteContext";
import AuthProvider from "./context/AutenticationContext";
import UnProtectedRoute from "./context/UnProtectedRouteContext";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <ProtectedRoute component={HomePage} path="/" /> },
    {
      path: "/home",
      element: <ProtectedRoute component={HomePage} path="/home" />,
    },
    {
      path: "/profile",
      element: <ProtectedRoute component={ProfilePage} path="/profile" />,
    },
    {
      path: "/marketplace",
      element: 
        <ProtectedRoute component={MarketplacePage} path="/marketplace" />,
    },
    {
      path: "/login",
      element: <UnProtectedRoute component={LoginPage} path="/login" />,
    },
    {
      path: "/register",
      element: <UnProtectedRoute component={RegisterPage} path="/register" />,
    },
  ]);

  return (
    <AuthProvider>
      <MenuProvider>
        <RouterProvider router={router} />
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;
