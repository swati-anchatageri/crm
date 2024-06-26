// Vanilla JavaScript Simple Counter
function simpleCounter(element, options) {
    var settings = Object.assign(
        {
            start: 0,
            end: 100,
            easing: "swing",
            duration: 400,
            complete: ""
        },
        options
    );

    var thisElement = document.querySelector(element);

    var count = settings.start;
    var startTime;

    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;

        var progress = timestamp - startTime;
        var percentage = Math.min(progress / settings.duration, 1);

        count = settings.start + Math.ceil((settings.end - settings.start) * percentage);
        thisElement.textContent = count;

        if (percentage < 1) {
            requestAnimationFrame(updateCounter);
        } else if (typeof settings.complete === "function") {
            settings.complete();
        }
    }

    requestAnimationFrame(updateCounter);
}

// Usage
simpleCounter("#number1", { end: 12, duration: 3000 });
simpleCounter("#number2", { end: 55, duration: 3000 });
simpleCounter("#number3", { end: 359, duration: 2000 });
simpleCounter("#number4", { end: 246, duration: 2500 });

// AUTHOR LINK
var aboutMeImg = document.querySelector(".about-me-img");
var authorWindowWrapper = document.querySelector(".authorWindowWrapper");

if (aboutMeImg) {
    aboutMeImg.addEventListener("mouseover", function () {
        authorWindowWrapper.style.display = "block";
        authorWindowWrapper.querySelector("p").classList.add("trans");

        aboutMeImg.addEventListener("mouseout", function () {
            authorWindowWrapper.style.display = "none";
            authorWindowWrapper.querySelector("p").classList.remove("trans");
        });

    });
}


