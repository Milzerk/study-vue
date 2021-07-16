var dados = {a: 1}

var zeni = new Vue({
    el: '#app',
    data: dados,
    created: function () {
        // `this` aponta para a instância
        console.log('a é: ' + this.a)
    }
})

console.log(document.getElementById('app'));
  // => "a é: 1"