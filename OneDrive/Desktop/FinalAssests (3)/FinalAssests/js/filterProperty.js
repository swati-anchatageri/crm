// *display properties in the all properties section
const filterSearchProperties = () => {
    try {
        // const itemsPerPage = 10; // Adjust the number of items per page
        // let currentPage = 1;

        // const propertyListingsDiv = document.getElementById("showAllProperties");
        // const paginationContainer = document.getElementById("paginationContainer");

        // const renderProperties = (properties) => {
        //     propertyListingsDiv.innerHTML = properties.map(property => `
        // <div class="col-md-4">
        //     <div class="card-box-a card-shadow">
        //         <div class="img-box-a">
        //             <img src="${property.images[0]}" alt="" class="img-a img-fluid" style="height:30rem">
        //         </div>
        //         <div class="card-overlay">
        //             <div class="card-overlay-a-content">
        //                 <div class="card-header-a">
        //                     <h2 class="card-title-a">
        //                         <a href="property-single.html?name=${property.name}">${property.name}</a>
        //                     </h2>
        //                 </div>
        //                 <div class="card-body-a">
        //                     <div class="price-box d-flex">
        //                         <span class="price-a">${property.for} | ${property.price}</span>
        //                     </div>
        //                     <a href="property-single.html?name=${property.name}" class="link-a">
        //                     Click here to view
        //                     <span class="bi bi-chevron-right"></span>
        //                 </a>
        //                 </div>
        //                 <div class="card-footer-a">
        //                     <ul class="card-info d-flex justify-content-around">
        //                         <li>
        //                             <h4 class="card-info-title">Area</h4>
        //                             <span>${property.area} sq.ft<sup>2</sup></span>
        //                         </li>
        //                         <li>
        //                             <h4 class="card-info-title">Beds</h4>
        //                             <span>${property.beds}</span>
        //                         </li>
        //                         <li>
        //                             <h4 class="card-info-title">Baths</h4>
        //                             <span>${property.bathrooms}</span>
        //                         </li>
        //                         <li>
        //                             <h4 class="card-info-title">Garages</h4>
        //                             <span>${property.garages}</span>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        //     `).join('');
        // };

        // const renderPagination = (totalPages) => {
        //     paginationContainer.innerHTML = `
        //     <nav class="pagination-a">
        //         <ul class="pagination justify-content-end">
        //             <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
        //                 <a class="page-link" href="#" onclick="changePage(${currentPage - 1})" tabindex="-1">
        //                     <span class="bi bi-chevron-left"></span>
        //                 </a>
        //             </li>
        //             ${Array.from({ length: totalPages }, (_, index) => `
        //                 <li class="page-item ${currentPage === index + 1 ? 'active' : ''}">
        //                     <a class="page-link" href="#" onclick="changePage(${index + 1})">${index + 1}</a>
        //                 </li>
        //             `).join('')}
        //             <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
        //                 <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">
        //                     <span class="bi bi-chevron-right"></span>
        //                 </a>
        //             </li>
        //         </ul>
        //     </nav>
        // `;
        // };

        // const changePage = (newPage) => {
        //     currentPage = newPage;
        //     renderProperties(getPropertiesForCurrentPage());
        //     renderPagination(getTotalPages());
        // };

        // const getPropertiesForCurrentPage = () => {
        //     const startIndex = (currentPage - 1) * itemsPerPage;
        //     const endIndex = startIndex + itemsPerPage;
        //     return allProperties.slice(startIndex, endIndex);
        // };

        // const getTotalPages = () => Math.ceil(allProperties.length / itemsPerPage);

        const handleFormSubmit = () => {
            const selectedType = document.getElementById("searchFilterType").value;
            const selectedCity = document.getElementById("searchFilterCity").value;
            const selectedBedrooms = document.getElementById("searchFilterBedrooms").value;
            const filterGarage = document.getElementById("searchFilterGarage").checked;
            const filterPool = document.getElementById("searchFilterPool").checked;
            const filterGym = document.getElementById("searchFilterGym").checked;
            const selectedPrice = document.getElementById("searchFilterPrice").value;

            // console.log('selectedType', selectedType);
            // console.log('selectedCity', selectedCity);
            // console.log('selectedBedrooms', selectedBedrooms);
            // console.log('filterGarage', filterGarage);
            // console.log('filterPool', filterPool);
            // console.log('filterGym', filterGym);
            // console.log('selectedPrice', selectedPrice);

            // Filter properties based on the selected parameters
            const filteredProperties = allProperties.filter(property => {
                // Filter by type
                if (selectedType !== "all" && property.for !== selectedType) {
                    return false;
                }

                // Filter by city
                if (selectedCity !== "all" && property.city !== selectedCity) {
                    return false;
                }

                // Filter by bedrooms
                if (selectedBedrooms !== "all" && property.beds !== parseInt(selectedBedrooms)) {
                    return false;
                }

                // Filter by amenities
                if (filterGarage && !property.amenities.includes("Garage")) {
                    return false;
                }

                if (filterPool && !property.amenities.includes("Pool")) {
                    return false;
                }

                if (filterGym && !property.amenities.includes("Gym")) {
                    return false;
                }

                // Filter by price
                if (selectedPrice !== "0" && property.price > parseInt(selectedPrice)) {
                    return false;
                }

                return true;
            });

            // Render the filtered properties
            renderProperties(filteredProperties);

            // Update pagination based on the filtered properties
            renderPagination(Math.ceil(filteredProperties.length / itemsPerPage));
        };

        document.getElementById("submitPropBtnFromSearch").addEventListener("click", function (event) {
            event.preventDefault();
            handleFormSubmit();
        });


        // Fetch JSON data from the file
        fetch('properties.json')
            .then(response => response.json())
            .then(data => {
                allProperties = data;
                renderProperties(getPropertiesForCurrentPage());
                renderPagination(getTotalPages());
            })
            .catch(error => console.error('Error fetching data:', error));

    } catch (error) {
        console.log(error);
    }
};

filterSearchProperties();

