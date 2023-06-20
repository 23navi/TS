import { User } from "./models/User";

const user = new User({ name: "navi", age: 22 });

user.set({ name: "aaa", age: 21 });

console.log(user.get("name"));
console.log(user.get("age"));
