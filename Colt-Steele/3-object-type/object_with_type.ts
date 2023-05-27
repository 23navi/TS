//2) Making a new obj with types
const obj:{x:number,y:number}={x:40,y:59};
obj['x']=59;
// obj['x']='hello'; //we set x as number and we can't make it string
obj['z']="hello"; //we can add new item to obj without type
obj['z']=56; //we can also change it's type bec by default it is `any` type.


