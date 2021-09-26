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
  // $(document).ready(function(){
  //   $(".sub-menu--item").on("mouseenter",function(){
  //     $(".category__date").toggleClass("date--open");
  //   }); 
  // });
  // $(document).ready(function(){  
  //   $(".sub-menu--item").each(function(){  
  //     $(this).on("mouseenter",function(){
  //       $(".category__date").toggleClass("date--open"); 
  //     }); 
  //    });  
  // });  
  $(".menu__list").each(function(){  
  $(this).on("mouseenter" ,function () {
    if ($(this).hasClass('sub-menu--item')) {
      $('.category__date').addClass('date--open');
    }else {
      $('.category__date').removeClass('date--open');
    }
  });
});  

  
  // open category details


