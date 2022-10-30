<script>
  import Router from "svelte-spa-router";
  import Header from "./lib/Header.svelte";
  import routes from "./routes";
</script>

<Header />

<Router {routes} />
