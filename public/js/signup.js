<script>
    {/* Retrieve the form element and attach an event listener for the form submission */}
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', handleSignUp);
  
    function handleSignUp(event) {

      event.preventDefault(); 
  
      // Retrieve the values from the email and password inputs
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
       
      // AJAX request using fetch:
      fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            // Handle successful sign-up
            console.log('User signed up successfully');
          } else {
            // Handle sign-up failure
            console.error('Failed to sign up');
          }
        })
        .catch(error => {
          // Handle network or other errors
          console.error('An error occurred during sign-up:', error);
        });
    }
  </script>
  

