import { openOverlay } from "../overlay";

let gettext
if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key

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
    this.$itemRules = null
    this.$dialog = null
    
    
    this.$container.append(this.containerTemplate())
    this.$itemsList = $("#media-listing")
    this.$itemRules = $("#media-rules")
    this.$dialog = $("#media-dialog")
    this.fetchItems()
    // $(function(){
    //   $('.add-media').each(function(){
    //     $(this).on('click', function(){console.log('clicked')})
    //   })
    // })
    let self = this
    $(document).on('click', '.add-media', function(e){
      e.preventDefault();
      openOverlay()
      self.$dialog.addClass('dialog--show')
    })
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
    // this.$itemsList.empty()
    this.$itemsList.append(this.listingTemplate())
    // this.$itemRules.append(this.rulesTemplate())
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

  containerTemplate(data) {
    return $(`
    ${this.dialog()}
      <div class="container">
        <div class="row" id="media-listing">
          ${this.listingTemplate()}
        </div>
      </div>
    `)
  }
  listingTemplate() {
    let mediaItems = this.items
    console.log(mediaItems);
    
    return mediaItems.map(item => {
      
      let itemRules = item.rules
      let mediaItem = item.items
      
      // loop on items
      return [this.itemTemplate(mediaItem, itemRules), this.rulesTemplate(itemRules)].join('')
        
    })
    
  }
  
  itemTemplate(mediaItem, itemRules) {
    return `
      <div class="col-9">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
              <h2 class="title-h2">Media ${itemRules.collection_name}</h2>
              <a class="btn btn--primary btn--primary btn--rounded add-media" href="#">Add</a>
            </div>
          </div>
        ${mediaItem.map(item => {
          return `
          ${item.collection_name === 'images'? `
            <div class="col-4">
              <div class="media-card"><div class="media-card__image"><a class="venobox vbox-item" data-autoplay="true" data-vbtype="img" data-gall="myGallery" href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"><img src="../../assets/images/get_img.jpg" alt=""></a><div class="media-card__action"><div class="dropdown dropdown__activator"><button class="btn btn--primary btn--text btn--default icon--hover btn--lg btn--ripple"><i class="fas fa-ellipsis-v"></i></button><div class="dropdown__content dropdown-content-width"><div class="list condensed"><a class="list-item list-item--one-line list-item--open " href="#"><div class="list-item__avatar"><i class="far fa-copy"></i></div><div class="list-item__content"><span class="body-2 bold">Edit</span></div><div class="list-item__action"></div></a><a class="list-item list-item--one-line list-item--open " href="#"><div class="list-item__avatar"><i class="far fa-copy"></i></div><div class="list-item__content"><span class="body-2 bold">Delete</span></div><div class="list-item__action"></div></a></div></div></div></div></div><div class="media-card__description"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div>
            </div> 
            `: item.collection_name === "cover" ? `
            <div class="col-12">
              <div class="media-card media-card--cover"><div class="media-card__image"><a class="venobox vbox-item" data-autoplay="true" data-vbtype="iframe" data-gall="myGallery" href="https://www.youtube.com/embed/3ULUohpQqMU"><img src="../../assets/images/get_img.jpg" alt=""></a><div class="media-card__action"><div class="dropdown dropdown__activator"><button class="btn btn--primary btn--text btn--default icon--hover btn--lg btn--ripple"><i class="fas fa-ellipsis-v"></i></button><div class="dropdown__content dropdown-content-width"><div class="list condensed"><a class="list-item list-item--one-line list-item--open " href="#"><div class="list-item__avatar"><i class="far fa-copy"></i></div><div class="list-item__content"><span class="body-2 bold">Edit</span></div><div class="list-item__action"></div></a><a class="list-item list-item--one-line list-item--open " href="#"><div class="list-item__avatar"><i class="far fa-copy"></i></div><div class="list-item__content"><span class="body-2 bold">Delete</span></div><div class="list-item__action"></div></a></div></div></div></div></div><div class="media-card__description"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div>
            </div>
            `: `
              <div class="col-6">
                <div class="media-card media-card--file tooltip" title="This is my div's tooltip message!"><span class="material-icons media-card__file-icon">description</span><div class="media-card__content"> <h4 class="text-h4 media-card__file-name">file Item</h4><div class="media-card__details"><div class="media-card__file-data"> <span class="body-1 gray"> Size :</span><span class="body-2 gray">45m</span></div><div class="media-card__file-data"> <span class="body-1 gray"> Type :</span><span class="body-2 gray">PDF</span></div></div></div><div class="media-card__action"><div class="dropdown dropdown__activator"><button class="btn btn--primary btn--text btn--default icon--hover btn--lg btn--ripple"><i class="fas fa-ellipsis-v"></i></button><div class="dropdown__content dropdown-content-width"><div class="list condensed"><a class="list-item list-item--one-line list-item--open " href="#"><div class="list-item__avatar"><i class="far fa-copy"></i></div><div class="list-item__content"><span class="body-2 bold">Edit</span></div><div class="list-item__action"></div></a><a class="list-item list-item--one-line list-item--open " href="#"><div class="list-item__avatar"><i class="far fa-copy"></i></div><div class="list-item__content"><span class="body-2 bold">Delete</span></div><div class="list-item__action"></div></a></div></div></div></div></div>
              </div>
            `}
          `
        }).join('')}
        </div>
      </div>
    `
  }
  rulesTemplate(ruleItem){
    return `<div class="col-3">
      <div class="card card--data">
        <div class="card__header"><h5 class="title-h5">${gettext("Rules")}</h5></div>
        <div class="card__content">
          <div class="description">
            <span class="description__name">${gettext("max")}<strong>:</strong></span>
            <p class="description__details">${ruleItem.max_size}</p>
          </div>
          <div class="description">
            <span class="description__name">${gettext("display")}<strong>:</strong></span>
            <p class="description__details">${ruleItem.display_name}</p>
          </div>
          <div class="description">
            <span class="description__name">${gettext("description")}<strong>:</strong></span>
            <p class="description__details">${ruleItem.description}</p>
          </div>
          <div class="description">
            <span class="description__name">${gettext("file")}<strong>:</strong></span>
            <p class="description__details">${ruleItem.single_file}</p>
          </div>
        </div>
      </div>
    </div>
    `
  }
  

  emptyTemplate() {
    return `
      <div class="status">
        <span class="material-icons status__img">widgets</span>
        <h4 class="title-h4">nothing here</h4>
      </div>
    `
  }

  dialog(){
    return `
      <div class="dialog show--dialog" id="media-dialog">
        <div class="card">
          <input type="file"/>
        </div>
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