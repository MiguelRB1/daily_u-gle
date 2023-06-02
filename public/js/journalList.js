(function ($) {
    const getAllJournals = async function () {
        const response = await fetch('/api/journals', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res =>{
            if (res.ok || res.ok == 200) {
            return res.json()
            }else{
                return null
            }
        } );
        if (Array.isArray(response)) {

            let journalContainer = document.getElementById("journal_list");
            response.forEach(journal =>{
               
                journalContainer.insertAdjacentHTML( 'beforeend',createJournalComponent(journal))
            })
            $('.delete-icon').each((index,icon) => {
                icon.onclick = (e) => deleteJournal(e);
            })
    
        }
    };

    const deleteJournal = async (event)=>{
        console.log(event);
        let id  = event.target.attributes.data.value;
            const response = await fetch(`/api/journals/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }).then(res =>{
                if (res.ok || res.ok == 200) {
                    window.location.reload()
                }
            } );
    }

    const createJournalComponent = (journal)=>{
        journal.emoji = decodeURI(journal.emoji)
        return `
        <div class="row m-2" style="height: 87px; border-radius: 10px; overflow: hidden; background-color: rgb(69, 69, 114); ">
    <div class="col-1 d-flex align-items-center">
    <p style="font-size: 30px; color: white;">${journal.emoji}</p>
    <!-- <i class="fas fa-user"></i> -->
    </div>
    
    <div class="col-7 d-flex align-items-center" style="background-color:  rgb(69, 69, 114);">
    <h4 style="font-size: 30px; color: white;">
    <span class="item-title"> ${journal.title},  </span>
    <span class="item-description">${journal.description}</span>
    
    </h4>
    </div>
    
    <div class="col-4 d-flex align-items-center" style="background-color:  rgb(69, 69, 114);">
    <h4 style="font-size: 30px; color: white;">${new Date(journal.date_created).toDateString()}</h4>
    <i class="bi delete-icon bi-trash3-fill" data="${journal.id}"></i>
    </div>
    </div>
        `
    }

    $(window).on('load', getAllJournals);
})(jQuery);






