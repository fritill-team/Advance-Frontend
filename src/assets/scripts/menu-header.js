$(document)
.on('click', '.header-menu', function () {
  $(".menu").toggleClass('menu--show');
  $("body").toggleClass("overlay");
})

// close menu on click body
$(".wrapper__overlay").on("click",function(event){ 
  $(".menu").toggleClass("menu--show");
  $("body").toggleClass("overlay");
  event.stopPropagation();
}); 
// open data menu

$(document).on('click', '.sub-menu--item', function () {
  if ($('.menu__date').hasClass('active')) { 
    $('.menu__date').removeClass('active');
  }else { 
    $('.menu__date').addClass('active');
  }
})  
// $('.sub-menu--item').each(function () { 
//   $('.sub-menu--item').on("click" , function(){
//     if ($('.menu__date').hasClass('active')) { 
//       $('.menu__date').removeClass('active');
//     }else { 
//       $('.menu__date').addClass('active');
//     }
//   })
// });