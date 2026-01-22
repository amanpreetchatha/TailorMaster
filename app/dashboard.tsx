import { useRouter } from "expo-router";
import { useTranslation } from 'react-i18next';
import { Alert, Text, View } from "react-native";
import { Button } from 'react-native-elements';
import { supabase } from './../utils/supabase';
import "./i18n";
import useUserContext from "./providers/context";
import styles from "./styles";
import { useEffect, useState } from "react";


export default function Dashboard() {
  const router=useRouter();
  const user = useUserContext();
  const {t}=useTranslation();
  const [name,setName]=useState("");

  useEffect(()=>{
    getData();
  },[]);
  async function getData(){
          try{
              const {data, error, status} = await supabase
              .from("profiles")
              .select("full_name")
              .eq("id", user?.id)
  
              if (error) {
                console.log(error.message)
              }
        
              if (data) {
                setName(data[0].full_name);
                
              }
  
  
          }catch(error: any){
              console.log(error.message)
          }
      }
      
  return (
    
    <View style={styles.container}>
        <Text style={[styles.welcome, styles.text]}>{t("greeting")} {name}</Text> 
        <View style={styles.mb20}>
          <Button style={styles.button} title={t("add_customer")} onPress={()=>router.push('/add-customer')} />
        </View>
        <View style={styles.mb20}>
          <Button style={styles.button} title={t("customer_list")} onPress={()=>router.push('/customer-list')} />
        </View>
        <View style={styles.mb20}>
          <Button style={styles.button} title={t("logout")} onPress={() => {supabase.auth.signOut(); router.replace('/')}} />
        </View>
    </View>
  );
}