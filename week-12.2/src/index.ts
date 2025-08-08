interface User{
    id: string;
    name: String;
    age: number;
    email:string;
    password:string
}

type UpdatedProps = Pick<User, 'name'| 'email'| 'password'>

