function message(event){

    event.preventDefault();

    let Name = document.getElementsById('name');
    let Email = document.getElementById('email');
    let Msg = document.getElementsById('message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(!(Name.value === '' || Email.value === '' || Msg.value === '')){
        success.style.display = 'block';
        setTimeout(() =>{
            Name.value = '';
            Email.value = '';
            Msg.value = '';
        }, 2000)
    }

    setTimeout(() => {
        success.style.display = 'none';
    }, 5000)
}