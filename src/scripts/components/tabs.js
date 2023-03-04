/*
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


*/

const changeTab = ($tab, $panel) => {
    let activeTabClass = $tab.hasClass('list') ? 'list-item--active' : 'tab--active',
      top = $tab.closest('.tabs')[0].offsetTop - 120
    $('html, body').animate({scrollTop: $tab.offset().top - 120}, 1000);
    $tab.siblings('.tab').removeClass(activeTabClass)
    $tab.addClass(activeTabClass)
    $panel.siblings('.tab-panel').removeClass('tab-panel--active')
    $panel.addClass('tab-panel--active').parent()

  },
  $tabs = $('.tabs')


if ($tabs.length) {
  $tabs.each(function () {
    let $this = $(this)
    if ($this[0].offsetWidth < $this[0].scrollWidth) {
      $this.html(`<button class="tabs__scroll tabs__scroll-backward"><i class="material-icons">chevron_left</i></button>
        <div class="tabs__content">${$this.html()}</div>
        <button class="tabs__scroll tabs__scroll-forward"><i class="material-icons">chevron_right</i></button>`)
    }
  })
}

let isDown = false, startX, scrollLeft

$(document)
  .ready(function () {
    if (!window.location.hash) return
    let $tabPanel = $(window.location.hash)
    if ($tabPanel.length && $tabPanel.hasClass('tab-panel')) {
      let $tab = $(`.tab[href="${window.location.hash}"]`)
      changeTab($tab, $tabPanel)
    }
  })
  .on('click', '.tab', function (e) {
    let $tab = $(this),
      $panel = $($tab.attr('href'))
    changeTab($tab, $panel)
  })
  .on('mousedown', '.tabs__content', function (e) {
    isDown = true;
    startX = e.pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
  })
  .on('mouseleave', '.tabs__content', function () {
    isDown = false
  })
  .on('mouseup', '.tabs__content', function () {
    isDown = false
  })
  .on('mousemove', '.tabs__content', function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - this.offsetLeft;
    const walk = (x - startX); //scroll-fast
    this.scrollLeft = scrollLeft - walk;
  })
  .on('click', '.tabs__scroll-forward', function () {
    $(this).siblings('.tabs__content')[0].scrollLeft += 70
  })
  .on('click', '.tabs__scroll-backward', function () {
    $(this).siblings('.tabs__content')[0].scrollLeft -= 70
  })

