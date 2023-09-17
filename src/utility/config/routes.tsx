import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Projects from "../../pages/projects";
import History from "../../pages/history";

export const routes = [
  { title: "About" },
  { title: "Projects" },
  { title: "History" },
  { title: "Contact" },
].map((item) => ({
  ...item,
  href: "/" + item.title.toLowerCase(),
}));
routes.unshift({ title: "Home", href: "/" });

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", Component: Projects },
  { path: "/history", element: <History /> },
  { path: "/contact", element: <Contact /> },
]);
