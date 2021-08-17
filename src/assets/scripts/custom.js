// === Dropdown === //

$(".ui.dropdown").dropdown();

// === Model === //
$(".ui.modal")
  .modal({
    blurring: true
  })
  .modal("show");

// === Tab === //
$(".menu .item").tab();

// === checkbox Toggle === //
$('.ui.checkbox')
  .checkbox()
  ;

// === Toggle === //
$(".enable.button").on("click", function () {
  $(this)
    .nextAll(".checkbox")
    .checkbox("enable");
});

// Home Live Stream
$(".live_stream").owlCarousel({
  items: 10,
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    },
    1200: {
      items: 5
    },
    1400: {
      items: 6
    }
  }
});

// Featured Courses home
$(".featured_courses").owlCarousel({
  items: 10,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 1
    },
    1200: {
      items: 2
    },
    1400: {
      items: 3
    }
  }
});
// related courses
$(".related_courses").owlCarousel({
  items: 10,
  loop: false,
  margin: 50,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 2,
      margin: 10
    },
    768: {
      items: 3,
      margin: 10,
    },
    992: {
      items: 1
    },
    1200: {
      items: 1,
      margin: 100,
      center: true
    },
    1400: {
      items: 1,
      margin: 100,
      center: true
    }
  }
});
// Featured Courses home
$(".category_courses").owlCarousel({
  items: 10,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    960: {
      item: 3
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    },
    1400: {
      items: 4
    }
  }
});


// Featured Courses home
$(".top_instrutors").owlCarousel({
  items: 10,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 1
    },
    1200: {
      items: 2
    },
    1400: {
      items: 3
    }
  }
});

// Student Says
$(".Student_says").owlCarousel({
  items: 10,
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    },
    1200: {
      items: 3
    },
    1400: {
      items: 3
    }
  }
});

// features Careers
$(".feature_careers").owlCarousel({
  items: 4,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    },
    1200: {
      items: 1
    },
    1400: {
      items: 1
    }
  }
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
        jQuery(".scrolldown").css({ display: "none" });
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
var contentAreas = $("#accordion .course-list__list-content ")
  .hide()
  .first()
  .show()
  .end();
var expandLink = $(".list--expand-all");

// add the accordion functionality
headers.click(function () {
  // close all panels
  contentAreas.slideUp();
  // open the appropriate panel
  $(this)
    .next()
    .slideDown();

  // reset Expand all button
  expandLink.text("Expand all").data("isAllOpen", false);
  // stop page scroll
  return false;
});

// hook up the expand/collapse all
expandLink.click(function () {
  var isAllOpen = !$(this).data("isAllOpen");
  console.log({ isAllOpen: isAllOpen, contentAreas: contentAreas });
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


$('.toggle-filter').on('click', function () {
  if ($('.filter').hasClass('filter__opened')) {
    $('.filter').removeClass('filter__opened')
    $('body').removeClass('hide')
  } else {
    $('.filter').addClass('filter__opened')
    $('body').addClass('hide')
  }
})

$('.list').on('click', function () {
  $('.course-card--fixed-width').removeClass('course-card--fixed-width').addClass('course-card--list-view')
  $(this).addClass('active').siblings().removeClass('active')
})
$('.grid').on('click', function () {
  $('.course-card--list-view').removeClass('course-card--list-view').addClass('course-card--fixed-width')
  $(this).addClass('active').siblings().removeClass('active')
})

// $(".menu--item .menu--link").each(function() {
//   $(this).on("click", function(e) {
//     e.preventDefault();
//     $(this)
//       .addClass("active")
//       .parent()
//       .siblings()
//       .find("a")
//       .removeClass("active");
//   });
// });

// const videojs = require("video.js/dist/video")
// const videojs = require("video.js/core")
// video player
// var player = videojs('my-player', {
//   html5: {
//     nativeTextTracks: false
//   },
//   textTrackSettings: true
// });
// player.ready(function () {
//   var options = {
//     showTitle: true,
//     showTrackSelector: true,
//   };
// Initialize the plugin.
// var transcript = this.transcript(options);
// Then attach the widget to the page.
// var transcriptContainer = document.querySelector('#transcript');
// transcriptContainer.appendChild(transcript.el());


// sidebar admin

// var tid = setInterval(function () {
//   if (document.readyState !== 'complete') return;
//   clearInterval(tid);
//   var querySelector = document.querySelector.bind(document);
//   var nav = document.querySelector('.vertical_nav');
//   var navWithIcon = document.querySelector('.vertical_nav');
//   var wrapper = document.querySelector('.wrapper');

//   // Toggle menu click
//   querySelector('.toggle_menu').onclick = function () {
//     nav.classList.toggle('nav--opened test');
//     wrapper.classList.toggle('toggle-content');
//   };

//   // Minify menu on menu_minifier click
//   querySelector('.collapse_menu').onclick = function () {
//     nav.classList.toggle('vertical_nav__minify');
//     navWithIcon.classList.toggle('vertical_nav--show-icon')
//     // wrapper.classList.toggle('wrapper__minify');
//     wrapper.classList.toggle('wrapper__minify-admin');

//     for (var j = 0; j < subnavs.length; j++) {
//       subnavs[j].classList.remove('menu--subitens__opened');
//     }
//   };
//   // Open Sub Menu

//   for (var i = 0; i < subnavs.length; i++) {
//     if (subnavs[i].classList.contains('menu--item__has_sub_menu')) {
//       subnavs[i].querySelector('.menu--link').addEventListener('click', function (e) {
//         for (var j = 0; j < subnavs.length; j++) {
//           if (e.target.offsetParent != subnavs[j])
//             subnavs[j].classList.remove('menu--subitens__opened');
//         }
//         e.target.offsetParent.classList.toggle('menu--subitens__opened');
//       }, false);

//     }
//   }
// }, 100);

// var nav = $('.vertical_nav'),
// 	wrapper = $('.wrapper'),
// 	sidemenu = $('.menu_left')

// $(document)
// 	.on('click', '.collapse_menu', function () {
// 		console.log('dlkvdogn')
// 		nav.toggleClass('nav--opened vertical_nav__minify')
// 		wrapper.toggleClass('toggle-content wrapper__minify ');
// 	})


// var menu = document.getElementById("js-menu");

var subnavs = $('#js-menu .sub-menu-item');
var nav = $('.sidebar'),
  wrapper = $('.wrapper'),
  sidemenu = $('.sidebar__menu'),
  sidebarIcon = $('.sidebar-with-icon'),
  menuItem = $('.sub-menu-item'),
  menu = $("#js-menu")

$(document)
  .on('click', '.toggle__menu', function () {
    nav.toggleClass('nav--opened vertical--minify')
    wrapper.toggleClass('toggle-content wrapper--minify ');
    sidebarIcon.toggleClass("open-side-nav");
    $('.sub-menu-item').each(function (i, item) {
      $(item).removeClass('menu--opened')
    })
  })

// remove class
if ($('.sidebar').hasClass("sidebar-with-icon")) {
  $('sub-menu-item').removeClass('menu--opened')
};

// Open Sub Menu

for (var i = 0; i < subnavs.length; i++) {
  if (subnavs[i].classList.contains('sub-menu-item')) {
    subnavs[i].querySelector('.item__link').addEventListener('click', function (e) {
      for (var j = 0; j < subnavs.length; j++) {
        if (e.target.offsetParent != subnavs[j])
          subnavs[j].classList.remove('menu--opened');
      }
      e.target.offsetParent.classList.toggle('menu--opened');
    }, false);

  }
};

// active class in collapsed sidebar

$('.sub-menu-item').click(function () {
  if ($(this).hasClass('menu--opened')) {
    $('.menu--opened .item__link').addClass('active--menu');
  } else {
    $('.sub-menu-item .item__link').removeClass('active--menu');
  }
});
// click icon open sidebar

$(document)
  .on('click', '.sidebar-with-icon .sub-menu-item', function () {
    nav.addClass('nav--opened vertical--minify')
    wrapper.addClass('toggle-content wrapper--minify ');
    sidebarIcon.addClass("open-side-nav");
  })

// scrolling
// $(function() {  
//   $(".card__content").niceScroll({
//     cursorcolor: "red",
//     autohidemode: "scroll",
//     cursorwidth: "20px",
//   });
// });

$(".card__header--collapse").each(function () {
  $(this).on('click', function () {
    $(this).next().toggleClass('active');
    $(this).children('.card__collapse--toggle').toggleClass('active');
  })
})

// $('.card__collapse--toggle').each(function(){
//   $(this).on('click', function(){
//     $(this).parent.next().toggleClass('active')
//     $(this).toggleClass('active');
//   })
// })

// select2

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
  $('.js-example-basic-single').select2();
});