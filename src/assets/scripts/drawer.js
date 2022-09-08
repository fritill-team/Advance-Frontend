import {openOverlay, closeOverlay} from './overlay'

$('.drawer').niceScroll({
  autohidemode: false,
  horizrailenabled: false,
  railalign: localStorage.getItem('gmtDIR') === 'rtl' ? 'left' : 'right',
  rtlmode: localStorage.getItem('gmtDIR') === 'rtl',
  cursorcolor: "#0D9BBD"
})


$(document)
  .on("click", ".toggle-drawer", function () {
    let target = $(this).data("target"),
      drawer = $(target);
    $(".toggle_animate--icon").toggleClass("toggle-menu--active");
    if (drawer.hasClass("drawer--open")) {
      drawer.removeClass("drawer--open");
      closeOverlay()
    } else {
      drawer.addClass("drawer--open");
      openOverlay()
    }
  })
  .on("click", ".list__sidebar .list-item--parent", function () {
    let drawer = $(this).closest(".drawer"),
      group = $(this).next(".list-item-group");

    if (!drawer.hasClass("drawer--open")) drawer.addClass("drawer--open");

    group.css("display", group.css("display") === "block" ? "none" : "block");
  })
  .on('keyup', function (e) {
    let $drawer = $('.drawer')
    if (e.key === "Escape" && $drawer.hasClass("drawer--open")) {
      $drawer .removeClass("drawer--open");
      $(".toggle_animate--icon").toggleClass("toggle-menu--active");
      closeOverlay()
    }
  })
  .on('click', '.overlay', function () {
    $('.drawer').removeClass("drawer--open");
      $(".toggle_animate--icon").toggleClass("toggle-menu--active");
    closeOverlay()
  })


const itemTemplate = (item) => {
  return `<a href='${item.has_children ? "javascript:void(0)" : item.url}'
             class='list-item list-item--one-line${
    item.is_active ? " list-item--active" : ""
  }${item.has_children ? " list-item--parent" : ""}' title="${item.title}">
    <div class='list-item__icon' ><span class="material-icons-outlined" dir="${localStorage.getItem('gmtDIR')}">${item.icon}</span></div>
    <div class='list-item__content'>
      <p class='body-2'>${item.title}</p>
    </div>
    ${
    item.has_children
      ? `<div class='list-item__action'><i class='fas fa-chevron-down'></i></div>`
      : ""
  }
  </a>
  ${
    item.has_children
      ? `<div class='list-item-group'>${item.children
        .map((child) => itemTemplate(child))
        .join("")}</div>`
      : ""
  }`;
};
// const tooltipItem = (item) => {
//   return`
//     <div class="">${item.title}</div>
//   `
// }

const drawerList = (items) => items.map((item) => itemTemplate(item)).join("");
// const tooltipContent = (items) => items.map((item) => tooltipItem(item)).join("")
$(".list__sidebar").each(function (i, item) {
  let listItem = $(item),
    data = listItem.data("link");
  listItem.html($(drawerList(data)));
});


$(function () {
  $(".list__sidebar .list-item").each(function (item) {

    // let listItem = $(item),
    // data = listItem.data("link");
    // listItem.html($(tooltipContent(data)))
    $(this).tooltipster({
      animation: 'fade',
      delay: 0,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      offsetX: '100px',
      position: 'left'
    })
  })
})



