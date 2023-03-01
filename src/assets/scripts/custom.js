// === Toggle === //
$(".enable.button").on("click", function () {
  $(this).nextAll(".checkbox").checkbox("enable");
});

/*Floating Code for Iframe Start*/
if (
  jQuery(
    'iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]'
  ).length > 0
) {
  /*Wrap (all code inside div) all vedio code inside div*/
  jQuery(
    'iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]'
  ).wrap("<div class='iframe-parent-class'></div>");
  /*main code of each (particular) vedio*/
  jQuery(
    'iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]'
  ).each(function (index) {
    /*Floating js Start*/
    var windows = jQuery(window);
    var iframeWrap = jQuery(this).parent();
    var iframe = jQuery(this);
    var iframeHeight = iframe.outerHeight();
    var iframeElement = iframe.get(0);
    windows.on("scroll", function () {
      var windowScrollTop = windows.scrollTop();
      var iframeBottom = iframeHeight + iframeWrap.offset().top;
      //alert(iframeBottom);

      if (windowScrollTop > iframeBottom) {
        iframeWrap.height(iframeHeight);
        iframe.addClass("stuck");
        jQuery(".scrolldown").css({
          display: "none"
        });
      } else {
        iframeWrap.height("auto");
        iframe.removeClass("stuck");
      }
    });
    /*Floating js End*/
  });
}

/*Floating Code for Iframe End*/

// expand/collapse all Start

var headers = $("#accordion .course-list__header");

var expandLink = $(".list--expand-all");

// add the accordion functionality
headers.click(function () {
  // close all panels
  contentAreas.slideUp();
  // open the appropriate panel
  $(this).next().slideDown();

  // reset Expand all button
  expandLink.text("Expand all").data("isAllOpen", false);
  // stop page scroll
  return false;
});

// hook up the expand/collapse all
expandLink.click(function () {
  var isAllOpen = !$(this).data("isAllOpen");
  contentAreas[isAllOpen ? "slideDown" : "slideUp"]();

  expandLink
    .text(isAllOpen ? "Collapse All" : "Expand all")
    .data("isAllOpen", isAllOpen);
});

// Payment Method Accordion
$('input[name="paymentmethod"]').on("click", function () {
  var $value = $(this).attr("value");
  $(".return-departure-dts").slideUp();
  $('[data-method="' + $value + '"]').slideDown();
});

$(".toggle-filter").on("click", function () {
  if ($(".filter").hasClass("filter__opened")) {
    $(".filter").removeClass("filter__opened");
    $("body").removeClass("hide");
  } else {
    $(".filter").addClass("filter__opened");
    $("body").addClass("hide");
  }
});

var subnavs = $("#js-menu .sub-menu-item");
var nav = $(".sidebar"),
  wrapper = $(".page-content"),
  sidemenu = $(".sidebar__menu"),
  sidebarIcon = $(".sidebar-with-icon"),
  menuItem = $(".sub-menu-item"),
  menu = $("#js-menu");

$(document).on("click", ".toggle", function () {
  nav.toggleClass("nav--opened vertical--minify");
  wrapper.toggleClass("toggle-content page-content--minify ");
  sidebarIcon.toggleClass("open-side-nav");
  $(".sub-menu-item").each(function (i, item) {
    $(item).removeClass("menu--opened");
  });
});

// remove class
if ($(".sidebar").hasClass("sidebar-with-icon")) {
  $("sub-menu-item").removeClass("menu--opened");
}

// Open Sub Menu

for (var i = 0; i < subnavs.length; i++) {
  if (subnavs[i].classList.contains("sub-menu-item")) {
    subnavs[i].querySelector(".item__link").addEventListener(
      "click",
      function (e) {
        for (var j = 0; j < subnavs.length; j++) {
          if (e.target.offsetParent != subnavs[j])
            subnavs[j].classList.remove("menu--opened");
        }
        e.target.offsetParent.classList.toggle("menu--opened");
      },
      false
    );
  }
}

// select2
$(document).on("click", ".sub-menu-item", function () {
  $(this).toggleClass("menu--opened");
  if ($(this).siblings().hasClass("menu--opened")) {
    $(this).siblings().removeClass("menu--opened");
  } else {
  }
});

// active class in collapsed sidebar

$(".sub-menu-item").click(function () {
  if ($(this).hasClass("menu--opened")) {
    $(".menu--opened .item__link").addClass("active--menu");
  } else {
    $(".sub-menu-item .item__link").removeClass("active--menu");
  }
});
// click icon open sidebar

$(document).on("click", ".sidebar-with-icon .sub-menu-item", function () {
  nav.addClass("nav--opened vertical--minify");
  wrapper.addClass("toggle-content page-content--minify ");
  sidebarIcon.addClass("open-side-nav");
});

// scrolling
// $(function() {
//   $(".card__content").niceScroll({
//     cursorcolor: "red",
//     autohidemode: "scroll",
//     cursorwidth: "20px",
//   });
// });

$(".card__header--collapse").each(function () {
  $(this).on("click", function () {
    $(this).next().toggleClass("active");
    $(this).children(".card__collapse--toggle").toggleClass("active");
  });
});


$(document).on("click", "content__item", function () {
  $(".content__item").toggleClass("nav--opened vertical--minify");
  wrapper.toggleClass("toggle-content page-content--minify ");
  sidebarIcon.toggleClass("open-side-nav");
});

// $(document).on('change', 'input[type="file"]', function (e) {
//   let $this = $(this),
//     $imageList = $this.closest('.image-list')
//
//   console.log($this, $imageList)
//   // let imageList = $('.' + $(this).name + '-image-list')
//   var images = [];
//   for (var i = 0; i < $(this).get(0).files.length; ++i) {
//     // images.push($(this).get(0).files[i].name);
//     var srcArray = URL.createObjectURL(this.files[i]);
//     images.push(srcArray)
//   }
//
//   function image() {
//     return `
//       ${images.map(src => `
//         <img class="image preview" src="${src}">
//       `)}
//     `
//   }
//
//   imageList.append(image())
//   if (images.length === 0) {
//   } else {
//
//   }
//   // images = [];
// })
//venobox
$(document).ready(function () {
  $(".venobox").venobox();
});

// dropdown-menu
$(".more-dropdown__link").each(function () {
  $(this).on("click", function () {
    $(".more-dropdown").removeClass("active");
    $(this).parent().addClass("active");
    event.stopPropagation();
  });
});

$(".content__item").each(function () {
  $(this).on("click", function () {
    $(".more-dropdown").removeClass("active");
  });
});
$(document).on("click", function () {
  $(".more-dropdown").removeClass("active");
});

$(".course-list__item").each(function () {
  $(this).on("click", function () {
    $(this).children("course-list__list-content").css({
      display: "none"
    });
  });
});


$(function () {


  $('.input').each(function () {
    let message = $(this).parent().next().html();
    // $(this).tooltipster({
    //   animation: 'fade',
    //   delay: 0,
    //   theme: 'tooltipster-default',
    //   touchDevices: true,
    //   trigger: 'click',
    //   interactive: true,
    //   offsetX: '100px',
    //   position: 'left',
    //   // content: $('<div class="user-account"> <img class="image image--small-profile" src="~assets/images/profile.png" alt=""><div class="user-account__content"> <a class="body-2">John Doe</a><p class="body-2">2 hour ago</p></div></div>')
    //   content: $(`<ul class="user-account flex-column field-wrapper__messages">${message}</ul>`)
    // });
  })
})
