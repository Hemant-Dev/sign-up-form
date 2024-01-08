const passwordInput = document.querySelector('#user-password');
const confirmPasswordInput = document.querySelector('#user-confirm-password');

passwordInput.addEventListener('focus', runTimer);
// confirmPasswordInput.addEventListener('focus', validate);
function validate(){
    const userPwd = document.querySelector('#user-password').value;
    const userConfirmPwd = document.querySelector('#user-confirm-password').value;
    
    if(userPwd !== userConfirmPwd){
        error.forEach((item) => {
            item.textContent = 'Passwords do not match';
        });
    }else
        error.textContent = 'Passwords Match';
        
}
function runTimer(){
    setInterval(validate, 3000);
}