"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
csvFileReader.read();
//our matches is string[][]
const matches = csvFileReader.data;
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
