function login(){
    event.preventDefault();

    const email = document.getElementById('user').value.trim();
    const password = document.getElementById('pass').value.trim();
    const registeredEmail = name;
    const registeredPassword =password;

    if (email === registeredEmail && password === registeredPassword) {
      alert("Successfully Logged In");
    } else {
      document.getElementById('error-message').textContent = "Account not created or incorrect email/password.";
    }
  }
  function back()
  {
    window.location.href = "Netflix.html";
  }