---
title: First Post!
date: 2022-05-01
excerpt: Details about this blog and my future plans!
---
# This is a topic

## Look it's an h2

Here is a p tag

I am updating my blog from Obsidian

## Let me try this again


### I am updating things again, ezpz

```js
const Card: FunctionComponent<{ title: String, subtitle: String }> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <div 
      border="rounded-lg" 
      shadow="lg" 
      bg="light-200 dark:dark-50" 
      p="y-4 x-8" 
      m="t-12"
      >
      <h2 text="3xl" font="semibold">
        {title}
      </h2>
      <h3>{subtitle}</h3>
      {children}
    </div>
  )
}

export default Card
```

```js
// index.json.js
export function get() {
  // our markdown files lie in src/posts.
  let postTitles = fs.readdirSync(`src/posts`).map((fileName) => {
    getTitleFrom(fileName))
  }
  
  let body = JSON.stringify(postTitles)

  return { body }
}
```
