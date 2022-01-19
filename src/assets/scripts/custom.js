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
        jQuery(".scrolldown").css({display: "none"});
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
  // console.log({ isAllOpen: isAllOpen, contentAreas: contentAreas });
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

$("#list").on("click", function () {
  $(".course-card--grid-view")
    .removeClass("course-card--grid-view")
    .addClass("course-card--list-view");
  $(this).addClass("active").siblings().removeClass("active");
  $(".course-card--list-view")
    .parent()
    .parent()
    .removeClass("col-lg-3 col-md-6")
    .addClass("col-lg-12");
  $(".course-card-container").addClass("course-card-container--list-view");
});
$("#grid").on("click", function () {
  $(".course-card--list-view")
    .removeClass("course-card--list-view")
    .addClass("course-card--grid-view");
  $(this).addClass("active").siblings().removeClass("active");
  $(".course-card--grid-view")
    .parent()
    .parent()
    .removeClass("col-lg-12")
    .addClass("col-lg-3 col-md-6");
  $(".course-card-container").removeClass("course-card-container--list-view");
});

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
    console.log(true);
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

$(document).on("click", "content__item", function () {
  $(".content__item").toggleClass("nav--opened vertical--minify");
  wrapper.toggleClass("toggle-content page-content--minify ");
  sidebarIcon.toggleClass("open-side-nav");
  // $('.sub-menu-item').each(function (i, item) {
  //   $(item).removeClass('menu--opened')
  // })
});
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
// $("#media").dropzone({url: 'text/test'});



$(document).on('change', 'input[type="file"]', function (e) {
  console.log(this);
  let imageList = $('.image-list')
  // let imageList = $('.' + $(this).name + '-image-list')
  var images = [];
  for (var i = 0; i < $(this).get(0).files.length; ++i) {
    // images.push($(this).get(0).files[i].name);
    var srcArray = URL.createObjectURL(this.files[i]);
    images.push(srcArray)
  }
  console.log(srcArray);
  // console.log(images);

  function image() {
    return `
      ${images.map(src => `
        <img class="image preview" src="${src}">
      `)}
    `
  }
  imageList.append(image())
  if (images.length === 0) {
  } else {

  }
  // images = [];
})
//venobox
$(document).ready(function () {
  $(".venobox").venobox();
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
    console.log("text");
    $(this).children("course-list__list-content").css({display: "none"});
    // $(this).next().css({"display": "none"})
  });
});

$(function () {
  // contents sortables
  $("#table-body").sortable({
    update: function (event, ui) {
      $(this).children().each(function (index) {

        // assign data order in the data base
        if ($(this).attr('data-order') !== (index + 1)) {
          $(this).attr('data-order', (index + 1)).addClass('updated-order');
        }

        // store the updated positions and their id
        let positions = []
        $('.updated-order').each(function () {
          positions.push({"itemId":$(this).attr('data-id'),"itemOrder": $(this).attr('data-order')});
          $(this).removeClass('updated-order');
        });

        // make the ajax call
        $.ajax({
          url: $("#table-body").attr('data-order-url'),
          method: 'POST',
          dataType: 'text',
          headers: {'X-CSRFToken': $('meta[name="csrf-token"]').prop('content')},
          data: {
            positions: positions
          },
          success: function (response) {
            console.log(response);
          },
          error: function (error) {
            console.error(error)
          }
        })

      })
    }
  })
  $("#sortable-contents").sortable({
    handle: ".handle-contents"
    // update: function (event, ui) {
    //   $(this).children().each(function (index) {
    //
    //     // assign data order in the data base
    //     if ($(this).attr('data-order') !== (index + 1)) {
    //       $(this).attr('data-order', (index + 1)).addClass('updated-order');
    //     }
    //
    //     // store the updated positions and their id
    //     let positions = []
    //     $('.updated-order').each(function () {
    //       positions.push({"itemId":$(this).attr('data-id'),"itemOrder": $(this).attr('data-order')});
    //       $(this).removeClass('updated-order');
    //     });
    //
    //     // make the ajax call
    //     $.ajax({
    //       url: $("#sortable-chapters").attr('data-order-url'),
    //       method: 'POST',
    //       dataType: 'text',
    //       headers: {'X-CSRFToken': $('meta[name="csrf-token"]').prop('content')},
    //       data: {
    //         positions: positions
    //       },
    //       success: function (response) {
    //         console.log(response);
    //       },
    //       error: function (error) {
    //         console.error(error)
    //       }
    //     })
    //
    //   })
    // }

  });

  // chapters sortables
  $("#sortable-chapters").sortable({
    handle: ".handle-chapters",
    update: function (event, ui) {
      $(this).children().each(function (index) {

        // assign data order in the data base
        if ($(this).attr('data-order') !== (index + 1)) {
          $(this).attr('data-order', (index + 1)).addClass('updated-order');
        }

        // store the updated positions and their id
        let positions = []
        $('.updated-order').each(function () {
          positions.push({"itemId":$(this).attr('data-id'),"itemOrder": $(this).attr('data-order')});
          $(this).removeClass('updated-order');
        });

        // make the ajax call
        $.ajax({
          url: $("#sortable-chapters").attr('data-order-url'),
          method: 'POST',
          dataType: 'text',
          headers: {'X-CSRFToken': $('meta[name="csrf-token"]').prop('content')},
          data: {
            positions: positions
          },
          success: function (response) {
            console.log(response);
          },
          error: function (error) {
            console.error(error)
          }
        })

      })
    }
  });

  // $("#sortable-contents").disableSelection();
  //$("#test").accordion();
});


// const renderRecomendations = async () => {
//    let url = `http://localhost:3000/recommendations`;

//    const res = fetch(url)
//    const recommendations = res;
//    console.log(recommendations);
// }

// window.addEventListener('DOMContentLoaded', () => renderRecomendations());
// $(function () {});
// $(document)
// 	.on('click', '.collapse_menu', function () {
// 		console.log('dlkvdogn')
// 		nav.toggleClass('nav--opened vertical_nav__minify')
// 		wrapper.toggleClass('toggle-content wrapper__minify ');
// 	})
// $(document)
//   .on("click", ".recommendation-details .card__header", function () {
//     $(this).next().toggleClass("d-none");
//   })
//   .on("click", "edit-recommendation", function () {
//     $(this).closest(".recommendation-details");
//   })
//   .on("click", ".edit-recommendation", function (e) {
//     e.preventDefault();
//     // let editable = $(this).closest('.recommendation-details').data('data')
//     // $('.recommendation-form').data('data').append(editable)
//   });

// $(this).on('click', function(){
//   $(this).siblings().hide();
// })

// $('.recommendations-list').each((i,item) => {
//   let url = $(item).data('link')
//   $.get(url)
//     .then(res => console.log(res))
//     .catch(e => console.log(e))

// })

// sidebar


// $.get(url)
// .then(res => {
//   // let listItem = $(item),
//   // data = listItem.data("data")
//   // listItem.html($(sidebarTemplate(data)))
//   for (let item of res) {
//     // let course = $(item),
//     // data = course.data("data")
//     // course.html($(sidebarTemplate(data)))
//     $(listContainer).append($(sidebarTemplate(item)))
//     console.log(item);
//     // console.log(item);
//     // let listItem = $(),
//     // data = listItem.data("data")
//     // console.log(data);
//     // listItem.html($(sidebarTemplate(data)))
//   }
//   console.log(listContainer);
// let listContent = res,

// data = $(item)

// console.log(list);
//   })
//   .catch(e => console.log(e))
// })
// drawers

// $(document)
//   .on("click", ".toggle", function () {
//     // console.log()
//     $(".drawer--left").toggleClass("drawer--open");
//
//     // $(".video-player").toggleClass("video-player--collapse");
//     // console.log($(".drawer--left").closest(".drawers-container"));
//   })
//   .on("click", ".left-open", function () {
//     $(".drawer--left").toggleClass("open");
//   })
//   .on("click", ".header__link", function () {
//     // $(".drawer--left").toggleClass("drawer--open");
//   })
//   .on("click", ".right-open", function () {
//     $(".drawer--right").toggleClass("open");
//   })
//   .on("click", ".left-open-half", function () {
//     $(".drawer--left").toggleClass("open--half");
//   })
//   .on("click", ".right-open-half", function () {
//     $(".drawer--right").toggleClass("open--half");
//   })
//   .on("click", ".drawer .btn", function () {
//     $(".drawer").removeClass("open");
//     $(".drawer").removeClass("open--half");
//   })
//   .on("click", ".open-modal", function () {
//     $(".modal-overlay").toggleClass("modal--active");
//     $("body").toggleClass("no-scroll");
//   })
//   .on("click", ".open-modal--full", function () {
//     $(".modal-overlay").addClass("modal-overlay-full");
//     $(".modal-overlay").toggleClass("modal--active");
//     $("body").toggleClass("no-scroll");
//   })
//   .on("click", ".close-modal", function () {
//     $(".modal-overlay").removeClass("modal--active");
//     $(".modal-overlay").removeClass("modal-overlay-full");
//     $("body").removeClass("no-scroll");
//   });

// modal

// progress bar

// !function(a){a.fn.percentageLoader=function(b){this.each(function(){function q(){p.customAttributes.arc=function(a,b,c){var h,d=360/b*a,e=(90-d)*Math.PI/180,f=j+c*Math.cos(e),g=k-c*Math.sin(e);return h=b==a?[["M",j,k-c],["A",c,c,0,1,1,j-.01,k-c]]:[["M",j,k-c],["A",c,c,0,+(d>180),1,f,g]],{path:h}},p.path().attr({arc:[100,100,l],"stroke-width":d.strokeWidth,stroke:d.bgColor}),e&&(m=p.path().attr({arc:[.01,100,l],"stroke-width":d.strokeWidth,stroke:d.ringColor,cursor:"pointer"}),r(e,100,l,m,2)),n=p.text(j,k,e+"%").attr({font:d.fontWeight+" "+d.fontSize+" Arial",fill:d.textColor})}function r(a,b,c,d){f?d.animate({arc:[a,b,c]},900,">"):a&&a!=b?d.animate({arc:[a,b,c]},750,"elastic"):(a=b,d.animate({arc:[a,b,c]},750,"bounce",function(){d.attr({arc:[0,b,c]})}))}var c=a(this),d=a.extend({},a.fn.percentageLoader.defaultConfig,b),e=parseInt(c.children(d.valElement).text()),f=!0,h=parseInt(c.css("width")),i=parseInt(c.css("height")),j=h/2,k=i/2,l=j-d.strokeWidth/2,m=null,n=null,p=Raphael(this,h,i);q()})},a.fn.percentageLoader.defaultConfig={valElement:"p",strokeWidth:20,bgColor:"#d9d9d9",ringColor:"#d53f3f",textColor:"#9a9a9a",fontSize:"12px",fontWeight:"normal"}}(jQuery);

// 	$('.percent').percentageLoader({
// 	  bgColor: 'rgba(0,0,0,.2)',
// 	  ringColor: '#0abde3',
// 	  textColor: '#fff',
// 	  fontSize: '20px',
// 	  strokeWidth: 10
// 	})

$(function(){
  $('.course-card__author').each(function(){
    $(this).tooltipster({
      animation: 'fade',
      delay: 0,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      offsetX: '100px',
      content: $('<div class="user-account"> <img class="image image--small-profile" src="../../assets/images/profile.png" alt=""><div class="user-account__content"> <a class="body-2">John Doe</a><p class="body-2">2 hour ago</p></div></div>')
    });
  })
  $('.author').each(function(){
    $(this).tooltipster({
      animation: 'fade',
      delay: 0,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      offsetX: '100px',
      content: $('<div class="user-account"> <img class="image image--small-profile" src="../../assets/images/profile.png" alt=""><div class="user-account__content"> <a class="body-2">John Doe</a><p class="body-2">2 hour ago</p></div></div>')
    });
  })
  $('.user').each(function(){
    $(this).tooltipster({
      animation: 'fade',
      delay: 0,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      interactive: true,
      offsetX: '100px',
      content: $('<div class="user-account"> <img class="image image--small-profile" src="../../assets/images/profile.png" alt=""><div class="user-account__content"> <a class="body-2">John Doe</a><p class="body-2">Web Developer, Designer, and Teacher Jose</p><p class="body-2" >615K Students</p><p class="body-2" >12 Courses</p></p></div></div>')
    });
  })
})