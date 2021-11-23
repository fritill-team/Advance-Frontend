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
