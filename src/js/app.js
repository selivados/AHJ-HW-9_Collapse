const collapseButton = document.querySelector('.collapse-button');
const textContainer = document.querySelector('.text-container');

collapseButton.addEventListener('click', () => {
  textContainer.classList.toggle('hide');
  textContainer.classList.toggle('show');
});
