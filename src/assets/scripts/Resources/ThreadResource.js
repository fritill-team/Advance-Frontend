import BaseResource from "./BaseResource";

export default class ThreadResource extends BaseResource {
  constructor($container, options) {
    options['prefix'] = 'threads'
    super($container, options);
    this.fetchItems();
    this.fetchOptions();
  }

  // single item template
  itemTemplate(item) {
    return `<div class="card card--side-col">
                <img class="image image--profile" src="../../assets/images/hd_dp.jpg" alt="">
                <div class="card__content">
                    <h4 class="title-h4 my-0"><a href="single-thread.html">${item.title}</a></h4>
                    <p class="body-1">${item.content}</p>
                    <p class="body-2">${item.category}</p>
        ${item.tags.length >= 1 ? item.tags.map(tag => `
                  <a class="btn btn--primary btn--text btn--hover-line" href="#">${tag}</a>
        `).join(" ") : ''}
                </div>
              </div>`
  }

  // form tempalate
  formTemplate(item = {}, action = '', reset = false) {
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
                  <label class="field-wrapper__label">Start Select :</label>
                  <div class="field-wrapper__content">
                  <select class="field">
                  <option value="">Select option</option><option value="1">option 1</option><option value="2">option 2</option><option value="3">option 3</option><option value="4">option 4</option><option value="5">option 5</option></select></div><ul class="field-wrapper__messages"><li>Please provide a valid city.</li></ul></div>
                 <div class="ml-auto d-inline-block">
                 ${reset ? `<button class="btn btn--primary btn--text" type="reset">Cancel</button>` : ``}
                 <button class="btn btn--primary btn--rounded">Save</button>
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