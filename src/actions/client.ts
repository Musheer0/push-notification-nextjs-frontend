export function urlBase64ToUint8Array(base64String:string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
export const  registerServiceWorker = async(setSub:(data:PushSubscription)=>void)=>{
  const registration = await navigator.serviceWorker.register('/sw.js',{
    scope: '/',
    updateViaCache: 'none'
  });
 const sub = await registration.pushManager.getSubscription();
 if(sub){
  setSub(sub)
 }
}

export const unsubscribeFromPush =async (sub:PushSubscription)=>{
  await sub.unsubscribe();
}
export const SubscribeToPush = async(getSerialized?:boolean)=>{
  const registration = await navigator.serviceWorker.ready;
  const sub = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array( process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!)
  });
  if(getSerialized){
    return JSON.parse(JSON.stringify(sub));
  }
  else return sub;
}
