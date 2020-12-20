//form
const krijo = document.getElementById('kaka');
const regji = document.getElementById('papa')

//create account variables
const cnam = document.getElementById('name');
const cpass = document.getElementById('password');
const cpass2 = document.getElementById('password2');
const cema = document.getElementById('email');

// log-in variables
const lmail = document.getElementById('logmail');
const lpass = document.getElementById('logpass');


krijo.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

regji.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
const cNameValue = cnam.value.trim();
const cPasswordValue = cpass.value.trim(); 
const cPassword2Vvalue =  cpass2.value.trim(); 
const cEmailValue = cema.value.trim();

const lMailValue = lmail.value.trim(); 
const lPassValue = lpass.value.trim(); 


if(cNameValue === '' ) {
   setError(cnam, 'Emri duhet te plotesohet');
} else if(isName(cNameValue)) {
    setError(cnam, 'Emri juaj permban numra');
} else {
 setSuccess(cnam);
}

if(cPasswordValue === '' ) {
    setError(cpass, 'Fjalekalimi duhet te plotesohet');
 } else if(cPasswordValue.length <7) {
    setError(cpass, 'Fjalekalimi duhet te jete me i gjate se 6');
 }else {
  setSuccess(cpass);
 }

 if(cPassword2Vvalue === '' ) {
    setError(cpass2, 'Fjalekalimi duhet te plotesohet');
 } else if (cPasswordValue !== cPassword2Vvalue){ 
     setError(cpass2, 'Ju lutem konfirmoni me saktesi')
 }
 else {
  setSuccess(cpass2);
 }

 if(cEmailValue === '' ) {
    setError(cema, 'Emailu duhet te plotesohet');
 } else if (!isEmail(cEmailValue)) {
    setError(cema, 'Emaili jo valid');
} else {
    setSuccess(cema);
}

if(lMailValue === '' ) {
    setError(lmail, 'Emailu duhet te plotesohet');
 } else if (!isEmail(lMailValue)) {
    setError(lmail, 'Emaili jo valid');
} else {
    setSuccess(lmail);
}

if(lPassValue === '' ) {
    setError(lpass, 'Fjalekalimi duhet te plotesohet');
 } else if(lPassValue.length <7) {
    setError(lpass, 'Fjalekalimi duhet te jete me i gjate se 6 karaktere');
 }else {
  setSuccess(lpass);
 }








}

function setError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}


function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(name) {
    return /[^a-z]/i.test(name);
}
