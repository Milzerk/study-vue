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
        <slot>Isso é o menu padrão</slot>
      <div>
    `
});

Vue.component('base-layout', {
  template: `
      <div class="container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    `
});

var vm = new Vue({
  el: "#app",
  data: {
    nome: 'john doe'
  }
});