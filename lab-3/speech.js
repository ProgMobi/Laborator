if ('webkitSpeechRecognition' in window) {
	let speechRecognition = new webkitSpeechRecognition()

	let final_transcript = ''

	speechRecognition.continuous = true
	speechRecognition.interimResults = true
	speechRecognition.lang = 'en-US'

	speechRecognition.onstart = () => {
		document.querySelector('#status').style.display = 'block'
	}
	speechRecognition.onerror = () => {
		document.querySelector('#status').style.display = 'none'
	}
	speechRecognition.onend = () => {
		document.querySelector('#status').style.display = 'none'
	}

	speechRecognition.onresult = event => {
		let interim_transcript = ''

		document.getElementById('final').innerHTML +=
			'Ati rostit cuvantul: ' +
			e.results[0][0].transcript +
			', acuratete: ' +
			e.results[0][0].confidence +
			'<br>'

		// document.querySelector('#final').innerHTML = final_transcript
		document.querySelector('#interim').innerHTML = interim_transcript
	}

	document.querySelector('#start').onclick = () => {
		speechRecognition.start()
	}
	document.querySelector('#stop').onclick = () => {
		speechRecognition.stop()
	}
} else {
	console.log('Speech Recognition Not Available')
}
// document.addEventListener('touchstart', on_touch)
// document.addEventListener('mousedown', on_touch)
// var recognition = new webkitSpeechRecognition()
// recognition.lang = 'en-US'
// function on_touch() {
// 	if (recognition.start) {
// 		recognition.start()
// 		recognition_started = true
// 	}
// }
// function onend() {
// 	recognition.stop()
// 	recognition_started = false
// }
// recognition.onend = onend
// recognition.onsoundend = onend
// recognition.onspeechend = onend
// recognition.onresult = on_results
// function on_results(e) {
// 	document.getElementById('text').innerHTML +=
// 		'Ati rostit cuvantul: ' +
// 		e.results[0][0].transcript +
// 		', acuratete: ' +
// 		e.results[0][0].confidence +
// 		'<br>'
// }
