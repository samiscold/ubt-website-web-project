function myFunction() {
	document.getElementById("lista-dropdown").classList.toggle("show");
}

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

function aFunction() {
	var x = document.getElementById("shortcuts");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function wFunction() {
	var pp = document.getElementById("kaka"); //change name
	var zz = document.getElementById("papa");
	if (pp.style.display === "none") {
		pp.style.display = "block";
		zz.style.display = "none";
	} else {
		pp.style.display = "none";
		zz.style.display = "block";
	}
}