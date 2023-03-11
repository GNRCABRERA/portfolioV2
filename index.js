let Form = document.getElementById("main--form");

function submitForm(event){
    event.preventDefault();

    let Name = document.getElementById('name');
    let Email = document.getElementById('email');
    let Msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value !== '' || Email.value !== '' || Msg.value !== ''){
        success.style.display = 'block';
        setTimeout(() =>{
            Name.value = '';
            Email.value = '';
            Msg.value = '';
        }, 1000)
    }

    setTimeout(() => {
        success.style.display = 'none';
    }, 3000)
}

Form.addEventListener('submit', submitForm);