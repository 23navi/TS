import fs from "fs";

import { MatchResult } from "../MatchResults.enum";

// type MatchData = [Date, string, string, number, number, MatchResult, string];
export abstract class CsvFileReader<T> {
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  public data: T[] = [];
  public read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
