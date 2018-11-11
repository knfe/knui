module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['import', {
      libraryName: 'knui',
      libraryDirectory: 'es',
      style: true
    }]
  ]
}
