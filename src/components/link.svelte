<script lang="ts">
  export let href: string
  export let newTab: boolean = false
</script>

{#if newTab}
  <a href={href} class="text-secondary-400 underline hover:text-secondary-300" target="_blank">
    <slot />
  </a>
{:else}
  <a href={href} class="text-secondary-400 underline hover:text-secondary-300">
    <slot />
  </a>
{/if}