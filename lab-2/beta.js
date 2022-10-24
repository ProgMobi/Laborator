window.addEventListener('deviceorientation', on_device_orientation)
function on_device_orientation(evt) {
	let alpha = evt.alpha
	let beta = evt.beta
	let gamma = evt.gamma

	document.getElementById('a').innerHTML = 'alpha = ' + alpha
	document.getElementById('b').innerHTML = 'beta = ' + beta
	document.getElementById('c').innerHTML = 'gamma = ' + gamma

	const canvas = document.getElementById('canvas')
	let context = canvas.getContext('2d')
	context.clearRect(0, 0, canvas.width, canvas.height)
	context.fillStyle = '#6A0888'
	context.beginPath()
	context.fillRect(180, 150, evt.beta, 50)
}
