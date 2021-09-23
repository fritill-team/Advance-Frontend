$(document).ready(function(){
    $(".category").on("click",function(){
      $(".category__wrapper").toggleClass("active--category");
      $("body").toggleClass("overlay"); 
    }); 
    // $("body").on("click",function(){ 
    //   event.stopPropagation()
    // }); 
  });