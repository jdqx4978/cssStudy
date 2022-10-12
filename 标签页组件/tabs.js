Vue.component('tabs', {
    template: `
        <div class="tabs">
            <div class="tabs-bar">
                <div :class="tabCls(item)"
                    v-for="(item,index) in navList"
                    @click="handleChange(index)"
                >
                {{item.label}}
                <i :class="tabClose(item)" @click.stop.prevent="closePane(item)">x</i>
                </div>
            </div>
            <div class="tabs-content">
                <slot></slot>
            </div>
        </div>
    `,
    props: {
        value: {
            type: [String, Number]
        },
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            currentValue: this.value,
            navList: []
        }
    },
    methods: {
        getTabs() {
            return this.$children.filter((item) => {
                return item.$options.name === 'pane'
            })
        },
        updateNav() {
            this.navList = []
            var _this = this
            this.getTabs().forEach((pane, index) => {
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index,
                    closable: pane.closable
                })
                if (!pane.name) pane.name = index
                if (index === 0) {
                    if (!_this.currentValue) {
                        _this.currentValue = pane.name || index
                    }
                }
            })
            this.updateStatus()
        },
        updateStatus() {
            var tabs = this.getTabs()
            var _this = this
            tabs.forEach(tab => {
                return tab.show = tab.name === _this.currentValue
            })
        },
        tabCls(item) {
            return ['tabs-tab', {'tabs-tab-active': item.name === this.currentValue}]
        },
        tabClose(item) {
            return [{'tabs-close-icon-show': item.closable, 'tabs-close-icon-close': !item.closable}]
        },
        handleChange(index) {
            //这里被冒泡事件卡了很久
            var nav = this.navList[index]

            var name = nav.name
            this.currentValue = name
            this.$emit('input', name)
            this.$emit('on-click', name)
        },
        closePane(item) {
            this.getTabs().forEach((pane, index) => {
                if (pane.name === item.name) {
                    pane.$destroy()
                    this.$nextTick(() => {
                        console.log('bbb')
                        if (index + 1 === this.navList.length + 1) {
                            console.log('ccc')
                            this.currentValue = this.navList[index - 1].name
                        } else if (index === 0) {
                            this.currentValue = this.navList[0].name
                        } else {
                            this.currentValue = this.navList[index].name
                        }
                    })
                }

            })
        }
    },
    watch: {
        value(val) {
            this.currentValue = val
        },
        currentValue() {
            this.updateStatus()
        }
    }
})