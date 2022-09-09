import {closeOverlay, openOverlay} from './overlay'

let drawerNiceScrollOptions = {
    autohidemode: false,
    horizrailenabled: false,
    railalign: localStorage.getItem('gmtDIR') === 'rtl' ? 'left' : 'right',
    rtlmode: localStorage.getItem('gmtDIR') === 'rtl',
    cursorcolor: "#0D9BBD"
  },
  tooltipsterOptions = {
    animation: 'fade',
    delay: 0,
    theme: 'tooltipster-default',
    touchDevices: true,
    trigger: 'hover',
    offsetX: '100px',
    position: localStorage.getItem('gmtDIR') === 'rtl' ? 'right' : 'left',
  },
  drawer = $('.drawer')

drawer.niceScroll(drawerNiceScrollOptions)

drawer.find('.list-item').each(function () {
  $(this).tooltipster(tooltipsterOptions)
})

const endDrawerTransition = ($drawer) => {
  setTimeout(() => {
    $drawer.css('overflow-y', 'scroll')
    $drawer.niceScroll(drawerNiceScrollOptions)
    $drawer.getNiceScroll().show().resize()
  }, 300)
}

$(document)
  .on("click", ".toggle-drawer", function () {
    let target = $(this).data("target"),
      drawer = $(target);
    drawer.getNiceScroll().remove()
    drawer.css('overflow-y', 'hidden')
    $(".toggle_animate--icon").toggleClass("toggle-menu--active");
    if (drawer.hasClass("drawer--open")) {
      drawer.removeClass("drawer--open");
      closeOverlay()

      drawer.find('.list-item').each(function () {
        $(this).tooltipster(tooltipsterOptions)
      })

    } else {
      drawer.addClass("drawer--open");
      openOverlay()
    }
    endDrawerTransition(drawer)
  })
  .on('keyup', function (e) {
    let $drawer = $('.drawer')
    if (e.key === "Escape" && $drawer.hasClass("drawer--open")) {
      $drawer.removeClass("drawer--open");
      $drawer.getNiceScroll().remove()
      $drawer.css('overflow-y', 'hidden')
      $(".toggle_animate--icon").toggleClass("toggle-menu--active");
      closeOverlay()
      endDrawerTransition($drawer)
    }
  })
  .on('click', '.overlay', function () {
    let $drawer = $('.drawer')
    $drawer.removeClass("drawer--open");
    $drawer.getNiceScroll().remove()
    $drawer.css('overflow-y', 'hidden')
    $(".toggle_animate--icon").toggleClass("toggle-menu--active");
    closeOverlay()
    endDrawerTransition($drawer)
  })
