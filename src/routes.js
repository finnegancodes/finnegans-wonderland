import Blog from "./lib/routes/Blog.svelte";
import Contact from "./lib/routes/Contact.svelte";
import Home from "./lib/routes/Home.svelte";
import Projects from "./lib/routes/Projects.svelte";

const routes = {
  "/": Home,
  "/projects": Projects,
  "/blog": Blog,
  "/contact": Contact
}

export default routes;