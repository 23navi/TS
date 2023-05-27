"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollections = void 0;
class NumbersCollections {
    constructor(data) {
        this.data = data;
    }
    ;
    swap(leftIndex, rightIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
    ;
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] < this.data[rightIndex];
    }
    ;
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollections = NumbersCollections;
