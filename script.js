const signInLink = document.querySelector('.sign__in-link');
const signUpLink = document.querySelector('.sign__up-link');
const wrapper = document.querySelector('.wrapper');

signUpLink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });

 function checkPasswords(){
    const password = document.getElementById('password2');
    const confirmPassword = document.getElementById('confirm-password');

    if(password.value !== confirmPassword.value || confirmPassword.value == ''){
     confirmPassword.setCustomValidity('Passwords Must Match');
        confirmPassword.reportValidity();

        confirmPassword.style.color = '#ffffff43';
    }else{
        confirmPassword.setCustomValidity('');
        confirmPassword.style.color = '#fff';
    }
}
