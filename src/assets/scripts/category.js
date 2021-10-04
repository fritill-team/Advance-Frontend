// open category
$(document).ready(function(){
    $(".category").on("click",function(event){
      $(".category__wrapper").toggleClass("active--category");
      $("body").toggleClass("overlay"); 
      event.stopPropagation()
    }); 
    $(".wrapper__overlay").on("click",function(){ 
      $(".category__wrapper").toggleClass("active--category");
      $("body").toggleClass("overlay"); 
    }); 
  }); 



$(".menu__list").each(function() {
  $(".sub-menu--item").on("click",function(event){
    $(".category__menu").addClass("active-date"); 
    $('.category__date').addClass('active');  
  }); 
  $(".close").on("click",function(event){
    $(".category__date").removeClass("active");  
    $(".category__menu").removeClass("active-date");
  }); 
});


  