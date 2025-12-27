import { useRouter } from "expo-router";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import {Session} from '@supabase/supabase-js'
import { Button} from 'react-native-elements'
import { supabase } from './../utils/supabase'
import {useEffect, useState} from 'react';
import CustomerList from "./customer-list";
import { useUserContext } from "./providers/context";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const router=useRouter();
  const user = useUserContext();

  async function getName(){
    const {data, error, status} = await supabase.from('profiles').select('full_name').eq('id',user.id).single();
    if(error && status !== 406){
      throw error;
    }
    if(data){
      setFullName(data.full_name);
    }
  } 
  useEffect(()=>{
    getName();  

  });

  
  return (
    <View style={styles.container}>
        <Text style={[styles.welcome, styles.text]}>Welcome {fullName}</Text>
        <View style={styles.verticallySpaced}>
          <Button title="Customer List" onPress={()=>router.push('/customer-list')} disabled={loading} />
        </View>
        <View style={styles.verticallySpaced}>
          <Button title="Log Out" onPress={() => supabase.auth.signOut()} />
        </View>
    </View>
  );
}