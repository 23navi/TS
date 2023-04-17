import { Sortable } from "./Sorter";
import {Sorter} from "./Sorter"
export class NumbersCollections extends Sorter{
    
    constructor(public data:number[]){
        super();
    };

    //This is not working!!

    // toString(){
    //     console.log("hello");
    // }

    swap(leftIndex:number,rightIndex  :number):void{
        const temp=this.data[leftIndex];
        this.data[leftIndex]=this.data[rightIndex];
        this.data[rightIndex]=temp;
    };
    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex]<this.data[rightIndex];
    };
    get length():number{
        return this.data.length;
    }
}