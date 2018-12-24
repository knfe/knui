// Wirte test case in this file
import { shallowMount } from '@vue/test-utils'
import Icon from '..'

describe('Icon.vue', () => {
  test('renders props.type when passed', () => {
    const icon = 'city'
    const wrapper = shallowMount(Icon, {
      propsData: { icon }
    })
    expect(wrapper.props('icon')).toBe('city')
  })

  test('renders props.type when passed', () => {
    const iconSize = 'small'
    const wrapper = shallowMount(Icon, {
      propsData: { iconSize }
    })
    expect(wrapper.props('iconSize')).toBe('small')
  })

  test('icon click event', () => {
    const wrapper = shallowMount(Icon)
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
