import { supabase } from "@/utils/supabase";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Button, Input, Switch, Text } from "react-native-elements";
import styles from "./styles";


interface Measurements{
    lambai: string;
}
export default function CustomerDetails(){
    let customer = useLocalSearchParams();
    const [loading,setLoading] = useState(false);
    const [measurements, setMeasurements] = useState([])
    const [disabled,setDisabled] = useState(true);
    
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
            if (error && status !== 406)
              console.log(error.message)
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

            /*
            const {data, error, status} = await supabase
            .from("customer_list")
            .update("")
            .eq("id", customer.id)
            //update cust name,phone,lastupdated, note, all measurements

            if (error && status !== 406)
              console.log(error.message)
                  
            if (data) {
              setLoading(false);
              console.log(data);
            }
            */

        }catch(error: any){
            console.log(error.message)
        }
    }
    
    return (
        <KeyboardAvoidingView behavior={"height"} style={styles.layout}>
            <View style={styles.container}>
                <ScrollView>
                    <Input label="Name" disabled={disabled} onChangeText={(text)=>customer.name=text}> {customer.name}</Input>
                    <Input label="Phone" disabled={disabled}onChangeText={(text)=>customer.phone=text}> {customer.phone}</Input>
                    <Text style={styles.text}>Edit</Text>
                    <Switch style={{alignSelf: "flex-start"}} value={!disabled} onValueChange={()=>setDisabled(!disabled)} />
                    
                    <Text style={styles.text}>{customer.measurement_type}</Text>
                    <Text style={[styles.text, styles.mb20]}>Last updated: {customer.last_updated}</Text>
                    
                    {
                        Object.entries(measurements).map((array,index)=>(
                            <Input key={index} label={array[0]} disabled={disabled} > {array[1]}</Input>
                        ))
                    }
                    <Input label="Notes" disabled={disabled} onChangeText={(text)=>customer.note=text}> {customer.note}</Input>
                    
                    <View style={[styles.verticallySpaced, styles.mb20]}>
                        <Button title="Update"onPress={updateCustomer} />
                    </View>
                    <View style={[styles.verticallySpaced, styles.mb20]}>
                        <Button title="Delete" onPress={deleteCustomer} disabled={false}/>
                    </View>
                    <View style={styles.mb20}>

                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}




