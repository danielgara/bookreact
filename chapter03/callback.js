function letMeKnowWhenComplete(size, callback) {
  var reducer = 0;
  for (var i = 1; i < size; i++) {
    reducer = Math.sin(reducer * i);
    console.log(i);
  }
  console.log("hola");
  callback();
}

letMeKnowWhenComplete(1000, function () {
  console.
    log('Great it completed.');
});