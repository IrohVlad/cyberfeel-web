window.addEventListener('DOMContentLoaded', ()=>{
    // fetch('058 db.json', {
    //     method: 'POST',
    //     headers: {'Content-type': 'aplication/json'},
    //     body: '......'
    // })
    // .then(data => console.log(data))
    // .catch(data => console.log('error'));

    const burgers = document.querySelectorAll('.burger');
    burgers.forEach(item=>{
        item.addEventListener('click', (e)=>{
            item.parentElement.classList.add('burger_active');
            console.log('ddwe');
        });
    });
    burgers.forEach(item=>{
        item.parentElement.addEventListener('click', (e)=>{
            if(e.target && e.target == item.parentElement && item.parentElement.classList.contains('burger_active')){
                item.parentElement.classList.remove('burger_active');
            }
        });
    });
    

});