let myFun = (val: Navi) => {
  console.log("Naviiiii");
};

myFun({ name: "navi", age: 34 });

type Navi = {
  name: string;
  age: number;
};

let myFun2;


myFun2= (name: string, age: number) => {
    return "hello";
};


