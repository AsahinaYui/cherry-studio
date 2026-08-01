const { defineConfig } = require('oxlint')

const localRules = [
  'renderer-boundaries',
  'page-boundaries',
  'no-export-star',
  'index-no-impl',
  'no-index-tsx',
  'barrel-named-only',
  'barrel-closed',
  'barrel-no-nesting',
  'no-bucket-root-barrel',
  'path-case',
  'no-as-filepath',
  'no-direct-quit',
  'no-template-in-t',
  'prefer-zod-namespace',
  'no-prop-types',
  'dynamic-react-children-map',
  'dynamic-react-clone-element'
]

module.exports = defineConfig({
  categories: {},
  jsPlugins: [{ name: 'cherry', specifier: '../cherryPlugin.mjs' }],
  rules: Object.fromEntries(localRules.map((rule) => [`cherry/${rule}`, 'error'])),
  overrides: [
    {
      files: ['positive/src/shared/data/cache/cacheSchemas.ts', 'negative/src/shared/data/cache/cacheSchemas.ts'],
      rules: { 'cherry/valid-schema-key': 'error' }
    }
  ]
})
