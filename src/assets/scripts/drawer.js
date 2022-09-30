import {closeOverlay, openOverlay} from './overlay'
import {collapse} from './collapse'

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

const startDrawerTransition = $drawer => {
    drawer.getNiceScroll().remove()
    drawer.css('overflow-y', 'hidden')
  },
  endDrawerTransition = $drawer => {
    setTimeout(() => {
      $drawer.css('overflow-y', 'scroll')
      $drawer.niceScroll(drawerNiceScrollOptions)
      $drawer.getNiceScroll().show().resize()
    }, 300)
  },
  openDrawer = $drawer => {
    $(".toggle_animate--icon").toggleClass("toggle-menu--active");
    drawer.addClass("drawer--open");
    drawer.find('.list-item').each(function () {
      $(this).tooltipster('disable')
    })
    openOverlay()
  },
  closeDrawer = $drawer => {
    $(".toggle_animate--icon").toggleClass("toggle-menu--active");
    drawer.removeClass("drawer--open");
    closeOverlay()

    drawer.find('.list-item').each(function () {
      $(this).tooltipster('enable')
    })
    drawer.find('[data-toggle=collapsing][aria-expanded=true]').each(function () {
      collapse($(this))
    })
  }

$(document)
  .on("click", ".toggle-drawer", function () {
    let target = $(this).data("target"),
      drawer = $(target);
    startDrawerTransition(drawer)

    if (drawer.hasClass("drawer--open"))
      closeDrawer(drawer)
    else
      openDrawer(drawer)

    endDrawerTransition(drawer)
  })
  .on('keyup', function (e) {
    let $drawer = $('.drawer')
    if (e.key === "Escape" && $drawer.hasClass("drawer--open")) {
      startDrawerTransition($drawer)
      closeDrawer($drawer)
      endDrawerTransition($drawer)
    }
  })
  .on('click', '.overlay', function () {
    let $drawer = $('.drawer')
    startDrawerTransition($drawer)
    closeDrawer($drawer)
    endDrawerTransition($drawer)
  })
  .on('click', '.drawer.drawer--partially-closed:not(.drawer--open) .list-item[data-toggle=collapsing]', function () {
    startDrawerTransition(drawer)
    openDrawer()
    endDrawerTransition(drawer)
  })
  .on('click', '.drawer [data-toggle=collapsing]', function () {
    startDrawerTransition(drawer)
    endDrawerTransition(drawer)
  })
