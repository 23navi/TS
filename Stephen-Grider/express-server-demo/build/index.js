"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRouter_1 = require("./routers/loginRouter");
var app = (0, express_1.default)();
app.use(loginRouter_1.router);
app.listen(3001, function () {
    console.log("Listening to port 3001");
});
