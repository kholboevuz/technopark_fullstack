
document.getElementById('readButton').addEventListener('click', function () {
	const fileInput = document.getElementById('fileInput')
	const file = fileInput.files[0]

	if (!file) {
		alert('No file selected.')
		return
	}

	// Check if the file is of type JSON
	if (file.type !== 'application/json') {
		alert('Xato fayl yuklandi.')
		return
	}

	const reader = new FileReader()

	reader.onload = function (event) {
		const contents = event.target.result
		try {

			const jsonData = JSON.parse(contents)
			if (!jsonData.tokens) {
				alert('Xato fayl yuklandi.')
				return
			} else {

				function countdownss() {
					var seconds = 60
					var countdownElement = document.getElementById('countdownss')

					var timer = setInterval(function () {
						seconds--

						if (seconds >= 0) {
							countdownElement.innerHTML = seconds + ' soniya'
						} else {
							clearInterval(timer)
							countdownElement.innerHTML = "<span class='text-danger'>Vaqt tugadi<span>"
							setTimeout(function () {
								window.location.href = '/admin'
							}, 1000)
						}
					}, 1000)
				}
				$('#exampleModal').modal('show')
				countdownss()
				document.getElementById('tokenInput').value = jsonData.tokens
			}

		} catch (error) {
			console.error('Error parsing JSON:', error)
			alert('Error parsing JSON.')
		}
	}

	reader.onerror = function () {
		console.error('Error reading file.')
		alert('Error reading file.')
	}

	reader.readAsText(file)
})


