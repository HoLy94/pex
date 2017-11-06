(function(){
    var burger = document.querySelector('.burgerContainer'),
        mobileMenuContainer = document.querySelector('.mobileMenuContainer'),
				body = document.querySelector('body');
    
    burger.onclick = function() {
        mobileMenuContainer.classList.toggle('isActive');
				body.classList.toggle('noScroll');
    }
}());
