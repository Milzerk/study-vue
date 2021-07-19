/* component Local */
var localComponent = {
  template: '<p>Isto é um local componente</p>'
};

/* component Global */
Vue.component('global-component', {
  template: '<p>Isto é um global componente</p>'
})

/* instância Local */
var app1 = new Vue({
  el: '#app1',
  components: {
    'local-component': localComponent
  }
});

/* instância Global */
var app2 = new Vue({
  el: '#app2'
})