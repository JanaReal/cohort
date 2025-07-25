import { useNavigate } from "react-router-dom"

export default function Topbar(){

    const navigate = useNavigate();
    return <div>
        <button onClick={()=>{
            navigate("/landing")
        }}>Landing page</button>

        <button onClick={()=>{
            navigate("/dashboard")
        }}>Dashboard page</button>

        <button onClick={()=>{
            navigate("/")
        }}>Home page</button>
    </div>
}