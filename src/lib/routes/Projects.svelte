<script>
  import { fade } from "svelte/transition";
  import Banner from "../components/Banner.svelte";
  import Caption from "../components/Caption.svelte";
  import Card from "../components/Card.svelte";

</script>

<main in:fade={{duration: 200}} class="p-4 max-w-2xl mx-auto flex flex-col justify-center">
  <Banner>"These are clearly state-of-the-art."*</Banner>
  <section class="flex flex-col gap-4 mb-8">
    <h2 class="text-xl text-center">Here are some of my creations.</h2>
  </section>
  <section class="flex flex-col md:flex-wrap md:flex-row gap-4 items-center md:items-start justify-center">
    <Card title="Finnegan's Wonderland website" href="https://github.com/finnegancodes/finnegans-wonderland">
      <div class="mb-4" slot="image">
        <p class="text-3xl underline decoration-amber-400 font-medium">FW</p>
      </div>
    </Card>
    <Card title="Rusty Snake" href="https://github.com/finnegancodes/rusty-snake">
      <div class="mb-4" slot="image">
        <img src="./rust-crab.webp" alt="rust logo" width="64">
      </div>
    </Card>
    <Card title="Snake.js" href="https://snake.finnswonderland.eu">
      <div class="mb-4" slot="image">
        <img src="./js-logo.webp" alt="javascript logo" width="48">
      </div>
    </Card>
  </section>
  <Caption>*They clearly aren't</Caption>
</main>