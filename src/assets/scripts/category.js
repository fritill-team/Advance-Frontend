$(document)
.on('click', '.header-menu', function () {
  $(".menu").toggleClass('menu--show');
  $("body").toggleClass("overlay");
})


// open category
  // $(".category").on("click",function(event){
  //   $(".menu").toggleClass("active--menu");
  //   event.stopPropagation();
  // }); 

  // $(".wrapper__overlay").on("click",function(event){ 
  //   $(".menu").toggleClass("active--menu");
  //   $("body").toggleClass("overlay");
  //   event.stopPropagation();
  // }); 

// open side menu 

// $(".sub-menu--item").each(function() {
// $(".sub-menu--item").on("click",function(){
//   // $(".menu__content").toggleClass("active-date"); 
//   $('.menu__date').addClass('active');  
// }); 


// // $(".close").on("click",function(event){
// //   $(".menu__date").removeClass("active");  
// //   $(".menu__content").removeClass("active-date");
// // }); 
// });
$(document)
.on('click', '.sub-menu--item', function () {
  if ($('.menu__date').hasClass('active')) { 
    $('.menu__date').removeClass('active');
  }else { 
    $('.menu__date').addClass('active');
  }
})  

