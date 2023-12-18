function validateForm(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const reenterPassword = document.getElementById('reenterPassword').value;
  
    // Simple validation
    if (username && email && birthdate && gender && phone && isValidPassword(password) && password === reenterPassword) {
      alert('Signup successful!');
      // Redirect to another page or perform other actions after successful signup
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
  
  function isValidPassword(password) {
    // Password should contain at least 8 characters with numbers and special characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  }
  