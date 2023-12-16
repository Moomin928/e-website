const toggleButton = document.getElementById("toggleButton");
const menulist = document.getElementById("nav-bar")
toggleButton.addEventListener("click",function() {

		const isVisible = menulist.style.display === "flex";

	menulist.style.display = isVisible ? "none" : "flex";
})
