function runMore(distance: number): number {
  return distance + 10;
}

function eat(calories: number) {
  console.log("I ate " + calories + " calories");
}
function sleepIn(hours: number): void {
  console.log("I slept " + hours + " hours");
}

let rm = runMore(100);
console.log(rm);
let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);