import BaseResource from './BaseResource'
import 'patternfly-bootstrap-treeview'

export default class CategoryResource extends BaseResource {
  constructor($container, options) {
    options['prefix'] = 'categories'
    super($container, options)
    this.fetchItems()
  }

  itemsListener(v) {
    $('#categories-listing').treeview({
      data: this.formatItems(v),
      levels: 0,
      selectable: false,
      checkable: false,
      onHoverColor: 'transparent',
      backColor: 'transparent',
      emptyIcon: 'fa fa-leaf primary',
      expandIcon: 'fa fa-folder primary',
      collapseIcon: 'fa fa-folder-open primary',
      tags: [
        'available',
        {text: 'not available', class: 'disabled'}
      ],
    })
  }

  containerTemplate(data) {
    return $(`<div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="card" id="${this.prefix}-form">
            ${this.formTemplate({}, this.createURL)}
          </div>
          <div id="${this.prefix}-listing">
           ${this.listingTemplate()}
          </div>
        </div>
      </div>
    </div>`)
  }

  formatItems(v) {
    return v.map(i => ({
      text: this.getItemName(i),
      nodes: this.formatItems(i.children),
      meta: i
    }))
  }

  getItemName(item) {
    return item.name
      // + `<a class="btn btn--primary btn--icon btn--text move-down""><i class="fa fa-chevron-down"></i></a>`
      // + `<a class="btn btn--primary btn--icon btn--text move-up""><i class="fa fa-chevron-up"></i></a>`
      + item.actions.map(action => `<a class="btn btn--primary btn--icon btn--text ${action.class}" href="${action.link}"><i class="${action.icon}"></i></a>`).join('')
  }

  formTemplate(item = {}, action = '') {
    return `<form action="${action}" method="post">
      <div class="field-wrapper">
        <label class="field-wrapper__label" for="${this.prefix}-name">Name <abbr>*</abbr></label>
        <div class="field-wrapper__content">
          <input
             class="field"
             type="text"
             placeholder="Category Name"
             name="name"
             id="${this.prefix}-name"
             required
             value="${item.name ? item.name : ''}">
        </div>
        <ul class="field-wrapper__messages"></ul>
      </div>
      <div class="ml-auto d-inline-block">
        <button class="btn btn--primary btn--text" type="reset">Cancel</button>
        <button class="btn btn--primary" type="submit">submit</button>
      </div>
    </form>`
  }
}
