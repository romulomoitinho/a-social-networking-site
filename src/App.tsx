import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/login-page';
import RegisterPage from "./pages/register-page";
import './App.css';


function App() {

  const router = createBrowserRouter([
    { index:true , element: <LoginPage/> },
    { path: "/login", element: <LoginPage/> },
    { path: "/register", element: <RegisterPage/> },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
