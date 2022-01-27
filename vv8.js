	function valida(f) {
	  var ok = true;
	  var msg = "¡Respuesta incorrecta!";
		
	  if(document.getElementById("respuesta1").value == "2135")
	  {
		ok = true;
	  }else{
		ok = false;
	  }

	  if(ok==true)
		location.href = "campp2.html";
		f.preventDefault();
	  
	  if(ok == false)
		alert(msg);
	  
	  
	}