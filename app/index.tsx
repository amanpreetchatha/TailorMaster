/*
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import {styles} from "./styles";
export default function Index() {
  const router=useRouter();
  return (
    <View style={styles.container}>

      <Pressable onPress={()=>{router.push('/register')}} style={styles.button}>Register</Pressable>
      <Pressable onPress={()=>{router.push('/login')}} style={styles.button}>Login</Pressable>
    </View>
  );
}
*/

import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { supabase } from '../utils/supabase'
import LoginForm from './login'
import Dashboard from './dashboard'



export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

/* return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <LoginForm />}
    </View>
  )
*/
  return (
    <View>
      {
        session && session.user ? 
        <Dashboard key={session.user.id} session={session} /> :
        <LoginForm />
      }
    </View>
  )
}