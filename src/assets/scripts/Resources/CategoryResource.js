import BaseResource from './BaseResource'
import 'patternfly-bootstrap-treeview'

export default class CategoryResource extends BaseResource {
  constructor($container, options) {
    options['prefix'] = 'categories'
    super($container, options)
    let self = this
    this.fetchItems()
  }

  itemsListener(v) {
    $('#categories-listing').treeview({
      data: this.formatItems(v),
      levels: 0,
      emptyIcon: 'fa fa-leaf',
      expandIcon: 'fa fa-folder',
      collapseIcon: 'fa fa-folder-open',
      class: 'list-item list-item--two-lines'
    })
  }

  containerTemplate(data) {
    return $(`<div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="card" id="recommendations-form">
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
      text: i.name,
      nodes: this.formatItems(i.children),
      meta: i
    }))
  }
}
