const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('I completed successfully');
    reject('I failed');
  }, 500);
});

console.log("First");

myPromise
  .then(done => {
    console.log(done);
  })
  .catch(err => {
    console.log(err);
  });

console.log("Did you finish?");