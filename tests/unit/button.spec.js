
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import button from '../../packages/button'

describe('button.vue', () => {
  it('renders props.msg when passed', () => {
    const type = 'danger'
    const wrapper = shallowMount(button, {
      propsData: { type }
    })
    expect(wrapper.props('type')).to.equal('danger')
  })
})
