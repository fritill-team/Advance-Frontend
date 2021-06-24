// import "jquery"
import "./jquery-3.3.1.min.js"
// require('bootstrap');
// require('popper.js');
import "./vertical-responsive-menu.js"
// import "../styles/vendor/bootstrap/js/bootstrap.bundle.min.js"
import "../styles/vendor/OwlCarousel/owl.carousel.js"
 
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import "../styles/vendor/semantic/semantic.min.js"
import "./custom.js"
import "./night-mode.js"
import "../scripts/login";


import "../styles/app.scss";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/popper.min.js';
import Vue from 'vue';
import Test from "../scripts/vue/Test.vue";

  console.log("hello from webpack");

new Vue({
  el: '#vue',
  render: h => h(Test)
});
