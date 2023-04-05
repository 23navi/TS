"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    ;
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < i; j++) {
                if (this.collection.compare(i, j)) {
                    this.collection.swap(i, j);
                }
            }
        }
    }
}
const numberColl = new NumbersCollection_1.NumbersCollections([3, 4, 15, 6, 3]);
const sorter = new Sorter(numberColl);
sorter.sort();
console.log(sorter.collection.data);
