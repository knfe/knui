module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')
  ],
  'features': {
    'bem': {
      'shortcuts': {
        'component': 'b',
        'modifier': 'm',
        'descendent': 'e'
      },
      'separators': {
        'descendent': '__',
        'modifier': '--'
      }
    }
  }
}
