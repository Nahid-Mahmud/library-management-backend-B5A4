"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
// root server route
exports.app.use("/api", routes_1.router);
exports.app.get("/", (req, res) => {
    // res.json({
    //   message: "Welcome to the Library management server! 😀",
    //   status: "running",
    // });
    // send a simple HTML response
    res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Library Management Server</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: white;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
      }
      .container {
        background-color: white;
        padding: 40px 60px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      }
      h1 {
        color:rgb(0, 0, 0);
        font-size: 2.5rem;
        margin-bottom: 10px;
      }
      p {
        font-size: 1.2rem;
        color: #374151;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1> Welcome to the Library Management Server!</h1>
      <p>API is running smoothly. Everything is under control. ✅</p>
    </div>
  </body>
  </html>
`);
});
exports.app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});
