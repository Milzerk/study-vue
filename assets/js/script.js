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
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names.shift()
                this.lastName = names.pop()
            }
        }
    }
})



var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'Eu não posso responder até que você faça uma pergunta!'
  },
  watch: {
    // sempre que a pergunta mudar, essa função será executada
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Esperando você parar de escrever...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce é uma função fornecida pelo lodash para limitar
    // a frequência que uma operação complexa pode ser executada.
    // Neste caso, queremos limitar a frequência com que acessamos
    // a yesno.wtf/api, esperando que o usuário termine completamente
    // a digitação antes de realizar a chamada Ajax. Para aprender
    // mais sobre a função _.debounce (e sua prima _.throttle),
    // visite: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Perguntas geralmente têm uma interrogação. ;-)'
        return
      }
      this.answer = 'Pensando...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = response.data.answer === 'yes' ? 'Sim.' :
            response.data.answer === 'no' ? 'Não.' : 'Talvez!'
        })
        .catch(function (error) {
          vm.answer = 'Erro! Não pode executar a API. ' + error
        })
    }
  }
})
