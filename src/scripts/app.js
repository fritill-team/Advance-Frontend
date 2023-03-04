"use strict"

require('jquery.nicescroll')
require('tooltipster')
/* src/app.js */

// Styles
// import "@/scss/app.scss"

// import "jquery.nicescroll/"
//
// import "tooltipster/dist/css/tooltipster.bundle.min.css"
// import "tooltipster/dist/js/tooltipster.bundle.min"
// import "@popperjs/core/dist/esm/popper"
//
// import "assets/plugins/starRating/rating.css"
// import "assets/plugins/starRating/rating.js"
//
// import "select2"

// import "./assets/vendor/jquery-ui.min.js"
// import "./assets/vendor/lightbox.min.css"
// import "./assets/vendor/lightbox.min.js"
// import "./assets/vendor/star/jquery.star-rating-svg"
// import "./assets/vendor/venobox.min.js"
// import "./assets/vendor/select2.min.js"
// import "./assets/vendor/bootstrap/js/bootstrap"
// import './assets/vendor/Inputmask-5.x/jquery.inputmask.min.js'

// import 'scripts/night-mode.js'
// import 'scripts/switch-locale'

require('@/scripts/custom')

// Components
window.Utils = require('@/scripts/components/utils')
window.DisplayCard = require('@/scripts/components/display-card')
window.Carousels = require('@/scripts/components/carousels')
window.Collapsible = require('@/scripts/components/collapse') // Todo: remove this and use bootstrap 5 Collapse

require('@/scripts/components/convertable')
require('@/scripts/components/accordion')
require('@/scripts/components/ripple')
require('@/scripts/components/dialog') // Todo: remove this and use bootstrap 5 modal
require('@/scripts/components/progress')
require('@/scripts/components/rating')
require('@/scripts/components/dropdown') // Todo: remove this and use bootstrap 5 dropdown
require('@/scripts/components/menu-header') // Todo: remove this and use bootstrap 5 dropdown
require('@/scripts/components/tabs') // Todo: remove this and use bootstrap 5 tabs

// Layout
window.Overlay = require('@/scripts/layout/overlay')
require('@/scripts/layout/drawer')

// pages
require('@/scripts/pages/listing')
require('@/scripts/pages/checkout')
require('@/scripts/pages/login')

