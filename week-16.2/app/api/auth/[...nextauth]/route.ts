import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: 'Username', type: 'text', placeholder: 'username'},
                password: {label: 'password', type: 'password', placeholder: 'password'},
                //otp: {}
            },
            async authorize(credentials: any){
                /* 

                cosnt username = credentials.username;
                const password = credentials.password;

                const user = prisma.user.findOne({
                    where :{
                    email:username,
                    password: password
                    }
                })
                
                if(user){
                    return {
                        id: user.id,
                        email: user.email
                    };
                }
                else{
                    return null;
                }
                */
               return null;
            },
        })
    ]

});


export const GET = handler;
export const POST = handler;