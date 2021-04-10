function runMore(distance) {
    return distance + 10;
}
function eat(calories) {
    console.log("I ate " + calories + " calories");
}
function sleepIn(hours) {
    console.log("I slept " + hours + " hours");
}
var rm = runMore(100);
console.log(rm);
var ate = eat(100);
console.log(ate);
var slept = sleepIn(10);
console.log(slept);
