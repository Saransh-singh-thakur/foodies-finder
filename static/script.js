
// --------------------function for getting location and address----------------------
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function reverseGeocode(latitude, longitude) {
  const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

  fetch(nominatimUrl)
    .then(response => response.json())
    .then(data => {
      if (data.address) {
        const address = `${data.address.road || ''} ${data.address.house_number || ''} ${data.address.city || data.address.town || data.address.village || ''} ${data.address.state || ''} ${data.address.postcode || ''} ${data.address.country || ''}`;
        document.getElementById("location").innerHTML = `Address: ${address}`;
      } else {
        document.getElementById("location").innerHTML = "Address not found.";
      }
    })
    .catch(error => {
      console.error("Error fetching address:", error);
      document.getElementById("location").innerHTML = "Error fetching address.";
    });
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  document.getElementById("location").innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}<br>Fetching address...`;
  reverseGeocode(latitude, longitude);
}

function showError(error) {
  let errorMessage = "";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      errorMessage = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      errorMessage = "An unknown error occurred.";
      break;
  }
  document.getElementById("location").innerHTML = errorMessage;
}

// Call this function when your page loads
getLocation();






//-------------------- Slider functionality for #resto-option images----------------------
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  // Optional: Auto slide every 5 seconds
  setInterval(showNext, 5000);

  // Initialize
  showSlide(currentIndex);
});







// -----------function for  filtering restaurant--------------------

function filterCards(criteria) {
  const cards = document.querySelectorAll('#fourthpage .card');

  cards.forEach(card => {
    const hasOffer = card.getAttribute('data-offer') === 'true';
    const rating = parseFloat(card.getAttribute('data-rating'));
    const type = card.getAttribute('data-type');

    let show = false;

    if (criteria === 'all') {
      show = true;
    } else if (criteria === 'offer') {
      show = hasOffer;
    } else if (criteria === 'rating') {
      show = rating >= 4.5;
    } else {
      show = type === criteria;
    }

    card.style.display = show ? 'block' : 'none';
  });
}