Vue.component('checkbox-test', {
    name: 'checkbox-test',
    template: `<div class="checkbox">
            <label v-for="hobby in hobbys"><input type="checkbox" :id="hobby" name="hobby" @change="onChange">{{hobby}}</label>
        </div>`,
    props: {
        hobbys: {
            type: Array,
            default: []
        },
        value: {
            type: Array
        }
    },
    model: {
        props: 'value',
        event: 'update'
    },
    data() {
        return {
            gender: '',
            hobbyList: []
        }
    },
    mounted() {
        this.hobbyList = this.value
    },
    methods: {
        onChange(e) {
            console.log(e.target.id)
            if(this.hobbyList.indexOf(e.target.id) !== -1){
                this.hobbyList.splice(this.hobbyList.indexOf(e.target.id),1)
            }else{
                this.hobbyList.push(e.target.id)
            }
            this.$emit('change', this.hobbyList)
        },
    },
    watch: {
        value(val) {
            if (val.length === 0) {
                console.log(document.querySelectorAll('input').forEach((item, index) => {
                    item.checked = false
                }))
            }

        }
    }

})