
function isValueNumber(value){
    return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9]*$) | (^-?0{1}$)/).test(value + '')
}

Vue.component('input-number',{
    template:`
    <div class="input-number">
    <input type="text" :value="currentValue" @change="handleChange" @keydown="add">
    <button @click="handleDown" :disabled="currentValue <= min">-</button>
    <button @click="handleUp" :disabled="currentValue >= max">+</button>
</div>
    `,
    props:{
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default: -Infinity
        },
        value:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            currentValue:this.value
        }
    },
    watch:{
        currentValue(val){
            this.$emit('input',val)
            this.$emit('on-change',val)
        },
        value(val){
            this.updateValue(val)
        }
    },
    methods:{
        updateValue(val){
            if (val > this.max) val=this.max
            if (val < this.min) val =this.min
            this.currentValue = val
        },
        handleDown(){
            if (this.currentValue <= this.min) return
            this.currentValue -= 1
        },
        handleUp(){
            if (this.currentValue >= this.max) return
            this.currentValue += 1
        },
        handleChange(event){
            var val = event.target.value.trim()
            var max = this.max
            var min = this.min
            if (isValueNumber(val)){
                console.log(val)
                val = Number(val)
                this.currentValue = val
                if (val > max){
                    this.currentValue = max
                } else if (val < min){
                    this.currentValue = min
                }
            } else {
                console.log('sss')
                event.target.value = this.currentValue
            }
        },
        add(event){
            if(event.keyCode === 38){
                event.preventDefault()
                this.handleUp()
            }else if (event.keyCode === 40){
                event.preventDefault()
                this.handleDown()
            }
        }

    },
    mounted(){
        this.updateValue(this.value)
    }
})