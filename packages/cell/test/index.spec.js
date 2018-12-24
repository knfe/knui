// Wirte test case in this file
import { shallowMount } from '@vue/test-utils'
import Cell from '..'

describe('cell event test', () => {
  test('cell click event', () => {
    const wrapper = shallowMount(Cell)
    wrapper.trigger('click')
    expect(wrapper.emitted('clickCell')).toBeTruthy()
  })

  test('cell-info click event', () => {
    const wrapper = shallowMount(Cell, {
      propsData: {
        hasInfo: true
      }
    })
    const titleInfo = wrapper.find('.title-info')
    titleInfo.trigger('click')
    expect(wrapper.emitted('clickInfo')).toBeTruthy()
  })
})
