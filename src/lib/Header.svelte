<script>
  import Background from "./Background.svelte";
  import NavLink from "./components/NavLink.svelte";

</script>

<header class="">
  <div class="h-full px-4 py-6 mx-auto flex flex-col justify-center items-center">
    <h2 class="text-3xl text-center font-medium underline decoration-amber-400 select-none">Finnegan's Wonderland</h2>
    <nav class="flex justify-center items-center my-4 md:hover:text-neutral-400 md:transition-colors md:duration-100">
      <NavLink to="/" label="Home" />
      <NavLink to="/projects" label="Projects" />
      <NavLink to="/blog" label="Blog" />
      <NavLink to="/contact" label="Contact" />
    </nav>
  </div>
</header>

<Background />
