import { supabase } from "@/utils/supabase";
import { useLocalSearchParams } from "expo-router";
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
    const [name,setName]=useState("");
    const [naap_number,setNaap_number]=useState("");
    const [phone,setPhone]=useState("");
    const [note, setNote] = useState("");
    const [loading,setLoading] = useState(false);
    const [measurements, setMeasurements] = useState<Record<string,string>>({})
    const [disabled,setDisabled] = useState(false);
    const {t} = useTranslation();
    useEffect(()=>{
        getData();
    },[]);
    async function getData(){
        try{
            setLoading(true);
            const {data, error, status} = await supabase
            .from("customer_list")
            .select("*")
            .eq("id", customer.id)

            if (error && status !== 406) {
              console.log(error.message)
            }
            if (data) {
              setLoading(false);
              setName(data[0].name);
              setNaap_number(data[0].naap_number);
              setPhone(data[0].phone);
              setNote(data[0].note);
              setMeasurements(data[0].measurements || {});
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
                
            }
        }catch(error: any){
            console.log(error.message)
        }
    }
    
    async function updateCustomer(){
        try{
            setLoading(true);

            
            const {data, error} = await supabase
            .from("customer_list")
            .update({
                name: name,
                naap_number: naap_number,
                phone: phone,
                note: note,
                last_updated: new Date(),
                measurements: measurements
            })
            .eq("id", customer.id)
            //update cust name,phone,lastupdated, note, all measurements

            if (error)
              console.log(error.message)
                  
            setLoading(false);
            Alert.alert(t("updateSuccess"));
        }catch(error: any){
            console.log(error.message)
        }
    }
    return (
        <KeyboardAvoidingView behavior={"height"} style={styles.layout}>
            <View style={styles.container}>
                <ScrollView>
                    <Input label={t("name")} editable={disabled} onChangeText={(text)=>setName(text)}> {name}</Input>
                    <Input label={t("naapNumber")} editable={disabled} onChangeText={(text)=>setNaap_number(text)}> {naap_number}</Input>
                    <Input label={t("phone")} editable={disabled} onChangeText={(text)=>setPhone(text)}> {phone}</Input>
                    
                    <Text>{t("update")}</Text>
                    <Switch style={{alignSelf: "flex-start"}} value={disabled} onValueChange={()=>setDisabled(!disabled)} />
                    
                    <Text>{customer.measurement_type}</Text>
                    <Text style={[ styles.mb20]}>{t("last_updated")} : {customer.last_updated}</Text>
                    
                    {
                        Object.entries(measurements || {}).map(([key, val], index) => (
                            <Input
                                key={key + index}
                                label={t(key)}
                                value={String(val ?? "")}
                                editable={disabled}
                                onChangeText={(text) =>
                                    setMeasurements((prev) => ({ ...prev, [key]: text }))
                                }
                            />
                        ))
                        
                    }
                    <Input label={t("note")} editable={disabled} onChangeText={(text)=>setNote(text)}> {note}</Input>
                    
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




