//FOR LOOP 

var music = []; 

function theBeatlesPlay(musicians, instruments) {
  for ( let i = 0; i < musicians.length; i++) { 
            // it starts at 0 and runs until the length of the music array 
    var string = musicians[i] + " plays " + instruments[i]; 
           // makes a variable that combines the same i element from two arrys with plays in the middle 
    music.push(string);} 
           //adds the new string to the music array 
    return music;
           // returns all the strings (sentatnces) we made 
}

//WHILE LOOP

function johnLennonFacts(facts) { 
  let i = 0 
            //starts at 0 
  while(i < facts.length) {
            //runs as long as i is less than the amount of facst we have (length of facts array)
    facts[i] = facts[i] + '!!!';
             //makes the fact statement the same thing but with !!!
    i++;
            //increments up 1 each time 
  }
    return facts; 
            // retuns the new facts array that has !!! at the end of each string 
}

//DO WHILE LOOP 

function iLoveTheBeatles(num) {
  var array = [];
        //declares a new array 
  do {
    array.push("I love the Beatles!");
    num++;
        // adds I love the beatels to the array and increments up 1 
  } while (num < 15);
        // only does this once, then 15 tiems 
return array; 
}

