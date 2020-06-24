$(document).ready(function() {

  $(".intro").hide().fadeIn(1000);

// Return to Top button config -------------------------------------- //
  $("#return-to-top").click(function() {      // When arrow is clicked
      $("body,html").animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });


  // Testimonials Slider -------------------------------------- //
  $("#testimonial-slider").owlCarousel({
      items:3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,2],
      itemsMobile:[650,1],
      pagination:true,
      autoPlay:true
  });

});


// Sticky Navbar  -------------------------------------- //

window.onscroll = function() {
  myFunction()
  };

var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Restaurant Menu Filter -------------------------------------- //

filterSelection("signature")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "signature") c = "signature";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i] + " is-animated";
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 2);
    }
  }

  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}


// Init Google Maps -------------------------------------- //

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var la = {lat: 34.0382396, lng: -118.2466301};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: la,
        disableDefaultUI: true,
        gestureHandling: 'none',
        zoomControl: false,
        styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'poi.business',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.school',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.place_of_worship',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.medical',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.attraction',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.sports_complex',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.government',
        stylers: [{visibility: 'off'}]
      }
    ]
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: la, map: map});
}
