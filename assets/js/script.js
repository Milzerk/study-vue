Vue.component('navigation-link', {
  template: `
      <div>
        <h1>Isso é um teste com slots</h1>
        <slot></slot>
      </div>
    `
});

Vue.component('menu-link', {
  template: `
      <div>
        <i>valor x</i>
        <slot></slot>
      <div>
    `
});

var vm = new Vue({
  el: "#app",
});