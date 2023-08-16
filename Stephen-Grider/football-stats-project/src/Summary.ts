import { MatchData } from "./MatchData.type";

import { WinsAnalysis } from "./analysis/matchWonAnalysis";
import { ConsoleReport } from "./outputReports/consoleReport";
import { HtmlReport } from "./outputReports/htmlReport";

export interface IAnalyzer {
  run(match: MatchData[]): string;
}
export interface IOutputTarget {
  //Report is just the string output from Analyzer
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
  static WinAnalaysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
}
