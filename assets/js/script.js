var vm = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        teste: function () {
            alert('teste');
        },
        clear: function() {
            alert('clear');
        }
    }
})
