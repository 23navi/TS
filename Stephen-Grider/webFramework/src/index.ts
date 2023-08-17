import { User } from "./models/User";

const user = new User({ name: "navi", age: 22 });
user.save();

user.set({ name: "aaa" });

console.log(user.get("name"));
console.log(user.get("age"));
