"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./composition (interface)/CsvFileReader");
const MatchReader_1 = require("./composition (interface)/MatchReader");
const MatchResults_enum_1 = require("./MatchResults.enum");
// const matchFileReader = new MatchFileReader("football.csv");
// matchFileReader.read();
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchFileReader(csvFileReader);
matchReader.load();
const matches = matchReader.matches;
let manWon = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === MatchResults_enum_1.MatchResult.HomeWin) {
        manWon++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResults_enum_1.MatchResult.AwayWin) {
        manWon++;
    }
}
console.log(manWon);
