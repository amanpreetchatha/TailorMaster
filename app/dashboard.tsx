import { useRouter } from "expo-router";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import {Session} from '@supabase/supabase-js'
import { Button} from 'react-native-elements'
import { supabase } from './../utils/supabase'
import {useEffect, useState} from 'react';

export default function Dashboard({ session }: { session: Session }) {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');

  async function getName(){
    const {data, error, status} = await supabase.from('profiles').select('full_name').eq('id',session.user.id).single();
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

  
  async function getCustomerList(){
    try {
        // change this block of code so that it gets a list of customers from customer table in the database.
          setLoading(true)
          if (!session?.user) throw new Error('No user on the session!')
    
          const { data, error, status } = await supabase
            .from('profiles')
            .select(`full_name`)
            .eq('id', session?.user.id)
            .single()
          if (error && status !== 406) {
            throw error
          }
    
          if (data) {
            setFullName(data.full_name)
            
          }
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert(error.message)
          }
        } finally {
          setLoading(false)
        }

  }
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {fullName}</Text>
        <View style={styles.verticallySpaced}>
          <Button title="Customer List" onPress={()=>(getCustomerList())} disabled={loading} />
        </View>
        <View style={styles.verticallySpaced}>
          <Button title="Log Out" onPress={() => supabase.auth.signOut()} />
        </View>
    </View>
  );
}