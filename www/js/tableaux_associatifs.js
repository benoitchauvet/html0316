var liste = {};

liste["janvier"] = 31;
liste["fevrier"] = 29;
liste["mars"] = 31;
liste["avril"] = 30;

for(var cle in liste)
  {
    console.log(cle + " : " + liste[cle]);
  }


liste.isAnneeBisextile = function(annee){
  return (annee % 4 == 0)
};

console.log(liste["Fevrier"]);

liste.mai = 31;
liste.juin = 30;

console.log(liste.fevrier);

console.log(liste.isAnneeBisextile(2016));
console.log(liste.isAnneeBisextile(2017));
