import fs from "fs";


//our matches is string[][]
const matches= fs.readFileSync("football.csv",{encoding:"utf-8"}).split("\n").map((row:string):string[]=>{
    return row.split(",")
});

let manWon=0

for(let match of matches){
    if(match[1]==="Man United" && match[5]==="H"){
        manWon++;
    }else if (match[2]==="Man United" && match[5]==="A"){
        manWon++;
    }
}
console.log(manWon);