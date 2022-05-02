<script>
  import Header from '$components/header.svelte'

  import '../app.css'
</script>

<div class="container mx-auto max-w-[65ch]">
  <Header />
  <slot />
</div>
