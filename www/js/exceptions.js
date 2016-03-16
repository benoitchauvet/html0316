function addition(a,b)
{
  if(!isNaN(parseInt(a)) && !isNaN(parseInt(b)))
  {
    return parseInt(a)+parseInt(b);
  }
  else
  {
    throw 'operandes non numériques';
  }
}

try
  {
    var x = new Array();
    x.length();
     console.log(addition('4',7));
  }
 catch(exc)
  {
    console.log("erreur : " + exc);
    throw exc;
  }
finally
  {
    console.log("suite");
  }

console.log("j'ai fini");

