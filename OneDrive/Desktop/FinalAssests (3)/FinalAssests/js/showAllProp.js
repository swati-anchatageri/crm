// *display properties in the all properties section

var allProperties = []
var currentPage = 1
var startIndex = 1
var endIndex = 7



try {
         const renderProperties = (properties) => {
        $('#showAllProperties').empty();
        // Append new content using jQuery
        const slicedProperties = properties.slice(startIndex, endIndex);
       
        slicedProperties.forEach(property => {
            const propertyCard = $(`
                <div class="col-md-6">
                    <div class="card mb-3">
                        <img src="${property.images.split(',')[0]}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"><a href="property-single.html?id=${property.id}">${property.name}</a></h5>
                            <p class="card-text">${property.location}, ${property.city}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item list--group--divide d-flex justify-content-between align-items-center"><span>${property.available_for}</span> <span>${property.price} onwards</span></li>
                            <li class="list-group-item list--group--divide d-flex justify-content-between align-items-center"><span>Area </span> <span>${property.area}</span> </li>
                            <li class="list-group-item list--group--divide d-flex justify-content-between align-items-center"><span>Configuration</span> <span>${property.configuration}</span> </li>
                        </ul>
                        <div class="card-body d-flex justify-content-between">
                            <a href="property-single.html?id=${property.id}" class="card-link btn btn-outline-info">View</a>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#contactModal" class="card-link btn btn-outline-success">Contact</button>
                        </div>
                    </div>
                </div>`);

            $('#showAllProperties').append(propertyCard);
        });
        $('#paginationContainer').empty();
        renderPagination(properties.length)
    };


 
    const renderPagination = (items) => {
        var count = 1
        // Append new content using jQuery
        const paginationList = $('<ul class="pagination justify-content-center"></ul>');
        for (let page = 1; page <= items; page += 6) {
            const listItem = $(`<li class="page-item page-link pagination--page" id="page_${count}" data-page="${count}" style="cursor:pointer;">${count}</li>`);
            paginationList.append(listItem);
            count++
            if (currentPage === 1 && page === 1) {
                listItem.addClass('active');
            } else {
                // Remove 'active' class from other items
                listItem.removeClass('active');
            }
        }



        // Create the navigation container
        const navContainer = $('<nav aria-label="Page navigation"></nav>');
        navContainer.append(paginationList);

        // Append the navigation container to the paginationContainer
        $('#paginationContainer').append(navContainer);


        $(document).on('click', '.pagination--page', function () {
            $('.pagination--page').removeClass('active');
     
            var id = this.id.split('_')[1]
            currentPage = id
            endIndex = currentPage * 6
            startIndex = endIndex - 6
            $(this).addClass('active');
            // sendDataToFilter(currentPage,startIndex)
            renderProperties(getFilteredProperties());
        });
    };


   const getURLParameter = (name) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    };

    // Set selected values in the form after page reload
    const setFormValues = () => {
        const city = getURLParameter('city');
        const type = getURLParameter('type');
        const bedrooms = getURLParameter('bedrooms');
        const price = getURLParameter('price');

        // Set values in the form
        $('#filterCity').val(city);
        $('#filterType').val(type);

        if (bedrooms) {
            const bedroomArray = bedrooms.split(',');
            bedroomArray.forEach(bedroom => {
                $(`input[name="${bedroom}"]`).prop('checked', true);
            });
        }

        $('#filterPrice').val(price);
    };

    // Call setFormValues on page load
    setFormValues();

    $('#filterProperty').submit(function (e) {
        e.preventDefault();

        // Get selected values
        const type = $('#filterType').val();
        const city = $('#filterCity').val();
        const bedrooms = [];
        $('input[name^="bhk"]:checked').each(function () {
            bedrooms.push($(this).val());
        });
        const price = $('#filterPrice').val();

        // Construct the URL
        // Construct the URL
        let url = 'property-grid.html?';

        if (type !== 'all' && type !== null) {
            url += `type=${encodeURIComponent(type)}&`;
        }

        if (city !== 'all') {
            url += `city=${encodeURIComponent(city)}&`;
        }
        // Remove the trailing '&' if present
        url = url.replace(/&$/, '');

        // Redirect to the constructed URL
        window.location.href = url;

    });

    
   const getFilteredProperties = () => {
    const { city, locality, type,price} = getURLParameters();
            // Filter properties based on URL parameters
            const filteredProperties = allProperties.filter(property => {
                if (city && property.city !== city) {
                    return false;
                }
                if (locality && property.location.toLowerCase().includes(locality.toLowerCase())) {
                    return true;
                }
                if (type == 'all' || type == null) {
                    return true;
                }

                else if (type && property.available_for != type) {
                    return false;
                }
            
                return true;
            });

    return filteredProperties;
    };


    fetch('back.php')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error:', data.message);
            } else {
                // console.log('Data fetched successfully:', data.data);
                allProperties = data.data;
                // Get and render filtered properties based on URL parameters
                renderProperties(getFilteredProperties());
               

            }
        })
        .catch(error => console.error('Error fetching data:', error));





const getURLParameters = () => {
const searchParams = new URLSearchParams(window.location.search);
const cityParam = searchParams.get('city');
const localityParam = searchParams.get('locality');
const typeParam = searchParams.get('type');
const priceParam = searchParams.get('price');

return { city: cityParam, locality: localityParam,type:typeParam, price:priceParam };
};


} catch (error) {
    console.log(error);
}

// Assuming you're using fetch API or another method to make the request

