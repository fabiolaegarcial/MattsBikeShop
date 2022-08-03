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
      zoom:10 //higher # greater zoom
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), options);

    //marker and info window for shop
    var marker = new google.maps.Marker({
      position: {lat:33.770468,lng:-84.292797},
      map: map,
      icon: {
        url: './home-images/MattsLogoWhite.png',
        scaledSize: new google.maps.Size(40, 40),
      },
    });
    var infoWindow = new google.maps.InfoWindow({
      content: "<h3> Matt's Bike Shop </h3>",
    });
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    })


    //adding biking trail markers
    trailsCoordinates.forEach(location => {
      addMarker(location);
    });

    function addMarker(location) {
      new google.maps.Marker({
        position: location,
        map: map,
        icon: {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Circle-icons-bike.svg",
          scaledSize: new google.maps.Size(30, 30),
        },
      });
    }
}


let trailsCoordinates = [
  {lat:33.847640, lng:-84.585740},
  {lat:33.804821, lng:-84.172440},
  {lat:33.899640, lng:-84.515740},
  {lat:33.747140, lng:-84.681740},
  {lat:33.747640, lng:-84.185740},
  {lat:33.647640, lng:-84.285740},
  {lat:33.717640, lng:-84.285740},
  {lat:33.647640, lng:-84.485740},
]




//individual pages for each trail (blog post) - currently reusing same page
let trailsList = [
  {"trailLink": "silver-comet-trail.html"}
]

// trail list clicking --> trail page
function openTrail(num) {
  let link = trailsList[num].trailLink;
  window.open(link, '_blank');

  // //index from trailsList array
  // let postTitle = document.querySelector('.post-title');
  // let postAddress = document.querySelector('#trail-address');
  // let postComments = document.querySelector('#post-comments');
  // let postText = document.querySelector('.post-content');
  // postTitle.innerHTML = trailsList[num].trailName;
}
