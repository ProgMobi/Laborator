if ('webkitSpeechRecognition' in window) {
	const finalTxt = document.querySelector('#final'),
		interimTxt = document.querySelector('#interim'),
		accuracy = document.querySelector('#accuracy'),
		startBtn = document.querySelector('#start'),
		stopBtn = document.querySelector('#stop')

	const speechRecognition = new webkitSpeechRecognition()

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
		let final_transcript = '',
			interim_transcript = ''

		for (let i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				final_transcript += event.results[i][0].transcript
				accuracy.innerHTML =
					'Accuracy: ' + Math.round(event.results[i][0].confidence * 10000) / 100 + '%'
			} else {
				interim_transcript += event.results[i][0].transcript
			}
		}

		finalTxt.innerHTML = final_transcript
		interimTxt.innerHTML = interim_transcript
	}

	startBtn.onclick = () => {
		speechRecognition.start()
		speechRecognition.continuous = true
		console.log('Recognition started')
	}
	stopBtn.onclick = () => {
		speechRecognition.stop()
		console.log('Recognition stopped')
	}
} else {
	console.log('Speech Recognition Not Available')
}

// document.addEventListener('touchstart', on_touch)
// document.addEventListener('mousedown', on_touch)
// accuracy = document.getElementById('accuracy')
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
// 	document.getElementById('final').innerHTML += e.results[0][0].transcript
// 	accuracy.innerHTML += ' ' + Math.round(e.results[0][0].confidence * 100) + '%'
// }
