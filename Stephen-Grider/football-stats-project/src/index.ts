import fs from "fs";


//our matches is string[][]
const matches= fs.readFileSync("football.csv",{encoding:"utf-8"}).split("").map((row:string):string[]=>{
    return row.split(",")
});