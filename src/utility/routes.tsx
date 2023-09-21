import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home";
import About from "../page/about";
import Contact from "../page/contact";
import Projects from "../page/projects";
import History from "../page/history";

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
