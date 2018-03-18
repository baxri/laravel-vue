
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);


Vue.directive('material-select', {
    bind:function(el,binding,vnode){
        $(function () {
            $(el).material_select();

        });
        var arg = binding.arg;
        if(!arg)arg="change";
        arg = "on"+arg;

        el[arg]=function() {

            if (binding.expression) {
                if (binding.expression in vnode.context.$data) {
                    vnode.context.$data[binding.expression] = el.value;

                } else if (vnode.context[binding.expression] &&
                    vnode.context[binding.expression].length <= 1) {
                    vnode.context[binding.expression](el.value);

                } else {
                    throw new Error('Directive v-' + binding.name + " can not take more than 1 argument");
                }

            }
            else {
                throw new Error('Directive v-' + binding.name + " must take value");
            }
        }

    },
    unbind:function(el) {
        $(el).material_select('destroy');
    }
});

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('contact-component', require('./components/ContactComponent.vue'));
Vue.component('loader-component', require('./components/LoaderComponent.vue'));

const app = new Vue({
    el: '#app'

});
