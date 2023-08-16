import { CsvFileReader } from "./composition (interface)/CsvFileReader";
import { MatchFileReader } from "./composition (interface)/MatchReader";
import { Summary } from "./Summary";

// const matchFileReader = new MatchFileReader("football.csv");
// matchFileReader.read();

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchFileReader(csvFileReader);
matchReader.load();

const matches = matchReader.matches;

const summary = Summary.WinAnalaysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matches);
