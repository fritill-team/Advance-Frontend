let $snackbarsContainer = $('#snackbars'),
  gettext,
  dynamicId = 0,
  snackbars = {}

if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key


const renderSnackbar = function (options = {}) {
    let status = options.status ? ` snackbar--${options.status}` : '',
      icon = options.icon ? `<div class="snackbar__icon"><i class="material-icons-outlined">${options.icon}</i></div>` : '',
      multiline = options.multiline ? ' snackbar--multiline' : '',
    action = ''
    if (options.close) {
      action = `<a class="snackbar__action close-snackbar" href="javascript:void(0)">${gettext('Close')}</a>`
    } else if (options.action) {
      action = `<a class="snackbar__action" href="${options.action.url}">${options.actions.text}</a>`
    }

    $snackbarsContainer.append(`<div class="snackbar${status}${multiline}" id="snackbar-${dynamicId}" data-auto-hide="${!!options.autoHide}" data-timeout="${options.timeout ? options.timeout : 4000}">
      ${icon}
      <div class="snackbar__content">${options.text}</div>
      ${action}
    </div>`)
    return `#snackbar-${dynamicId}`
  },
  createSnackbar = function (options) {
    let id = renderSnackbar(options)
    $(id).animate({opacity: "1"}, 300)

    // $snackbar.css('transform', 'translateX(0);')
    if (options.autoHide) {
      snackbars[id] = setTimeout(() => {
        $(id).animate({opacity: "0"}, 300, function () {
          $(id).remove()
          delete snackbars[id]
        })
      }, options.timeout ? options.timeout : 4000)
    }
    dynamicId++
  }

$(document)
  .on('click', '.close-snackbar', function () {
    let $snackbar = $(this).closest('.snackbar')
    $snackbar.animate({opacity: "0"}, 300, function () {
      $snackbar.remove()
      if ($snackbar.data('auto-hide')) {
        let id = $snackbar.attr('id')
        clearTimeout(snackbars[id])
        delete snackbars[id]
      }
    })
  })
  .on('mouseover', '.snackbar', function () {
    let $snackbar = $(this)
    if ($snackbar.data('auto-hide')) {
      let id = `#${$snackbar.attr('id')}`
      clearTimeout(snackbars[id])
      delete snackbars[id]
    }
  })
  .on('mouseleave', '.snackbar', function () {
    let $snackbar = $(this)
    if ($snackbar.data('auto-hide')) {
      let id = `#${$snackbar.attr('id')}`
      snackbars[id] = setTimeout(() => {
        $(id).animate({opacity: "0"}, 300, function () {
          $(id).remove()
          delete snackbars[id]
        })
      }, $snackbar.data('timeout'))
    }
  })

window.snackbar = createSnackbar
