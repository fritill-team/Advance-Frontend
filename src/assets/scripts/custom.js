// === Dropdown === //

// $(".ui.dropdown").dropdown();

// === Model === //
// $(".ui.modal")
//   .modal({
//     blurring: true
//   })
//   .modal("show");

// === Tab === //
// $(".menu .item").tab();

// === checkbox Toggle === //
// $('.ui.checkbox')
//   .checkbox()
//   ;

// === Toggle === //
$(".enable.button").on("click", function () {
  $(this)
    .nextAll(".checkbox")
    .checkbox("enable");
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
  $('.course-card--grid-view').removeClass('course-card--grid-view').addClass('course-card--list-view')
  $(this).addClass('active').siblings().removeClass('active')
  $('.course-card--list-view').parent().removeClass('col-lg-4').addClass('col-lg-12');
})
$('.grid').on('click', function () {
  $('.course-card--list-view').removeClass('course-card--list-view').addClass('course-card--grid-view')
  $(this).addClass('active').siblings().removeClass('active')
  $('.course-card--grid-view').parent().removeClass('col-lg-12').addClass('col-lg-4');
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
  wrapper = $('.page-content'),
  sidemenu = $('.sidebar__menu'),
  sidebarIcon = $('.sidebar-with-icon'),
  menuItem = $('.sub-menu-item'),
  menu = $("#js-menu")

$(document)
  .on('click', '.toggle-menu', function () {
    nav.toggleClass('nav--opened vertical--minify')
    wrapper.toggleClass('toggle-content page-content--minify ');
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

// select2


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
    wrapper.addClass('toggle-content page-content--minify ');
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


//sidebar__playlist

// var subnavs = $('#js-menu .sub-menu-item');
// var navPlayer = $('.sidebar__playlist'),
//   wrapper = $('.page-content'),
//   sidebarIcon = $('.sidebar-with-icon'),
//   menuItem = $('.sub-menu-item'),
//   menu = $("#js-menu")

// $(".header-player__course-name").click(function() {
//   $(".playlist").toggleClass("playlist--opened vertical--minify");
//   wrapper.toggleClass("toggle-content page-content--minify page-content--video-player ");
//   // $(".sidebar__playlist").removeClass("sidebar--opened vertical--minify");
// });

// $(".playlist__close").click(function() {
//   $(".playlist").toggleClass("playlist--opened vertical--minify");
//   wrapper.toggleClass("toggle-content page-content--minify page-content--video-player ");
// });

// checked box icon in video-list icon
// $(".play-list--hide").click(function() {
//   $(".play-list--hide").toggleClass("play-list__check--show");
// });

// edit thread

$(document)
.on('click', 'content__item', function () {
  $(".content__item").toggleClass('nav--opened vertical--minify')
  wrapper.toggleClass('toggle-content page-content--minify ');
  sidebarIcon.toggleClass("open-side-nav");
  // $('.sub-menu-item').each(function (i, item) {
  //   $(item).removeClass('menu--opened')
  // })
})
//  $( ".submit-post .submit__btn").click(function() {
//   $(this).each(function(){
//     $(".edit-post").css("display", "none");
//     $("#post-card").css("display", "block")
//   })
//  });
// $(document).on('click', '.edit', function () {
//   $(this).closest('p').remove();
// });

// var edit = $('.edit');

// $(document).ready(function(){
//    for(var i = 0; edit.length; i++) {
//     $(edit).on("click",function(){
//       $(".post--card").css("display", "none");
//      $(".edit--post").css("display", "block");
//    })
//   }
// });

// edit thread
//  $("#edit").each(function() {
// $(this).on("click",function(){
//      $("#postCard").css("display", "none");
//     $("#editPostThread").css("display", "block");
//   })
//  });
//  $(".submit-post .submit__btn .ad-btn").each(function() {
//   $(this).on("click",function(e){
//     $("#editPostThread").css("display", "none");
//     $("#postCard").css("display", "block")
//   })
//  });

// edit threads



// Drop zone
 $("div#myId").dropzone({ url: "/file/post" });

//venobox
$(document).ready(function(){
  $('.venobox').venobox();
});


// toaster js

// $("#toastr").on('click',function(){
//   toastr.info('test click')
//   // toastr["error"]("testtest jhbdvkjbavkjbskjvkdjfsu", "test")
//   // toastr.options = {
//   //   "closeButton": false,
//   //   "debug": false,
//   //   "newestOnTop": false,
//   //   "progressBar": false,
//   //   "positionClass": "toast-top-right",
//   //   "preventDuplicates": false,
//   //   "onclick": null,
//   //   "showDuration": "300",
//   //   "hideDuration": "1000",
//   //   "timeOut": "5000",
//   //   "extendedTimeOut": "1000",
//   //   "showEasing": "swing",
//   //   "hideEasing": "linear",
//   //   "showMethod": "fadeIn",
//   //   "hideMethod": "fadeOut"
//   // }
// })

 //rating
// start star
// $(function(){                   // Start when document ready
// 	$('#star-rating').rating(); // Call the rating plugin
// });



// window.onload = function() {
//   document.getElementById("vcode1").focus();
// };
