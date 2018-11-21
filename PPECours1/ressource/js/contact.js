function verif(){
	var nom, prenom, email,msg;
	nom=document.getElementById("nom");
	prenom=document.getElementById("prenom");
	email=document.getElementById("mail");
	msg=document.getElementById("msg");
	ok=true;

	if (nom.value=="")
      	{ 
        	nom.style.backgroundColor= "#f75a5a";
        	ok = false;
      	}
    if (prenom.value=="")
      	{ 
        	prenom.style.backgroundColor = "#f75a5a";
        	ok = false;
      	}
    if (email.value=="")
      	{ 
        	email.style.backgroundColor = "#f75a5a";
        	ok = false;
      	}
    if (msg.value=="")
      	{ 
        	msg.style.backgroundColor = "#f75a5a";
        	ok = false;
      	}

    return ok;  
}

