function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(33.7748,-84.2963), //Decatur, GA
      zoom:12,//higher # greater zoom
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }