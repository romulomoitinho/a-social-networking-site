import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/login-page';
import RegisterPage from "./pages/register-page";
import './App.css';
import HomePage from "./pages/home-page";


function App() {

  const router = createBrowserRouter([
    { index:true , element: <HomePage />},
    { path: "/home", element: <HomePage />},
    { path: "/login", element: <LoginPage />},
    { path: "/register", element: <RegisterPage />},
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
