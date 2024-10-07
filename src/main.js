const dropdownButton = document.querySelector('.menu__mobile__button');
const dropdownMenu = document.querySelector('.menu__mobile__list');
const dropdownUl = dropdownMenu.children[0];

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hovered');
});