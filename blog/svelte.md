# Here's some Svelte stuff I have learned

Typescript with Svelte is nice, but not super well documented. Here I will include some snippets that have been valuable to me


### Typing of loader functions, to fetch data serverside
```svelte
<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit";

  interface iPostRes {
    title: string,
    href: string
  }

  export const load = async ({ fetch }: LoadInput) => {
     const postRes = await fetch(`/api/posts.json`)
     const data: Promise<iPostRes[]> = await postRes.json()
     return {
       props: { data }
     }
  }
 </script>
 ```