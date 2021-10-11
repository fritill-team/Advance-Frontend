const recommendationTemplate = item => `
  
    <div class="recommendation-details card" data-data='${JSON.stringify(item)}'>
      <div class="card__header" >
        <h5 class='title-5 my-0'>${item.title}</h4>
        <div class="d-flex card__tools" >
          ${item.actions.map(action => `
            <a href="${action.link}" class="btn btn--text btn--icon ${action.class}">
              <i class="${action.icon}"></i>
            </a>
          `).join('')}
        </div>
      </div>
      <div class="card__content">
        <p>${item.description}</p>
      </div>
    </div>
  `
const recommendationForm = () => `
<form class='card recommendation-form' data-data='data'>
  <div class="field-wrapper field-wrapper--sm">
    <label class="field-wrapper__label">Course Title*</label>
    <div class="field-wrapper__content">
      <input class="field" type="text" placeholder="Insert your course title." name="title" data-purpose="edit-course-title" maxlength="" id="title" value="">
    </div>
    <ul class="field-wrapper__messages">
      <li>Please provide a valid city.</li>
    </ul>
  </div>
  <div class="field-wrapper">
    <label class="field-wrapper__label">Course Radio Button*</label>
    <div class="field-wrapper__content">
      <textarea class="textarea field" id="description" rows="5" name="description" placeholder="Insert your course description" ></textarea>
    </div>
    <ul class="field-wrapper__messages">
      <li>Please provide a valid city.</li>
    </ul>
  </div>
</form>

`

$('.recommendations-list').each((i, container) => {
  let url = $(container).data('link'),
    row = $("<div class='row'>"),
    list = $("<div class='col-lg-6'>"),
    form = $("<div class='col-lg-6'>")
  // row.append($(
  // `
    
  // `))
  
  $.get(url)
  .then(res => {
    for (let item of res) {
      // console.log(item.data)
      $(list).append($(recommendationTemplate(item)))
      // console.log(item);
    }
    $(form).append($(recommendationForm()))
    $(row).append(form)
    $(row).append(list)
    $(container).append(row)
  })
  .catch(e => console.log(e))
  console.log($('recommendation-details').data('data'));
})
 