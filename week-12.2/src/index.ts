interface User{
    id: string;
    name: String;
    age: number;
    email:string;
    password:string
}

type UpdatedProps = Pick<User, 'name'| 'email'| 'password'>

type UpdatedPropsOptional = Partial<UpdatedProps>;

function updateProps(UpdatedPropsOptional:UpdatedPropsOptional){
    
}
updateProps({
    name:"deb"
});