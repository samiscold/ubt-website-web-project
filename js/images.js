var i = 0;
var images = [];
var time = 3000;


images[0] = "img/ubt-studentat.jpg";
images[1] = "img/ubt-campus.jpg";
images[2] = "img/ubt-slide2.jpg";
images[3] = "img/ubt-slide-4.jpg";


function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}


	setTimeout("changeImg()", time);
}


window.onload = changeImg;
