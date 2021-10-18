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
// import {input} from "./assets/vendor/bootstrap/js/tests/integration/rollup.bundle";


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

//
// class Resource {
//   constructor($container, options) {
//     this.prefix = options.prefix ? options.prefix : ''
//     this.$container = $container
//     this.listingURL = options.listingURL
//     this.formURL = options.formURL
//     this.deleteURL = options.deleteURL
//     for (let item in options)
//       if (Object.prototype.hasOwnProperty.call(item, options))
//         this[item] = options[item]
//     this.localItems = []
//   }
//
//   get items() {
//     return this.localItems
//   }
//
//   set items(value) {
//     this.localItems = value
//     this.itemsListener(value)
//   }
//
//   // RESOURCE = {
//   //   // items
//   //   localItems: [],
//
//   //   // search
//   //   localSearch: '',
//   // }
//
//   itemsListener(v) {
//     countable.val(v)
//   }
//
//   fetch(Q = null) {
//     $.get(this.listingURL, {q: Q})
//       .then(res => {
//         this.RESOURCE.items = res;
//       })
//       .catch(e => this.handleError(e))
//
//   }
//
//   handleError(e) {
//     console.error(e)
//   }
//
//   // defaultStructure() {
//   //   return `<div class="container">
//   //       <div class="row">
//   //       <div class="col-6">
//   //         ${this.searchForm()}
//   //         ${this.listingTemplate()}
//   //       </div>
//   //       <div class="col-6">${this.formTemplate()}</div>
//   //       </div>
//   //   </div>`}
//
//   // async build() {
//   //   await this.fetch('http://localhost:3000/')
//   //   this.$container.empty()
//   //   this.$container.append(this.defaultStructure())
//   // }
//
// }

//
// let recommendations = new Resource($('#recommendations'), {
//   listingURL: '',
//   formURL: '',
//   deleteURL: '',
//   itemTemplate(item) {
//     return ''
//   },
//   formTemplate(item, url) {
//     return ''
//   },
//   searchForm(item) {
//     return ''
//   },
//   listingTemplate() {
//     return ''
//   },
//   defaultStructure() {
//     return ''
//   },
//   itemsListener() {
//
//   }
// })

// recommendations.build()

// console.log(recommendations.options);

class NewResource {
  constructor($container, options) {
    // properties
    this.localItems = []
    this.loading =  false
    this.$container = $container
    this.options = options
    this.prefix = options.prefix ? options.prefix : ''
    this.listingURL = options.listingURL
    this.formURL = options.formURL
    this.deleteURL = options.deleteURL


    for (let item in options)
      if (Object.prototype.hasOwnProperty.call(options, item)) {
        this[item] = options[item]
      }
  }

  get items() {
    return this.localItems
  }

  set items(value) {
    this.localItems = value
    this.itemsListener(value)
  }

  itemsListener(v) {
    this.$itemsList = $(`#${this.prefix}-listing`)
    this.$itemsList.html($(this.listingTemplate()))
  }

  fetchItems(query = null) {
    this.loading = true
    $.ajax({
      type: 'GET',
      url: this.listingURL,
      success: (data) => {
        this.items = data
        this.loading = false
        // this.container.append(this.defaultStructure(JSON.stringify(data)));
        // console.log(this.defaultStructure(JSON.stringify(data)));
        // console.log(this.container);
      }
    })
  }

  containerTemplate(data) {
    return $(`<div class="container">
      <div class="row">
        <div class="col-6">
          ${this.formTemplate()}
        </div>
        <div class="col-6">
          ${this.searchForm()}
          <ul id="${this.prefix}-listing">${this.listingTemplate()}</ul>

        </div>
      </div>
    </div>`)
  }

  searchForm() {
    return `<h1></h1>`
  }

  listingTemplate() {
    return this.items.map(item => this.itemTemplate(item)).join('')
  }

  itemTemplate(item) {
    return `<li>${item.title}</li>`
  }

  formTemplate() {
    this.fetchItems()
  }

  build() {
    this.$container.append(this.containerTemplate())
    this.fetchItems()
  }
}

let textContainer = $('#recommendations')

const recommendations = $('.recommendations-list')

let resourse1 = new NewResource(recommendations, {
  listingURL: recommendations.data('listing-url'),
  prefix: "recommendations",
  itemTemplate(item) {
    return `
      <div class="recommendation-details card" data-data='${JSON.stringify(item)}'>
        <div class="card__header" >
          <h5 class='title-5 my-0'>${item.title}</h4>
          <div class="d-flex card__tools" >
            ${item.actions.map(action => `
              <a href="${action.link}" class="btn btn--text btn--icon ${action.class}">
                <i class="${action.icon}"></i>
              </a>
            `).join('')}
          </div>
        </div>
        <div class="card__content">
          <p>${item.description}</p>
        </div>
      </div>
    `
  },
})

resourse1.build()

// TODO Mohammed Ibrahim
// to map validation errors to form
// field messages must has id of `#${app}-${fieldErrors}-messages`
// example app: recommendations
//         field: title
const mapErrors = (app, $form, errors) => {
  for (let field in errors)
    if (Object.prototype.hasOwnProperty.call(field, errors))
      $form.find(`#${app}-${field}-messages`)
        .empty()
        .append($(errors[field].map(error => `<li>${error}</li>`).join('')))

}

/*
*
*
*
*
  searchForm() {
    return `<form class='card recommendation-form' data-data='data'>
      <div class="field-wrapper field-wrapper--sm">
        <label class="field-wrapper__label">Course Title*</label>
        <div class="field-wrapper__content">
          <input class="field" type="text" placeholder="Insert your course title." name="title" data-purpose="edit-course-title" maxlength="" id="title" value="">
        </div>
        <ul class="field-wrapper__messages">
          <li>Please provide a valid city.</li>
        </ul>
      </div>
      <div class="field-wrapper">
        <label class="field-wrapper__label">Course Radio Button*</label>
        <div class="field-wrapper__content">
          <textarea class="textarea field" id="description" rows="5" name="description" placeholder="Insert your course description" ></textarea>
        </div>
        <ul class="field-wrapper__messages">
          <li>Please provide a valid city.</li>
        </ul>
      </div>
    </form>
    `
  },
  *
  *
  * */
