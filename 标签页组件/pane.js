Vue.component('pane', {
    name: 'pane',
    template: `
        <div class="pane" v-show="show">
        <slot></slot>
</div>
    `,
    data() {
        return {
            show: true
        }
    },
    props: {
        name: {
            type: String
        },
        label: {
            type:String,
            default: ''
        },
        closable:{
            type:Boolean,
            default: false
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav()
        },
    },
    beforeDestroy(){
        console.log('aaaa')
        this.$el.remove()
        this.$nextTick(()=>{
            this.updateNav()
        })
    },
    watch: {
        label() {
            this.updateNav()
        }
    },
    mounted() {
        console.log('hhhh')
        this.updateNav()
    }
})