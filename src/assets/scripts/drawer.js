const itemTemplate = (item) => {
  return `<a href='${item.has_children ? "javascript:void(0)" : item.url}'
             class='list-item list-item--one-line${
               item.is_active ? " list-item--active" : ""
             }${item.has_children ? " list-item--parent" : ""}'>
    <div class='list-item__icon'><span class="material-icons">${item.icon}</span></div>
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

const drawerList = (items) => items.map((item) => itemTemplate(item)).join("");

$(".list__sidebar").each(function (i, item) {
  let listItem = $(item),
    data = listItem.data("link");
  listItem.html($(drawerList(data)));
});

$(document)
  .on("click", ".toggle-drawer", function () {
    let target = $(this).data("target"),
      drawer = $(target);
    $(".toggle_animate--icon").toggleClass("toggle-menu--active");
    if (drawer.hasClass("drawer--open")) drawer.removeClass("drawer--open");
    else drawer.addClass("drawer--open");
  })
  .on("click", ".list__sidebar .list-item--parent", function () {
    let drawer = $(this).closest(".drawer"),
      group = $(this).next(".list-item-group");

    if (!drawer.hasClass("drawer--open")) drawer.addClass("drawer--open");

    group.css("display", group.css("display") === "block" ? "none" : "block");
  });
