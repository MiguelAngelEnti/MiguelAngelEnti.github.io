function process()
{
	event.preventDefault();
	
	console.log("Procesando");
	
	let nombre = document.getElementById("form_user");
	
	let salida = document.getElementById("exit");
	
	if (nombre.value.length < 2)
	{
		salida.value = "El nobre debe tener al menos 2 caracteres.";
		
		nombre.style.color = "#ff0000";
		
		nombre.style.border = "1px solid #ff0000";
		
		salida.style.color = "#ff0000";
		
		nombre.focus();
		
		return false;
	}
	
	document.getElementById("form").submit();
	
}