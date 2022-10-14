Vue.component('radio-test', {
    name: 'radio-test',
    template: `<div class="radio">
            <label v-for="gender in group"><input type="radio" :id="gender.label" name="gender" @click="onChange">{{gender.label}}</label>
        </div>`,
    props: {
        group: {
            type: Array,
            default: []
        },
        value: {
            type: String | Number
        }
    },
    model: {
        props: 'value',
        event: 'update'
    },
    data() {
        return {
            gender: ''
        }
    },
    mounted() {
        this.gender = this.value
    },
    methods: {
        onChange(e) {
            this.gender = e.target.id
            this.$emit('change', this.gender)
            console.log('hhhh', e.target.id)
        },
    },
    watch: {
        value(val) {
            if (val === '') {
                console.log(document.querySelectorAll('input').forEach((item, index) => {
                    console.log(item.checked)
                    item.checked = false
                }))
            }

        }
    }

})