
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import progress from '../../packages/progress'

describe('progress.vue', () => {
  it('renders props.msg when passed', () => {
    // 以下的测试内容需要修改，否则会测试失败，之所以写上这些测试内容是为了避免eslint报错
    const type = 'danger'
    const wrapper = shallowMount(progress, {
      propsData: { type }
    })
    expect(wrapper.props('type')).to.equal('danger')
  })
})
