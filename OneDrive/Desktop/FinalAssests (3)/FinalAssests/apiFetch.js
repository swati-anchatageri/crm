
async function data(){
    try {
        let response = await fetch("http://localhost:3000", {mode:'cors'})
    // console.log(response)
    let apData= await response.json()
    console.log(apData)
    let table_property_city = document.getElementById("table_property_city")
    let table_property_location = document.getElementById("table_property_location")
    let table_property_type = document.getElementById("table_property_type")
    let table_property_date = document.getElementById("table_property_date")
    let table_property_for = document.getElementById("table_property_for")
    let table_property_area = document.getElementById("table_property_area")
    let table_property_beds = document.getElementById("table_property_beds")
    let table_property_garage = document.getElementById("table_property_garage")
    let propertyName = document.getElementById("propertyName")
    let property_city = document.getElementById("property_city")
    let sideArea = document.getElementById("sideArea")
    let sidePricePerFeet=document.getElementById("sidePricePerFeet")
    let property_description = document.getElementById("property_description")
    let property_images = document.getElementById("property_images")
    let amenities = document.getElementById("property_amenities")
    let property_price = document.getElementById("property_price")
    let developerDetails = document.getElementById("developerDetails")
    let video = document.getElementById("pills-video-tab")
    let brochure = document.getElementById("pills-plans-tab")
    let locationLink = document.getElementById("pills-map-tab")
    apData.map((e)=>{
        // console.log(e)
        table_property_city.textContent=e.city;
        table_property_location.textContent=e.location;    
        table_property_type.textContent=e.type;
        table_property_date.textContent=e.date;
        table_property_for.textContent=e.for; 
        table_property_area.textContent=e.area;
        table_property_beds.textContent=e.area;
        table_property_garage.textContent=e.garages;
        propertyName.textContent=e.name;
        property_city.textContent=e.location;
        sideArea.textContent=e.area;
        sidePricePerFeet.textContent=e.price;
        property_description.textContent=e.description;
        property_price.textContent=e.price;
        amenities.textContent=e.amenities;
        developerDetails.textContent=e.developer
        property_images.innerHTML=`<img src=${e.images[0]} height="100%" width="100%">`
        brochure.setAttribute("href", `${e.brochures}`)
        brochure.setAttribute("target", "_blank")
        locationLink.setAttribute("href", `${e.locationLink}`)
        
        console.log(e.locationLink)
        
    })
    
    } catch (error) {
        console.log(error)
    }
}
window.onload= data