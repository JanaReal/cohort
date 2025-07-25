import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobAtoms, messageAtoms, networkAtoms, notificationAtoms, totalNotificationSelector } from "./store/atoms/count"

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
  const [messageNotificationCount,setMessageNotificationCount] = useRecoilState(messageAtoms);
  const notificationNotificationCount = useRecoilValue(notificationAtoms);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  

  return<>
  <button>HOME</button>
  <button>MY NETWORK ({networkNotificationCount > 99? "99+":networkNotificationCount})</button>
  <button>JOBS ({jobNotificationCount})</button>
  <button>MESSAGING  ({messageNotificationCount})</button>
  <button>NOTIFICATIONS ({notificationNotificationCount})</button>
  <button>ME ({totalNotificationCount})</button>
  </>

  
}
export default App