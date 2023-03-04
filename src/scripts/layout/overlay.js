var Overlay = function () {
  var overlay, body

  function open(full = true, overlaySuper) {
    body.addClass('no-scroll')
    overlay.addClass('overlay--active')
    if (full)
      overlay.addClass('overlay--full')
    if (overlaySuper)
      overlay.addClass('overlay--super')
  }

  function close() {
    body.removeClass('no-scroll')
    overlay.removeClass('overlay--active')
    if (overlay.hasClass('overlay--full'))
      overlay.removeClass('overlay--full')
    if (overlay.hasClass('overlay--super'))
      overlay.removeClass('overlay--super')
  }

  return {
    init() {
      overlay = $($('.overlay')[0]),
        body = $('body')
    },
    open,
    close
  }
}()


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Overlay.init);
} else {
  Overlay.init();
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Overlay;
}
