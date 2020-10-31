// Animation Fade In script -------------------------- //

(function() {
  let intro = document.querySelector('.intro');
  let specialsSection = document.querySelector('.special-offers');
  let exploreMenu = document.querySelector('.explore-menu');
  let specialItems = document.querySelectorAll('.special-items');
  let reservations = document.querySelector('#reservations');
  let form = document.querySelector('.reserve-form');
  let menuContainer = document.querySelector('#restaurant-menu');
  let menuFilter = document.querySelector('.restaurant-filter');
  let feedback = document.querySelector('#feedback');
  let testimonials = document.querySelector('.testimonials');
  let contactContainer = document.querySelector('#contact');
  let contactInfo = document.querySelector('.contact-us');

  window.onscroll = function() {
    myFunction();
  }

  function myFunction() {

    let navbar = document.querySelector('#navigation');
    let sticky = navbar.getBoundingClientRect().top;

    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky');
    }

  }


  function moveEffects() {

    let top = window.pageYOffset;

    let specialsTop = specialsSection.getBoundingClientRect().top + 500;
    let reservationsTop = reservations.getBoundingClientRect().top + 700;
    let menuTop = menuContainer.getBoundingClientRect().top + 300;
    let feedbackTop = feedback.getBoundingClientRect().top + 500;
    let contactTop = contactContainer.getBoundingClientRect().top + 500;

    intro.style.transform = `translateY(-${top / 3}px)`;
    intro.style.opacity = 1 - Math.max(top / (window.innerHeight * 0.4), 0);

    if ( specialsTop < window.innerHeight) {

      for (var i = 0; i < specialItems.length; i++) {
        task(i);
      }

      function task(i) {
        setTimeout(function () {
            specialItems[i].classList.add('clear');
        }, 300 * i);
      }

      exploreMenu.classList.add('clear');
    }

    if (reservationsTop < window.innerHeight) {
      form.classList.add('clear');
    }

    if (menuTop < window.innerHeight) {
      menuFilter.classList.add('clear');
    }

    if (feedbackTop < window.innerHeight) {
      testimonials.classList.add('clear');
    }

    if (contactTop < window.innerHeight) {
      contactInfo.classList.add('clear');
    }

    window.requestAnimationFrame(moveEffects);
  }
  window.requestAnimationFrame(moveEffects);

})();


// Sticky Navbar  -------------------------------------- //



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




// ---------------------------------------------- //
// jQuery Sccripts ---------------------------------------- //
// ---------------------------------------------- //


  $(document).ready(function() {

    // $(".intro").hide().fadeIn(1000);

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


    // Smooth Scroll Menu -------------------------------------- //
    $('#navbarNav a, .explore-menu a').on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;
          var menu = $("nav").height();
          console.log(menu);
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - menu
          }, 800);
        } // End if
      });


      // Reservation Form -------------------------------------- //
      $('#date').datepicker({
        firstDay: 1,
        showButtonPanel: true,
        currentText: "Today",
        closeText: "Close",
        minDate: 0,
        maxDate: "+3M"
      });

      $('#time').selectmenu();

      $('#number').spinner({
        min: 1,
        max: 10
      });

  });
