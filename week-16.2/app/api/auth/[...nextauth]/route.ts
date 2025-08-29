import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'username' },
                password: { label: 'password', type: 'password', placeholder: 'password' },
                //otp: {}
            },
            async authorize(credentials: any) {
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
                return {
                    id: 1,
                    email: 'dja2gmail.com',
                    name: 'debanjan'
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            allowDangerousEmailAccountLinking: true,
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID || "",
            clientSecret: process.env.TWITTER_SECRET || "",
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET

});


export const GET = handler;
export const POST = handler;