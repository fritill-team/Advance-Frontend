
let gettext
if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key
  
const blogCard = (item) => `
<div class="course-card course-card--grid-view">
  <a href="${item.url}" class="course-card__preview youtube-activator">
    <img src="${item.thumb}" alt="" class="course-card__preview-cover">
    <div class="course-card__preview-overlay"></div>
  </a>
    
  <div class="course-card__content">
    <img title="${item.author_name}" src="${item.author}" class="image image--rounded image--xs-small-profile course-card__author">
    <div>
      <span class="overline gray">${gettext("published at :")}${item.publish_at}</span>
      <a class="title-link text-2 semi-bold" href="${item.url}" lang="${item.language}">${gettext(item.title)}</a>
    </div>
    <p class="title-link course-card__description body-2 gray" lang="${item.language}" >${gettext(item.short_description) ? gettext(item.short_description) : ""}</p>
    <div class="course-card__meta">
      <p class="body-2 gray bold" lang="${item.language}">${gettext(item.category) ? gettext(item.category) : ""}</p>
    </div>
    <p class="overline gray">${gettext("status : ")}${gettext(item.status)}</p>

  </div>
  </div>
    `;

$(".blog-card-container").each(function (i, item) {
  item = $(item);
  let data = item.data("data");
  item.html($(blogCard(data)));
});
$(function(){
  $('.course-card__author').each(function(){
    $(this).tooltipster({
      animation: 'fade',
      delay: 0,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      offsetX: '100px',
      content: $('<div class="card"><p class="body-2">This text is in bold case !</p></div>')
    });
  })
})