
const home = {
  path: '/',
  name: 'home',
  meta: {
    title: 'home'
  },
  component: resolve => {
    require.ensure(
      [],
      () => {
        resolve(require('../components/list.vue'))
      },
      'home'
    )
  }
}

const button = {
  path: '/demo/button',
  name: 'button',
  meta: {
    title: 'button组件'
  },
  component: resolve => {
    require.ensure(
      [],
      () => {
        resolve(require('@/button/demo/index.vue'))
      },
      'button'
    )
  }
}

const cell = {
  path: '/demo/cell',
  name: 'cell',
  meta: {
    title: 'cell组件'
  },
  component: resolve => {
    require.ensure(
      [],
      () => {
        resolve(require('@/cell/demo/index.vue'))
      },
      'cell'
    )
  }
}

const icon = {
  path: '/demo/icon',
  name: 'icon',
  meta: {
    title: 'icon组件'
  },
  component: resolve => {
    require.ensure(
      [],
      () => {
        resolve(require('@/icon/demo/index.vue'))
      },
      'icon'
    )
  }
}

const progress = {
  path: '/demo/progress',
  name: 'progress',
  meta: {
    title: 'progress组件'
  },
  component: resolve => {
    require.ensure(
      [],
      () => {
        resolve(require('@/progress/demo/index.vue'))
      },
      'progress'
    )
  }
}

const pullRefresh = {
  path: '/demo/pullRefresh',
  name: 'pullRefresh',
  meta: {
    title: 'pullRefresh组件'
  },
  component: resolve => {
    require.ensure(
      [],
      () => {
        resolve(require('@/pullRefresh/demo/index.vue'))
      },
      'pullRefresh'
    )
  }
}

const radio = {
  path: '/demo/radio',
  name: 'radio',
  meta: {
    title: 'radio组件'
  },
  component: resolve => {
    require.ensure(
      [],
      () => {
        resolve(require('@/radio/demo/index.vue'))
      },
      'radio'
    )
  }
}

export default [ button, cell, icon, progress, pullRefresh, radio, home ]
