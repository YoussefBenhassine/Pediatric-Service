const formu = document.getElementById('formu');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rpassword = document.getElementById('rpassword');
formu.addEventListener('submit', e => {
    //e.preventDefault();
    validerInput();
});
const setError = (element, message) =>{
    const inputC = element.parentElement;
    const afferr = inputC.querySelector('.error');
    afferr.innerText = message;
    inputC.classList.add('error');
    inputC.classList.remove('success');
}
const setsuccess = element =>{
    const inputC = element.parentElement;
    const afferr = inputC.querySelector('.error');
    afferr.innerText = '';
    inputC.classList.add('success');
    inputC.classList.remove('error');
}
const emailvalider = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}
const validerInput = () => {
    const nomv = nom.value.trim();
    const emailv = email.value.trim();
    const passwordv = password.value.trim();
    const rpasswordv = rpassword.value.trim();
    if(nomv === ''){
        setError(nom, 'The Name is required');
    }
    else{
        setsuccess(nom);
    }
    if(emailv === ''){
        setError(email, 'Email is required');
    }
    else if(!emailvalider(emailv)){
        setError(email, 'Provide valid email');
    }
    else{
        setsuccess(email);
    }
    if(passwordv === ''){
        setError(password, 'Password is required');
    }
    else if(passwordv.length < 8){
        setError(password, 'Password must be at least 8 character');
    }
    else{
        setsuccess(password);
    }
    if(rpasswordv === ''){
        setError(rpassword, 'Please confirm your password');
    }
    else if(rpasswordv !== passwordv){
        setError(rpassword, "Password doesn't match");
    }
    else{
        setsuccess(rpassword);
    }
};

