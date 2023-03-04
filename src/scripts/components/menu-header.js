// $(document)
//   .on("click", "", function () {
//     $(".menu").toggleClass("menu--open");
//     $(".page").toggleClass("no-scroll");
//     $(".overlay").addClass("overlay--active");
//   })
//
//   .on("click", ".overlay", function () {
//     $(this).removeClass("overlay--active");
//     $(".page").removeClass("no-scroll");
//     $(".menu").removeClass("menu--open");
//   });

$(document)
  .on('click', '.toggle-mega-menu', function () {
    let self = $(this)
    Overlay.open(false)
  })
  .on('click', '.close-dialog', function () {
    //  Overlay.close()
    $(this).closest('.dialog').removeClass('dialog--show')
  })
  // .mouseup(function (e) {
  //   if(!$(event.target).closest(".mega-menu").length){
  //      Overlay.close()
  //   }
  // })
  .on('keyup', function(e) {
    if (e.key === "Escape") {
      //  Overlay.close()
    }
  });


