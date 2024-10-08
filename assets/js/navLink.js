export const navLinks = () => {
	const navLinks = $(".navlinks").children();
	const pageContainers = $(".pageContainer");
	const loading = $(".loadingIndicator");
	const notFoundPage = $(".notFoundPage");
	const searchIcon = $(".search_Icon");
	const searchInput = $(".search_inputText");

	let defaultIndex = 0;
	let isTransitioning = false;

	const navTab = (index) => {
		// Check if already transitioning, prevent further clicks
		if (isTransitioning) return;

		isTransitioning = true;

		navLinks.removeClass("active");
		$(navLinks[index]).addClass("active");

		if (index >= pageContainers.length) {
			loading.hide();
			notFoundPage.show();
			document.documentElement.scrollTop = 0;
			pageContainers.hide();
			isTransitioning = false;
			searchInput.removeClass("activeInput");
			searchIcon.removeClass("activeIcon");
			return;
		}

		loading.show();
		notFoundPage.hide();
		pageContainers.hide();
		searchInput.removeClass("activeInput");
		searchIcon.removeClass("activeIcon");

		setTimeout(() => {
			loading.hide();

			pageContainers.removeClass("activePage");
			$(pageContainers[index]).addClass("activePage");

			$(pageContainers[index]).show();

			isTransitioning = false;
		}, 1000);

		document.documentElement.scrollTop = 0;
	};

	navLinks.on("click", (event) => {
		const index = $(event.target).index();
		navTab(index);
	});

	navTab(defaultIndex);
};
