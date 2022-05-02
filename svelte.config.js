import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    preprocess(),
    mdsvex({
      extension: '.md',
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    })
  ],
  kit: {
    prerender: { default: true },
    inlineStyleThreshold: 102400,
    adapter: adapter(),
    vite: () => ({
      server: {
        fs: {
          allow: ['.']
        }
      },
      resolve: {
        alias: {
          $blog: resolve('./blog'),
          $components: resolve('./src/components')
        }
      }
    })
  }
}

export default config
