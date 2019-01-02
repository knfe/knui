// 函数调用
import Vue from 'vue'
import KnLayer from './index'

let instance

const initInstance = () => {
  instance = new (Vue.extend(KnLayer))({
    el: document.createElement('div')
  });

  instance.$on('input', value => {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

const Layer = options => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    Object.assign(instance, Layer.currentOptions, options, {
      resolve,
      reject
    });
  });
};

Layer.defaultOptions = {
  value: true,
  title: '',
  content: '',
  comfirmText: '',
  cancelText: '',
  confirmButtonText: '',
  cancelButtonText: '',
  placeholderText: '',
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

Layer.alert = Layer;

Layer.confirm = options => Layer({
  showCancelButton: true,
  ...options
});

Layer.close = () => {
  if (instance) {
    instance.value = false;
  }
};

Layer.setDefaultOptions = options => {
  Object.assign(Layer.currentOptions, options);
};

Layer.resetDefaultOptions = () => {
  Layer.currentOptions = { ...Layer.defaultOptions };
};

Layer.install = () => {
  Vue.use(KnLayer);
};

Vue.prototype.$Layer = Layer;
Layer.resetDefaultOptions();

export default Layer;