import { atom, selector } from 'recoil';

export const  networkAtoms = atom({
    key:"networkAtoms",
    default: 8
})

export const  jobAtoms = atom({
    key:"jobAtoms",
    default: 0
})

export const  messageAtoms = atom({
    key:"messageAtoms",
    default: 0
})

export const  notificationAtoms = atom({
    key:"notificationAtoms",
    default: 0
})

export const totalNotificationSelector = selector({
  key:" totalNotificationSelector",
  get: ({get}) =>{
    const networkNotificationCount = get(networkAtoms);
    const jobNotificationCount = get(jobAtoms);
    const messageNotificationCount = get(messageAtoms);
    const notificationNotificationCount = get(notificationAtoms);
    return networkNotificationCount+jobNotificationCount+messageNotificationCount+notificationNotificationCount;

  }

})


