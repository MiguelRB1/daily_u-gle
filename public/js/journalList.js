(function ($) {
    const getAllJournals = async function () {
     const response = await fetch('/api/journals', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
     });
   
     if (response.ok) {
      document.location.replace('/');
     } else {
      alert('Failed to log out');
     }
    };
   
    $('#logout-link').on('click', logout);
   })(jQuery);
   