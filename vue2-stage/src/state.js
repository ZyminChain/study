import { observe } from "./observe";

export function initState(vm) {
  const options = vm.$options;
  // 如果有data选项，则初始化data
  if (options.data) {
    initData(vm);
  }
}

function initData(vm) {
  let data = vm.$options.data
  if (typeof data === 'function') {
    data = data.call(vm);
  }
  vm._data = data;
  observe(data);
}
