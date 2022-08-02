// navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};




// Blog Map
function initMap() {
    var options = {
      center:new google.maps.LatLng(33.7748,-84.2963), //Decatur, GA
      center: {lat:33.770468,lng:-84.292797},
      zoom:12 //higher # greater zoom
      // styles: stylesArray
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), options);

    var marker = new google.maps.Marker({
      position: {lat:33.770468,lng:-84.292797},
      map: map
    });

    var infoWindow = new google.maps.InfoWindow({
      content: "<h1> TEST </h1>"
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    })

}
// var stylesArray = [
//     {
//         "featureType": "all",
//         "stylers": [
//         ]
//       },{
//         "featureType": "poi.park",
//         "elementType": "labels.text.stroke", //stroke - fill
//         "stylers": [
//           { "color": "#ffffff" }
//         ]
//       },{
//         "featureType": "landscape",
//         "elementType": "labels",
//         "stylers": [
//           { "visibility": "off" }
//         ]
//       },{
//         "featureType": "poi.trail",
//         "elementType": "labels.text.fill", //stroke - fill
//         "stylers": [
//           { "color": "#000000" }
//         ]
//       }
//   ]



