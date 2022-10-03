import {closeOverlay, openOverlay} from "./overlay";


$(document)
  .on('click', '.toggle-dialog', function () {
    let self = $(this),
      $target = $(self.data('target'))
    openOverlay(true, true)
    $target.addClass('dialog--show')
  })
  .on('click', '.close-dialog', function () {
    closeOverlay()
    $(this).closest('.dialog').removeClass('dialog--show')
  })
  .on('keyup', function (e) {
    let dialog = $('.dialog')
    if (e.key === "Escape" && dialog.hasClass("dialog--show")) {
      closeOverlay()
      $(this).closest('.dialog').removeClass('dialog--show')
    }
  })
  .mouseup(function (e) {
    if (!$(event.target).closest(".dialog").length) {
      var dialog = $('.dialog')
      if (dialog.hasClass('dialog--show')) {
        closeOverlay()
        dialog.removeClass('dialog--show')
      }
    }
  })

