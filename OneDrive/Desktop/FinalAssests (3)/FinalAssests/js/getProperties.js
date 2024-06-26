
    // const propertyName = new URLSearchParams(window.location.search).get('id');


    // Fetch property details based on the name
    
    // fetch('back.php')
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.error) {
    //                 console.error('Error:', data.message);
    //             } else {
    //                 // console.log('Data fetched successfully:', data.data);
    //                 CurrentData = data.data;
    //                 const property = CurrentData.find(p => p.id === propertyName);
    //                 renderPropertyDetails(property);
    //             }
    //         })
    //         .catch(error => console.error('Error fetching data:', error));


    document.addEventListener("DOMContentLoaded", () => {
        const property = JSON.parse(localStorage.getItem("selectedProperty"));
        console.log("single product ", property);
        renderPropertyDetails(property)
    })
    const renderPropertyDetails = (property) => {
        const propertyDetailsDiv = document.getElementById("title-single-box");
        const propertyName = document.getElementById("propertyName");
        const breadcrumb_name = document.getElementById("breadcrumb_name");
        const property_city = document.getElementById("property_city");
        const property_price = document.getElementById("property_price");
        const table_property_city = document.getElementById("table_property_city");
        const table_property_location = document.getElementById("table_property_location");
        const table_property_type = document.getElementById("table_property_type");
        const table_property_area = document.getElementById("table_property_area");
        const table_property_for = document.getElementById("table_property_for");
        const table_property_beds = document.getElementById("table_property_beds");
        const table_property_bathrooms = document.getElementById("table_property_bathrooms");
        const table_property_garage = document.getElementById("table_property_garage");
        const property_description = document.getElementById("property_description");
        const property_amenities = document.getElementById("property_amenities");
        const inputProperty = document.getElementById("inputProperty");
        const property_images = document.getElementById("property_images");
        const property_video = document.getElementById("pills-video");
        const property_brochure = document.getElementById("pills-plans");
        const property_map = document.getElementById("pills-map");
        const sideConfiguration = document.getElementById("sideConfiguration");
        const sideArea = document.getElementById("sideArea");
        const sidePricePerFeet = document.getElementById("sidePricePerFeet");
        const developerDetails = document.getElementById("developerDetails");
        const developerLogo = document.getElementById("developerLogo");
        const developerShort = document.getElementById("developerShort");

        console.log(property.images)


        if (property) {
            // Display property details
            propertyName.textContent = property.name;
            inputProperty.innerText = property.name;
            breadcrumb_name.innerText = property.name;
            property_city.innerText = property.city;
            table_property_location.innerText = property.location;
            property_price.innerText = property.price;
            table_property_city.innerText = property.city;
            developerDetails.innerText = property.developer;
            developerLogo.innerText = property.developerLogo;
            developerShort.innerText = property.developer_short;
            table_property_type.innerText = property.type;
            table_property_area.innerText = property.area;
            table_property_for.innerText = property.available_for;
            table_property_date.innerText = property.date;
            table_property_beds.innerText = property.bedrooms;
            table_property_garage.innerText = property.garages;
            property_description.innerText = property.description;
            sideConfiguration.innerText = property.configuration;
            sideArea.innerText = property.area;
            sidePricePerFeet.innerText = property.price_per_feet;

            

            developerLogo.innerHTML = `<img src="${property.developer_logo}" alt="" style="width:100%;">`

            // property video
            if( property.video){
            const propVideo = document.createElement('video')
            propVideo.poster = property.video
            propVideo.controls = true; // Set controls attribute to true
            propVideo.src = property.video;
            propVideo.alt = 'video not available';
            propVideo.style = 'width:100%;';
            property_video.appendChild(propVideo);}


            // property floor plan
           
            const propBrochure = document.createElement('a')
            propBrochure.href = property.brochure;
            propBrochure.className = 'btn btn-c'; // Replace 'your-class-name' with
            propBrochure.textContent = 'Download Brochure';
            property_brochure.appendChild(propBrochure);

            // property map location
            if(property.map){
            const locationMap = document.createElement('iframe')
            locationMap.src = property.map
            locationMap.frameborder = '0'
            locationMap.width = '100%'
            locationMap.height = '400'
            locationMap.allowfullscreen = true
            locationMap.className = ''
            property_map.appendChild(locationMap);}

           
            const prop_img = property.images;
            console.log(prop_img)
            prop_img.forEach((url, index) => {
            const slide = document.createElement("div");
            slide.classList.add("carousel-item-b", "swiper-slide");
            if (index === 0) {
                slide.classList.add("active"); // Ensure the first slide is active
            }
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Slide Image";
            img.style.height = "25rem";
            slide.appendChild(img);
            property_images.appendChild(slide);
        });
            
        const prop_amenities = property.amenities;
        prop_amenities.forEach((each) => {
            const li = document.createElement('li');
            li.textContent = each;
            property_amenities.appendChild(li);
        });
            
            
        } else {
            propertyDetailsDiv.innerHTML = '<p>Property not found.</p>';
        }
    };

    