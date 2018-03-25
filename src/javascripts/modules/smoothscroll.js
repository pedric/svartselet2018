import $ from "jquery";

export default class SmoothScroll {
	constructor(element) {

		$(document).ready(function () {
			$(".smooth-scroll").click(function (e) {

				e.preventDefault();

				var link = $(this).attr('href');

				var linkEl = $(link);

				$('html, body').animate({ scrollTop: linkEl.offset().top }, 400);

			});
		});
	}
}