
function additionner(a,b=3)
{
  if(! isNaN(a))
    { 
       return parseInt(a)+b;      
    }
   else
    {
       return "n'importe quoi";
    }
}

function somme()
{
  var resultat = 0;
  for(var i=0; i < arguments.length; i++)
    {
      resultat += arguments[i];
      //resultat = resultat + arguments[i];
    }
  return resultat;
}

console.log(additionner('39',3));
console.log(additionner('toto',3));
console.log(additionner());
console.log(somme(4,5,65,4,87,46,46,46));
//console.log(additionner('39'));
