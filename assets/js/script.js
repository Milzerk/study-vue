Vue.component('tab-postagens', {
  data() {
    return {
      currentPost: '',
      posts: [
        {
          id: 1,
          title: 'post1',
          content: 'Conteúdo da postagem 1',
        },
        {
          id: 2,
          title: 'post2',
          content: 'Conteúdo da postagem 2',
        },
        {
          id: 3,
          title: 'post3',
          content: 'Conteúdo da postagem 3',
        }       
      ]
    }
  },
  created() {
    this.currentPost = this.posts[0]
  },
  template: `
      <div class="tab">
        <ul class="menus">
          <li
            v-for="(post, chave) in posts"
            v-bind:key="chave"
            v-on:click="currentPost = post"
            v-bind:class="{active: post.id === currentPost.id }"
            >
            {{ post.title }}
          </li>
        </ul>
        <h1 class="contentPost">{{ currentPost.content }}</h1>
      </div>
    `
});

Vue.component('tab-arquivo', {
  template: `
      <div class="tab">
        <h1>Isso é um arquivo</h1>
      </div>
    `
});

Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Passa a definição do componente para resolver o callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 10000)
})

var vm = new Vue({
  el: '#app',
  data: {
    currentTab: 'Postagens',
    tabs: ["Postagens", "Arquivo"]
  },
  computed: {
    getCurrentTab: function() {
      return 'tab-' + this.currentTab.toLowerCase(); 
    }
  }
});