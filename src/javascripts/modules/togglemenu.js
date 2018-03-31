
export default class ToggleMenu {
  constructor(element) {

    let that = this

    this.element = element
  	this.menu = document.getElementsByClassName('js-menu-toggle')[0]
  	this.navItems = document.getElementsByClassName('js-nav-items')[0]
  	this.burgerWrapper = element.getElementsByClassName('burger__wrapper')[0]
  	this.burger = element.getElementsByClassName('burger')[0]

    this.burgerWrapper.addEventListener('click', function() {
      that.toggle()
    })
  }

	close() {
		this.burgerWrapper.classList.remove('active')
		this.burger.classList.remove('active')
		this.element.classList.remove('active')
    this.burgerWrapper.setAttribute('aria-hidden', 'true')
    this.menu.setAttribute('aria-hidden', 'true')
    this.navItems.classList.remove('active')
    this.menu.style.opacity = 0
    let menu = this.menu
    setTimeout( function() {
    	menu.classList.remove('active')
    }, 250)
	}

	open() {
		this.burgerWrapper.classList.add('active', 'true')
		this.menu.style.opacity = 1
		this.menu.classList.add('active')
		this.burger.classList.add('active')
		this.element.classList.add('active')
    this.burgerWrapper.setAttribute('aria-hidden', 'false')
    this.menu.setAttribute('aria-hidden', 'false')
    let navItems = this.navItems
    setTimeout( function() {
    	navItems.classList.add('active')
    }, 150)
	}

	toggle() {
		if (this.burgerWrapper.classList.contains('active')) {
			this.close()
		} else if (!this.burgerWrapper.classList.contains('active')) {
			this.open()
		} else {
			this.close()
		}
	}

}