/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("lista-dropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks on next item
//matches.(hasClass)
window.onclick = function (event) {
	if (!event.target.matches('.butoni-dropdown')) {
		var dropdowns = document.getElementsByClassName("loopa-dropdown");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
//questionmark
function aFunction() {
	var x = document.getElementById("shortcuts");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function wFunction() {
	var pp = document.getElementById("kaka"); //change this
	var zz = document.getElementById("papa");
	if (pp.style.display === "none") {
		pp.style.display = "block";
		zz.style.display = "none";
	} else {
		pp.style.display = "none";
		zz.style.display = "block";
	}
}