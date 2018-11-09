
const test = {
  path: '/docs/test',
  name: 'test',
  meta: {
    title: '测试文档'
  },
  component: resolve => {
    require.ensure(
      [],
      () => {
        resolve(require('@/docs/test.md'))
      }
    )
  }
}

export default [
  test
]
