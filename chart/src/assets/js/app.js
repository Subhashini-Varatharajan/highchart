// Aside Menu
const asideMenu = document.querySelector("#asideMenu");
const bodyMenu = document.querySelector("body");

asideMenu.addEventListener("mouseover", (e) => {
	e.stopPropagation();
	bodyMenu.classList.add("openAside");
});
asideMenu.addEventListener("mouseout", (e) => {
	e.stopPropagation();
	bodyMenu.classList.remove("openAside");
	console.log('mouseout');
}, );
AsideToggleMenu.addEventListener("click", (e) => {
	e.stopPropagation();
	bodyMenu.classList.add("openAside1");
});
AsideToggleMenu.addEventListener("click", (e) => {
	e.stopPropagation();
	bodyMenu.classList.remove("openAside1");
	console.log('click');
}, );

document.getElementById("menu-btn").addEventListener("click", e =>{
	document.getElementById("AsideToggleMenu").classList.toggle("-translateX-100");
});
document.getElementById("close_menu").addEventListener("click", e =>{
	document.getElementById("AsideToggleMenu").classList.toggle("-translateX-100");
});

function subMenu(el, element) {
	var thisElem = document.getElementById(el);
	thisElem.classList.toggle("subMenuOpen");
	element.parentElement.classList.toggle('subMenu-active');
}

function superSubMenu(el, element) {
	var thisElem = document.getElementById(el);
	thisElem.classList.toggle("superSubMenuOpen");
	// element.
	element.parentElement.classList.toggle('superSubMenu-active');
}

// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})
