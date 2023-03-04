$(document)
  .on('click', '.toggle-dialog', function () {
    let self = $(this),
      $target = $(self.data('target'))
    Overlay.open(true, true)
    $target.addClass('dialog--show')
  })
  .on('click', '.close-dialog', function () {
    Overlay.close()
    $(this).closest('.dialog').removeClass('dialog--show')
  })
  .on('keyup', function (e) {
    let dialog = $('.dialog')
    if (e.key === "Escape" && dialog.hasClass("dialog--show")) {
      Overlay.close()
      $(this).closest('.dialog').removeClass('dialog--show')
    }
  })
  .mouseup(function (e) {
    if (!$(event.target).closest(".dialog").length) {
      var dialog = $('.dialog')
      if (dialog.hasClass('dialog--show')) {
        Overlay.close()
        dialog.removeClass('dialog--show')
      }
    }
  })

