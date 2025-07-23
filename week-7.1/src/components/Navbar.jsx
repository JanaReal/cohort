export function Topbar(){
    return <div>
        <button onClick={()=>{
            window.location.href = "/landing"
        }}>Landing page</button>

        <button onClick={()=>{
            window.location.href = "/dashboard"
        }}>Dashboard page</button>

        <button onClick={()=>{
            window.location.href = "/"
        }}>Home page</button>
    </div>
}