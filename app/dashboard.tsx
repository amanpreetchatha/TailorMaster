import { useRouter } from "expo-router";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import {Session} from '@supabase/supabase-js'
import { Button} from 'react-native-elements'
import { supabase } from './../utils/supabase'
import {useEffect, useState} from 'react';
import CustomerList from "./customer-list";
import  useUserContext  from "./providers/context";

export default function Dashboard() {
  const router=useRouter();
  const user = useUserContext();
  
  return (
    <View style={styles.container}>
        <Text style={[styles.welcome, styles.text]}>Welcome {user?.email}</Text>
        <View style={styles.verticallySpaced}>
          <Button title="Add Customer" onPress={()=>router.push('/add-customer')} />
        </View>
        <View style={styles.verticallySpaced}>
          <Button title="Customer List" onPress={()=>router.push('/customer-list')} />
        </View>
        <View style={styles.verticallySpaced}>
          <Button title="Log Out" onPress={() => {supabase.auth.signOut(); router.replace('/login')}} />
        </View>
    </View>
  );
}