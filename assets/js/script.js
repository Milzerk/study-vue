Vue.component('my-component', {
  props: {
    // Checagem básica de tipos (`null` and `undefined` passarão em qualquer validação de tipo)
    propA: Number,
    // Multíplos tipos possíveis
    propB: [String, Number],
    // String obrigatória
    propC: {
      type: String,
      required: true
    },
    // Número com um valor padrão
    propD: {
      type: Number,
      default: 100
    },
    // Objeto com um valor padrão
    propE: {
      type: Object,
      // Objetos ou Arrays padrões devem ser retornadas
      // a partir de uma função fabricadora
      default: function () {
        return { message: 'hello' }
      }
    },
    // Função personalizada de validação
    propF: {
      validator: function (value) {
        // O valor precisa corresponder a alguma dessas Strings
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  template: '<div><p>propA: {{propA}}</p><p>propB: {{propB}}</p><p>propC: {{propC}}</p><p>propD: {{propD}}</p><p>propE: {{propE.nome}}</p><p>propF: {{propF}}</p></div>'
})

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
    },
    dataA: 59,
    dataB: '50',
    dataC: 'O valor C',
    dataD: 800,
    dataE: {nome: 'miller'},
    dataF: 'success'
  }
});