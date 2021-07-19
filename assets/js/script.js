Vue.component('blog-post', {
  // camelCase em JavaScript
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

var vm = new Vue({
  el: '#app',
});