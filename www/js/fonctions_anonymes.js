function direBonjour()
{
  console.log("bonjour");
  return "plop";
}


var toto = direBonjour;

toto();

direBonjour();
console.log(toto == direBonjour);

var maFonction = function(a,b){  
                      console.log('exécution');
                      return a + b; 
                     };

maFonction(39,3);


function calculer(a,b, operation)
{
  console.log("op.1 : " + a);
  console.log("op.2 : " + b);
  
  var resultat = operation(a,b);
  
  console.log("resultat : " + resultat);
}

calculer(84,2, function(a,b){
  return a / b;  
});

var bouton = document.getElementById('');

bouton.addEventListener('click', function(){
  //faire qqchose
});






















