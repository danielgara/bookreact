const items = [
  { name: 'jon', age: 20 },
  { name: 'linda', age: 22 },
  { name: 'jon', age: 40 }
]

// option 1
const jon = items.find((item) => {
  return item.name === 'jon'
}); 
console.log(jon);

// option 2
function findByName(items, name){
  let itemToReturn = null;
  for (const item of items) {
    if(item.name === name){
      itemToReturn = item;
      break;
    }
  }
  return itemToReturn;
}
const jon2 = findByName(items, "jon");
console.log(jon2);