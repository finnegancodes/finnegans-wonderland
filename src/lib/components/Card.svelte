<script>
  export let title;
  export let href = "/";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore security-anchor-rel-noreferrer -->
<a
  {href}
  target="_blank"
  class="w-full md:w-[10rem] max-h p-4 bg-neutral-800 ring-1 ring-neutral-700 rounded-md hover:bg-neutral-700 hover:ring-neutral-600 transition-colors duration-100 cursor-pointer"
>
  <slot name="image" />
  <p>{title}</p>
</a>
