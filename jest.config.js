module.exports = {
  setupFiles: ['<rootDir>/tests/jest.init.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^packages/(.*)$': '<rootDir>/packages/$1'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'], // 快照美观插件
  transform: {
    '^.+\\.js$': '<rootDir>/tests/jest.transform.js',
    // '^.+\\.js$': '<rootDir>/node_modules/babel-jest', // js 处理文件
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './tests/coverage'
}
