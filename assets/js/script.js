var vm = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        warn: function (message, event) {
            // agora temos acesso ao evento nativo
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})
