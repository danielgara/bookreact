const employees = [
  { name: 'tim', id: 1 },
  { name: 'cindy', id: 2 },
  { name: 'rob', id: 3 },
]

// option 1
const elements = employees.map((item, index) => {
  return `<div>${item.id} - ${item.name}</div>`;
});
console.log(elements);

// option 2
function mapDiv(items){
  let mapToReturn = [];
  for (const item of items) {
    mapToReturn.push(`<div>${item.id} - ${item.name}</div>`)
  }
  return mapToReturn;
}
const mapData = mapDiv(employees);
console.log(mapData);