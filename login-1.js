document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada
  
    // Obtener los valores de los campos de entrada
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
  
    // Validar los campos según los caracteres aceptados y correspondientes
    var usuarioValido = /^[a-zA-Z0-9]+$/.test(usuario);
    var contrasenaValida = /^[a-zA-Z0-9]+$/.test(contrasena) && contrasena.length >= 6;
  
    // Mostrar mensajes de error debajo de los campos correspondientes
    if (!usuarioValido) {
      document.getElementById("usuario-error").textContent = "El usuario contiene caracteres no válidos.";
      document.getElementById("usuario-error").style.color = "red";
    } else {
      document.getElementById("usuario-error").textContent = "";
    }
  
    if (!contrasenaValida) {
      if (contrasena.length < 6) {
        document.getElementById("contrasena-error").textContent = "La contraseña debe tener al menos 6 caracteres.";
      } else {
        document.getElementById("contrasena-error").textContent = "La contraseña contiene caracteres no válidos.";
      }
      document.getElementById("contrasena-error").style.color = "red";
    } else {
      document.getElementById("contrasena-error").textContent = "";
    }
  
    // Realizar la redirección solo si no hay errores
    if (usuarioValido && contrasenaValida) {
      window.location.href = "gestion-admin.html";
    }
  });
  