<script>
  import Header from '$components/header.svelte'
import Footer from '$components/footer.svelte'

  import '../app.css'
</script>

<div class="container mx-auto max-w-[65ch] flex flex-col min-h-screen">
  <Header />
  <main>
    <slot />
  </main>
  <Footer/>
</div>
