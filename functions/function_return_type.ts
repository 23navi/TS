function navi(name:string): string{
    return `Hello ${name}`;
}

//note that function can infer the return type also


//function with multiple return type

function odd(num:number){
    if(num%2==0){
        return `${num} is Even`;
    }
    return num;
}

// Ts will infer the return type to be number | string.

