export const mixins = {
  data: () => {
    return {
      countDownTxt: '重新获取', // 倒计时文案
      countDownTime: 60,
      index: 'index' + new Date().getTime() // 编号
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: () => {
        return false
      }
    }, // message是否可见(用于过渡)
    title: {
      type: String,
      default: () => {
        return ''
      }
    }, // 标题
    message: {
      type: String,
      default: () => {
        return ''
      }
    }, // message内容
    btn: {
      type: Array,
      default: () => {
        return []
      }
    }, // message按钮
    leftLoading: {
      type: Boolean,
      default: () => {
        return false
      }
    }, // 是否加载loading
    rightLoading: {
      type: Boolean,
      default: () => {
        return false
      }
    }, // 是否加载loading
    shadowClose: {
      type: Boolean,
      default: () => {
        return false
      }
    }, // 背景点击是否可以关闭loading
    className: {
      type: String,
      default: () => {
        return ''
      }
    }, // 自定义类名
    lockScroll: {
      type: Boolean,
      default: () => {
        return true
      }
    }, // 是否在 Message 出现时将 body 滚动锁定
    hasInput: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    inputType: {
      type: String,
      default: () => {
        return 'text'
      }
    },
    inputMaxlength: {
      type: String,
      default: () => {
        return ''
      }
    },
    hasCountDown: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    inputValue: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    leftClick() {
      if (typeof this.leftBtnClick !== 'function') {
        this.close()
        return
      }
      if (this.leftBtnCloseLoading) {
        this.leftLoading = true
      }
      this.leftBtnClick(this.inputValue)
    },
    rightClick() {
      if (typeof this.rightBtnClick !== 'function') {
        this.close()
        return
      }
      if (this.rightBtnCloseLoading) {
        this.rightLoading = true
      }
      this.rightBtnClick(this.inputValue)
    },
    closeShadow() {
      if (!this.shadowClose) return
      this.close()
    },
    countDown() {
      if (typeof this.countDownClick === 'function') {
        this.countDownClick()
      }
      let timer0
      if (timer0) clearInterval(timer0)
      let count = this.countDownTime

      this.countDownTxt = `已发送(${count}s)`
      timer0 = setInterval(() => {
        count--
        // console.log(count)
        this.countDownTxt = `已发送(${count}s)`
        if (count <= 0) {
          clearInterval(timer0)
          this.countDownTxt = `重新获取`
        }
      }, 1000)
    }
  }
}
