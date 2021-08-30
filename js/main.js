const signUpBtn = document.getElementById('SignUp')
const signInBtn = document.getElementById('SignIn')
const container = document.getElementById('container')

signInBtn.addEventListener('click', () => {
	container.classList.remove('right-panel-active')
});

signUpBtn.addEventListener('click', () => {
	container.classList.add('right-panel-active')
});

const loader = document.getElementById('load-id')

window.addEventListener('load', () => {
	loader.style.display = 'none'
})

// SignInButton.addEventListener('click', () => {
//	 container.classList.add('right-panel-active')
// });

