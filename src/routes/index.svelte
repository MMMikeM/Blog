
<script context="module" lang="ts">
import type { LoadInput } from "@sveltejs/kit";

interface iPostRes {
    title: string,
    href: string
  }

  export const load = async ({ fetch }: LoadInput) => {
     const postRes = await fetch(`/api/posts.json`)
     const data: iPostRes[] = await postRes.json()
     return {
       props: { data }
     }
  }
 </script>
 
 <script lang="ts">
   export let data: iPostRes[]
 </script>
 
 <div>

  <h3 class="text-xl mb-4">
    Hi and welcome to my blog
  </h3>
  
  {#each data as link}
   <div>
     <a href={link.href} class="capitalize my-2 font-semibold">{link.title}</a>
   </div>
   {/each}
 </div>