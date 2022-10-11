## Vue实战

### 单个slot

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <child-component>
        <p>分发的内容</p>
        <p>更多分发的内容</p>
    </child-component>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    Vue.component('child-component', {
        template: `<div>
        <slot>
            <p>如果父组件没有插入内容，我将作为默认出现</p>
        </slot>
        </div>`
    })
    var app =new Vue({
        el:'#app'
    })
</script>
</body>
</html>
```

### 具名slot

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <child-component>
        <h2 slot="header">标题</h2>
        <p>正文内容</p>
        <p>更多正文内容</p>
        <div slot="footer">底部信息</div>
    </child-component>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    Vue.component('child-component', {
        template: `
        <div class="container">
            <div class="header">
                    <slot name="header"></slot>
            </div>
            <div class="main">
                <slot></slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>`
    })
    var app = new Vue({
        el: '#app'
    })
</script>
</body>
</html>
```

### 作用域插槽

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <child-component>
        <template v-slot="props">
            <p>来自父组件的内容</p>
            <p>{{props.msg}}</p>
        </template>
    </child-component>
</div>
<script src="vue.js"></script>
<script>

    Vue.component('child-component', {
        template: `
        <div class="container">
            <slot msg="来自子组件的内容">sdafasd</slot>
        </div>`
    })
    var app = new Vue({
        el: '#app'
    })
</script>
</body>
</html>
```

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <my-list :books="books">
        <template  v-slot:book="props">
            <li>{{props.bookName}}</li>
        </template>
    </my-list>
</div>
<script src="vue.js"></script>
<script>

    Vue.component('my-list', {
        props: {
            books: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        template: `
        <ul>
        <slot name="book" v-for="book in books"
        :book-name="book.name"
        >
        </slot>
        </ul>
        `

    })
    var app = new Vue({
        el: '#app',
        data:{
            books:[
                {name: '《vue.js实战》'},
                {name: '《js实战》'},
                {name: '《js高级实战》'}
            ]
        }
    })
</script>
</body>
</html>
```

### 递归组件

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <child-component :count="1"></child-component>
</div>
<script src="vue.js"></script>
<script>
    Vue.component('child-component', {
        name: 'child-component',
        props: {
            count: {
                type: Number,
                default: 1
            }
        },
        template: `
        <div class="child">
            <child-component :count="count + 1" v-if="count < 3">
            </child-component>
        </div>
        `

    })
    var app = new Vue({
        el: '#app'
    })
</script>
</body>
</html>
```

### 内联模板

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <child-component inline-template>
        <div>
            <h2>在负组件中定义子组件的模板</h2>
            <p>{{message}}</p>
            <p>{{msg}}</p>
        </div>
    </child-component>
</div>
<script src="vue.js"></script>
<script>
    // 不轻易使用，同盟的时候，优先子组件
    Vue.component('child-component', {

        data:function (){
            return {
                msg:'在子组件生命的数据'
            }
        },
        template: ``

    })
    var app = new Vue({
        el: '#app',
        data:{
            message: '在父组件生命的数据'
        }
    })
</script>
</body>
</html>
```

### 动态组件

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <component :is="currentView"></component>
    <button @click="handleChangeView('A')">切换到A</button>
    <button @click="handleChangeView('B')">切换到B</button>
    <button @click="handleChangeView('C')">切换到C</button>
</div>
<script src="vue.js"></script>
<script>

    // Vue.component('child-component', {
    //
    //     data: function () {
    //         return {
    //             msg: '在子组件生命的数据'
    //         }
    //     },
    //     template: ``
    //
    // })
    var app = new Vue({
        el: '#app',
        components: {
            comA: {
                template: '<div>组件A</div>'
            },
            comB: {
                template: '<div>组件B</div>'
            },
            comC: {
                template: '<div>组件C</div>'
            }
        },
        data: {
            currentView: 'comA'
        },
        methods:{
            handleChangeView(component){
                this.currentView = 'com' + component
            }
        }
    })
</script>
</body>
</html>
```

### 数字输入框

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>数字输入框组件</title>
</head>
<body>
<div id="app">
    <input-number v-model="value" :max="10" :min="0"></input-number>
</div>
<script src="../vue.js"></script>
<script src="input-number.js"></script>
<script src="index.js"></script>

</body>
</html>
```

```js

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
```

```js

var app = new Vue({
    el: '#app',
    data(){
        return {
            value: 5
        }
    }
})
```

