function valida(f) {	  
	  var ok = true;
	  var msg = "¡Respuesta incorrecta!";
		
	  if(document.getElementById("respuesta1").value == "KOTEL")
	  {
		ok = true;
	  }else{
		ok = false;
	  }

	  if(ok==true)
		location.href = "victoria.html";
		f.preventDefault();
	  
	  if(ok == false)
		alert(msg);
	  
	  
	}