const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
btnStart.addEventListener('click', on_touch)
btnStop.addEventListener('click', onend)
const recognition = new webkitSpeechRecognition()
recognition.lang = 'en-US'
recognition.continuous = true
function on_touch() {
	if (recognition.start) {
		recognition.start()
		console.log(' recognition started ')
	}
}
function onend() {
	recognition.stop()
	console.log(' recognition stopped ')
}
recognition.onend = onend
recognition.onsoundend = onend
recognition.onspeechend = onend
recognition.onresult = on_results
function on_results(e) {
	document.getElementById('final').innerHTML +=
		'Ati rostit cuvantul: ' +
		e.results[0][0].transcript +
		', acuratete: ' +
		e.results[0][0].confidence +
		'<br>'
}
