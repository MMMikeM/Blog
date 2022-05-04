module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
  semi: false,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  svelteSortOrder: 'scripts-markup-styles',
  svelteStrictMode: true,
  svelteBracketNewLine: false,
  svelteAllowShorthand: false,
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' }
    }
  ]
}
