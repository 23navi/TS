import { CsvFileReader } from "./composition (interface)/CsvFileReader";
import { MatchFileReader } from "./composition (interface)/MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysis/matchWonAnalysis";
import { ConsoleReport } from "./outputReports/consoleReport";
import { HtmlReport } from "./outputReports/htmlReport";

// const matchFileReader = new MatchFileReader("football.csv");
// matchFileReader.read();

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchFileReader(csvFileReader);
matchReader.load();

const matches = matchReader.matches;

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new HtmlReport()
);

summary.buildAndPrintReport(matches);
