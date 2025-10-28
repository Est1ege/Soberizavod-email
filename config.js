export default {
  build: {
    content: ['src/**/*.html'],
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build',
      },
    },
  },
  server: {
    port: 3000,
  },
}