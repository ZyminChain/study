class Observer {
    constructor(data) {
        this.data = data;
        this.walk(data);
    }

    walk(data) {
        // 遍历数据对象的属性，进行劫持
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
        });
    }

    defineReactive(obj, key, val) {
        // const dep = new Dep(); // 创建依赖收集器
        Object.defineProperty(obj, key, {
            get() {
                // 添加依赖
                // Dep.target && dep.addSub(Dep.target);
                return val;
            },
            set(newVal) {
                if (newVal !== val) {
                    val = newVal;
                    // 通知依赖更新
                    // dep.notify();
                }
            }
        });
    }
}

export function observe(data) {
    // 这里可以添加对数据的观察逻辑
    console.log('Observing data:', data);
    // 如果数据不是对象或为null，则不进行观察
    if (typeof data !== 'object' || data === null) {
        return;
    }

    // 判断是否已经劫持过
    if (data.__ob__) {
        return;
    }
    
    return new Observer(data);
}