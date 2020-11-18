// Code your solutions in this file

function writeCards(names,event) {
<<<<<<< HEAD
  let print=[];
  for (let i = 0; i < names.length; i++) {   
  
     print[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
 
  return print;
=======
  let result[];
  for (let i = 0; i < names.length; i++) {   
  
     result[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
 
  return result;
>>>>>>> 99463f36f0f107b9ba28480bcea96e20a4b6817f
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown(nb) {  
  while (nb >= 0) {
  console.log(nb--);
}
  }
 countDown(10);

