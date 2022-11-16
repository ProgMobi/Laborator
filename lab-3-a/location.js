//import API_KEY from './env.js'
function on_success(position) {
	document.getElementById('latitude').innerHTML = 'Latitude = ' + position.coords.latitude
	document.getElementById('longitude').innerHTML = 'Longitude= ' + position.coords.longitude
	document.getElementById('acc').innerHTML = 'Accuracy = ' + position.coords.accuracy
	document.getElementById('altitude').innerHTML = 'Altitude = ' + position.coords.altitude
	const latlon = position.coords.latitude + ',' + position.coords.longitude
	const tempApi = 'AIzaSyDi8lxp3yL8gC7YiHcxKz4xVMueQOGfsEo'
	const img_url =
		'https://maps.googleapis.com/maps/api/staticmap?center=' +
		latlon +
		'&zoom=14&size=400x300&key=' +
		tempApi
	document.getElementById('map').innerHTML = "<img id='map-img' src='" + img_url + "'>"
}
function on_error(e) {
	document.getElementById('text').innerHTML = e.message
}
const geo_params = {
	enableHighAccuracy: true,
	timeout: 1000,
	maximumAge: 0,
}
function get_geo_position() {
	const geo = navigator.geolocation
	geo.getCurrentPosition(on_success, on_error, geo_params)
}
get_geo_position()
