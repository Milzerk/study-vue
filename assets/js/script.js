Vue.component('blog-post', {
  // camelCase em JavaScript
  props: ['postTitle'],
  computed: {
    upperCase: function () {
      return this.postTitle.valor.trim().toUpperCase()
    }
  },
  template: '<h3>{{ upperCase }}</h3>'
})

var vm = new Vue({
  el: '#app',
  data: {
    theValue:  {
      valor: 'Valor'
    }
  }
});