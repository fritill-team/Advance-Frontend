// import "jquery";
import "./vertical-responsive-menu.js";
import "./jquery-3.3.1.min.js";
// import "../styles/vendor/bootstrap/js/bootstrap.bundle.min";
// require('bootstrap');
// require('popper.js');
import "../styles/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../styles/vendor/OwlCarousel/owl.carousel.js";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import "../styles/vendor/semantic/semantic.min.js";
import "./custom.js";
import "./night-mode.js";

import "../styles/app.scss";
import "bootstrap/dist/css/bootstrap.css";

// video.js
// import 'https://vjs.zencdn.net/7.11.4/video.min.js';
// import "./videojs-transcript.min.js";

// import 'bootstrap/dist/js/popper.min.js';
import Vue from "vue";
import Exam from "../scripts/vue/Exam.vue";
// import * from 'video';

import "../scripts/login";
console.log("hello from webpack");

new Vue({
  el: "#vue",
  render: h => h(Exam)
});
