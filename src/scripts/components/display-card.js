"use strict";


var DisplayCard = function () {
  var cards

  function initialize() {
    cards.each(function (i, card) {
      var description = card.querySelector('.display-card__description'),
        title = card.querySelector('.display-card__title'),
        category = card.querySelector('.display-card__category')

      category.setAttribute('dir', title.getAttribute('dir'))

      Utils.changeElementDir(title)
      Utils.changeElementDir(description)
      Utils.trimElementText(title)
      Utils.trimElementText(description)
    })
  }

  return {
    init() {
      cards =  $('.display-card')
      initialize()
    }
  }
}()


// On document ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', DisplayCard.init);
} else {
  DisplayCard.init();
}
