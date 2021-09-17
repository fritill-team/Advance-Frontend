$(".course-hover .card-media__card-img").mouseover(function() {
  $(".course-card" ).addClass("course-card--hover");
}); 
$(".course-hover .card-media__card-img").mouseout(function() {
  $(".course-card" ).removeClass("course-card--hover");
}); 
// $(".course-hover .card-media__card-img").mousemove(function() {
//   $(".course-card" ).removeClass("course-card--hover");
// }); 