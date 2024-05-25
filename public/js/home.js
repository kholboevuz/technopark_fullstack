document.addEventListener("keydown", function (event) {
	// Check if CTRL key and ENTER key are pressed simultaneously
	if (event.ctrlKey && event.key === "Enter") {
		// Open the modal
		var modals = new document.getElementById('exampleModal')
		modals.show()
	}
})

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// Autoplay
	autoplay: {
		delay: 3000, // Adjust the delay as needed (in milliseconds)
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

// Get the current date and time
var currentDate = new Date()

// Set the time zone to Tashkent (UTC+5)
var options = { timeZone: 'Asia/Tashkent' }

// Get the time string in Tashkent time zone
var timeString = currentDate.toLocaleTimeString('uz-UZ', options)

// Get the date string in Uzbek
var optionsDate = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Tashkent' }
var dateString = currentDate.toLocaleDateString('uz-UZ', optionsDate)

var dateTimeString = timeString + " " + dateString

// Display the time and date in the specified HTML element
document.getElementById('time-date').innerHTML = dateTimeString




document.addEventListener("DOMContentLoaded", function () {
	const photoGallery = document.querySelector('.photo-galary')
	const videoGallery = document.querySelector('.video-galary')
	const btnRadio1 = document.getElementById('btnradio1')
	const btnRadio2 = document.getElementById('btnradio2')

	btnRadio1.addEventListener('change', function () {
		if (this.checked) {
			photoGallery.style.display = 'block'
			videoGallery.style.display = 'none'
		}
	})

	btnRadio2.addEventListener('change', function () {
		if (this.checked) {
			photoGallery.style.display = 'none'
			videoGallery.style.display = 'block'
		}
	})
});

