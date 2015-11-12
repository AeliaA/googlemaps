var mapOptions = {

	//calling the latitude n longitude
	center: new google.maps.LatLng(32.61603, 44.02488),
	zoom: 12,
	//
	mapTypeId: google.maps.MapTypeId.TERRAIN,
}
	
//
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

//getting a variable to hold a marker to mark the place

var marker = new google.maps.Marker({
	position: new google.maps.LatLng(32.61603, 44.02488),
	
	//Adding a diff marker
	icon:'assets/images/pointer.png',
	animation:google.maps.Animation.BOUNCE
});
marker.setMap(map);


//Info Window
var infoWindowOptions = {
	content:'I am not HERE :( !'
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

//Adding an event
google.maps.event.addListener(marker,'click',function(){
	infoWindow.open(map, marker);
});
















