export class NumbersCollections{
    
    constructor(public data:number[]){};
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