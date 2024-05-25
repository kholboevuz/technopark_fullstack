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

tinymce.init({
  selector: "#mytextarea",
  height: 400,
  plugins: [
    "advlist autolink advcode lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste emoticons"
  ],
  toolbar:
    "styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | code ",
    menubar: "file edit view insert format tools table help",
  setup: function (editor) {
    editor.on("keyup", function (e) {
      updateHTML(editor.getContent());
    });
    editor.on("change", function (e) {
      updateHTML(editor.getContent());
    });
  }
});

function updateHTML(content) {
  cmeditor.getDoc().setValue(content);
}

function updateEditor() {
  if (!tinymce.activeEditor.hasFocus()) {
    tinymce.activeEditor.setContent(cmeditor.getDoc().getValue());
  }
}

var HTMLContainer = document.querySelector(".HTMLContainer");

var cmeditor = CodeMirror(HTMLContainer, {
  lineNumbers: true,
  mode: "htmlmixed"
});

cmeditor.on("change", (editor) => {
  updateEditor();
});