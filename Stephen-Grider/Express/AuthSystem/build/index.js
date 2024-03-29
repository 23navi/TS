"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRouter_1 = require("./routers/loginRouter");
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["navi"] }));
app.use(loginRouter_1.router);
app.listen(3001, () => {
    console.log("Listening to port 3001");
});
