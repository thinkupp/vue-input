import Vue from 'vue';
import input from './input';



export default {
  install (Vue, optoins = {}) {
    Vue.directive('input', {
      bind: input
    })
  }
}
