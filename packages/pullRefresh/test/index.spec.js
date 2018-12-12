import { shallowMount } from '@vue/test-utils'
import pullRefresh from '..'
import { trigger, triggerDrag } from '../../../tests/utils'

test('change head content when pulling down', () => {
  const wrapper = shallowMount(pullRefresh, {
    propsData: {
      value: false
    }
  })

  wrapper.vm.$on('input', value => {
    wrapper.vm.value = value
  })

  const track = wrapper.find('.track')

  // pulling
  trigger(track, 'touchstart', 0, 0)
  trigger(track, 'touchmove', 0, 10)
  expect(wrapper).toMatchSnapshot()

  // loosing
  trigger(track, 'touchmove', 0, 100)
  expect(wrapper).toMatchSnapshot()

  // loading
  trigger(track, 'touchend', 0, 100)
  expect(wrapper).toMatchSnapshot()

  // still loading
  triggerDrag(track, 0, 100)
  expect(wrapper).toMatchSnapshot()

  expect(wrapper.emitted('input')).toBeTruthy()
  expect(wrapper.emitted('refresh')).toBeTruthy()

  // end loading
  wrapper.vm.value = false
  expect(wrapper).toMatchSnapshot()
})

test('pull a short distance', () => {
  const wrapper = shallowMount(pullRefresh, {
    propsData: {
      value: false
    }
  })

  const track = wrapper.find('.track')
  triggerDrag(track, 0, 10)
  expect(wrapper.emitted('input')).toBeFalsy()
})

test('not in page top', () => {
  const wrapper = shallowMount(pullRefresh, {
    propsData: {
      value: false
    }
  })

  window.scrollTop = 100

  const track = wrapper.find('.track')
  // ignore touch event when not at page top
  triggerDrag(track, 0, 100)
  window.scrollTop = 0
  trigger(track, 'touchmove', 0, 100)

  expect(wrapper).toMatchSnapshot()
})
