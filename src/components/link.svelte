<script lang="ts">
  export let href: string
  export let newTab: boolean = false
</script>


<a href={href} class="text-secondary-400" target="{newTab ? "_blank" : "_self"}">
  <slot />
</a>