import express, { Request, Response } from "express";
import { router } from "./routers/loginRouter";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["navi"] }));

app.use(router);

app.listen(3001, () => {
  console.log("Listening to port 3001");
});
