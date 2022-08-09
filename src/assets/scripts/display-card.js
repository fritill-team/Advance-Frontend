import {changeElementDir, isArabic, trimElementText} from './utils'

let $displayCards = $('.display-card')

if ($displayCards.length) {
  $displayCards.each(function (i, card) {
    let $card = $(card),
      $description = $card.find('.display-card__description'),
      $title = $card.find('.display-card__title'),
      $category = $card.find('.display-card__category')

    changeElementDir($title)
    changeElementDir($description)
    $category.attr('dir', $title.attr('dir'))

    trimElementText($title)
    trimElementText($description)


  })
}
