import BaseResource from "./BaseResource";
import {initializeRateDisplay, initializeRateInput} from "../rating";

export default class ReviewResource extends BaseResource {

  constructor($container, options) {
    options['prefix'] = 'reviews'
    super($container, options)
    this.fetchItems()
    $(document).ready(function () {
      $(".rate-input").starRating({
        initialRating: 0,
        starSize: 25,
        totalStars: 5,
        starShape: '',
        emptyColor: 'lightgray',
        hoverColor: '#f2b01e',
      });
      $(".rate-display").each(function () {
        let initial = $(this).data('rate')
        $(this).starRating({
          readOnly: true,
          initialRating: initial,
          starSize: 20,
          totalStars: 5,
          starShape: '',
          emptyColor: 'lightgray',
          hoverColor: '#f2b01e',
        });
      })
      if($(".rate-input").length)
        $('.rate-input-form').val($(".rate-input").starRating('getRating'))
    })
  }

  itemsListener(v, flag = false) {
    if (!flag) {
      this.$itemsList.empty()
    }
    this.$itemsList.append(this.listingTemplate())
    initializeRateDisplay()
  }

  onFormSubmit() {
    initializeRateInput()
  }

  itemTemplate(item) {
    return `<div id="${this.prefix}-${item.id}" class="card card--side-col card--transparent" data-data='${JSON.stringify(item)}'>
   <div class="card__side-col">
      <img class="image image--rounded image--profile" src="${item.author.image}" alt="">
   </div>
   <div class="card__content">
      <div class="card__header">
         <div class="card__header-multiline">
            <a class="primary bold" href="#">
            ${item.author.name}
            <i class="fa fa-check-circle ml-1"></i>
            </a>
            <time class="subtitle-2 gray">${item.created_at}</time>
            <div class="rate-display" data-rate="${item.rate}"></div>
         </div>
         ${item.actions.length ? `<div class="d-flex card__tools">
            <div class="dropdown dropdown__activator">
               <button class="btn btn--info btn--icon btn--text dropdown--btn ">
               <i class="fas fa-ellipsis-h"></i>
               </button>
               <div class="dropdown__content">
                  <div class="list">
                     ${item.actions.length >= 1 ? item.actions.map(action => (this.admin && action.name !== "edit") || !this.admin ?
      `<a class="list-item list-item--one-line ${action.class}" href="${action.link}">
                        <div class="list-item__avatar"><i class="${action.icon}">${action.name}</i></div>
                        <span class="list-item__content">
                        </span>
                     </a>` : ``).join(" ") : ''}
                  </div>
               </div>
            </div>
         </div>
` : ``}
      </div>
      <p class="text-2">${item.review}</p>
   </div>
</div> `
  }

  formTemplate(item = {}, action = '', reset = false) {
    return `<form action="${action}" method="post">
                 <div class="field-wrapper">
                    <label class="field-wrapper__label">${this.user.username}</label>
                    <div class="field-wrapper__content">
                      <input class="field"
                      type="text"
                      placeholder="Insert your review."
                      name="review"
                      value="${item.review ? item.review : ''}"
                      >
                    </div>
                 </div>
                 <div class="field-wrapper">
                    <div class="field-wrapper__content">
                         <div class="rate-input"></div>
                          <input type="hidden"
                          value="${item.rate ? item.rate : '0.0'}"
                          name="rate"
                          class="rate-input-form">
                    </div>
                 </div>
                 <div class="ml-auto d-inline-block">
                 ${reset ? `<button class="btn btn--primary btn--text" type="reset">Cancel</button>` : ``}
                 <button class="btn btn--primary btn--rounded">Save</button>
                </div>
              </form>
`
  }

  containerTemplate(data) {
    if (!this.admin) {
      return $(`<div class="card card--side-col">
        ${this.deleteDialog()}
          <div class="card__side-col">
            <img class="image image--profile image--rounded" src="${this.user.image}" alt="">
          </div>
          <div class="card__content" >
          <div id="${this.prefix}-form">
            ${this.formTemplate({}, this.createURL)}
          </div>
          <ul class="card__content" id="${this.prefix}-listing">${this.listingTemplate()}</ul>
           ${this.listingURL ? `<a class="gray bold text-center" id="reviews-loader">See More Reviews</a>` : ``}
          </div>
        </div>
        `)
    } else {
      return $(`<div class="card">
                ${this.deleteDialog()}
              <div class="card">
                <div class="card__content">

                  <ul id="${this.prefix}-listing">${this.listingTemplate()}</ul>
                  ${this.listingURL !== "null" ? `<a class="gray bold text-center" id="reviews-loader">See More Reviews</a>` : ``}
                </div>
              </div>
        </div>`)
    }
  }

  fetchItems(data = {}) {
    this.loading = false
    let self = this
    $.ajax({
      url: this.listingURL,
      type: 'get',
      data,
      headers: {'X-CSRFToken': self.csrf},
      success: function (data) {
        if (data.next) {
          self.listingURL = data.next
          $('#reviews-loader').fadeIn()
        } else {
          $('#reviews-loader').fadeOut()
        }
        self.items = data.results
        self.loading = false
      },
      error: function (xhr) {
        console.error(xhr)
      }
    })
  }

  submitForm($form) {
    let url = $form.attr('action'),
      data = $form.serialize(),
      self = this
    $.ajax({
      type: 'POST',
      url,
      data,
      headers: {'X-CSRFToken': self.csrf},
      success: (v) => {
        this.$form.empty()
        this.$form.append($(this.formTemplate({}, this.createURL)))
        this.onFormSubmit()
        this.itemsListener({}, true)
      },
      error: (xhr, status, error) => {
        if (xhr.status === 422)
          this.mapErrors(xhr.responseJSON)
      }
    });
  }

  confirmDelete() {
    let self = this
    let selector = "#" + self.prefix + "-" + self.deleteURL.charAt(self.deleteURL.length - 2);
    console.log(selector)
    $(selector).fadeOut("slow").then(()=>{
      $.ajax({
        url: self.deleteURL,
        type: "DELETE",
        headers: {'X-CSRFToken': self.csrf},
        success: function () {
          self.fetchItems()
          self.deleteURL = ''
        },
        error: function (xhr) {
          console.log("cannot delete this item")
        }
      })
    })

  }

}
