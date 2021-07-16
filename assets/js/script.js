var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // define métodos dentro do objeto `methods`
    methods: {
        greet: function (event) {
            // `this` dentro de métodos aponta para a instância Vue
            alert('Olá ' + this.name + '!')
            // `event` é o evento DOM nativo
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

// você pode invocar métodos no JavaScript também
example2.greet() // => 'Olá Vue.js!'

new Vue({
    el: '#example-3',
    methods: {
        say: function (message) {
            alert(message)
        }
    }
})