Vue.component('home-box', {
  props: ['post'],
  template: '<div><img src="./assets/img/images.png"><p>{{post.title}}</p></div>',
})

var app = new Vue({
  el: '#app',
  data: {
    posts: [
      {
        id: 1,
        title: 'teste1',
      },
      {
        id: 2,
        title: 'teste2',
      },
      {
        id: 3,
        title: 'teste3',
      },
      {
        id: 4,
        title: 'teste4',
      },
      {
        id: 5,
        title: 'teste5',
      }
    ]
  }
});