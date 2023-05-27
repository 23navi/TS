"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchFileReader = void 0;
const convertDate_utils_1 = require("../convertDate.utils");
class MatchFileReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, convertDate_utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchFileReader = MatchFileReader;
