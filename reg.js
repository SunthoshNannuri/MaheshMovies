function validateForm() {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirm_password').value.trim();
    let valid = true;

    // Clear previous error messages

    // Validate username
    if (name.length < 3) {
      document.getElementById('name_error').textContent = 'must be at least 3 letters';
      valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('email_error').textContent = 'Invalid email address';
      valid = false;
    }

    // Validate password
    //const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.*\W).{6,15}$/;
    if (password.length<8) {
      document.getElementById('password_error').textContent = 'password is week';
      valid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      document.getElementById('confirm_password_error').textContent = 'Passwords do not match';
      valid = false;
    }

    if (valid) {
      alert("Successfully Registered");
      document.getElementById('form').submit();
      window.location.href = "login.html";
    } else {
      alert("Please fill out the form correctly.");
    }
     name=document.getElementById('name_error').textContent 
    email=document.getElementById('email_error').textContent 
    password=document.getElementById('password_error').textContent 
    confirmPassword=document.getElementById('confirm_password_error').textContent
    var name1="sunny"
    var password1="@Sunny123"

  }
  