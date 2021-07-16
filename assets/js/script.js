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
      <div v-html="post.content"></div>
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
    ]
  }
})