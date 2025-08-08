
type Users = Record<string,{age:number; name:  string}>;

const users: Users = {
    "123":{age:21,name:"harkirat"},
    "121":{age:32,name:"naman"}
}





/*
 interface User{
    //id: string;
    name: String;
    age: number;
    //email:string;
    //password:string
}

const user1: Readonly<User>={
    name: "deb",
    age:32
}
user1.age = 34;

type UpdatedProps = Pick<User, 'name'| 'email'| 'password'>

type UpdatedPropsOptional = Partial<UpdatedProps>;

function updateProps(UpdatedPropsOptional:UpdatedPropsOptional){
    
}
updateProps({
    name:"deb"
});
*/