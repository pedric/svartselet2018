import $ from "jquery";

export default class ImageModal {
	constructor(element) {

		let src = $(element).children().attr('src')
		let alt = $(element).children().attr('alt')

		$(element).on('click', function() {
			$('#image-modal').remove()
			$('body').append('<div id="image-modal"><img src="' + src + '" alt="' + alt + '"><div id="close-modal-btn" class="m-close-btn"><div class="m-close-btn__bar"></div><div class="m-close-btn__bar"></div></div></div></div>')
			$('#close-modal-btn, #image-modal').on('click', function() {
        $('#image-modal').remove()
    	})
		})
	}
}
