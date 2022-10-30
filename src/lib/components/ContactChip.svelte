<script>
  export let href;
  export let color = "#f59e0b";
</script>

<!-- svelte-ignore security-anchor-rel-noreferrer -->
<a {href} class="max-w-fit flex p-2 rounded-md cursor-pointer" target="_blank" style="background-color: {color};">
  <div class="flex items-center mr-2 translate-y-0.5">
    <slot name="icon" />
  </div>
  <slot name="label" />
</a>