export default {
  build: {
    content: ['src/**/*.html'],
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_production',
      },
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