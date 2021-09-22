$(document).ready(function(){
    $(".category").on("click",function(){
      $(".menu__list").toggleClass("active--menu");
      $("body").toggleClass("overlay"); 
    }); 
    // $(".category").on("click",function(event){ 
    //   event.stopPropagation()
    // }); 
  });