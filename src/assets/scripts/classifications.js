class NewResource {
  constructor($container, options) {
    // observables
    this.localItems = []
    this.localSearch = ''
    this.localLoading = false

    this.title = ''
    this.number = ''

    // properties
    this.prefix = ''
    this.listingURL = ''
    this.createURL = ''
    this.editURL = ''
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

  // const form = document.getElementById('classification-form')
  // formData = {
  //   title: $('#title').value,
  //   description: $('#description').value
  // }
  submitForm($form) {
    let url = $form.attr('action')
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url,
      data: $form.serialize(),
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
        console.error(error)
        if (error.status = 422)
          console.log('validation error')
        //   mapErrors(this.prefix, $form, error.message.errors)
      }
    });

  }

  // editForm($form){
  //   let url = $form.attr('action')
  //   $.ajax({
  //     type: 'PUT',
  //     dataType: 'json',
  //     url,
  //     data: $form.serialize(),
  //     success: () => {
  //       if (url !== this.editURL) {
  //         // TODO improve behavior
  //         this.fetchItems()
  //         this.formTemplate({}, this.editURL)
  //       } else {
  //         this.fetchItems()
  //         $form.trigger('reset')
  //       }
  //     }
  //   })
  // }


  containerTemplate(data) {
    return $(`<div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="card" id="classification-form">
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
    return `<div class="field-wrapper">
     <div class="field-wrapper__label">Search</div>
     <div class="field-wrapper__content">
       <input type="search" class="field" id="${this.prefix}-searchbar">
     </div>
    </div>`
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

  build() {
    this.$container.append(this.containerTemplate())
    this.$itemsList = $(`#${this.prefix}-listing`)
    this.$searchBar = $(`#${this.prefix}-searchbar`)
    this.$editItem = $(`#${this.prefix}-edit`)
    this.$form = $(`#${this.prefix}-form`)
    this.$searchBar.on('input', e => this.search = e.target.value)
    let self = this
    let formElement = this.$form.find('form')
    formElement.submit(function (e) {
      e.preventDefault()
      self.submitForm($(this))
    })
    $(document).on('click', `.${this.prefix}-edit`, (e) => {
      e.preventDefault()
      let parentContainer = $(this).closest('.card')
      this.$form.empty()
      this.$form.append($(this.formTemplate(parentContainer.data('data'), $(this).data('action'))))
      // console.log(this.formTemplate())
    })
    // $(`#${this.prefix}-edit`).on('click', (e) => {
    //   e.preventDefault()
    //   let parentContainer = $(this).closest('.card')
    //   console.log(parentContainer)
    //   this.$form.empty()
    //   this.$form.append($(this.formTemplate(parentContainer.data('data'), $(this).data('action'))))
    // })
    this.fetchItems()
  }
}

let textContainer = $('#classifications')

const classification = $('.classifications-list')

let resource = new NewResource(classification, {
  listingURL: classification.data('listing-url'),
  createURL: classification.data('create-url'),
  prefix: "classifications",
  itemTemplate(item) {
    return ` <div class="card" data-data='${JSON.stringify(item)}'>
      <div class="card__header" >
        <h4 class='title-5 my-0'>${item.name}</h4>
        <div class="d-flex card__tools">
          <div class="dropdown dropdown__activator">
            <button class="btn btn--info btn--icon btn--text dropdown--btn">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <div class="dropdown__content">
              <a id="${this.prefix}-edit" class="${this.prefix}-edit content__link" href="javascript.void(0)">
                <i class="far fa-edit"></i>edit
              </a>
              <a class="content__link" href="javascript.void(0)">
               <i class="far fa-trash-alt"></i> delete
             </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card__content">
        <p>${item.number}</p>
      </div>
    </div>`
  },
  formTemplate(item = {}, action = '') {
    return `<form action="${action}" method="post">
      <div class="field-wrapper">
        <label class="field-wrapper__label" for="classifications-name">Name <abbr>*</abbr></label>
        <div class="field-wrapper__content">
          <input
             class="field"
             type="text"
             placeholder="Classifications"
             name="name"
             id="classifications-name"
             required
             value="${item.name ? item.name : ''}">
        </div>
        <ul class="field-wrapper__messages"></ul>
      </div>
      <div class="field-wrapper">
        <label class="field-wrapper__label" for="classifications-number">Description <abbr>*</abbr></label>
        <div class="field-wrapper__content">
            <input
             class="field"
             type="number"
             placeholder="0"
             name="number"
             id="classifications-number"
             required
             value="${item.number ? item.number : ''}">
        </div>
        <ul class="field-wrapper__messages"></ul>
      </div>
      <div class="ml-auto d-inline-block">
        <button class="btn btn--primary btn--text" type="reset">Cancel</button>
        <button class="btn btn--primary" type="submit">submit</button>
      </div>
    </form>`
  }
})
//
// ${item.actions.map(action => `
//              <a href="${action.link}" class="btn btn--text btn--icon ${action.class}">
// <i class="${action.icon}"></i>
// </a>
// `).join('')}
resource.build()

// TODO Mohammed Ibrahim
// to map validation errors to form
// field messages must has id of `#${app}-${fieldErrors}-messages`
// example app: classifications
//         field: title
const mapErrors = (app, $form, errors) => {
  for (let field in errors)
    if (Object.prototype.hasOwnProperty.call(field, errors))
      $form.find(`#${app}-${field}-messages`)
        .empty()
        .append($(errors[field].map(error => `<li>${error}</li>`).join('')))

}
