function facebook() {
    window.location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=1548728332017744&kid_directed_site=0&app_id=1548728332017744&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D1548728332017744%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_gender%252Cuser_hometown%252Cuser_location%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.bewakoof.com%252Flogin%252Ffacebook%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df4f9fcf1-b14d-477c-9f86-8cee7313421b%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.bewakoof.com%2Flogin%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
}

function google() {
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=140947639712-ukpgitufo1i1gc6nmd8o1l14tcu72nt2.apps.googleusercontent.com&scope=email%20profile%20openid&response_type=token&redirect_uri=https%3A%2F%2Fwww.bewakoof.com%2Flogin%2Fgoogle&flowName=GeneralOAuthFlow"
}

function email() {
    window.location.href = "login_Email.html"
}



// Access submit button element
const submitBtn = document.getElementById('sendCode');

// Attach click event listener to submit button
submitBtn.addEventListener('click', function() {
  // Access the phoneno input field and get its value when the button is clicked
  const phoneno = document.getElementById('mobile');
  const phonenoValue = phoneno.value;

  // Generate a 4 digit random number
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  localStorage.setItem("otp", randomNumber);
  localStorage.setItem("phone",phonenoValue);

  // Display an alert with the random number
  alert('Your OTP is: ' + randomNumber);

  // Attach click event listener to the alert
  window.addEventListener('click', function() {
    // Redirect to verify.html when alert is clicked
    window.location.href = 'verify.html';
  });
});