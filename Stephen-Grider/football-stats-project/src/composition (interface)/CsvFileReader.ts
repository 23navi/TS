import fs from "fs";
import { DataReader } from "./DataReader.interface";

export abstract class CsvFileReader implements DataReader {
  constructor(public filename: string) {}

  public data: string[][] = [];
  public read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}

// This is now a standalone CsvFileReader class that can be used by any other class that extends it.
