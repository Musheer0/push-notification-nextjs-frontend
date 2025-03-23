"use client"
import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { registerServiceWorker, SubscribeToPush } from '@/actions/client';
import { SubscribeNotification } from '@/actions/notification';
import { toast } from 'sonner';
  
const NotificationPrompt = () => {
  const [isSupported ,setIsSupported] = useState(false);
  const [subscription ,setSubscription] = useState<PushSubscription|null>(null);
    const [showDailog, SetShowDailog] = useState(false);
    useEffect(()=>{
      if('serviceWorker' in navigator && 'PushManager' in window){
        setIsSupported(true);
        registerServiceWorker(setSubscription)
      }
    },[]);
    useEffect(()=>{
         if(subscription){
          SetShowDailog(false)
         }
         else{
          SetShowDailog(true)
         }
    },[subscription])
    const handlepush = async()=>{
       toast.loading('subscribing...')
      const sub = await SubscribeToPush(true)
        await SubscribeNotification(sub);
        toast.dismiss()
        
    }
  return (
    <div>
<AlertDialog open={showDailog} onOpenChange={(data)=>{
 SetShowDailog(data)
}}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Allow Notifications</AlertDialogTitle>
      <AlertDialogDescription>
        enable notifications to recive updates and alerts
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handlepush}>Enable Notification</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default NotificationPrompt