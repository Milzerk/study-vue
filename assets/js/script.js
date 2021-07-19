Vue.component('base-checkbox', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners() {
      var vm = this;      
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      );
    }
  },
  template: `
    <label>
      {{ value }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
});

var vm = new Vue({
  el: '#app',
  data: {
    lovingVue: 'ddss'
  },
  methods: {
    onFocus(event) {
      this.lovingVue = event
    }
  },
});