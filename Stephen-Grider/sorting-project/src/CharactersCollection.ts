import { Sortable } from "./Sorter";
export class CharactersCollections implements Sortable{
    
    constructor(public data:string){};
    swap(leftIndex:number,rightIndex  :number):void{
        const temp=this.data[leftIndex];
        this.data[leftIndex]=this.data[rightIndex];
        this.data[rightIndex]=temp;
    };
    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex].toLowerCase()<this.data[rightIndex].toLowerCase();
    };
    get length():number{
        return this.data.length;s
    }
}