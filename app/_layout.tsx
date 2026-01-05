import { Session } from '@supabase/supabase-js';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../utils/supabase';
import "./i18n";
import { DashboardContext } from './providers/context';


export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null)
  const {t} = useTranslation();
  
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
        <Stack.Screen name="index" options={{headerTitle: t("tailor_master"), headerLeft: ()=>null}}/>
        <Stack.Screen name="register" options={{headerTitle: t("register")}}/>
        <Stack.Screen name="login" options={{headerTitle: t("login"), headerBackIcon: undefined}}/>
        <Stack.Screen name="dashboard" options={{headerTitle: t("dashboard")}}/>
        <Stack.Screen name="customer-list" options={{headerTitle: t("customer_list")}}/>
        <Stack.Screen name="add-customer" options={{headerTitle: t("add_customer")}}/>
        <Stack.Screen name="customer-details" options={{headerTitle: t("customer_detail")}}/>
        
      </Stack>
    </DashboardContext.Provider>
  )
}
