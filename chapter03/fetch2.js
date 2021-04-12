const fetch = require('node-fetch');

async function getData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');
  if (response.ok) {
    const result = await response.json();
    console.log("Pokemon result");
    //console.log(result);
  } else {
    console.log('Failed to get anything');
  }
};

async function startProgram(){
  console.log("Start");
  await getData();
  console.log("Did you finish?");
}

startProgram();