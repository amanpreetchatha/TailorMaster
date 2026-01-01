import { Alert, ScrollView, View } from "react-native";
import {Customer} from "./customer-list";
import { Button, Input, Text } from "react-native-elements";
import { router, useLocalSearchParams } from "expo-router";
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
    async function deleteCustomer(){
        try{
            setLoading(true);
            const {data, error, status} = await supabase
            .from("customer_list")
            .delete()
            .eq("id", customer.id)
            .select()
            if (error && status !== 406) {
              console.log(error.message)
            }
            if (data)
            {
                Alert.alert("Customer Deleted Successfully");
                router.replace("/customer-list");
            }
        }catch(error: any){
            console.log(error.message)
        }
    }
    async function updateCustomer(){
        try{
            setLoading(true);
            const {data, error, status} = await supabase
            .from("customer_list")
            .update("")
            .eq("id", customer.id)
            

            if (error && status !== 406) {
              console.log(error.message)
            }
      
            if (data) {
              setLoading(false);
              console.log(data);
              


            }


        }catch(error: any){
            console.log(error.message)
        }
    }
    
    

    return (
        <View style={styles.container}>
            <ScrollView>
                <Input label="Name" > {customer.name}</Input>
                <Input label="Phone" > {customer.phone}</Input>
                <Text style={styles.text}>{customer.measurement_type}</Text>
                <Text style={[styles.text, styles.mb20]}>Last updated: {customer.last_updated}</Text>
                
                {
                    Object.entries(measurements).map((array,index)=>(
                        <Input key={index} label={array[0]}> {array[1]}</Input>
                    ))
                }
                <Input label="Notes"> {customer.note}</Input>
                <View style={styles.verticallySpaced}>
                    <Button title="Update"onPress={updateCustomer} />
                </View>
                <View style={styles.verticallySpaced}>
                    <Button title="Delete" onPress={deleteCustomer} disabled={false}/>
                </View>
            </ScrollView>
        </View>
    )
}




