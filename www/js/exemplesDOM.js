var s1 = document.getElementById("section1");

var listeLiens = document.getElementsByTagName("a");

var listePremiersArticles = document.querySelectorAll("section article:first-of-type");

for (var i =0; i < s1.children.length; i++)
  {
    var elt = s1.children[i];
    
    console.log(elt.nodeName);
    
  }

var liens = document.getElementsByTagName("a"); 

for (var i =0; i < liens.length; i++)
{
  var elt = liens[i];
  console.log(elt.innerHTML);
  elt.innerHTML = "Vive le sport";
  elt.setAttribute("href", "http://www.eurosport.com");
  elt.getAttribute("href");
  
  //elt.style.backgroundColor = "hotpink";
  
  elt.classList.toggle("surbrillance");
  
};


// creation d'un élément :

var p = document.createElement("p");

p.innerHTML = "Ceci est un exemple de page...";
p.classList.add("surbrillance");

var header = document.querySelector("#main>header");

header.appendChild(p);

document.querySelector("article").appendChild(p.cloneNode(true));


// suppression d'éléments :
/*
var header = document.querySelector("#main>header");

var ps = document.querySelectorAll("#main>header p");

for (var i = 0; i < ps.length; i++)
  {
    console.log(ps[i]);
    
    var child = ps[i];
    header.removeChild(child);
  }
*/




/*
Exception: TypeError: document.querySelectorAll(...).appendChild is not a function
@Scratchpad/6:43:1
*/