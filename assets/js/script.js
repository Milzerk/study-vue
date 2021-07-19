Vue.component('base-checkbox', {
  template: `
    <input type="text">
  `
});

var vm = new Vue({
  el: '#app',
  data: {
    lovingVue: false
  },
  methods: {
    onFocus: function(event) {
      console.log('evento');
      console.log(event);
    }
  }
});