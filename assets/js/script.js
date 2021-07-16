/**app1*/
var app = new Vue({
    el: '#app',
    data: {
        message: 'Olá Vue!'
    }
})

/**app2*/
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})

/**app3*/
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

/**app4*/
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Criar algo incrível' }
        ]
    }
})

/**app5*/
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Olá Vue!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

/**app6*/
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Olá Vue!'
    }
})

/**app7*/
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetais' },
            { id: 1, text: 'Queijo' },
            { id: 2, text: 'Qualquer outra coisa que humanos podem comer' }
        ]
    }
})