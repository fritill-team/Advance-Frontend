import { openOverlay } from "../overlay";

export default class MediaResource {
  constructor($container){

    // props
    // this.prefix = 'media'
    this.listingURL = 'http://localhost:3000/api/v1/utils/media'  
    this.appLabel = $container.data('app_label')
    this.model = $container.data('model')
    this.object_id = $container.data('object_id')
    this.localItems = []
    this.csrf = $('meta[name="csrf-token"]').prop('content')
    this.$container = $container
    this.$itemsList = null

    
    
    this.$container.append(this.containerTemplate())
    this.$itemsList = $("#media-listing")
    
    this.fetchItems()
    // console.log($itemsList);
  }

  get items(){
    return this.localItems
  }  
  
  set items(value){
    this.localItems = value
    this.itemsListener(value)
  }

  itemsListener(v){
    // console.log(this.listingTemplate());
    this.$itemsList.empty()
    this.$container.append(this.listingTemplate())
  }
  
  fetchItems(data = {}) {
    this.loading = true
    let self = this
    $.ajax({
      url: this.listingURL+this.appLabel+this.model+this.object_id,
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
    // console.log(url);
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
            <div id="media-listing">${this.listingTemplate()}</div>
          </div>
          <div class="col-md-3">

          </div>
        </div>
      </div>
    `)
  }
  listingTemplate() {
    // print(this.items)
    // return this.media;
    // if (this.items.length) {
    // console.log(this.items);
    // return this.items.map(item => {
    //   for(mediaItem in item){
    //     console.log(mediaItem);
    //   }
    // })
    // let mediaItems = this.items
    // // console.log(mediaItems);
    // mediaItems.map(mediaItem => {
    //   var itemsList = mediaItem.items
    //   var itemRules = mediaItem.rules
    //   return itemsList.map(item => this.itemTemplate(item)).join('');
    // })
    return this.items.map(mediaItem => {
      this.itemTemplate(JSON.stringify(mediaItem))
      console.log(JSON.stringify(mediaItem))
    })
    // console.log(mediaItems);
    // return mediaItems.items.map(item => this.itemTemplate(item)).join('');

    // console.log("===========");
    // console.log(itemRules);
    // for(const item in mediaItem){
      // console.log(mediaItem[item]);

      // return this.itemTemplate(mediaItem[])
      // console.log(mediaItem.hasOwnProperty(item.items));
    // }
    // for(let item in mediaItems){
    //   console.log(`${item}: ${mediaItems[item]}`)
    // }
    // return mediaItems.map(item => console.log(item)).join('')
    // return mediaItems.map(item => this.itemTemplate(item)).join('')
    // mediaItems.map(mediaItem => console.log(mediaItem.items));
    // for(item in mediaItem){
    //   console.log(item);
    // }
    // return mediaItems.map(mediaItem => mediaItem.map(item => console.log(item)))
    // this.itemTemplate(mediaItem)).join('')
    // return this.items.map(item => this.itemTemplate(item)).join('')
    // return this.items.map(item => console.log(item.rules+"this is items"+item.items )).join('')
    // }
    // return this.items.map(item => this.itemTemplate(item.items)).join('')
    // if (this.items) {
    // }
    // return this.emptyTemplate()
    
  }
  rulesTemplate(item){
    return `<div>${item}</div>`

  }
  itemTemplate(item) {
    return `<div>${item.caption}</div>`
  }

  emptyTemplate() {
    return `
      <div class="status">
        <span class="material-icons status__img">widgets</span>
        <h4 class="title-h4">nothing here</h4>
      </div>
    `
  }

  
  
}
// console.log(this.items);
console.log('this is from media class');
// console.log(listingURL);
$('.media-library').each(function(){
  if($(this).length > 0) {
    new MediaResource($(this))
    // listingURL: $(this).data('app_label')+$(this).data('model')+$(this).data('object_id')
  }
  // console.log(listingURL);
})

// const media = $('#media-list')
//   if(media.length > 0) {
//     new MediaResource(media, {
//       listingURL: media.data('listing-url'),
//       // createURL: media.data('')
//     })
//   }