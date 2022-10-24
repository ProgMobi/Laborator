if ('webkitSpeechRecognition' in window) {
	const finalTxt = document.querySelector('#final'),
		interimTxt = document.querySelector('#interim'),
		accuracy = document.querySelector('#accuracy'),
		startBtn = document.querySelector('#start'),
		stopBtn = document.querySelector('#stop'),
		recStatus = document.querySelector('#status')

	const speechRecognition = new webkitSpeechRecognition()

	speechRecognition.continuous = true
	speechRecognition.interimResults = true
	speechRecognition.lang = 'en-US'

	speechRecognition.onstart = () => {
		recStatus.style.display = 'block'
	}
	speechRecognition.onerror = () => {
		recStatus.style.display = 'none'
	}
	speechRecognition.onend = () => {
		recStatus.style.display = 'none'
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
		console.log('Recognition started')
	}
	stopBtn.onclick = () => {
		speechRecognition.stop()
		console.log('Recognition stopped')
	}
} else {
	console.log('Speech Recognition Not Available')
}
