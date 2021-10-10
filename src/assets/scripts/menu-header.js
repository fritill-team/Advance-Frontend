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

$('.sub-menu--item').each(function () {
$(this).on('click', function () {
  if ($('.menu__date').hasClass('d-block')) { 
    $('.menu__date').toggleClass('d-block');
  }else { 
    $('.menu__date').addClass('d-block');
  }
})
}); 

// $('.sub-menu--item').each(function () {
// $(this).on('click', function () {
//   $('.menu__date').css("display" , "block"); 
// })  
// });

// $('.sub-menu--item').each(function () {
//   $(this).on('click', function () {
//     if ($('.sub-menu--item').hasClass('sub-menu-active')) { 
//       $('.sub-menu--item').removeClass('sub-menu-active');
//     }else { 
//       $('.sub-menu--item').addClass('sub-menu-active');
//     }
//   })  
//   });


// var subMenuItem = document.querySelectorAll("sub-menu--item")

// for (var i = 0; i < subMenuItem[i].length; i++) {
//   subMenuItem[i].addEventListener("click" , () => {
//   subMenuItem[i].classList.add("active");
//   })
//   // if (subMenuItem[i].classList.contains('sub-menu-item')) {
//   //   subMenuItem[i].querySelector('.sub-menu-item').addEventListener('click', function (e) {
//   //     for (var j = 0; j < subMenuItem.length; j++) {
//   //       if (e.target.offsetParent != subMenuItem[j])
//   //         subMenuItem[j].classList.remove('active');
//   //     }
//   //     e.target.offsetParent.classList.toggle('active');
//   //   }, false);

//   // }
// };
 
 