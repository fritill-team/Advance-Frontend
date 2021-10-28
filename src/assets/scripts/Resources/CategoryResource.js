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
      emptyIcon: 'fa fa-leaf primary',
      expandIcon: 'fa fa-folder primary',
      collapseIcon: 'fa fa-folder-open primary',
      class: 'list-item list-item--two-lines'
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
      + `<a class="btn btn--primary btn--icon btn--text move-down""><i class="fa fa-chevron-down"></i></a>`
      + `<a class="btn btn--primary btn--icon btn--text move-up""><i class="fa fa-chevron-up"></i></a>`
      + item.actions.map(action => `<a class="btn btn--primary btn--icon btn--text ${action.class}" href="${action.link}"><i class="${action.icon}"></i></a>`).join('')
  }
}
