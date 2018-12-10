
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import knpullrefresh from '../../packages/knpullrefresh'

describe('knpullrefresh.vue', () => {
  it('renders props.msg when passed', () => {
    // 以下的测试内容需要修改，否则会测试失败，之所以写上这些测试内容是为了避免eslint报错
    const type = 'danger'
    const wrapper = shallowMount(knpullrefresh, {
      propsData: { type }
    })
    expect(wrapper.props('type')).to.equal('danger')
  })
})
