const overlay = $($('.overlay')[0]),
  body = $('body')

export const openOverlay = (full = true, overlaySuper) => {
  body.addClass('no-scroll')
  overlay.addClass('overlay--active')
  if (full)
    overlay.addClass('overlay--full')
  if(overlaySuper)
    overlay.addClass('overlay--super')
}

export const closeOverlay = () => {
  body.removeClass('no-scroll')
  overlay.removeClass('overlay--active')
  if (overlay.hasClass('overlay--full'))
    overlay.removeClass('overlay--full')
  if (overlay.hasClass('overlay--super'))
    overlay.removeClass('overlay--super')
}
