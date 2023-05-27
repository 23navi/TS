"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchFileReader_1 = require("./MatchFileReader");
const matchFileReader = new MatchFileReader_1.MatchFileReader("football.csv");
matchFileReader.read();
//our matches is string[][]
const matches = matchFileReader.data;
let manWon = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === "H") {
        manWon++;
    }
    else if (match[2] === "Man United" && match[5] === "A") {
        manWon++;
    }
}
console.log(manWon);
