<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->

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
</script>

<article class="prose prose-invert mx-auto pt-10">  
  <svelte:component this={post} />
</article>