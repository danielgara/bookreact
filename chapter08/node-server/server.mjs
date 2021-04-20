import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world");
  } else if (req.url === "/a") {
    res.end("welcome to route a");
  } else if (req.url === "/b") {
    res.end("welcome to route b");
  } else {
    res.end("good bye");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});