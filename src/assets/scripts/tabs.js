$('.tabs').each(function (tabs) {
  tabs = $(tabs)
  let panels = tabs.closest('.tab-panels')

  $('.tab').on('click', function (e) {
    // e.preventDefault()
    let tab = $(this),
      target = $(tab.attr('href'))

    tab.siblings('.tab').removeClass('tab--active')
    target.siblings('.tab-panel').removeClass('tab-panel--active')
    $(this).addClass('tab--active')
    target.addClass('tab-panel--active')
    // handleUrl();
  })
})


// tabs for contents
$('.tabs-content').each(function (tabs) {
  tabs = $(tabs)
  let panels = tabs.closest('.tab-panels-content')

  $('.tab-content').on('click', function (e) {
    let tab = $(this), target = $(tab.attr('href'))
    tab.siblings('.tab-content').removeClass('tab--active-content')
    target.siblings('.tab-panel-content').removeClass('tab-panel--active-content')
    $(this).addClass('tab--active-content')
    target.addClass('tab-panel--active-content')
  })
})


// $('.tabs').each(function (tabs) {
//   tabs = $(tabs)
//   let panels = tabs.closest('.tab-panels')
//
//   $('.tab').on('click', function(e) {
//     e.preventDefault()
// let tab = $(this),
//   target = $(tab.attr('href'))
//
// tab.siblings('.tab').removeClass('tab--active')
// target.siblings('.tab-panel').removeClass('tab-panel--active')
// $(this).addClass('tab--active')
// target.addClass('tab-panel--active')
// })
// })

// chapters and contents tabs

$('.chapters-tabs').each(function (tabs) {
  tabs = $(tabs);

  $('.tab-chapter').on('click', function (e) {
    var tab = $(this),
      target = $(tab.attr('href'));

    // remove class active from all the sublings
    $('.chapters-tabs .tab-chapter').each(function (tab) {
      $(this).removeClass('tab--active')
    })

    target.siblings('.tab-panels-content .tab-panel').removeClass('tab-panel--active');

    $(this).addClass('tab--active');
    target.addClass('tab-panel--active');
  });
});

if($('.tabs')){
  let hash = window.location.href.split("#");
  let id = hash[1];
  $('.tab').each(function() {
    if ($(this).attr('href') === '#'+id){
      $(this).addClass('tab--active').siblings('.tab').removeClass('tab--active')
    } else {
      
    }
  })
  $('.tab-panel').each(function(){
    if($(this).attr('id') === id){
      $(this).addClass('tab-panel--active').siblings('.tab-panel').removeClass('tab-panel--active');
    }
  })
}
// function handleUrl(){
//   $(window).on('hashchange', function(e){
//     $('.tab').each(function() {
//       if ($(this).attr('href') === '#'+id){
//         $(this).addClass('tab--active').siblings('.tab').removeClass('tab--active')
//       }
//     })
//     $('.tab-panel').each(function(){
//       if($(this).attr('id') === id){
//         $(this).addClass('tab-panel--active').siblings('.tab-panel').removeClass('tab-panel--active');
//       }
//     })
//   });
  
// }
// handleUrl();

$(function(){
  $('.tabs-wrapper').each(function(){
    $(this).tabs();
  })
})