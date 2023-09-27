function Logger(target: Function) {
  console.log("Logging...");
  console.log({ target });
}

@Logger
class Person {
  name = "Navi";
  constructor() {
    console.log("Person constructor");
  }
}

const p1 = new Person();
console.log(p1);
