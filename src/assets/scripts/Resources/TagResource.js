import BaseResource from "./BaseResource";
import 'patternfly-bootstrap-treeview'

let gettext
if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key

export default class TagResource extends BaseResource {
  constructor($container, options) {
    options['prefix'] = 'tags'
    super($container, options)
    this.fetchItems()
    let self = this
    $(document)
      .on('click', `.tags-edit`, function (e) {
        e.preventDefault()
        self.$form.empty()
        self.$form.append($(self.formTemplate($(this).data('data'), $(this).attr('href'))))
      })
  }

  containerTemplate(data) {
    return $(`
      ${this.deleteDialog()}
      <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="card" id="tags-form">
            ${this.formTemplate({}, this.createURL)}
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <ul id="${this.prefix}-listing">${this.listingTemplate()}</ul>
          ${this.withPagination ? this.paginationTemplate() : ''}
        </div>
      </div>
    </div>`)
  }

  listingTemplate() {
    // console.log('here')
    // console.log(this.items.length);
    return `<div class="chips-wrapper" id="${this.prefix}-listing">
        ${this.items.map(item => this.itemTemplate(item)).join('')}
      </div>`
    // if(this.items){
    //   return `<div class="card list list--condensed" id="${this.prefix}-listing">
    //   ${this.items.map(item => this.itemTemplate(item)).join('')}
    //   </div>`
    // } else {
    // }
  }

  itemTemplate(item) {
    return ` 
      <div class="chips-wrapper">
        <div class="chip-item">
        <span class="material-icons">tag</span></a>
          <p class="chip-item__content">${item.name}</p>
          ${item.actions.length > 1 ? item.actions.map(action => `
            <a class="chip-item__action ${action.class}" href="${action.link}" data-data='${JSON.stringify(item)}'><span class="material-icons">${action.icon}</span></a>
          `).join('') : ''}
        </div>
      </div>
    `
  }

  formTemplate(item = {}, action = '') {
    return `<form action="${action}" method="post">
      <div class="field-wrapper field-wrapper--full">
        <label class="field-wrapper__label" for="${this.prefix}-name">${gettext("Name")} <abbr>*</abbr></label>
        <div class="field-wrapper__content">
          <input class="field" type="text" placeholder="${gettext("Tag Name")}" name="name" id="${this.prefix}-name"
             required value="${item.name ? item.name : ''}">
        </div>
        <ul class="field-wrapper__messages" id="category-name-messages"></ul>
      </div>
      <div class="ml-auto d-inline-block">
        <button class="btn btn--primary btn--text" type="reset">${gettext("Cancel")}</button>
        <button class="btn btn--primary" type="submit">${gettext("Submit")}</button>
      </div>
    </form>`
  }
}
