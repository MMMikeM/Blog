export const get = async () => {
  const allPostFiles = import.meta.glob('$blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = iterablePostFiles.map(async ([path, resolver]) => {
    const href = path.replace('../../../', '').replace('.md', '')
    const { metadata } = await resolver()
    return { href, metadata }
  })

  const unsortedPosts = await Promise.all(allPosts)

  const posts = unsortedPosts.sort((a, b) => {
    if (a.metadata.date < b.metadata.date) return 1
    if (a.metadata.date > b.metadata.date) return -1
    return 0
  })

  return { body: posts }
}
