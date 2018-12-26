/**
 * create component directory structure
 */

const path = require('path')
const argv = require('minimist')(process.argv.slice(2))

// package path
const packagePath = path.resolve(process.cwd(), './packages')

// package name
const packageName = typeof argv.name === 'boolean' ? '' : (argv.name || '').trim().toLowerCase()

// check package name
if (!packageName) {
  throw new Error("Package name shouldn't be empty!")
}
const glob = require('glob')
const fs = require('fs')
let packageNames = []
const packageNamesFilter = ['style', 'assets']
glob.sync(path.resolve(packagePath, './*')).forEach(el => {
  if (fs.statSync(el).isDirectory()) {
    let tmp = el.split('/')
    let _packageName = tmp[tmp.length - 1]
    if (_packageName === packageName) {
      throw new Error('The package ' + packageName + ' already existed!')
    }
    if (packageNamesFilter.indexOf(_packageName) < 0) {
      packageNames.push(_packageName)
    }
  }
})
packageNames.push(packageName)

// create directory structure
const template = require('./template')
fs.mkdirSync(path.resolve(packagePath, './' + packageName))
fs.mkdirSync(path.resolve(packagePath, './' + packageName + '/demo'))
fs.mkdirSync(path.resolve(packagePath, './' + packageName + '/test'))
const data = {
  namespace: 'kn-' + packageName,
  demo: {
    namespace: 'kn-' + packageName + '-demo'
  }
}
template.forEach(el => {
  let contents = el.tpl(data).split('\n')
  contents.shift()
  for (let i = 0; i < contents.length; i++) {
    contents[i] = contents[i].replace('      ', '')
  }
  contents[contents.length - 1] = contents[contents.length - 1].trim()
  fs.writeFileSync(path.resolve(packagePath, './' + packageName + '/' + el.output), contents.join('\n'))
})

// gererate packages index file
let indexStr = `/**
 * this files is gererated by scripts/create/index.js
 */

// import packages
`
let keys = []
// 过滤掉utils文件夹
packageNames = packageNames.filter(function(elm) {
  return elm !== 'utils'
})
packageNames.forEach(el => {
  let key = 'Kn' + el.substring(0, 1).toUpperCase() + el.substring(1, el.length)
  indexStr += `import ${key} from './${el}/index.vue'\n`
  keys.push(key)
})
let listStr = ''
for (let i = 0; i < keys.length - 1; i++) {
  listStr += keys[i] + ', '
}
listStr += keys[keys.length - 1]
const packageVersion = require(path.resolve(process.cwd(), './package.json')).version
indexStr += `
// package version
const version = '${packageVersion}'

// init components
const components = [${listStr}]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export components
export { ${listStr} }

// export default
export default {
  version,
  install
}
`
fs.writeFileSync(path.resolve(packagePath, './index.js'), indexStr)

// complete
console.log('The ' + packageName + ' component package already created!')
