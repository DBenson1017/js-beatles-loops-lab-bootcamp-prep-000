

var music = []; 

function theBeatlesPlay(musicians, instruments) {
  for ( let i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    music.push(string);}
    return music;
}


function johnLennonFacts(facts) {
  let i = 0 
  while(i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
    return facts; 
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
return array; 
}

