import { RouteObject } from "react-router-dom";
import HomePage from "../pages/home-page";
import RegisterPage from "../pages/register-page";
import LoginPage from "../pages/login-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import AppContent from "../components/AppContent";



const mainRoute: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: '/',
            element: <AppContent />
          },
          {
            path: 'about',
            element: <AboutPage />
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/contact",
            element: <ContactPage />
          }
        ]
      },
      
]

export default mainRoute