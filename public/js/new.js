(function ($) {
    const newFormHandler = async function (event) {
     event.preventDefault();
     event.stopPropagation();
     await fetch(`/api/journals`, {
      method: 'POST',
      body: JSON.stringify({
       title: $('#jTitle').val(),
       description: $('#description').text(),
       description: $('#description :selected').text(),

       dateCreated: $('#datepicker').val(),
      }),
      headers: { 'Content-Type': 'application/json' },
     });
   
     // document.location.replace('/dashboard');
    };
   
    $('#new-journal').on('submit', newFormHandler);
   })(jQuery);
   