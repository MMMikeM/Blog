export const get = async () => {
  const allPostFiles = import.meta.glob('$blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = iterablePostFiles.map(async ([path, resolver]) => {
    const href = path.replace('../../../', '').replace('.md', '')
    const { metadata } = await resolver()
    return { href, metadata }
  })

  const posts = await Promise.all(allPosts)

  return { body: posts }
}
