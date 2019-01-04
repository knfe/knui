// Wirte test case in this file
import { shallowMount } from '@vue/test-utils'
import radio from '..'

describe('radio.vue', () => {
  test('render radio bgColor when passed', () => {
    const bgColor = '#f9c'
    const wrapper = shallowMount(radio, {
      propsData: { bgColor }
    })
    expect(wrapper.props('bgColor')).toBe('#f9c')
  })
  test('render radio check status when passed', () => {
    const checked = 'false'
    const wrapper = shallowMount(radio, {
      propsData: { checked }
    })
    expect(wrapper.props('checked')).toBe('false')
  })
  test('render radio style when passed', () => {
    const nocheck = 'false'
    const wrapper = shallowMount(radio, {
      propsData: { nocheck }
    })
    expect(wrapper.props('nocheck')).toBe('false')
  })
  test('点击一次之后变为选中状态', () => {
    const checked = false
    const wrapper = shallowMount(radio)
    wrapper.trigger('Switch')
    expect(wrapper.vm.checked).toBe(true)
  })
})
