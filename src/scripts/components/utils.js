"use strict";

window.arabicRange = /[\u0600-\u06FF]/

var Utils = function () {
  return {
    isArabic: function (text) {
      return window.arabicRange.test(text)
    },
    changeElementDir: function (element) {
      element.setAttribute('dir', Utils.isArabic(element.innerText) ? 'rtl' : 'ltr')
    },
    checkTextOverflow: function (element) {
      var overflow = element.style.overflow,
        hasOverflow

      if (!overflow || overflow === "visible")
        element.style.overflow = "hidden"

      hasOverflow = element.clientHeight < element.scrollHeight

      element.style.overflow = overflow

      return hasOverflow
    },
    trimElementText: function (element) {
      var overflowingText = ''

      for (var x = 0; x < element.innerText.length; x++) {
        var text = element.innerText
        if (Utils.checkTextOverflow(element)) {
          overflowingText = text.slice(-1) + overflowingText
          element.innerText = text.substring(0, text.length - 1)
        } else if (overflowingText.length > 0) {
          element.innerText = text.substring(0, text.length - 3) + '...'
          break
        } else {
          break
        }
      }
    }
  }
}()

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Utils;
}
