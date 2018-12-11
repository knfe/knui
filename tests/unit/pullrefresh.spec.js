import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import pullrefresh from '../../packages/pullRefresh'

describe('pullrefresh.vue props', () => {
  it('renders props.pullingText when passed', () => {
    const pullingText = '下拉即可刷新'
    const wrapper = shallowMount(pullrefresh, {
      propsData: { pullingText }
    })
    expect(wrapper.props('pullingText')).to.equal('下拉即可刷新')
  })

  it('renders props.pullingText when passed', () => {
    const loosingText = '释放即可刷新'
    const wrapper = shallowMount(pullrefresh, {
      propsData: { loosingText }
    })
    expect(wrapper.props('loosingText')).to.equal('释放即可刷新')
  })

  it('renders props.pullingText when passed', () => {
    const loadingText = '正在加载...'
    const wrapper = shallowMount(pullrefresh, {
      propsData: { loadingText }
    })
    expect(wrapper.props('loadingText')).to.equal('正在加载...')
  })

  it('renders props.pullingText when passed', () => {
    const headHeight = 50
    const wrapper = shallowMount(pullrefresh, {
      propsData: { headHeight }
    })
    expect(wrapper.props('headHeight')).to.equal(50)
  })

  it('renders props.pullingText when passed', () => {
    const animationDuration = 300
    const wrapper = shallowMount(pullrefresh, {
      propsData: { animationDuration }
    })
    expect(wrapper.props('animationDuration')).to.equal(300)
  })

  it('renders props.value when passed', () => {
    const value = true
    const wrapper = shallowMount(pullrefresh, {
      propsData: { value }
    })
    expect(wrapper.props('value')).to.equal(true)
  })
})
