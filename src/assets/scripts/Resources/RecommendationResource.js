import BaseResource from "./BaseResource";

let gettext
if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key
export default class RecommendationResource extends BaseResource {
  constructor($container, options) {
    options['prefix'] = 'recommendations'
    super($container, options)
    this.fetchItems()
  }

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
                  <div class="list-item__icon"><i class="${action.icon}"></i></div>
                  <span class="list-item__content">
                    ${action.name}
                  </span>
                </a>`).join("") : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card__content">
        <p>${item.description}</p>
      </div>
    </div>`
  }

  formTemplate(item = {}, action = '') {
    return `<form action="${action}" method="post">
      <div class="field-wrapper">
        <label class="field-wrapper__label" for="recommendations-name">${gettext("Name")} <abbr>*</abbr></label>
        <div class="field-wrapper__content">
          <input
             class="field"
             type="text"
             placeholder="${gettext("Recommendations")}"
             name="name"
             id="recommendations-name"
             required
             value="${item.name ? item.name : ''}">
        </div>
        <ul id="recommendations-name-messages" class="field-wrapper__messages"></ul>
      </div>
      <div class="field-wrapper">
        <label class="field-wrapper__label" for="recommendations-description">${gettext("Description")} <abbr>*</abbr></label>
        <div class="field-wrapper__content">
          <textarea
            class="field"
            required
            name="description"
            id="recommendations-description"
            placeholder="${gettext("Recommendation Description")}">${item.description ? item.description : ''}</textarea>
        </div>
        <ul id="recommendations-description-messages" class="field-wrapper__messages"></ul>
      </div>
      <div class="ml-auto d-inline-block">
        <button class="btn btn--primary btn--text" type="reset">${gettext("Cancel")}</button>
        <button class="btn btn--primary" type="submit">${gettext("Submit")}</button>
      </div>
    </form>`
  }
}
