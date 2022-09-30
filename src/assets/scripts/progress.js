let $circularProgress = $('.circular-progress')

if ($circularProgress.length) {
  $circularProgress.each((i, item) => {
    let $item = $(item),
      $input = $item.find('.circular-progress__value'),
      radius = typeof $item.data('radius') !== 'undefined' ? Number($item.data('radius')) : 80,
      percentage = $input.val() ? Number($input.val()) : 0
    $item.append($(`
      <svg class="circular-progress__circle" width="${radius * 2}px" height="${radius * 2}px" xmlns="http://www.w3.org/2000/svg">
        <circle class="circular-progress__track" cx="${radius}" cy="${radius}" r="74"></circle>
        <circle class="circular-progress__progress" cx="${radius}" cy="${radius}" r="74"></circle>
      </svg>
      <div class="circular-progress__content">
        <span class="circular-progress__text">${percentage}%</span>
        <span class="circular-progress__subtext"></span>
      </div>`))
  })
}

function updateCircularProgress(id, options) {
  let $progress = $(`#${id}`)

  if (options.hasOwnProperty('progress'))
    $progress.get(0).style.setProperty('--progress', Number(options.progress))

  if (options.hasOwnProperty('text'))
    $progress.find('.circular-progress__text').text(options.text)

  if (options.hasOwnProperty('subtext'))
    $progress.find('.circular-progress__subtext').text(options.subtext)
}

window.updateCircularProgress = updateCircularProgress
