export default {
  build: {
    content: ['src/**/*.html'],
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build',
      },
    },
    assets: {
      source: 'src/fonts',
      destination: 'fonts',
    },
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  shorthandCSS: true,
  prettify: false,
  minify: {
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
  },
}