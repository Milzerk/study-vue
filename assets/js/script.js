// Definindo novo componente chamado button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Você clicou em mim {{ count }} vezes.</button>'
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Aumentar fonte
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

Vue.component('alert-box', {
  template: `
    <div style="font-size: 25px; border: red solid;">
      <strong>Erro!</strong>
      <slot></slot>
    </div>
  `
})

new Vue({
  el: '#components-demo',
  data: {
    posts: [
      { id: 1, title: '- Minha jornada com Vue', content: '<h4>conteúdo 1</h4>' },
      { id: 2, title: '- Postagens com Vue', content: '<h4>conteúdo 2</h4>' },
      { id: 6, title: '- Porque Vue é tão divertido', content: '<h4>conteúdo 3</h4>' }
    ],
    postFontSize: 1,
    searchText: ''
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})