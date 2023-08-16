import { IOutputTarget } from "../Summery";

export class ConsoleOutputTarget implements IOutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
