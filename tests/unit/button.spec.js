import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import DemoBlock from '@/components/demo-block.vue'

describe('DemoBlock.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message.....'
    const wrapper = shallowMount(DemoBlock, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
