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
    // handleUrl(url);
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
var url = window.location.href.split("#");

function handleUrl(url){
  // let urlArray = url.split("#");
  // let tabId = urlArray[1];
  $('.tab-panel').each(function(){
    if($(this).attr('id') == url[1]){
      $(this).addClass('tab--active').siblings('.tab').removeClass('tab--active')
    }
    // $(this).attr('id') == url[1] ? console.log('aywa sa7 keda') : console.log('la la keda 8lt');
    // console.log('==============');
    // console.log($(this).attr('id'), url[1]);
    // console.log('==============================');
  })
}
// handleUrl(url);

console.log(url[1]);
$( function() {
} );

// $( "#tabs" ).tabs({
//   beforeLoad: function( event, ui ) {
//     ui.jqXHR.fail(function() {
//       ui.panel.html(
//         "Couldn't load this tab. We'll try to fix this as soon as possible. " +
//         "If this wouldn't be a demo." );
//     });
//   }
// });
