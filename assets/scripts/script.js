const pboxOverlay = document.getElementById("pbox-overlay");
const pbox1 = document.getElementById("pbox-1");

pbox1.addEventListener("mouseover", function () {
    console.log("mouseover")
    event.document.getElementById("pbox-overlay").setAttribute("style", "opacity: 0.5");

})