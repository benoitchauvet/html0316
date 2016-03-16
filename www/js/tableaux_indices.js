"use strict";

var tableau = new Array();

tableau.push('a');
tableau.push('b');
tableau.push('c');
tableau[10] = 'd';

console.log(tableau);

tableau.forEach(function(elt, i){
  console.log(i + " : " + elt);
});


tableau.length = 2;
tableau.length = 3;

console.log(tableau[2]);

console.log(tableau.join(" - "));

var lettre = tableau.pop(); // a - b
console.log(tableau.join());

tableau.unshift('aa'); // aa - a - b
console.log(tableau.join());

lettre = tableau.shift(); // a - b
console.log(tableau.join());