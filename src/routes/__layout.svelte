<script>
  import Header from '$components/header.svelte'
import Footer from '$components/footer.svelte'

  import '../app.css'
</script>

<svelte:head>
	<title>Mike's blog</title>
</svelte:head>

<div class="container mx-auto max-w-[65ch] flex flex-col min-h-screen">
  <Header />
  <main>
    <slot />
  </main>
  <Footer/>
</div>
