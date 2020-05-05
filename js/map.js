$(document).ready(function () {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -14.432, lng: -71.275 },
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-14.433, -71.275),
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: "Я фанат Артема Дзюбы"
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

})