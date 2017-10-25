import select from 'select-dom';

export default () => {
	const toolbar = select('.pr-toolbar');

	$('.js-diff-progressive-container').on('details:toggled', '.file', ({target}) => {
		const elOffset = target.getBoundingClientRect().top;
		const toolbarHeight = toolbar.getBoundingClientRect().top;

		// Bring element in view if it's above the PR toolbar
		if (elOffset < toolbarHeight) {
			window.scrollBy(0, elOffset - toolbarHeight);
		}
	});
};
