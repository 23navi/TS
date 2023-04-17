export interface Sortable {
  length: number;
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
}

export abstract class Sorter {
  abstract compare(i: number, j: number): boolean;
  abstract swap(i: number, j: number): void;
  abstract length: number;

  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.compare(i, j)) {
          this.swap(i, j);
        }
      }
    }
  }
}
