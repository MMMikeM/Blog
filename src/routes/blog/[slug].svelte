<script context="module" lang="ts">
  interface iProps {
    params: {slug: string}
  }
  export const load = async ({ params }: iProps) => {
      const post = await import(`../../../blog/${params.slug}.md`)
      return {props: {post: post.default}}
  }
</script>

<script lang="ts">
import type { SvelteComponent } from "svelte";
   export let post: SvelteComponent
   import 'prism-material-themes/themes/material-palenight.css'
</script>

<article class="prose prose-invert mx-auto pt-10 container ">  
  <svelte:component this={post} />
</article>

