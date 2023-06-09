const loginFormHandler = async function (event) {
    event.preventDefault();
   
    const emailEl = document.querySelector('#email-login');
    const passwordEl = document.querySelector('#password-login');
   
    const response = await fetch('/api/user/login', {
     method: 'POST',
     body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
     }),
     headers: { 'Content-Type': 'application/json' },
    });
   
    if (response.ok) {
     document.location.replace('/');
    } else {
     console.log(response);
     alert('Failed to login');
    }
   };
   
   document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
   