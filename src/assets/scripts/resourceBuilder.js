const mapErrors = (app, $form, errors) => {
  for (let field in errors)
    if (Object.prototype.hasOwnProperty.call(field, errors))
      $form.find(`#${app}-${field}-messages`)
        .empty()
        .append($(errors[field].map(error => `<li>${error}</li>`).join('')))
}

import CategoryResource from "./Resources/CategoryResource";

const categories = $('#categories-list')
if (categories.length > 0) {
  new CategoryResource(categories, {
    listingURL: categories.data('listing-url'),
    createURL: categories.data('create-url'),
  })
}


/*


class ResourceBuilder {
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
        self.deleteItem(this)
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
      },
      error: error => {
        if (error.status === 422)
          mapErrors(this.prefix, $form, error.message.errors)
      }
    });

  }

  build() {
    this.fetchItems()
  }
}

class CategoryResourceBuilder extends ResourceBuilder {

}


const recommendations = $('#recommendations-list')
if (recommendations.length > 0) {
  let recommendationResource = new ResourceBuilder(recommendations, {
    listingURL: recommendations.data('listing-url'),
    createURL: recommendations.data('create-url'),
    prefix: "recommendations",
    itemTemplate(item) {
      return ` <div class="card" data-data='${JSON.stringify(item)}'>
      <div class="card__header" >
        <h4 class='title-5 my-0'>${item.name}</h4>
        <div class="d-flex card__tools">
          <div class="dropdown dropdown__activator">
            <button class="btn btn--info btn--icon btn--text dropdown--btn ">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <div class="dropdown__content">
              <div class="list">
                ${item.actions.length > 1 ? item.actions.map(action => `<a class="list-item list-item--one-line ${action.class}" href="${action.link}">
                  <div class="list-item__avatar"><i class="${action.icon}">${action.name}</i></div>
                  <span class="list-item__content">
                  </span>
                </a>`) : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card__content">
        <p>${item.description}</p>
      </div>
    </div>`
    },
    formTemplate(item = {}, action = '') {
      return `<form action="${action}" method="post">
      <div class="field-wrapper">
        <label class="field-wrapper__label" for="recommendations-name">Name <abbr>*</abbr></label>
        <div class="field-wrapper__content">
          <input
             class="field"
             type="text"
             placeholder="Recommendations"
             name="name"
             id="recommendations-name"
             required
             value="${item.name ? item.name : ''}">
        </div>
        <ul id="recommendations-name-messages" class="field-wrapper__messages"></ul>
      </div>
      <div class="field-wrapper">
        <label class="field-wrapper__label" for="recommendations-description">Description <abbr>*</abbr></label>
        <div class="field-wrapper__content">
          <textarea
            required
            name="description"
            id="recommendations-description"
            placeholder="Recommendation Description">${item.description ? item.description : ''}</textarea>
        </div>
        <ul id="recommendations-description-messages" class="field-wrapper__messages"></ul>
      </div>
      <div class="ml-auto d-inline-block">
        <button class="btn btn--primary btn--text" type="reset">Cancel</button>
        <button class="btn btn--primary" type="submit">submit</button>
      </div>
    </form>`
    }
  })
  recommendationResource.build()
}

const classifications = $('#classifications-list')
if (classifications.length > 0) {
  let classificationsResource = new ResourceBuilder(classifications, {
    listingURL: classifications.data('listing-url'),
    createURL: classifications.data('create-url'),
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
                    <div class="list">
                ${item.actions.length > 1 ? item.actions.map(action => `<a class="list-item list-item--one-line ${action.class}" href="${action.link}">
                  <div class="list-item__avatar"><i class="${action.icon}">${action.name}</i></div>
                </a>`) : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card__content">
        <p>${item.description}</p>
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
             placeholder="Classification"
             name="name"
             id="classifications-name"
             required
             value="${item.name ? item.name : ''}">
        </div>
        <ul class="field-wrapper__messages"></ul>
      </div>
      <div class="field-wrapper">
        <label class="field-wrapper__label" for="classifications-description">Score <abbr>*</abbr></label>
        <div class="field-wrapper__content">
          <input
            required
            type="number"
            class="field"
            name="score"
            id="classifications-description"
            placeholder="Classification Score"
             value="${item.score ? item.score : 0}">
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
  classificationsResource.build()
}


const categories = $('#categories-list')
if (categories.length > 0) {
  /!*let categoriesResource = new ResourceBuilder(categories, {
    listingURL: categories.data('listing-url'),
    createURL: categories.data('create-url'),
    prefix: "categories",
    withPagination: false,

    ,

    subBuild() {

    }
  })*!/
  new CategoryResourceBuilder(categories, {
    listingURL: categories.data('listing-url'),
    createURL: categories.data('create-url'),
  })

}


*/
