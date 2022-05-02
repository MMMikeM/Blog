export const get = async () => {
  const allPostFiles = import.meta.glob('$blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const data = await resolver()
      const postPath = path.slice(2, -3)

      console.log(data)
      console.log(postPath)
      return {
        data,
        postPath
      }
    })
  )

  return allPosts
}
