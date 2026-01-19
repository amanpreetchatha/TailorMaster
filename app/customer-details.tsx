import { supabase } from "@/utils/supabase";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Button, Input, Switch, Text } from "react-native-elements";
import "./i18n";
import styles from "./styles";

interface Measurements{
    lambai: string;
}
export default function CustomerDetails(){
    let customer = useLocalSearchParams();
    const [loading,setLoading] = useState(false);
    const [measurements, setMeasurements] = useState([])
    const [disabled,setDisabled] = useState(false);
    const {t} = useTranslation();
    let [updatedMeasurements, setUpdatedMeasurements] = useState([]);
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
                Alert.alert(t("deleteCustomer"));
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
            .update({
                name: customer.name,
                naap_number: customer.naap_number,
                phone: customer.phone,
                note: customer.note,
                last_updated: new Date(),
                measurements: measurements
            })
            .eq("id", customer.id)
            //update cust name,phone,lastupdated, note, all measurements

            if (error && status !== 406)
              console.log(error.message)
                  
            if (data) {
              setLoading(false);
              console.log(data);
            }
            

        }catch(error: any){
            console.log(error.message)
        }
    }
    return (
        <KeyboardAvoidingView behavior={"height"} style={styles.layout}>
            <View style={styles.container}>
                <ScrollView>
                    <Input label={t("name")} editable={disabled} onChangeText={(text)=>customer.name=text}> {customer.name}</Input>
                    <Input label={t("naapNumber")} editable={disabled} onChangeText={(text)=>customer.naap_number=text}> {customer.naap_number}</Input>
                    <Input label={t("phone")} editable={disabled} onChangeText={(text)=>customer.phone=text}> {customer.phone}</Input>
                    
                    <Text>{t("update")}</Text>
                    <Switch style={{alignSelf: "flex-start"}} value={disabled} onValueChange={()=>setDisabled(!disabled)} />
                    
                    <Text>{customer.measurement_type}</Text>
                    <Text style={[ styles.mb20]}>{t("last_updated")} : {customer.last_updated}</Text>
                    
                    {
                        Object.entries(measurements).map((array,index)=>(
                            //implement editing values here
                            <Input key={index} label={t(array[0])} editable={disabled} onChangeText={(text)=> null}> {array[1]}</Input> 

                        ))
                    }
                    <Input label={t("note")} editable={disabled} onChangeText={(text)=>customer.note=text}> {customer.note}</Input>
                    
                    {
                        disabled && (
                            <View style={[styles.verticallySpaced, styles.mb20]}>
                                <Button style={styles.button} title={t("update")} onPress={updateCustomer}  />
                            </View>
                        )
                    }   
                    <View style={[styles.verticallySpaced, styles.mb20]}>
                        <Button style={styles.button} title={t("delete")} onPress={deleteCustomer} />
                    </View>
                    <View style={styles.mb20}>

                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}




