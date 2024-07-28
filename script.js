const registrationbutton=document.getElementById('registrationbutton')
const signInButton=document.getElementById('signInButton')
const loginForm=document.getElementById('signIn')
const registrationForm=document.getElementById('SignUp')

registrationbutton.addEventListerner('click', function() {
	registrationForm.style.display="block";
	loginnForm.style.display="none";
})
signInButton.addEventListerner('click', function() {
	loginForm.style.display="block";
	registrationForm.style.display="none"
})