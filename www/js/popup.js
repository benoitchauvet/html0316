function popup(message)
{
	var fond = document.createElement("div");
	fond.classList.add("fondPopup");
	
	var fenetre = document.createElement("div");	
	fenetre.classList.add("popup");
	
	var h2 = document.createElement("h2");
	h2.innerHTML = message; 
	fenetre.appendChild(h2);
	
	var btn = document.createElement("button");
	btn.innerHTML = "OK"; 
	fenetre.appendChild(btn);
	document.querySelector("body").appendChild(fond);
	document.querySelector("body").appendChild(fenetre);
	

	btn.addEventListener('click', function(evt){
		
		document.querySelector("body").removeChild(evt.target.parentElement);
		document.querySelector("body").removeChild(document.querySelector(".fondPopup"));
	});
	
}