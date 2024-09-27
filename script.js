const sendMessage = ()=>{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('msg').value;
    var data = {
        name,
        email,
        message
    }
    emailjs.send('service_lmqt8nr','template_g7x7rj7',data);
}

document.getElementById('btnSend').addEventListener('click',(e)=>{
    e.preventDefault();
    sendMessage();
})