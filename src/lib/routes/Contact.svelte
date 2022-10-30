<script>
  import Banner from "../components/Banner.svelte";
  import ContactChip from "../components/ContactChip.svelte";
</script>

<main class="p-4 max-w-2xl mx-auto flex flex-col justify-center">
  <Banner>"I don't recognize you. You are new."</Banner>
  <section class="flex flex-col mb-8">
    <h2 class="text-lg text-center">
      Let's have a look at few of the ways you can contact me.
    </h2>
  </section>
  <section
    class="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4"
  >
    <ContactChip href="https://www.reddit.com/user/DeepPurple101" color="#ef4444">
      <i slot="icon" class="fa fa-reddit fa-lg block" aria-hidden="true" />
      <p slot="label">u/DeepPurple101</p>
    </ContactChip>
    <ContactChip href="https://github.com/finnegancodes" color="#3f3f46">
      <i slot="icon" class="fa fa-github fa-lg block" aria-hidden="true" />
      <p slot="label">@finnegancodes</p>
    </ContactChip>
    <ContactChip href="/#/contact" color="#6366f1">
      <i slot="icon" class="fa fa-discord fa-lg block" aria-hidden="true" />
      <p slot="label">DeepPurple#0782</p>
    </ContactChip>
    <ContactChip href="https://www.wattpad.com/user/FinneganWrites">
      <i slot="icon" class="fa fa-book fa-lg block" aria-hidden="true" />
      <p slot="label">@FinneganWrites</p>
    </ContactChip>
  </section>
</main>
