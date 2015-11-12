var mapOptions = {

//calling the latitude n longitude
	center: new google.maps.LatLng(32.61603, 44.02488),
// zoom level
	zoom: 2,
//you can add TERRAIN  or other styles
	mapTypeId: google.maps.MapTypeId.TERRAIN,
}
	
//
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

//getting a variable to hold a marker to mark the place
var marker = new google.maps.Marker({
	position: new google.maps.LatLng(32.61603, 44.02488),

//Adding a diff marker
	icon:'assets/images/pointer.png',

//Adding an animation
animation:google.maps.Animation.BOUNCE
});
marker.setMap(map);

var marker = new google.maps.Marker({
	position: new google.maps.LatLng(21.0000, 78.0000),

//Adding a diff marker
	icon:'assets/images/pointer.png',
	animation:google.maps.Animation.DROP
});
marker.setMap(map);

//Info Window
var infoWindowOptions = {
	content:'I am not HERE :( !'
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

//Adding an event so when the marker is clicked, the info window shows
google.maps.event.addListener(marker,'click',function(){
	infoWindow.open(map, marker);
});


//Get key from developer.google.com
//Keep it safe
//Key:AIzaSyA-vkTiPKyk0RpvA_g9wtuz9oqoDYrPiWI
//<script src="http://maps.googleapis.com/maps/api/js?key=YOUR_KEY"</script>















