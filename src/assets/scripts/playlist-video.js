$('.header-player__course-name , .playlist__close').on('click', function(e) {
    $('.playlist').toggleClass("playlist--close"); //you can list several class names 
    e.preventDefault();
  })