let handleItemClick = (str) => {
	var element = document.getElementById(str);
	var headerOffset = document.getElementById("nav-bar").offsetHeight;
	var elementPosition = element.getBoundingClientRect().top;
	var offsetPosition = elementPosition - headerOffset;

	window.scrollBy({
		top: offsetPosition,
		behavior: "smooth",
	});
};

export default handleItemClick;
