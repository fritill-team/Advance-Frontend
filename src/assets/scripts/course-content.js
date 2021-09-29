const contentTemplate = item => `
  <a href="${item.url}" class="item__image">
    <img src="${item.thumb}" alt=""/>
  </a>
  <div class="item__content">
    <div class="item__content-header">
      <h5 class="title-5"><a href="${item.url}">${item.title}</a></h5>
      ${item.type === 'video' ? `<span class="title-5">${item.duration}</span>` : item.type === 'exam' ? `<span class="title-5">${item.progress}</span>` : ''}
    </div>
    <div class="item__content-description body-2">
      ${item.description}
    </div>
    ${item.type === 'video' ? `<div class="rating__progress">
    <div class="progress--progress-bar" style= "width: ${item.progress}"></div>
    </div>` : ''}
  </div>`

const chapterTemplate = item =>  `
  <h3 class="content-list__title">${item.title}</h3>
  <div class="content-list__details">
    <span class="text-3">${item.progress}</span>
    <span class="text-3">${item.duration}</span>
  </div>`

$(".content-list__item").each(function (i, item) {
  item = $(item)
  let data = item.data("data")
  item.html($(contentTemplate(data)))
})

$(".content-list__header").each(function (i, item) {
  item = $(item)
  let data = item.data("data")
  item.html($(chapterTemplate(data)))
})
