

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 8000;	// Time Between Switch
	 
// Image List
images[0] = "img/ubt-studentat.jpg";
images[1] = "img/ubt-campus.jpg";
images[2] = "img/ubt-slide2.jpg";
images[3] = "img/ubt-slide-4.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];


	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
      i++; 

	} else { 
        // Reset Back To O
  
		i = 0;
	}

    
	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// function stop() {

//     var counter = 0;

//     if (i > 0) {
    
//     document.slide.src = images[--i];
//         time = 999999;
//         counter ++;
//     }



    

//     if(counter == 1 ) {
//         time = 0;
//     }

//     if(counter > 1 ) {
//         time = 2000;
//     }

//     document.slide.src = images[i];
//     time = 999999;
    
// }



// Run function when page loads
window.onload=changeImg;
