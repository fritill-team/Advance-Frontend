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
// });
