function Logger(target: Function) {
  console.log("Logging...");
  console.log({ target });
}

function Logger2(input: string) {
  return function (target: Function) {
    console.log({ input });
    console.log({ target });
  };
}

@Logger2("navi")
class Person {
  name = "Navi";
  constructor() {
    console.log("Person constructor");
  }
}

const p1 = new Person();
console.log(p1);
