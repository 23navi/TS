//1) Passing an object as function parameter
const printName = (name:{firstN: string,lastN: string})=>{
    return `Full name is ${name.firstN} ${name.lastN}`;
}

printName({firstN:"navi",lastN:"sureka"})// it require both first and last name
// PrintName({first:"navi"}) //it will say that last name is missing.



