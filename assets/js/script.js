Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <slot name="todo" v-bind:todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  `
});

var vm = new Vue({
  el: "#app",
  data: {
    filteredTodos: [
        {
          text: 'text1',
          isComplete: false
        },
        {
          text: 'text2',
          isComplete: false
        },
        {
          text: 'text3',
          isComplete: true
        },
        {
          text: 'text4',
          isComplete: false
        },
        {
          text: 'text5',
          isComplete: false
        },
        {
          text: 'text6',
          isComplete: true
        },
        {
          text: 'text7',
          isComplete: false
        },
        {
          text: 'text8',
          isComplete: false
        },
    ]
  }
});