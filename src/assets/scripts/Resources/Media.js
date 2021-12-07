import { openOverlay } from "../overlay";

export default class MediaResource {
  constructor($container, options){
    this.localItems = []
    this.localLoading = false

    // props
    this.prefix = 'media'
    this.listingURL = ''
    this.createUrl = ''
    this.deleteURL = ''
    this.media = []
    this.csrf = $('meta[name="csrf-token"]').prop('content')
    this.$container = $container
    this.mediaListingUrl = ''
    this.$itemsList = null
    this.$form = null
    this.$deleteDialog = null

    for (let item in options)
      if (Object.prototype.hasOwnProperty.call(options, item))
        this[item] = options[item]

    this.$container.append(this.containerTemplate())
    this.$itemsList = $(`#${this.prefix}-listing`)
    this.$form = $(`#${this.prefix}-form`)
    this.$deleteDialog = $(`#${this.prefix}-delete-dialog`)
    
    // let self = this

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


  loadingListener(v) {
    if (v) {
      this.$itemsList.empty()
      this.$itemsList.text('Loading...')
    }
  }

  itemsListener(v) {
    this.$itemsList.empty()
    this.$itemsList.append(this.listingTemplate())
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
    console.log(self);
  }

  containerTemplate(data) {
    return $(`
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
              <h2 class="title-h2">Media Library</h2>
              <a class="btn btn--primary btn--primary btn--rounded" href="#">Add</a>
            </div>
          </div>
          <div class="col-md-9 col-sm-12">
            <ul id="${this.prefix}-listing">${this.listingTemplate()}</ul>
          </div class="col-md-3">

          <div>
          </div>
        </div>
      </div>
    `)
  }
  listingTemplate() {
    // print(this.items)
    if (this.items.length) {
      return this.items.map(item => this.itemTemplate(item)).join('')
    }
    return this.emptyTemplate()
    
  }

  itemTemplate(item) {
    return `<div>${item}</div>`
  }

  emptyTemplate() {
    return `
      <div class="status">
        <span class="material-icons status__img">widgets</span>
        <h4 class="title-h4">nothing here</h4>
      </div>
    `
  }

  build() {
    this.fetchItems()
  }
  
}
// console.log(this.items);
console.log('this is from media class');

$('.media-library').each(function(){
  if($(this).length > 0) {
    new MediaResource($(this), {
      listingURL: $(this).data('listing-url')
    })
  }
})

// const media = $('#media-list')
//   if(media.length > 0) {
//     new MediaResource(media, {
//       listingURL: media.data('listing-url'),
//       // createURL: media.data('')
//     })
//   }