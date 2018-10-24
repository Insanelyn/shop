import Vue from 'vue'
import App from './app.vue'
import store from './store';


const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("http://localhost:5000/articles")
    .then(response => {this.results = response.data.results})
  }
})
