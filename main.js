const enviarFormulario = (event) => {
    event.preventDefault(); 

    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('surname').value;
    const email = document.getElementById('e-mail').value;
    const mensaje = document.getElementById('message').value;

    
    if (nombre && apellido && email && mensaje) {
       
        const mensajeWhatsApp = `https://wa.me/5493413394356?text=Hola! Mi nombre es ${nombre} ${apellido}. Mi correo es ${email}. ${mensaje}`;
        
        
        window.open(mensajeWhatsApp, '_blank');
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
};


document.querySelector('.form').addEventListener('submit', enviarFormulario);