import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { useUserContext } from "./providers/context";
import styles from "./styles";

export default function AddCustomer(){
    const user=useUserContext();
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [note,setNote]=useState("");
    const [dataSubmitted, setDataSubmitted] = useState(false);
    const [message,setMessage] = useState("");

    function validateData(){
        setMessage("");
        if((name!=="")&&(note!=="")){
            handleSubmit();
        }
        else
            setMessage("Name and Notes can't be empty");
    }
    async function handleSubmit(){

        const customerData={"name": name, "phone": phone, "note": note, "last_updated": new Date()};
        const { data, error, status } = await supabase
        .from('customer_list')
        .insert(customerData)
        .single()
        
        if (error && status !== 406) {
            setMessage(error.message);
        }else
        if(error)     
            setMessage(error.message)
        else
            setMessage("Submitted!");
    }

    return (
        <View>
            <Input 
                style={styles.inputField}
                placeholder="Enter name"
                onChangeText={(text)=>(setName(text))}
            />
            <Input 
                style={styles.inputField}
                placeholder="Phone number"
                onChangeText={(text)=>(setPhone(text))}
            />
            <Input 
                style={styles.inputField}
                placeholder="Notes"
                onChangeText={(text)=>(setNote(text))}
            />
            <View style={styles.verticallySpaced}>
                <Button title="Add" onPress={validateData}/>
            </View>
            <View style={styles.verticallySpaced}>
                <Button title="Cancel" onPress={()=>router.push("/")}/>
            </View>
            <View style={styles.verticallySpaced}>
                <Text style={styles.text}>{ message }</Text>
            </View>
        </View>
    );
}