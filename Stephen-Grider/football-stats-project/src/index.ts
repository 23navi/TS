import { CsvFileReader } from "./composition (interface)/CsvFileReader";
import { MatchFileReader } from "./composition (interface)/MatchReader";
import { MatchResult } from "./MatchResults.enum";

// const matchFileReader = new MatchFileReader("football.csv");
// matchFileReader.read();

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchFileReader(csvFileReader);
matchReader.load();

const matches = matchReader.matches;
let manWon = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manWon++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manWon++;
  }
}
console.log(manWon);
