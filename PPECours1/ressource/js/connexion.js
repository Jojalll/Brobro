function verification() {
	var id, mdp;
	id=document.getElementById("mail");
	mdp=document.getElementById("motdepasse");
	ok=true;

	if(id.value ==""){
		id.style.backgroundColor = "#f75a5a";
        	ok = false;
	}
	if(mdp.value ==""){
		mdp.style.backgroundColor = "#f75a5a";
        	ok = false;
	}
return ok;
}