import express from "express";
// import studentRoutes from "./src/student/routes.js";

import { studentRoutes } from "./src/student/index.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);
app.listen(port, () => console.log(`app listening on ${port}`));
