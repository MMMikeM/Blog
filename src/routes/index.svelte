<script context="module" lang="ts">
  import type { LoadInput } from '@sveltejs/kit'

  interface iPostRes {
    href: string
    metadata: {
      title: string
      date: string
      excerpt: string
    }
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
  import Link from '$components/link.svelte'
  import Underline from '$components/underline.svelte'
  import dayjs from 'dayjs'
</script>

<div>
  <h3 class="mb-4">
    Hi and welcome to my blog.
  </h3>
  <h4 class="mb-6">A bit <Link href="/about_me">about me</Link></h4>

  {#each data as { href, metadata }}
    <a href="{href}">
      <div
        class="group my-4 -mx-4 rounded py-4 px-4 transition-transform hover:-translate-y-px hover:text-light-50 hover:shadow-2xl hover:shadow-dark-800">
        <h3 class="mb-2 text-2xl font-bold capitalize">
          {metadata.title}
        </h3>
        <span class="flex flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
          <h4 class="text-md font-light">{metadata.excerpt}</h4>
          <h5 class="text-sm text-light-900 opacity-75">
            {dayjs(metadata.date).format('DD MMM, YYYY')}
          </h5>
        </span>
        <Underline />
      </div>
    </a>
  {/each}
</div>
