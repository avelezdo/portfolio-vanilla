const 
  burger = document.getElementById('burger'),
  navContents = document.querySelector('.mobile-nav__container'),
  navItems = document.querySelectorAll('.nav__link');

  // window.addEventListener('resize', function() {
  //   let done = false;
  //   if (window.innerWidth <= 952) {
  //     let original = document.querySelector('.mobile-nav__container');
  //     let clone = original.cloneNode(true);
  //     body.appendChild(clone);
  //   }
  // });

burger.addEventListener('click', function(e) {
  navContents.classList.toggle('toggle-nav');
});

navContents.addEventListener('transitionend', function(e) {
  if (navContents.classList.contains('toggle-nav')) {
    navItems.forEach((item, index) => {
      item.classList.add(`appear-${index + 1}`);
    })
  } else {
    navItems.forEach((item, index) => {
      item.classList.remove(`appear-${index + 1}`);
    })
  }
})

navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    navContents.classList.toggle('toggle-nav');
  })
})