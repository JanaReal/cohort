"use strict";
function sunOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sunOfAge({ name: "tara", age: 6 }, { name: "tara", age: 66 });
console.log(age);
