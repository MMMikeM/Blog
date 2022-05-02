export const get = async () => {
  const allPostFiles = import.meta.glob('$blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = iterablePostFiles.map(([path]) => {
    const href = path.replace('../../../', '').replace('.md', '')
    const title = href.split('/').pop()?.replace(/_/g, ' ')

    return { href, title }
  })

  return { body: allPosts }
}
