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
  $(document).ready(function(){
    $(".sub-menu--item").on("mouseenter",function(){
      $(".category__date").addClass("date--open");
    });
    $(".sub-menu--item").on("mousemove",function(){
      $(".category__date").removeClass("date--open");
    });
    
  });
  
  // open category details


