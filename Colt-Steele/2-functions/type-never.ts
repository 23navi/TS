//eg1

const giveError = (msg: string) => {
    throw new Error(msg);
}

// type infer will be never on its own




//eg2

const gameOn= (): never=>{
    while(true){
        console.log("Running");
    } 
}