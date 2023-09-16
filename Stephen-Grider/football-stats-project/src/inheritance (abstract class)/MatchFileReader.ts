import { MatchResult } from "../MatchResults.enum";

import { dateStringToDate } from "../convertDate.utils";

import { CsvFileReader } from "./CsvFileReader";

import { MatchData } from "../MatchData.type";

// type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchFileReader extends CsvFileReader<MatchData> {
  constructor(public filename: string) {
    super(filename);
  }
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
