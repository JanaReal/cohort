import { useEffect, useState } from 'react';
import './App.css'

export default function App(){

  const isOnline = useIsOnline();
  if(isOnline) {
    return <div>user is Online</div>
  }
  return <div>user offline</div>
  
 }

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener("Online",()=>{
      setIsOnline(true);
    })
    window.addEventListener("offline",()=>{
      setIsOnline(false);
    })
  },[])

  

  return (
    isOnline
  );
}
 
