const dropdownButton = document.querySelector('.menu__mobile__button');
const dropdownMenu = document.querySelector('.menu__mobile__list');
const dropdownUl = dropdownMenu.children[0];

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

document.addEventListener("click", e => {

  if(e.target !== dropdownButton)
    dropdownMenu.classList.remove('active');
})

window.addEventListener("scroll", () => {

  if(window.scrollY > 150) {
    document.querySelector('.pageHeader').classList.add('scrolled');
  } else {
    document.querySelector('.pageHeader').classList.remove('scrolled');
  }

})