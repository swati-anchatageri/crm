const getHomeProperties = () => {
  const homeDisplayProperties = document.getElementById("homeDisplayProperties");

  const homeProperties = (properties) => {
    const limitedProperties = properties.slice(0, 10);
    if (homeDisplayProperties) {
      homeDisplayProperties.innerHTML = limitedProperties.map(property => `
          <div class="carousel-item-b swiper-slide">
          <div class="card mb-3">
          <img src="${property.images.split(',')[0]}" class="card-img-top" alt="..." >
          <div class="card-body">
            <h5 class="card-title"><a href="property-single.html?id=${property.id}">${property.name}</a></h5>
            <p class="card-text">${property.location}, ${property.city}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item list--group--divide d-flex justify-content-between align-items-center"><span>${property.available_for}</span> <span>${property.price} onwards</span></li>
          <li class="list-group-item list--group--divide d-flex justify-content-between align-items-center"><span>Area </span> <span>${property.area}</span> </li>
          <li class="list-group-item list--group--divide d-flex justify-content-between align-items-center"><span>Configuration</span> <span> ${property.configuration}</span> </li>
          </ul>
          <div class="card-body d-flex justify-content-between">

            <a href="property-single.html?id=${property.id}"" class="card-link btn btn-outline-info">View</a>
            <button type="button" class="card-link btn btn-outline-success"  data-bs-toggle="modal" data-bs-target="#contactModal">Contact</button>
          </div>
          </div>
          </div>`).join('');
    }

  };


     fetch('back.php')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error('Error:', data.message);
                } else {
                    // console.log('Data fetched successfully:', data.data);
                    showHomeProperties = data.data;
                    homeProperties(showHomeProperties)
                }
            })
            .catch(error => console.error('Error fetching data:', error));
};

getHomeProperties();

document.addEventListener("DOMContentLoaded", function () {
  var startTime;

  function animateModal(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    if (timestamp - startTime < 6000) { // 6 seconds delay
      requestAnimationFrame(animateModal);
    } else {
      var modalButton = document.getElementById("popUpModalBtn");

      if (modalButton) {
        modalButton.click();
      }
    }
  }

  requestAnimationFrame(animateModal);
});



var searchForm = document.getElementById("searchForm")
if (searchForm) {

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchCity = document.getElementById("searchCity").value;
    const searchLocality = document.getElementById("searchLocality").value;

    const searchData = {
      "city": searchCity,
      "locality": searchLocality
    };

    // Convert the object to a JSON string before storing in sessionStorage
    const searchDataString = JSON.stringify(searchData);

    // Store the search data in sessionStorage
    sessionStorage.setItem("searchData", searchDataString);

    // Now, you can redirect to another page or trigger the search logic
    // based on the stored search parameters
  });
}


const handleFormSubmitIndex = () => {
  try {
    const selectedCity = document.getElementById("searchCity").value;
    const selectedLocality = document.getElementById("searchLocality").value;

    // Construct the URL with search parameters
    const searchURL = `property-grid.html?city=${selectedCity}&locality=${encodeURIComponent(selectedLocality)}`;

    // Redirect to property-grid.html with search parameters
    window.location.href = searchURL;
  } catch (error) {
    console.error('Error handling form submission:', error);
  }
};


var searchForm = document.getElementById("searchForm")
if (searchForm) {
  document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    handleFormSubmitIndex();
  });
}


document.addEventListener("DOMContentLoaded", function () {
  var startTime;

  function animateModal(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    if (timestamp - startTime < 6000) { // 6 seconds delay
      requestAnimationFrame(animateModal);
    } else {
      var modalButton = document.getElementById("popUpModalBtn");
      if (modalButton) {
        modalButton.click();
     
      }
    }
  }
  requestAnimationFrame(animateModal);
});


const radioButtons = document.querySelectorAll('input[name="nameOfTheCity"]');
const hiddenInput = document.getElementById('searchCity');
const selectCityBtn = document.getElementById('selectCityBtn');

radioButtons.forEach((radio) => {
  radio.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    hiddenInput.value = radio.value;
    selectCityBtn.innerText = radio.value;
  });
});




