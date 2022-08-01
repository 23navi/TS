type Point = {
    x: number,
    y: number,
    z?: number,
  };
  
const myPoint: Point = { x: 1, y: 3 }; //it will also work
const myPoint2: Point = { x: 1, y: 3 ,z:4 }; //it will also work




function navi(a:string,b?:string){
    return "heyy";
}
  
navi("heyyy"); // works with one argument

