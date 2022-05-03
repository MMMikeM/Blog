<script lang="ts">
  import Header from '$components/header.svelte'
  import Footer from '$components/footer.svelte'
  import '../app.css'
</script>

<svelte:head>
	<title>Mike's blog</title>
</svelte:head>

<div class="mytainer flex flex-col min-h-screen">
  <Header />
    <main class="md:pt-28 py-24">
      <slot />
    </main>
  <Footer/>
</div>
