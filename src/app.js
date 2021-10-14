/* src/app.js */

// Styles
import "./assets/styles/app.scss";
// vendor
import "./assets/vendor/jquery-3.3.1.min.js";
// import "./assets/vendor/select2.min.js";
// import "./assets/vendor/fontawesome-free/js/all.js";
import "./assets/vendor/OwlCarousel/owl.carousel.js";
import "./assets/vendor/dropzone.js";
import "./assets/vendor/jquery-ui.min.js"

// import "./assets/vendor/bootstrap/js/bootstrap.min.js";
import "./assets/vendor/popper.min.js";
import "./assets/vendor/lightbox.min.js";
import "./assets/vendor/star/jquery.star-rating-svg";
import "./assets/vendor/venobox.min.js"
import "./assets/vendor/select2.min.js";
import "./assets/vendor/sortable.js";
// js
import "./assets/scripts/index";

import { ListLoader } from "./assets/scripts/backend_scripts/panel-loader"


let up = $('.count-up'),
  down = $('.count-down'),
  countable = $('.countable')


let x = {
  localCount: 0,
  get count() {
    return this.localCount
  },
  set count(v) {
    let value = v
    if (v >= 5)
      value = 5
    if (v <= 0)
      value = 0
    this.localCount = value
    this.countListener(value)
  },
  countListener(v) {
    console.log(v)
    countable.val(v)
  }
}


up.on('click', (v) => x.count++)
down.on('click', (v) => x.count--)
countable.on('input', v => x.count = v.target.value)


export default {
  ListLoader: function () {
    console.log("lol")
  }
}


class Resource {
  get items() {
    return this.localItems
  }
  set items(value) {
    this.localItems = value
    this.itemsListener(value)
  }
  itemsListener(v) {
    countable.val(v)
  }
  // RESOURCE = {
  //   // items
  //   localItems: [],

  //   // search
  //   localSearch: '',
  // }

  constructor($container, options) {
    this.prefix = options.prefix ? options.prefix : ''
    this.$container = $container
    this.listingURL = options.listingURL
    this.formURL = options.formURL
    this.deleteURL = options.deleteURL
    for (let item in options)
      if (Object.prototype.hasOwnProperty.call(item, options))
        this[item] = options[item]
    this.localItems = []
  }

  fetch(Q = null) {
    $.get(this.listingURL, { q: Q })
      .then(res => {this.RESOURCE.items = res;})
      .catch(e => this.handleError(e))

  }

  handleError(e) {
    console.error(e)
  }

  defaultStructure() {
    return $(`<div class="container">
        <div class="row">
        <div class="col-6">
          ${this.searchForm()}
          ${this.listingTemplate()}
        </div>
        <div class="col-6">${this.formTemplate()}</div>
        </div>
    </div>`)}

  async build() {
    await this.fetch('http://localhost:3000/')
    this.$container.empty()
    this.$container.append(this.defaultStructure())
  }
  
}


let recommendations = new Resource($('#recommendations'), {
  listingURL: '',
  formURL: '',
  deleteURL: '',
  itemTemplate(item) {
    return ''
  },
  formTemplate(item, url) {
    return ''
  },
  searchForm(item){
    return ''
  },
  listingTemplate() {
    return ''
  },
  defaultStructure() {
    return ''
  }
})

recommendations.build()

