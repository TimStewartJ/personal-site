(function () {
	var lab = document.querySelector('[data-design-lab]');
	var previewPath = window.location.pathname.indexOf('/previews/') !== -1;
	var localHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

	if (!lab || (!previewPath && !localHost)) {
		return;
	}

	var designs = ['current', 'charm', 'reader', 'lantern'];
	var params = new URLSearchParams(window.location.search);
	var initialDesign = params.get('design');

	if (designs.indexOf(initialDesign) === -1) {
		initialDesign = 'current';
	}

	function setDesign(design, updateUrl) {
		document.documentElement.dataset.design = design;

		lab.querySelectorAll('[data-design-option]').forEach(function (button) {
			button.setAttribute('aria-pressed', String(button.dataset.designOption === design));
		});

		document.querySelectorAll('a[href]').forEach(function (link) {
			var url = new URL(link.href);

			if (url.origin !== window.location.origin || url.pathname.indexOf('/assets/') !== -1) {
				return;
			}

			if (design === 'current') {
				url.searchParams.delete('design');
			} else {
				url.searchParams.set('design', design);
			}

			link.href = url.toString();
		});

		if (!updateUrl) {
			return;
		}

		var url = new URL(window.location.href);
		if (design === 'current') {
			url.searchParams.delete('design');
		} else {
			url.searchParams.set('design', design);
		}

		window.history.replaceState(null, '', url);
	}

	lab.addEventListener('click', function (event) {
		var button = event.target.closest('[data-design-option]');
		if (!button) {
			return;
		}

		setDesign(button.dataset.designOption, true);
	});

	setDesign(initialDesign, false);
	lab.hidden = false;
}());
