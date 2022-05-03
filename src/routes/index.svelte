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
  import Link from '$components/link.svelte';
  import dayjs from 'dayjs'
</script>

<div>
  <h3 class="mb-4 text-lg">Hi and welcome to my blog</h3>

  <h4>A bit <Link href="/about_me">about me</Link></h4>

  {#each data as { href, metadata }}
    <div
      class="group my-8 -mx-4 rounded py-2 px-4 transition-transform hover:-translate-y-px hover:shadow-xl"
    >
      <a href="{href}">
        <h4 class="mb-2 text-2xl font-bold capitalize">
          {metadata.title}
        </h4>
        <span class="flex items-end justify-between">
          <h5 class="text-md font-light">{metadata.excerpt}</h5>
          <h6 class="text-sm text-light-900 opacity-75">
            {dayjs(metadata.date).format('DD MMM, YYYY')}
          </h6>
        </span>
        <div class="relative my-1 h-px bg-dark-50">
          <div
            class="absolute h-px w-full bg-gradient-to-r  from-primary-700  via-light-900 to-tertiary-900 opacity-0 transition-opacity duration-300 group-hover:opacity-90"
          ></div>
        </div>
      </a>
    </div>
  {/each}
</div>
