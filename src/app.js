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

import {ListLoader} from "./assets/scripts/backend_scripts/panel-loader"
import {input} from "./assets/vendor/bootstrap/js/tests/integration/rollup.bundle";


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
    $.get(this.listingURL, {q: Q})
      .then(res => {
        this.RESOURCE.items = res;
      })
      .catch(e => this.handleError(e))

  }

  handleError(e) {
    console.error(e)
  }

  // defaultStructure() {
  //   return `<div class="container">
  //       <div class="row">
  //       <div class="col-6">
  //         ${this.searchForm()}
  //         ${this.listingTemplate()}
  //       </div>
  //       <div class="col-6">${this.formTemplate()}</div>
  //       </div>
  //   </div>`}

  // async build() {
  //   await this.fetch('http://localhost:3000/')
  //   this.$container.empty()
  //   this.$container.append(this.defaultStructure())
  // }

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
  searchForm(item) {
    return ''
  },
  listingTemplate() {
    return ''
  },
  defaultStructure() {
    return ''
  },
  itemsListener() {

  }
})

// recommendations.build()

// console.log(recommendations.options);

class NewResource {
  constructor(container, options) {
    this.container = container
    this.options = options
    for (let item in options)
      if (Object.prototype.hasOwnProperty.call(item, options))
        this[item] = options[item]
  }

  defaultStructure(data) {
    return `<div class="container">
        <div class="row">
        <div class="col-6">
          text default structure
          ${data}
        </div>
        <div class="col-6">form structure</div>
        </div>
    </div>`
  }

  build() {
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/recommendations/`,
      success: (data) => {
        this.container.append(this.defaultStructure(data))
        console.log(data);
      }
    })
  }
}

let resourse1 = new NewResource($('#recommendations'), {})

resourse1.build()

// TODO Mohammed Ibrahim
// to map validation errors to form
// field messages must has id of `#${app}-${fieldErrors}-messages`
// example app: recommendations
//         field: title
const mapErrors = (app, $form, errors) => {
  for (let field in errors)
    if (Object.prototype.hasOwnProperty.call(field, errors)) {
      let inputMessages = $form.find(`#${app}-${field}-messages`)
      inputMessages.empty().append($(errors[field].map(error => `<li>${error}</li>`).join('')))
    }
}
