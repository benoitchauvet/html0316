// ajout de liens vers les sections dans le menu principal

var $ = function(selector)
{
  return Array.from(document.querySelectorAll(selector));
}

var ul = document.querySelector("#main>nav>ul");

$("section").forEach(function(section){
  
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.href = '#' + section.id;
  a.innerHTML = section.querySelector("header h2").innerHTML;
  li.appendChild(a);
  ul.appendChild(li);
  
});
