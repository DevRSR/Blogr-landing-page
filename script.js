const hamburger = document.querySelector('.hamburger');
const img = document.querySelector('#ham-img');
const smNav = document.querySelector('.sm-nav');
const ul = document.querySelector('.flx ul');

hamburger.onclick = function() {
  let b = 'http://localhost:8158/images/icon-hamburger.svg';
  if(img.src == b) {
   img.src = '../images/icon-close.svg';
  } else img.src = b;
  
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
