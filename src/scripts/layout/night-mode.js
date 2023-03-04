// Night Mode JS
(function (window, document, undefined) {
		'use strict';
		if (!('localStorage' in window)) return;
		var nightMode = localStorage.getItem('gmtNightMode');
		if (nightMode) {
			document.documentElement.className += ' night-mode';
      document.documentElement.setAttribute('data-theme', 'dark')
		}
	})(window, document);


	(function (window, document, undefined) {

		'use strict';

		// Feature test
		if (!('localStorage' in window)) return;

		// Get our newly insert toggle
		var nightMode = document.querySelector('#dark-mode-toggle');
		if (!nightMode) return;

		// When clicked, toggle night mode on or off
		nightMode.addEventListener('click', function (event) {
			event.preventDefault();
      let isNightMode = document.documentElement.classList.contains('night-mode')
			document.documentElement.classList.toggle('night-mode');
      document.documentElement.setAttribute('data-theme', document.documentElement.classList.contains('night-mode')? 'dark': 'light')
			if (document.documentElement.classList.contains('night-mode')) {
				localStorage.setItem('gmtNightMode', true);
				return;
			}
			localStorage.removeItem('gmtNightMode');
		}, false);

	})(window, document);
