import { View } from "react-native";
import {Customer} from "./customer-list";
import { Input, Text } from "react-native-elements";
import { useLocalSearchParams } from "expo-router";
import styles from "./styles";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";


interface Measurements{
    lambai: string;
}
export default function CustomerDetails(){
    const customer = useLocalSearchParams();
    const [loading,setLoading] = useState(false);
    const [measurements, setMeasurements] = useState([])
    
    useEffect(()=>{
        getData();
    },[]);
    async function getData(){
        try{
            setLoading(true);
            const {data, error, status} = await supabase
            .from("customer_list")
            .select("measurements")
            .eq("id", customer.id)

            if (error && status !== 406) {
              console.log(error.message)
            }
      
            if (data) {
              setLoading(false);
              setMeasurements(data[0].measurements);
              console.log(measurements);   
              


            }


        }catch(error: any){
            console.log(error.message)
        }
    }
    
    
    

    return (
        <View style={styles.container}>
            <Text style={[styles.text]}>Name: {customer.name}</Text>
            <Text style={styles.text}>Phone: {customer.phone}</Text>
            <Text style={styles.text}>Type: {customer.measurement_type}</Text>

            <Text style={styles.text}>Measurements: </Text>
            {
                Object.entries(measurements).map((array,index)=>(
                    <Text key={index} style={styles.text}> {array[0]} : {array[1]}</Text>
                ))
            }
            <Text style={styles.text}>Notes: {customer.note}</Text>
            <Text style={styles.text}>Last updated: {customer.last_updated}</Text>

        </View>
    )
}




