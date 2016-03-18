var club = 
    [
      {  
        nom : 'Morrisson',
        prenom : 'Jim',
        age : 27,
        adresse : {
          numero : 12,
          rue : 'Roadhouse drive',
          ville : 'Los Angeles'
        }, 
        albums : ['morrisson hotel', 
                  'the soft parade', 
                  'waiting for the sun']
      },
      {  
        nom : 'Joplin',
        prenom : 'Janis',
        age : 27,
        adresse : {
          numero : 12,
          rue : 'Roadhouse drive',
          ville : 'Los Angeles'
        }, 
        albums : ['Cozmic blues', 
                  'Live in woodstock', 
                  'Pearl']  
      },
      {  
        nom : 'Hendrix',
        prenom : 'Jimi',
        age : 27,
        adresse : {
          numero : 12,
          rue : 'Roadhouse drive',
          ville : 'Los Angeles'
        }, 
        albums : ['are you experienced', 
                  'purple haze']
      }      
    ];

var s1 = JSON.stringify(club);
console.log (s1);

var o1 = JSON.parse(s1);

o1.forEach(function(p){
  
  p.sePresenter = function(){
          console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom);
        };  
  
  p.sePresenter();

  p.albums.forEach(function(album){
    console.log(album);
  });  
});


