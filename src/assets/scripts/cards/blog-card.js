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
    <img title="${item.author.username}" src="${item.author.image}" class="image image--rounded image--xs-small-profile course-card__author">
    <div>
      <span class="overline gray">${gettext("published at :")}${item.published_at}</span>
      <a class=" text-2 semi-bold" href="${item.url}" lang="${item.language}">${gettext(item.title)}</a>
    </div>
    <p class=" course-card__description body-2 gray" lang="${item.language}" >${gettext(item.short_description) ? gettext(item.short_description) : ""}</p>
    <div class="course-card__meta">
      <p class="body-2 gray bold" lang="${item.language}">${gettext(item.category) ? gettext(item.category) : ""}</p>
    </div>
    <p class="overline gray">${gettext("status : ")}${gettext(item.privacy_status)}</p>

  </div>
  </div>
    `;
let blogCards = $(".blog-card-container")
if (blogCards.length)
  blogCards.each(function (i, item) {
    item = $(item);
    let data = item.data("data");
    if (data)
      item.html($(blogCard(data)));
  });

$(function () {
  $('.course-card__author').each(function () {
    // $(this).tooltipster({
    //   animation: 'fade',
    //   delay: 0,
    //   theme: 'tooltipster-default',
    //   touchDevices: true,
    //   trigger: 'hover',
    //   offsetX: '100px',
    //   content: $('<div class="user-account"> <img class="image image--profile image--small-profile" src="../../assets/images/hd_dp.jpg" alt=""><div class="user-account__content"> <a class="body-2">John Doe</a><p class="body-2">2 hour ago</p></div></div>')
    // });
  })
})
