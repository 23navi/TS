import express, { Request, Response } from "express";
import { router } from "./routers/loginRouter";
import bodyParser from "body-parser";

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3001, () => {
  console.log("Listening to port 3001");
});
