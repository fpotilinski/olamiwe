function valida(f) {
	  var ok = true;
	  var msg = "¡Respuesta incorrecta!";
		
	  if(document.getElementById("respuesta1").value == "2937")
	  {
		ok = true;
	  }else{
		ok = false;
	  }

	  if(ok==true)
		location.href = "campp1.html";
		f.preventDefault();
	  
	  if(ok == false)
		alert(msg);
	  
	  
	}