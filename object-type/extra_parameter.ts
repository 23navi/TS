//Passing extra parameter to the function
const yoFunction = (name:{firstN: string,lastN: string})=>{
    return `Full name is ${name.firstN} ${name.lastN}`;
}

//yoFunction({firstN:"navi",lastN:"sureka",age:50})
// will throw error as we are passing age which function was not hoping to get



//wierd
let obj={firstN:"Navi",lastN:"Sureka",age:21}
yoFunction(obj) // this will workkkk