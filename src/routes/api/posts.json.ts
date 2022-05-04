export const get = async () => {
  const allPostFiles = import.meta.glob('$blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  console.log(allPostFiles)

  const allPosts = iterablePostFiles.map(async ([path, resolver]) => {
    const href = path.replace('../../../', '').replace('.md', '')
    const { metadata } = await resolver()
    return { href, metadata }
  })

  const posts = await Promise.all(allPosts)

  posts.sort((a, b) => {
    if (a.metadata.date < b.metadata.date) return 1
    if (a.metadata.date > b.metadata.date) return -1
    return 0
  })

  return { body: posts }
}
