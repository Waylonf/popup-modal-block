import domReady from '@wordpress/dom-ready';

const VenoBox = require('../../../node_modules/venobox/dist/venobox');
const initModal = () => {
	const modals = document.querySelectorAll('.venobox');

	modals.forEach(function (element) {
		const maxWidth = element.getAttribute('data-max-width');
		const selector = element.getAttribute('data-selector');
		//const popup = element.getAttribute( 'data-popup' );
		const bgcolor = element.getAttribute('data-bg-color');
		const share = element.getAttribute('data-share');
		const ratio = element.getAttribute('data-ratio');
		const shareStyle = element.getAttribute('data-share-style');
		const spinner = element.getAttribute('data-spinner');
		const spinColor = element.getAttribute('data-spinner-color');
		const overlayColor = element.getAttribute('data-overlay-color');
		const overlayClose = element.getAttribute('data-overlay-close');
		const navigation = element.getAttribute('data-navigation');
		const toolsColor = element.getAttribute('data-tools-color');
		const toolsBackground = element.getAttribute('data-tools-background');
		const titleStyle = element.getAttribute('data-title-style');
		const titlePosition = element.getAttribute('data-title-position');
		const numeration = element.getAttribute('data-numeration');

		const options = {
			titleattr: 'data-modal-title',
		};

		if (maxWidth) {
			options.maxWidth = maxWidth;
		}

		if (titleStyle) {
			options.titleStyle = titleStyle;
		}

		if (spinner) {
			options.spinner = spinner;
		}

		if (titlePosition) {
			options.titlePosition = titlePosition;
		}

		if (selector) {
			options.selector = selector;
		}

		if (ratio) {
			options.ratio = ratio;
		}

		if (bgcolor) {
			options.bgcolor = bgcolor;
		}

		if (overlayColor) {
			options.overlayColor = overlayColor;
		}

		if (spinColor) {
			options.spinColor = spinColor;
		}

		if (toolsColor) {
			options.toolsColor = toolsColor;
		}

		if (toolsBackground) {
			options.toolsBackground = toolsBackground;
		}

		if (overlayClose) {
			options.overlayClose = overlayClose === 'true';
		}

		if (shareStyle) {
			options.shareStyle = shareStyle;
		}

		if (share) {
			options.share = share === 'true';
		}

		if (numeration) {
			options.numeration = numeration === 'true';
		}

		if (navigation) {
			options.navigation = navigation === 'true';
		}

		/*if ( popup && popup === 'true' ) {
			options.popup = true;
		}*/

		new VenoBox(options);
	});
};

domReady(initModal);
