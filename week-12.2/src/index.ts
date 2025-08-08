interface User{
    name: String;
    age: number;
}
function sunOfAge(user1:User,user2:User){
    return user1.age + user2.age;
}
const age = sunOfAge({name:"tara",age:6},{name:"tara",age:66});

console.log(age);