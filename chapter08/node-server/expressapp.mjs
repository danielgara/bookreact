import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();

app.use(bodyParser.json());

router.get("/a", (req, res, next) => {
  res.send("Hello this is route a");
});

router.post("/c", (req, res, next) => {
  res.send("Hello this is route c");
});

router.get("/api/v1/users", (req, res, next) => {
  const users = [
    {
      id: 1,
      username: "tom",
    },
    {
      id: 2,
      username: "jon",
    },
    {
      id: 3,
      username: "linda",
    },
  ];
  console.log(req.query.userid);
  const user = users.find((usr) => usr.id == req.query.userid);
  res.send(`User ${user?.username}`);
});

app.use(router);

app.listen({ port: 8000 }, () => {
  console.log("Express Node server has loaded!");
});