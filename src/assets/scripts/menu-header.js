$(document)
.on('click', '.header-menu', function () {
  $(".menu").toggleClass('menu--open');
  $("body").toggleClass("overlay");
})

// close menu on click body
$(".wrapper__overlay").on("click",function(event){ 
  $(".menu").toggleClass("menu--open");
  $("body").toggleClass("overlay");
  event.stopPropagation();
}); 
// open data menu

$(document).on('click', '.list-item-date', function () {
  if ($('.menu__date').hasClass('active')) { 
    $('.menu__date').removeClass('active');
  }else { 
    $('.menu__date').addClass('active');
  }
})  