
const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const taskList = [
  {
    id: 1,
    taskName: "Task 1",
    taskDescription: "Description 1",
    taskCompleted: false,
  },
  {
    id: 2,
    taskName: "Task 1",
    taskDescription: "Description 2",
    taskCompleted: true,
  },
  {
    id: 3,
    taskName: "Task 1",
    taskDescription: "Description 3",
    taskCompleted: false,
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/tasks" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(taskList));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const server = http.createServer((req, res) => {
    if (req.url === "/tasks" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(taskList));
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
  
  server.listen(port, host, () => {
    console.log("Server running on: ", host, port);
  });

