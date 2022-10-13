Vue.directive('clickoutside', {
    bind(el, binding, vnode) {
        function documentHandler(e) {
            if (el.contains(e.target)) {
                return false
            }
            if (binding.expression) {
                // e为事件，binding.value会执行绑定的函数
                binding.value(e)
            }
        }
        function handleEsc(e) {
            console.log('hhhh')
            if (e.keyCode === 27) {
                if (binding.expression) {
                    // e为事件，binding.value会执行绑定的函数
                    binding.value(e)
                }
            }
        }
        if(binding.modifiers && binding.modifiers['esc']){
            el.__vuehandleEsc__ = handleEsc
            document.addEventListener('keydown', handleEsc)
        }
        el.__vueClickOutside__ = documentHandler
        document.addEventListener('click', documentHandler)

    },
    unbind(el, binding) {
        if (binding.modifiers && binding.modifiers['esc']){
            document.removeEventListener('keydown', el.__vuehandleEsc__)
            delete el.__vuehandleEsc__
        }
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__

    },
    update(el, binding) {
        // binding.expression = 'console.log("aaa")'
        // binding.value(binding.expression)
        console.log('update')
        // console.log(el, binding)
    }
})
