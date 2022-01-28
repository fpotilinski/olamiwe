function valida(f) {
	  var ok = true;
	  var msg = "¡Respuesta incorrecta!";
		
	  if(document.getElementById("respuesta1").value == "VIAJE A TU INTERIOR")
	  {
		ok = true;
	  }else{
		ok = false;
	  }

	  if(ok==true)
		location.href = "byneg2.html";
		f.preventDefault();
	  
	  if(ok == false)
		alert(msg);
	  
	  
	}