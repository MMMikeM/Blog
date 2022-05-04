<script lang="ts">
  import Header from '$components/header.svelte'
  import Footer from '$components/footer.svelte'
  import '../app.css'
</script>

<svelte:head>
  <title>Gav's blog</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="container mx-auto max-w-[65ch] px-4 pb-4 pt-4 md:px-0 md:pt-2">
    <slot />
  </main>
  <Footer />
</div>
