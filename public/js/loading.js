// Delay function to simulate loading
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

// Function to show content after delay
async function showContent() {
	// Simulate loading for 5 seconds
	await delay(5000)

	// Show the content after the delay
	document.getElementById('main').style.display = 'block'
	document.getElementById('loading').style.display = 'none'
}

// Call the showContent function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	console.log('Document is ready.')
	showContent()
})
