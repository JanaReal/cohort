"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

 export const Appbar = () =>{

    const session = useSession();
    const router = useRouter();
    return <div>
     <button onClick={() => signIn() }>Sign in</button>

     <button onClick={()=> signOut() }>LogOut</button>

    {JSON.stringify(session)}
    </div>
 }