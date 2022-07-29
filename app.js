// Blog Map
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(33.7748,-84.2963), //Decatur, GA
      zoom:12,//higher # greater zoom
      styles: stylesArray
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({position: myCenter});
    marker.setMap(mapProp);
}
var stylesArray = [
    {
        "featureType": "all",
        "stylers": [
        ]
      },{
        "featureType": "poi.park",
        "elementType": "labels.text.stroke", //stroke - fill
        "stylers": [
          { "color": "#000000" }
        ]
      },{
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }
  ]