//3) Returning the object from a function with types
const nameAge = ():{x:string,y:number}=>{
    return {x:"Navi",y:21};
    //return {x:'navi'} //It will fail as it require both x and y to be returned
    //return {x:"Navi",y:21,z:53}; // this will also fail as we specified that we will return x and y but we are also returning z
}