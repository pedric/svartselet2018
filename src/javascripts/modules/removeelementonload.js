import $ from "jquery";

export default class RemoveElementOnLoad {
  constructor(element) {
  	
  	$(function() {
  		$(element).delay(50).fadeOut();
  	})
  }
}