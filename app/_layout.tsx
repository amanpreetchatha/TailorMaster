import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';
import { DashboardContext } from './providers/context';



export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null)
  
    useEffect(() => {
      
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
  

  return (
    <DashboardContext.Provider value={session?.user}>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{headerTitle: "Tailor Master", headerLeft: ()=>null}}/>
        <Stack.Screen name="register" options={{headerTitle: "Register"}}/>
        <Stack.Screen name="login" options={{headerTitle: "Login", headerBackIcon: undefined}}/>
        <Stack.Screen name="dashboard" options={{headerTitle: "Dashboard"}}/>
        <Stack.Screen name="customer-list" options={{headerTitle: "Customer List"}}/>
        <Stack.Screen name="add-customer" options={{headerTitle: "Add Customer"}}/>
      </Stack>
    </DashboardContext.Provider>
  )
}
