const arabicRange = /[\u0600-\u06FF]/

export const isArabic = text => {
  return arabicRange.test(text)
}

export const changeElementDir = $el => {
  $el.attr('dir', isArabic($el.text()) ? 'rtl' : 'ltr')
}

const checkTextOverflow = $el => {
  let curOverflow = $el.css('overflow')
  if (!curOverflow || curOverflow === "visible")
    $el.css('overflow', "hidden")

  let isOverflowing = $el[0].clientHeight < $el[0].scrollHeight

  $el.css('overflow', curOverflow)

  return isOverflowing
}

export const trimElementText = $el => {
  let overflowingText = ''
  for (let x = 0; x < $el.text().length; x++) {
    let text = $el.text()
    if (checkTextOverflow($el)) {
      overflowingText = text.slice(-1) + overflowingText
      $el.text(text.substring(0, text.length - 1))
    } else if (overflowingText.length > 0) {
      $el.text(text.substring(0, text.length - 3) + '...')
      break
    } else {
      break
    }
  }
}
