import {openOverlay} from "../overlay";

let gettext
if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key
export default class BaseResource {
  constructor($container, options) {
    // observables
    this.localItems = []
    this.localSearch = ''
    this.localLoading = false

    // properties
    this.prefix = ''
    this.listingURL = ''
    this.createURL = ''
    this.deleteURL = ''
    this.subBuild = null
    this.withPagination = false
    this.paginationType = 'pagination'
    this.csrf = $('meta[name="csrf-token"]').prop('content')
    this.user = null
    this.categoryListingUrl = ''
    this.tagsListingUrl = ''
    this.categories = []
    this.tags = []
    // elements
    this.$container = $container
    this.$searchBar = null
    this.$itemsList = null
    this.$form = null
    this.$deleteDialog = null


    for (let item in options)
      if (Object.prototype.hasOwnProperty.call(options, item))
        this[item] = options[item]

    this.$container.append(this.containerTemplate())
    this.$itemsList = $(`#${this.prefix}-listing`)
    this.$searchBar = $(`#${this.prefix}-searchbar`)
    this.$form = $(`#${this.prefix}-form`)
    this.$deleteDialog = $(`#${this.prefix}-delete-dialog`)

    this.$searchBar.on('input', e => this.search = e.target.value)


    let self = this
    $(document)
      .on('click', `.${this.prefix}-edit`, function (e) {
        e.preventDefault()
        let parentContainer = $(this).closest('.card')
        self.$form.empty()
        self.$form.append($(self.formTemplate(parentContainer.data('data'), $(this).attr('href'), true)))

        // init star rating again
        $(document).ready(function () {
          $(".rate-input").starRating({
            initialRating: 0,
            starSize: 25,
            totalStars: 5,
            useFullStars: true,
            starShape: '',
            emptyColor: 'lightgray',
            hoverColor: '#f2b01e',
          });
          $(".rate-display").each(function () {
            let initial = $(this).data('rate')
            $(this).starRating({
              readOnly: true,
              initialRating: initial,
              starSize: 20,
              totalStars: 5,
              starShape: '',
              emptyColor: 'lightgray',
              hoverColor: '#f2b01e',
            });
          })
          if ($('.rate-input-form').length)
            $('.rate-input-form').val($(".rate-input").starRating('getRating'))

        })

      })
      .on('submit', `#${this.prefix}-form > form`, function (e) {
        e.preventDefault()
        // update the rating
        if ($('.rate-input-form').length)
          $('.rate-input-form').val($(".rate-input").starRating('getRating'))

        self.submitForm($(this))
        self.fetchItems()
      })
      .on('click', `.${this.prefix}-delete`, function (e) {
        e.preventDefault()
        self.deleteURL = $(this).attr('href')
        openOverlay()
        self.$deleteDialog.addClass('dialog--show')
      })
      .on('click', `.${this.prefix}-confirm-delete`, function (e) {
        e.preventDefault()
        self.confirmDelete()
      })
      .on('click', '#reviews-loader', function (e) {
        self.fetchItems()
      })
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

  mapErrors(errors) {
    // console.log(errors)
    for (let field in errors)
      if (errors.hasOwnProperty(field)) {
        let messages = this.$form.find(`#${this.prefix}-${field}-messages`),
          wrapper = messages.closest('.field-wrapper')
        wrapper.addClass('field-wrapper--error')
        messages.empty()
        messages.append($(errors[field].map(error => `<li>${error}</li>`).join('')))

      }
  }

  fetchItems(data = {}) {
    this.loading = true
    let self = this
    $.ajax({
      url: this.listingURL,
      type: 'get',
      data,
      headers: {'X-CSRFToken': self.csrf},
      success: function (data) {
        self.items = data
        self.loading = false
      },
      error: function (xhr) {
        console.error(xhr)
      }
    })
  }

  onFormSubmit() {

  }

  submitForm($form) {
    let url = $form.attr('action'),
      data = $form.serialize(),
      self = this
    $.ajax({
      type: 'POST',
      url,
      data,
      headers: {'X-CSRFToken': self.csrf},
      success: () => {
        this.fetchItems()
        this.$form.empty()
        this.$form.append($(this.formTemplate({}, this.createURL)))
        this.onFormSubmit()
      },
      error: (xhr, status, error) => {
        if (xhr.status === 422)
          this.mapErrors(xhr.responseJSON)
      }
    });
  }

  containerTemplate(data) {
    return $(`
      ${this.deleteDialog()}
      <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="card" id="${this.prefix}-form">
            ${this.formTemplate({}, this.createURL)}
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          ${this.searchForm()}
          <ul id="${this.prefix}-listing">${this.listingTemplate()}</ul>
          ${this.withPagination ? this.paginationTemplate() : ''}
        </div>
      </div>
    </div>`)
  }

  searchForm() {
    return `<form method="get">
      <div class="field-wrapper field-wrapper--full">
        <div class="field-wrapper__label">Search</div>
          <div class="field-wrapper__content">
            <input name="q" type="search" class="field" id="${this.prefix}-searchbar">
          </div>
        </div>
      </form>`
  }

  paginationTemplate() {
    return `
      <div class="pagination">
        <button class="btn btn--text btn--primary icon--hover" href="#" aria-label="Previous">
        <i class="fas fa-chevron-left pagination-icon"></i></button>
        <button class="btn btn--text btn--primary icon--hover text-1" href="#">1</button>
        <button class="btn btn--text btn--primary icon--hover text-1" href="#">2</button>
        <button class="btn btn--text btn--primary icon--hover text-1" href="#">3</button>
        <button class="btn btn--text btn--primary icon--hover text-1" href="#">...</button>
        <button class="btn btn--text btn--primary icon--hover" href="#" aria-label="Next">
        <i class="fas fa-chevron-right pagination-icon"></i></button>
      </div>
    `

  }

  listingTemplate() {
    // print(this.items)
    if (this.items.length) {
      return this.items.map(item => this.itemTemplate(item)).join('')
    }
    return this.emptyTemplate()
  }

  itemTemplate(item) {
    return `<li>${item.title}</li>`
  }

  formTemplate(item = {}, action = '') {
    return ``
  }

  confirmDelete() {
    let self = this
    $.ajax({
      url: self.deleteURL,
      type: "DELETE",
      headers: {'X-CSRFToken': self.csrf},
      success: function () {
        self.fetchItems()
        self.deleteURL = ''
      },
      error: function (xhr) {
        console.log(xhr)
        console.log("cannot delete this item")
      }
    })
  }

  deleteDialog() {
    return `<div class="dialog" id="${this.prefix}-delete-dialog">
      <div class="card">
        <div class="card__title">
          <h3>${gettext("You are About to delete this item<")}/h3>
        </div>
        <div class="card__body">
            <p class="body">${gettext("If you deleted it you will never be able to retreive it")}</p>
            <p class="body bold">${gettext("Are you sure")}</p>
        </div>
        <div class="card__footer">
          <button class="btn btn--text btn--danger close-dialog">${gettext("Cancel")}</button>
          <button class="btn btn--primary close-dialog ${this.prefix}-confirm-delete">${gettext("Confirm")}</button>
        </div>
      </div>
    </div>`
  }

  emptyTemplate() {
    return `
      <div class="status">
        <span class="material-icons status__img">widgets</span>
        <h4 class="title-h4">${gettext("nothing here")}</h4>
      </div>
    `
  }

  build() {
    this.fetchItems()
  }
}

// db.media.insert({
//   id: 3,
//   collection_name: "images",
//   content_type: 3,
//   object_id: 3,
//   order: 1,
//   name: "images",
//   file: "test file",
//   mime_type: "text.jpg",
//   size: 100,
//   caption: "lorem lorem lorem",
//   file_path: ""
// })