document.addEventListener("DOMContentLoaded", function () {
    const handleSearchFormSubmit = () => {
        // Get selected values from the form
        const selectedType = document.getElementById("searchFilterType").value;
        const selectedCity = document.getElementById("searchFilterCity").value;
        const selectedBedrooms = document.getElementById("searchFilterBedrooms").value;
        const filterGarage = document.getElementById("searchFilterGarage").checked;
        const filterPool = document.getElementById("searchFilterPool").checked;
        const filterGym = document.getElementById("searchFilterGym").checked;
        const selectedPrice = document.getElementById("searchFilterPrice").value;

        // Construct the query parameters for the URL
        const queryParams = new URLSearchParams();
        queryParams.set("type", selectedType);
        queryParams.set("city", selectedCity);
        queryParams.set("bedrooms", selectedBedrooms);
        queryParams.set("garage", filterGarage);
        queryParams.set("pool", filterPool);
        queryParams.set("gym", filterGym);
        queryParams.set("price", selectedPrice);

        // Redirect to property-grid.html with the constructed query parameters
        window.location.href = `property-grid.html?${queryParams.toString()}`;
    };

    document.getElementById("filterSearchProperty").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        handleSearchFormSubmit();
    });
});
