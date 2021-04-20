import fs from "fs/promises";

let writeFunction = async function (){
  await fs.writeFile("test-promise.txt", "Hello Promises");
  const readTxt = await fs.readFile("test-promise.txt", "utf-8");

  console.log(readTxt);
};

writeFunction();