(function ($) {
    const logout = async function () {
     const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     });
   
     if (response.ok) {
      document.location.replace('/login');
     } else {
      alert('Failed to log out');
     }
    };
   
    $('#logout-button').on('click', logout);
   })(jQuery);
   

   <p>
{/* link to login page */}

  <a href="login.html">login page</a>.
</p>