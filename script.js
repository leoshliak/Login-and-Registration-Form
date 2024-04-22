const signInLink = document.querySelector('.sign__in-link');
const signUpLink = document.querySelector('.sign__up-link');
const wrapper = document.querySelector('.wrapper');

signUpLink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });

