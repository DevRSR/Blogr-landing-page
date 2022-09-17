const hamburger = document.querySelector('.hamburger');
const img = document.querySelector('#ham-img');
const close = document.querySelector('#ham-img2');
const smNav = document.querySelector('.sm-nav');
const ul = document.querySelector('.flx ul');

hamburger.onclick = function() {
  img.classList.toggle('mb')
  close.classList.toggle('mb')
  smNav.classList.toggle('mb')
}
document.onclick = function(event) {
  if(event.target.className == "click") {
    let b = event.target.nextSibling;
     b.classList.toggle('rotate')
    const c = event.target.parentElement.nextElementSibling;
    c.classList.toggle('show');
  }
}
