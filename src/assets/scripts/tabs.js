/*
//tabs
$('.tabs__panels > div').hide();
$('.tabs__panels > div:first-of-type').show();
$('.tabs__header .tabs__tab a').click(function(e){
  e.preventDefault();
  var $this = $(this),
    tabs__panels = '#'+$this.parents('.tabs__header').data('tabs'),
    others = $this.closest('.tabs__tab').siblings().children('a'),
    target = $this.attr('href');
  others.removeClass('tab--active');
  $this.addClass('tab--active');
  $(tabs__panels).children('div').hide();
  $(target).show();

})
*/

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
