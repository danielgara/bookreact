async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside delay");
      resolve('I completed successfully');
    }, 500);
  });
}

console.log("First");

async function execAsyncFunc() {
  console.log("Start exec");
  const result = await delayedResult();
  console.log("Finish exec");
  console.log(result);
};

execAsyncFunc();
console.log("Did you finish?");