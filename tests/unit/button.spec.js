
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import button from '../../packages/button'
describe('button.vue', () => {
  it('renders props.type when passed', () => {
    const type = 'danger'
    const wrapper = shallowMount(button, {
      propsData: { type }
    })
    expect(wrapper.props('type')).to.equal('danger')
  })
  it('renders props.size when passed', () => {
    const size = 'large'
    const wrapper = shallowMount(button, {
      propsData: { size }
    })
    expect(wrapper.props('size')).to.equal('large')
  })
  it('renders props.plain when passed', () => {
    const plain = false
    const wrapper = shallowMount(button, {
      propsData: { plain }
    })
    expect(wrapper.props('plain')).to.equal(false)
  })
  it('renders props.disabled when passed', () => {
    const disabled = false
    const wrapper = shallowMount(button, {
      propsData: { disabled }
    })
    expect(wrapper.props('disabled')).to.equal(false)
  })
})
