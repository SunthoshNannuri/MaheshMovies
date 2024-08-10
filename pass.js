function submitForm() {
    event.preventDefault();

    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('repass').value;

    if (password == confirmPassword) {       
      alert("Password updated successfully.");
      history.back()
    } else {
      document.getElementById('error-message').textContent = "Passwords do not match.";
    }
  }
