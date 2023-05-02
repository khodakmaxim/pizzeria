$(function () {

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

});


let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.39156584637356, lng: 30.380727317493484 },
        zoom: 17,
    });

}
window.initMap = initMap;