import BaseResource from "./BaseResource";


export default class CommentResource extends BaseResource {
  constructor($container, options) {
    options['prefix'] = 'comments'
    super($container, options)
    this.fetchItems()
    let self = this
    
  }
  containerTemplate(data) {
    return $(`
      ${this.deleteDialog()}
      <div class="container">
      <div class="row">
        <div class="col-sm-12">
          ${this.formTemplate({}, this.createURL)}
        </div>
        <div class="col-sm-12">
          ${this.listingTemplate()}
          ${this.withPagination ? this.paginationTemplate() : ''}
        </div>
      </div>
    </div>`)
  }
  listingTemplate() {
    return `<div class="comment-container" id="${this.prefix}-listing">
      ${this.items.map(item => this.itemTemplate(item)).join('')}
    </div>`
  }
  itemTemplate(item) {
    return `
    <div class="review-comment__item">
      <div class="item__wrapper d-flex">  
        <div class="item__reviews-user">
          <img class="reviews-user__img" src="${item.author.author_image}" alt="">
          <div class="reviews-user__title">
            <a class="btn btn--text title__name" href="#">${item.author.user_name}</a>
            <span class="title__time">${item.created_at}</span>
          </div>
        </div>
      </div>
      <p class="review-comment__comment">${item.content}</p>
      <div class="item__actions">
        <a class="btn btn--text">
          <i class="${item.actions.class}"></i>Reply
        </a>
      </div>
    </div>
    `
  }
  formTemplate(item = {}, action = '') {
    return `
    <div class="comments__add-comment" id="comments-form">
      <div class="add-comment__group">
        <div class="group__img-wrapper">
          <img class="group__img" src="../../assets/images/hd_dp.jpg" alt="">
        </div>
        <textarea class="group__textarea" placeholder="Add a public comment"></textarea>
      </div>
      <button class="btn btn--primary btn--rounded" type="submit"> Comment</button>
    </div>
    `
  }
}