import { MatchData } from "./MatchData.type";

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
}
