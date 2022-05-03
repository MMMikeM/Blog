<script>
  import Header from '$components/header.svelte'

  import '../app.css'
</script>

<div class="container mx-auto max-w-[65ch] flex flex-col">
  <Header />
  <main>
    <slot />
  </main>
  <footer class="py-12">This is a footer</footer>
</div>
