// var courseHover = document.getElementsByClassName('course-hover');
// var x = $(courseHover).find(".card-media__card-img");
// console.log(x); 
// $( courseHover  + ".card-media__card-img" );
// $(courseHover).on('mouseover' ,function () {
//   $(".course-card").addClass("course-card--hover");
// });
// $(courseHover).on('mouseout' ,function () {
//   $(".course-card").removeClass("course-card--hover");
// });
$(document)
.on('mouseover', '.card-media__card-img', function () {
  $(".course-card").addClass("course-card--hover");
})
// $(".course-hover .card-media__card-img").mouseover(function () {
//   $(".course-card").addClass("course-card--hover");
// });
// $(".course-hover .card-media__card-img").mouseout(function () {
//   $(".course-card").removeClass("course-card--hover");
// });
// $(".course-hover .card-media__card-img").mousemove(function() {
//   $(".course-card" ).removeClass("course-card--hover");
// });

 
// $(document).ready(function () {
//   $("#iframe").on("mouseover", function () {

//     $(this).attr("src", $(this).attr("src") + "&amp;autoplay=1");
//   });

//   $("#iframe").on("mouseleave", function () {
//     var src = $(this).attr("src");
//     var arr_str = src.split("&amp;");
//     $(this).attr("src", arr_str[0]);
//     console.log(src);
//   });
// });

// code pen 
// https://codepen.io/sohype-khaled/pen/WNOKBzX?editors=0010