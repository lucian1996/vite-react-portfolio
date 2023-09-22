import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home-page";
import About from "../page/about-page";
import Contact from "../page/contact-page";
import Projects from "../page/projects-page";
import Experience from "../page/experience-page";

export const routes = [
  { title: "About" },
  { title: "Projects" },
  { title: "Experience" },
  { title: "Contact" },
].map((item) => ({
  ...item,
  href: "/" + item.title.toLowerCase(),
}));
routes.unshift({ title: "Home", href: "/" });

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/experience", element: <Experience /> },
  { path: "/contact", element: <Contact /> },
]);
