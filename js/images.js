var i = 0;
var images = []; 
images[0] = "img/ubt-studentat.jpg";
images[1] = "img/ubt-campus.jpg";
images[2] = "img/ubt-slide2.jpg";
images[3] = "img/ubt-slide-4.jpg";


//auto change
function changeImg() {
		document.slide.src = images[i];
}

// on clicks

function prev() {
	if(i <= 0 ) i = images.length;
	i--;
	return changeImg();
}

function next() {
	if(i >= images.length - 1 ) i = -1
	i++;
	return changeImg();
}



window.onload = changeImg();
