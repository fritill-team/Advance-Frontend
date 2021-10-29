export default class BaseResource {
  constructor($container, options) {
    // observables
    this.localItems = []
    this.localSearch = ''
    this.localLoading = false

    this.title = ''
    this.description = ''

    // properties
    this.prefix = ''
    this.listingURL = ''
    this.createURL = ''
    this.subBuild = null
    this.withPagination = false
    this.paginationType = 'pagination' // 'show-more'

    // elements
    this.$container = $container
    this.$searchBar = null
    this.$itemsList = null
    this.$form = null

    for (let item in options)
      if (Object.prototype.hasOwnProperty.call(options, item))
        this[item] = options[item]

    this.$container.append(this.containerTemplate())
    this.$itemsList = $(`#${this.prefix}-listing`)
    this.$searchBar = $(`#${this.prefix}-searchbar`)
    this.$form = $(`#${this.prefix}-form`)

    this.$searchBar.on('input', e => this.search = e.target.value)

    let self = this

    $(document)
      .on('click', `.${this.prefix}-edit`, function (e) {
        e.preventDefault()
        let parentContainer = $(this).closest('.card')
        self.$form.empty()
        self.$form.append($(self.formTemplate(parentContainer.data('data'), $(this).attr('href'))))
      })
      .on('submit', `#${this.prefix}-form > form`, function (e) {
        e.preventDefault()
        self.submitForm($(this))
        self.fetchItems()

      })
      .on('click', `.${this.prefix}-delete`, function (e) {
        e.preventDefault()
       
        // self.deleteItem(this)
        // self.fetchItems()
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

  submitForm($form) {
    let url = $form.attr('action'),
      data = $form.serialize()

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url,
      data,
      success: () => {
        if (url !== this.createURL) {
          // TODO improve behavior
          this.fetchItems()
          this.formTemplate({}, this.createURL)
        } else {
          this.fetchItems()
          $form.trigger('reset')
        }
      },
      error: error => {
        if (error.status === 422)
          console.log(error.message)
        //   mapErrors(this.prefix, $form, error.message.errors)
      }
    });
  }

  containerTemplate(data) {
    return $(`<div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="card" id="recommendations-form">
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

    return `

<form method="get">
<div class="field-wrapper">
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
    return this.items.map(item => this.itemTemplate(item)).join('')
  }

  itemTemplate(item) {
    return `<li>${item.title}</li>`
  }

  formTemplate(item = {}, action = '') {
    return ``
  }

  deleteItem(item) {
    let parentContainer = $(item).closest('.card')
    let url = parentContainer.data('data').actions[1].link
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url,
      success: () => {
        self.fetchItems()
      }
    });

  }

  build() {
    this.fetchItems()
  }
}
