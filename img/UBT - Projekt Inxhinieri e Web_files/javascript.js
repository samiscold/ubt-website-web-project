
function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('#section1 h2');
  scrollPos = window.scrollY;

  if (scrollPos <= 800) {
    headerText.style.opacity = 1 - (scrollPos / 600);
    headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
  }
}
window.addEventListener('scroll', scrollBanner);

function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('#section1');
  scrollPos = window.scrollY;

  if (scrollPos <= 800) {
    headerText.style.opacity = 1 - (scrollPos / 600);
    headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
  }
}
window.addEventListener('scroll', scrollBanner);





window.onscroll = () => {
    const nav = document.querySelector('#headerbar');
    const navbar = document.querySelector('#navbar')
    if(this.scrollY <= 25) nav.className = ''; else nav.className = 'scroll';
    if(this.scrollY <= 25) navbar.className = ''; else navbar.className = 'decrease';

  };



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("lista-dropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks on next item
  //matches.(hasClass)
  window.onclick = function(event) {
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
  var pp = document.getElementById("kaka");//change this
  var zz = document.getElementById("papa");

    if (pp.style.display === "none") {
      pp.style.display = "block";
      zz.style.display = "none";
    } else {
      pp.style.display = "none";
      zz.style.display = "block";
    }
  }




