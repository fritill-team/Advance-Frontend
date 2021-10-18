/* src/app.js */

// Styles
import "./assets/styles/app.scss"
// vendor
import "./assets/vendor/jquery-3.3.1.min.js"
// import "./assets/vendor/select2.min.js"
// import "./assets/vendor/fontawesome-free/js/all.js"
import "./assets/vendor/OwlCarousel/owl.carousel.js"
import "./assets/vendor/dropzone.js"
import "./assets/vendor/jquery-ui.min.js"

// import "./assets/vendor/bootstrap/js/bootstrap.min.js"
import "./assets/vendor/popper.min.js"
import "./assets/vendor/lightbox.min.js"
import "./assets/vendor/star/jquery.star-rating-svg"
import "./assets/vendor/venobox.min.js"
import "./assets/vendor/select2.min.js"
import "./assets/vendor/sortable.js"
// js
import "./assets/scripts/index"
// import {input} from "./assets/vendor/bootstrap/js/tests/integration/rollup.bundle"


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
//         this.RESOURCE.items = res
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

// console.log(recommendations.options)

class NewResource {
  constructor($container, options) {
    // observables
    this.localItems = []
    this.localSearch = ''
    this.localLoading = false

    // properties
    this.prefix = ''
    this.withPagination = false
    this.paginationType = 'pagination' // 'show-more'

    // elements
    this.$container = $container
    this.$searchBar = null
    this.$itemsList = null


    for (let item in options)
      if (Object.prototype.hasOwnProperty.call(options, item))
        this[item] = options[item]
  }

  get loading() {
    return this.localLoading
  }

  set loading(v) {
    this.localLoading = v
    this.loadingListener(v)
  }

  get items() {
    return this.localItems
  }

  set items(value) {
    this.localItems = value
    this.itemsListener(value)
  }

  get search() {
    return this.localSearch
  }

  set search(value) {
    this.localSearch = value
    this.searchListener(value)
  }

  loadingListener(v) {
    if (v) {
      this.$itemsList.empty()
      this.$itemsList.text('Loading...')
    }

  }

  searchListener(value) {
    this.$searchBar.val(value)
    this.fetchItems({q: value})
  }

  itemsListener(v) {
    this.$itemsList.empty()
    this.$itemsList.append(this.listingTemplate())
  }

  fetchItems(data = {}) {
    this.loading = true

    $.ajax({
      url: this.listingURL,
      type: 'get',
      data,
      success: data => {
        this.items = data
        this.loading = false
      },
      error: xhr => console.error(xhr)
    })
  }
  const form = document.querySelector('.recommendation-form');
  const formData = {
    title: 
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
          ${this.withPagination ? this.paginationTemplate() : ''}
        </div>
      </div>
    </div>`)
  }

  searchForm() {
    return `<div class="field-wrapper">
     <div class="field-wrapper__label">Search</div>
     <div class="field-wrapper__content">
       <input type="search" class="field" id="${this.prefix}-searchbar">
     </div>
    </div>`
  }


  paginationTemplate() {

  }

  listingTemplate() {
    return this.items.map(item => this.itemTemplate(item)).join('')
  }

  itemTemplate(item) {
    return `<li>${item.title}</li>`
  }

  formTemplate() {
    return `
      <form class='card recommendation-form' data-data='data'>
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
        <input class="btn btn--primary" type="submit">
      </form>
    `
  }

  build() {
    this.$container.append(this.containerTemplate())
    this.$itemsList = $(`#${this.prefix}-listing`)
    this.$searchBar = $(`#${this.prefix}-searchbar`)
    this.$searchBar.on('input', e => this.search = e.target.value)
    this.fetchItems()
  }
}

let textContainer = $('#recommendations')

const recommendations = $('.recommendations-list')

let resource = new NewResource(recommendations, {
  listingURL: recommendations.data('listing-url'),
  prefix: "recommendations",
  itemTemplate(item) {
    return `<div class="recommendation-details card" data-data='${JSON.stringify(item)}'>
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
    </div>`
  },
})

resource.build()

resource.search = 'new'
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
