import { RecoilRoot, useRecoilValue } from "recoil"
import { jobAtoms, messageAtoms, networkAtoms, notificationAtoms } from "./store/atoms/count"

function App() {
  
  return <>
  <RecoilRoot>

    <MainApp/>
  </RecoilRoot>
  
  
  </>
}

function MainApp(){

  const networkNotificationCount = useRecoilValue(networkAtoms);
  const jobNotificationCount = useRecoilValue(jobAtoms);
  const messageNotificationCount = useRecoilValue(messageAtoms);
  const notificationNotificationCount = useRecoilValue(notificationAtoms);
  

  return<>
  <button>HOME</button>
  <button>MY NETWORK ({networkNotificationCount > 99? "99+":networkNotificationCount})</button>
  <button>JOBS ({jobNotificationCount})</button>
  <button>MESSAGING  ({messageNotificationCount})</button>
  <button>NOTIFICATIONS ({notificationNotificationCount})</button>
  <button>ME</button>
  </>

  
}
export default App