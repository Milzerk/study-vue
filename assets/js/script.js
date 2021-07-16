var vm = new Vue({
    el: '#app',
    data: {
        message: 'Olá Vue'
    },
    computed: {
        // uma função "getter" computada (computed getter)
        reversedMessage: function () {
            // `this` aponta para a instância Vue da variável `vm`
            return this.message.split('').reverse().join('')
        },
        now: function () {
            return Date.now()
        }
    },
    methods: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('')
        },
        nowTime: function () {
            return Date.now()
        }
    }
})

// var vm = new Vue({
//     el: '#demo',
//     data: {
//         firstName: 'Foo',
//         lastName: 'Bar',
//         fullName: 'Foo Bar'
//     },
//     watch: {
//         firstName: function (val) {
//             this.fullName = val + ' ' + this.lastName
//         },
//         lastName: function (val) {
//             this.fullName = this.firstName + ' ' + val
//         }
//     }
// })

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})