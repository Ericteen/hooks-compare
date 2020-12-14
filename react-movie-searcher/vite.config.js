// @ts-check
import reactPlugin from 'vite-plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  assetsDir: './',
  base: './',
  indexHtmlTransforms: [
    ({ code }) => code.replace(/Vite App/, 'React Movie Searcher')
  ],
}

export default config
