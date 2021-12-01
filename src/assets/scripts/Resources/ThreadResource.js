import BaseResource from "./BaseResource";

export default class ThreadResource extends BaseResource {
  constructor($container, options) {
    options['prefix'] = 'threads'
    super($container, options);
    this.fetchItems();
  }

  // single item template
  itemTemplate(item) {
    return `
  <div class="card card--side-col">
                <img class="image image--profile" src="../../assets/images/hd_dp.jpg" alt="">
                <div class="card__content replacable">
                    <h4 class="title-h4 my-0"><a href="single-thread.html">${item.title}</a></h4>
                    <p class="body-1">${item.content}</p>
                    <p class="body-2">${item.category}</p>
                            <div class="d-flex card__tools">
          <div class="dropdown dropdown__activator replacer" data-target="#${this.prefix}-form">
            <button class="btn btn--info btn--icon btn--text dropdown--btn">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <div class="dropdown__content">
              <div class="list">
                ${item.actions ? item.actions.map(action => `<a class="list-item list-item--one-line ${action.class}" href="${action.link}">
                  <div class="list-item__icon"><i class="${action.icon}"></i></div>
                  <span class="list-item__content">
                    ${action.name}
                  </span>
                </a>`).join("") : ''}
              </div>
            </div>
          </div>
        </div>

        ${item.tags.length >= 1 ? item.tags.map(tag => `
                  <a class="btn btn--primary btn--text btn--hover-line" href="#">${tag}</a>
        `).join(" ") : ''}
                </div>
              </div>`
  }

  // form template
  formTemplate(item = {}, action = '', reset = true) {
    return `
          <form action="${action}" method="post">        
                 <div class="field-wrapper">
                    <label class="field-wrapper__label">Title</label>
                    <div class="field-wrapper__content">
                      <input class="field"
                      type="text"
                      placeholder="Insert your thread title"
                      name="title"
                      value="${item.title ? item.title : ``}"
                      >
                    </div>
                 </div>
                 <div class="field-wrapper">
                        <label class="field-wrapper__label">content</label>
                        <div class="field-wrapper__content">
                        <textarea class="field" id="id_thread_content" rows="5" name="content" placeholder="Insert your thread content">${item.content? item.content : ``}</textarea>
                        </div>
                  </div>
                 <div class="field-wrapper">
                  <label class="field-wrapper__label">Select Tag:</label>
                  <div class="field-wrapper__content">
                  <select class="field select2" multiple>
                  ${this.tags.length ? this.tags.map(option =>`<option value=${option.id}>${option.name}</option>`) : ``}
                  </select>
                  </div>
                  </div>

                  <div class="field-wrapper">
                  <label class="field-wrapper__label">Select Category:</label>
                  <div class="field-wrapper__content">
                  <select class="field">
                  <option value="">----</option>
                  ${this.categories.length ? this.categories.map(option =>`<option value=${option.id}>${option.name}</option>`) : ``}
                  </select>
                  </div>
                  </div>
                 <div class="ml-auto d-inline-block">
                 ${reset ? `<button class="btn btn--primary btn--text no-replacer" type="reset">Cancel</button>` : ``}
                 <button class="btn btn--primary btn--rounded" type="submit">Add New Answer</button>
                </div>
              </form>
    `
  }

  // container
  containerTemplate(data) {
    return `
  <div class="row justify-content-center">
    <div class="col-lg-8 col-sm-12"> 
    <section class="section-header"><h3 class="title-h3">Threads list</h3></section>
    </div>
    <div class="col-lg-8 col-sm-12" >
    <div class="card" id="${this.prefix}-form">
    <img class="image image--profile" src="../../assets/images/hd_dp.jpg" alt=""> 
    <span>${this.user.username}</span>
    ${this.formTemplate({}, this.createURL)}
  </div>      
    </div>
    <div class="col-lg-8 col-sm-12">
           <ul id="${this.prefix}-listing">${this.listingTemplate()}</ul>
           ${this.listingURL !== "null" ? `<a class="gray bold text-center primary" id="reviews-loader">See More Threads</a>` : ``}
    </div>
    </div>
    `
  }

}