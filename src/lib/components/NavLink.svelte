<script>
  import { link } from "svelte-spa-router";

  export let label;
  export let to;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a class="hover:text-white text-lg md:transition-colors active:text-neutral-400 md:active:text-white md:duration-75 px-2" use:link={{ href: to }}>{label}</a>
