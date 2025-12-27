import { View } from "react-native";
import { useUserContext } from "./providers/context";
import { Button, Input } from "react-native-elements";
import styles from "./styles";
import { useState } from "react";
import { router } from "expo-router";

export default function AddCustomer(){
    const user=useUserContext();
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [note,setNote]=useState("");

    function handleSubmit(){
        console.log('works fine')
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
                <Button title="Add" onPress={handleSubmit}/>
            </View>
            <View style={styles.verticallySpaced}>
                <Button title="Cancel" onPress={()=>router.push("/dashboard")}/>
            </View>
        </View>
    );

}