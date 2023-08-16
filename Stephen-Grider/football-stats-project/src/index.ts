import { CsvFileReader } from "./composition (interface)/CsvFileReader";
import { MatchFileReader } from "./composition (interface)/MatchReader";
import { Summary } from "./Summary";

// const matchFileReader = new MatchFileReader("football.csv");
// matchFileReader.read();

const matchReader = MatchFileReader.fromCsv("football.csv");
matchReader.load();

const matches = matchReader.matches;

const summary = Summary.WinAnalaysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matches);
