var Drawer = function () {
  var drawer,
    drawerToggle,
    drawerNiceScrollOptions,
    tooltipsterOptions

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
        let title = $(this).attr('title')
        if (typeof title !== 'undefined' && title !== false)
          $(this).tooltipster('disable')
      })
      if (drawer.hasClass("drawer--overlay"))
        Overlay.open(drawer.hasClass('drawer--full-height'))
    },
    closeDrawer = $drawer => {
      $(".toggle_animate--icon").toggleClass("toggle-menu--active");
      drawer.removeClass("drawer--open");
      if (drawer.hasClass("drawer--overlay"))
        Overlay.close()

      drawer.find('.list-item').each(function () {
        let title = $(this).attr('title')
        if (typeof title !== 'undefined' && title !== false)
          $(this).tooltipster('enable')
      })
      drawer.find('[data-toggle=collapsing][aria-expanded=true]').each(function () {
        Collapsible.collapse($(this))
      })
    }

  function initializeDrawers() {
    drawer.find('.list-item').each(function () {
      let title = $(this).attr('title')
      if (typeof title !== 'undefined' && title !== false)
        $(this).tooltipster(tooltipsterOptions)
    })

    drawer.niceScroll(drawerNiceScrollOptions)

    drawerToggle.on('click', function () {
      let target = $(this).data("target"),
        drawer = $(target);
      startDrawerTransition(drawer)

      if (drawer.hasClass("drawer--open"))
        closeDrawer(drawer)
      else
        openDrawer(drawer)

      endDrawerTransition(drawer)
    })

    $(document)
      .on('keyup', function (e) {
        let $drawer = $('.drawer')
        if (e.key === "Escape" && $drawer.hasClass("drawer--open") && !$drawer.hasClass("drawer--default-open")) {
          startDrawerTransition($drawer)
          closeDrawer($drawer)
          endDrawerTransition($drawer)
        }
      })
      .on('click', '.overlay', function () {
        let $drawer = $('.drawer')
        if ($drawer.hasClass('drawer--overlay') && $drawer.hasClass('drawer--open')) {
          startDrawerTransition($drawer)
          closeDrawer($drawer)
          endDrawerTransition($drawer)
        }
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
  }

  return {
    init() {
      drawer = $('.drawer')
      drawerToggle = $('.toggle-drawer')
      drawerNiceScrollOptions = {
        autohidemode: false,
        horizrailenabled: false,
        railalign: localStorage.getItem('gmtDIR') === 'rtl' ? 'left' : 'right',
        rtlmode: localStorage.getItem('gmtDIR') === 'rtl',
        cursorcolor: "#0D9BBD"
      }
      tooltipsterOptions = {
        animation: 'fade',
        delay: 0,
        theme: 'tooltipster-default',
        touchDevices: true,
        trigger: 'hover',
        offsetX: '100px',
        position: localStorage.getItem('gmtDIR') === 'rtl' ? 'right' : 'left',
      }

      initializeDrawers()
    }
  }
}()


if (document.readyState !== 'loading' && document.body) {

}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Drawer.init)
} else {
  Drawer.init()
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Drawer;
}

