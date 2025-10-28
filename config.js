export default {
  build: {
    content: ['src/**/*.html'],
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
    },
  },
  server: {
    port: 3000,
  },
}