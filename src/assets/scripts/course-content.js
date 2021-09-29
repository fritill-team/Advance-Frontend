
const itemTemplate = function (artical) {
  return `
  <div class="content-list-item">
    <div class="content-list-item__image">
      <img src="../../assets/images/artical.png" alt=""/>
    </div>
    <div class="content-list-item__content">
      <div class="content-list-item__content-header"> 
        <h5 class="title-5">${artical.title}</h5>
      </div>
      <p class="content-list-item__content-description body-2 my-0">
        ${artical.desc}
      </p>
    </div>
  </div>
  `
}

$(".artical-item").each(function (i, item) {
  let artical = $(item),
  data = artical.data("item")
  artical.html($(itemTemplate(data)))
})