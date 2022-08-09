// Night Mode JS
(function (window, document, undefined) {
  'use strict';
  if (!('localStorage' in window)) return;
  let DIR = localStorage.getItem('gmtDIR');
  if (DIR)
    $(document).attr('dir', DIR)
})(window, document);


(function (window, document, undefined) {
  'use strict';

  // Feature test
  if (!('localStorage' in window)) return;
  // Get our newly insert toggle
  let DIR_TOGGLE = $('.toggle-dir')
  if (!DIR_TOGGLE.length) return;
  $(document).on('click', '.toggle-dir', function (e) {
    e.preventDefault()
    let $this = $(this),
      DIR = $this.data('dir')
    $(document).attr('dir', DIR)
    localStorage.setItem('gmtDIR', DIR);
  })
})(window, document);
