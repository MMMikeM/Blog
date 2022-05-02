<script context="module">
 export const load = async ({ fetch }) => {
		const postRes = await fetch(`/api/posts.json`)
    console.log(postRes)
    const data = await postRes.json()
    console.log("data:", data)
    return {
			props: { data }
		}
 }
</script>

<script>
  export let data
  console.log(data)
</script>

<div>
  {#each data as link}
  <div>
    <a href={link.href}>{link.title}</a>
  </div>
  {/each}
</div>