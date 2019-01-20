// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import App from './App'

Vue.config.productionTip = false

Raven
    .config('http://7f67ddfc80264c09b328811e9f5a63c2@58.87.102.33:32798//2')
    .addPlugin(RavenVue, Vue)
    .install();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
