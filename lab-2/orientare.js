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
	let centru = { x: canvas.width / 2, y: canvas.height / 2 }
	let latura_patrat = 50
	context.setTransform(1, 0, 0, 1, 0, 0)
	context.clearRect(0, 0, canvas.width, canvas.height)
	context.translate(centru.x / 2, centru.y / 2)
	context.rotate((alpha * Math.PI) / 180)
	context.beginPath()
	context.rect(-latura_patrat / 2, -latura_patrat / 2, latura_patrat, latura_patrat)
	context.stroke()
}
