function validarFormulario() {
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const legajo = document.getElementById('legajo').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const notas = [
        document.getElementsByName('nota1')[0].value,
        document.getElementsByName('nota2')[0].value,
        document.getElementsByName('nota3')[0].value,
        document.getElementsByName('nota4')[0].value,
        document.getElementsByName('nota5')[0].value
    ];
    
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = ''; // Limpiar mensaje de error
    
    // Validar campos vacíos
    if (!nombre || !apellido || !legajo || !email || notas.some(nota => nota === '')) {
        mensajeError.textContent = 'Todos los campos deben estar completos.';
        return false;
    }
    
    // Validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensajeError.textContent = 'El formato del correo electrónico es inválido.';
        return false;
    }
    
    // Calcular promedio
    const sumNotas = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
    const promedio = sumNotas / notas.length;
    document.getElementById('promedio').value = promedio.toFixed(2);
    
    return true; // Permitir envío del formulario
}

