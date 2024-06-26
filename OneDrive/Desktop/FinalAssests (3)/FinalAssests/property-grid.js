async function propData() {
    try {
        let response = await fetch("http://localhost:3000", { mode: "cors" });
        let apData = await response.json();
        console.log(apData);
        let showAllProperties = document.getElementById("showAllProperties");
        apData.map((e,index) => {
            showAllProperties.innerHTML += `
        <div id="propCard">
        <div id="imgDiv">
            <img name="Slide" src="${e.images[0]}" height="100%" width="100%">
            <button id="leftSlide"><i class="fa-solid fa-chevron-left"></i></button>
            <button id="rightSlide"><i class="fa-solid fa-chevron-right"></i></button>    
        </div>
        <div id="propNameLoc">
        <h5>${e.name}</h5>
        <h6>${e.location}</h6>
        </div>
        <div id="forSale">
        <p>Sell</p>
        <p>${e.price_range}</p>
        </div>
        <div id="propArea">
        <p>Area</p>
        <p>${e.area}</p>
        </div>
        
        <div id="propCon">
        <p>Configuration</p>
        <p>${e.configuration}</p>
        </div>
        <div id="propOpt">
        <button id="viewBtn" class="viewBtn" data-index="${index}">View</button>
        <button id="cntBtn" class="cntBtn" data-index="${index}">Contact</button>
        </div>
        </div>
        
        `

        })


         let viewButtons = document.querySelectorAll('.viewBtn');
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                let index = event.target.getAttribute('data-index')
                console.log(index)
                let data=apData[index]
                localStorage.setItem("selectedProperty", JSON.stringify(data));
                window.open("./property-single.html");
            });
        });

        let contactButtons = document.querySelectorAll('.cntBtn');
        contactButtons.forEach(button => {
            button.setAttribute('data-bs-toggle',"modal")
            button.setAttribute('data-bs-target','#contactModal')
            button.setAttribute('class','card-link btn btn-outline-success')
            button.addEventListener('click', () => {
                document.getElementById('#popupModal').click();
    });
        });
        
    } catch (error) {
        console.log(error);
    }
}
window.onload = propData;
