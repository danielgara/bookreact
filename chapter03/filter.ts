const filterItems = [
  { name: 'jon', age: 20 },
  { name: 'linda', age: 22 },
  { name: 'jon', age: 40 }
]

// option 1
const results = filterItems.filter((item, index) => {
  return item.name === 'jon'
});
console.log(results);

// option 2
function filterByName(items, name){
  let itemsToReturn = [];
  for (const item of items) {
    if(item.name === name){
      itemsToReturn.push(item);
    }
  }
  return itemsToReturn;
}
const jons = filterByName(filterItems, "jon");
console.log(jons);