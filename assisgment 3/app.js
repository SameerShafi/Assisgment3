function showSignupPopup() {
    const signupPopup = document.getElementById('signupPopup');
    signupPopup.classList.toggle('show');
  }
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Login Form - Email:', email);
    console.log('Login Form - Password:', password);
    // Perform login logic here
  });