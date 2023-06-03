(function ($) {
    const newFormHandler = async function (event) {
     event.preventDefault();
     event.stopPropagation();
     await fetch(`/api/journals`, {
      method: 'POST',
      body: JSON.stringify({
       title: $('#jTitle').val(),
       description: $('#description').val(),
       emoji: encodeURI( $('#emoji-select :selected').val()),

   //    dateCreated: $('#datepicker').val(),
     }),
     headers: { 'Content-Type': 'application/json' },
    }).then((res)=>{
       console.log(res);
       window.location.reload()
    })
  
    // document.location.replace('/dashboard');
   };
  
   $('#new-journal').on('submit', newFormHandler);
  })(jQuery);