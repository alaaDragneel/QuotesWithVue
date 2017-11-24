import Vue from 'vue'
import App from './App.vue'

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire (event, data = null) {
        this.vue.$emit(event, data);
    }

    listen (event, callback) {
        this.vue.$on(event, callback);
    }
}

new Vue({
  el: '#app',
  render: h => h(App)
});
