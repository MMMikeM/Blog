<script context="module" lang="ts">
  import type { LoadInput } from '@sveltejs/kit';

  export const load = async ({ url }: LoadInput) => {
    return({
      props: {
          key: url.pathname,
      },
  });}
</script>

<script lang="ts">
  import Header from '$components/header.svelte'
  import Footer from '$components/footer.svelte'
  import { fade } from 'svelte/transition';
  import '../app.css'
  export let key: string
</script>

<svelte:head>
	<title>Mike's blog</title>
</svelte:head>

<div class="mytainer flex flex-col min-h-screen">
  <Header />
  {#key key}
    <main in:fade={{delay: 350, duration: 200}}
          out:fade={{ duration: 200}} 
          class="md:pt-28 py-24">
      <slot />
    </main>
  {/key}
  <Footer/>
</div>

<style global>
  html {
    scrollbar-gutter: stable;
  }
</style>
