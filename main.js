const sendForm = (event) => {
    event.preventDefault(); 

    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('surname').value;
    const email = document.getElementById('e-mail').value;
    const mensaje = document.getElementById('message').value;

    
    if (nombre && apellido && email && mensaje) {
       
        const mensajeWhatsApp = `https://wa.me/5493413394356?text=Hola! Mi nombre es ${nombre} ${apellido}. Mi correo es ${email}. Y tengo este mensaje para vos: ${mensaje}`;
        
        
        window.open(mensajeWhatsApp, '_blank');

    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
};

const clearForm = () => {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('e-mail').value = '';
    document.getElementById('message').value = '';
};


document.querySelector('.form').addEventListener('submit', sendForm);
document.getElementById('clearBtn').addEventListener('click', clearForm);


