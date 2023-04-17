import { NumbersCollections } from "./NumbersCollection";


export interface Sortable{
    length:number;
    swap(leftIndex:number,rightIndex:number):void;
    compare(leftIndex:number,rightIndex:number):boolean;
}

class Sorter{
    constructor(public collection:Sortable){};

    sort():void{
        const {length}= this.collection;
        for(let i=0;i<length;i++){
            for(let j=0;j<i;j++){
                if(this.collection.compare(i,j)){
                    this.collection.swap(i,j);
                }
            }
        }
    }
}

const numberColl= new NumbersCollections([3,4,15,6,3]);

const sorter= new Sorter(numberColl);
sorter.sort()
console.log(numberColl.data);