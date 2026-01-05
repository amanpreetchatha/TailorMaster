import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";
import "./i18n";
import useUserContext from "./providers/context";
import styles from "./styles";

export default function AddCustomer(){
    const user=useUserContext();
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [naapNumber,setNaapNumber] = useState("");
    const [note,setNote]=useState("");
    const {t} = useTranslation();
    
    const [message,setMessage] = useState("");
    const [selectedRadio, setSelectedRadio]=useState(0);
    const [kurtaPajamaMeasurements,setKurtaPajamaMeasurements]=useState<Record<string,string>>({});
    const [salwarSuitMeasurements, setSalwarSuitMeasurements]=useState<Record<string,string>>({});
    const [pantShirtMeasurements, setPantShirtMeasurements]=useState<Record<string,string>>({});

    function resetAllFields() {
        setNote('');
        setKurtaPajamaMeasurements({});
        setSalwarSuitMeasurements({});
        setPantShirtMeasurements({});
    }

    const kurtaPajama =
        <View>
            <Input label={t("lambai")} value={kurtaPajamaMeasurements.lambai ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, lambai: text}))}/>
            <Input label={t("ghera")} value={kurtaPajamaMeasurements.ghera ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, ghera: text}))}/>
            <Input label={t("kamar")} value={kurtaPajamaMeasurements.kamar ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, kamar: text}))}/> 
            <Input label={t("shati")} value={kurtaPajamaMeasurements.shati ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, shati: text}))}/>
            <Input label={t("teera")} value={kurtaPajamaMeasurements.teera ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, teera: text}))}/>
            <Input label={t("baah")} value={kurtaPajamaMeasurements.baah ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, baah: text}))}/>
            <Input label={t("modha")} value={kurtaPajamaMeasurements.modha ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, modha: text}))}/>
            <Input label={t("collar")} value={kurtaPajamaMeasurements.collar ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, collar: text}))}/>
            <Input label={t("pajamaLambai")} value={kurtaPajamaMeasurements.pajamaLambai ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, pajamaLambai: text}))}/>
            <Input label={t("mori")} value={kurtaPajamaMeasurements.mori ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, mori: text}))}/>
            <Input label={t("patt")} value={kurtaPajamaMeasurements.patt ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, patt: text}))}/>
            <Input label={t("jholi")} value={kurtaPajamaMeasurements.jholi ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, jholi: text}))}/>
            
        </View>
    

    const salwarSuit =
        <View>
            <Input label={t("paloi")} value={salwarSuitMeasurements.paloi ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, paloi: text}))}/>
            <Input label={t("jamperLambai")} value={salwarSuitMeasurements.jamperLambai ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, jamperLambai: text}))}/>
            <Input label={t("shati")} value={salwarSuitMeasurements.shati ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, shati: text}))}/>
            <Input label={t("kamar")} value={salwarSuitMeasurements.kamar ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, kamar: text}))}/>
            <Input label={t("hip")} value={salwarSuitMeasurements.hip ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, hip: text}))}/>
            <Input label={t("ghera")} value={salwarSuitMeasurements.ghera ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, ghera: text}))}/>
            <Input label={t("chak")} value={salwarSuitMeasurements.chak ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, chak: text}))}/>
            <Input label={t("teera")} value={salwarSuitMeasurements.teera ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, teera: text}))}/>
            <Input label={t("baah")} value={salwarSuitMeasurements.baah ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, baah: text}))}/>
            <Input label={t("baahMori")} value={salwarSuitMeasurements.baahMori ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, baahMori: text}))}/>
            <Input label={t("modha")} value={salwarSuitMeasurements.modha ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, modha: text}))}/>
            <Input label={t("gala")} value={salwarSuitMeasurements.gala ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, gala: text}))}/>
            <Input label={t("salwarMori")} value={salwarSuitMeasurements.salwarMori ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, salwarMori: text}))}/>
            <Input label={t("peti")} value={salwarSuitMeasurements.peti ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, peti: text}))}/>
            <Input label={t("fer")} value={salwarSuitMeasurements.fer ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, fer: text}))}/>
        </View>
    

    const pantShirt =
        <View>
            <Input label={t("lambai")} value={pantShirtMeasurements.lambai ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, lambai: text}))}/>
           
            <Input label={t("frontKamar")} value={pantShirtMeasurements.frontKamar ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, frontKamar: text}))}/>
           
            <Input label={t("teera")} value={pantShirtMeasurements.teera ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, teera: text}))}/> 
            <Input label={t("baah")} value={pantShirtMeasurements.baah ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, baah: text}))}/>
            <Input label={t("modha")} value={pantShirtMeasurements.modha ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, modha: text}))}/>
            <Input label={t("cuff")} value={pantShirtMeasurements.cuff ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, cuff: text}))}/>
            <Input label={t("collar")} value={pantShirtMeasurements.collar ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, collar: text}))}/>
            <Input label={t("pantLambai")} value={pantShirtMeasurements.pantLambai ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, pantLambai: text}))}/>
            <Input label={t("kamar")} value={pantShirtMeasurements.kamar ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, kamar: text}))}/>
            <Input label={t("hip")} value={pantShirtMeasurements.hip ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, hip: text}))}/>
            <Input label={t("patt")} value={pantShirtMeasurements.patt ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, patt: text}))}/>
            <Input label={t("pantMori")} value={pantShirtMeasurements.pantMori ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, pantMori: text}))}/>
            <Input label={t("gidri")} value={pantShirtMeasurements.gidri ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, gidri: text}))}/>
        </View>

    const product = selectedRadio === 0 ? kurtaPajama : selectedRadio === 1 ? salwarSuit : pantShirt;
    
    function validateData(){
        
        if(name.length===0){
            Alert.alert(t("nameError"));
        }
        else{
            const customerData={"tailor_id": user?.id, "name": name, "phone": phone, "naap_number": naapNumber, "note": note, "last_updated": new Date(), "measurement_type": "" ,"measurements": {} };
            if(selectedRadio===0){
                customerData.measurement_type = t("kudta_pajama");
                customerData.measurements = kurtaPajamaMeasurements;
            }
            else if(selectedRadio===1){
                customerData.measurement_type = t("salwar_suit");
                customerData.measurements = salwarSuitMeasurements;
            }
            else if(selectedRadio===2){
                customerData.measurement_type = t("pant_shirt");
                customerData.measurements = pantShirtMeasurements;
            }

            dbInsert(customerData); 
        }
    }
    async function dbInsert(customerData: {}){

        const { data, error, status } = await supabase
        .from('customer_list')
        .insert(customerData)
        .single()
        
        if (error && status !== 406) {
            Alert.alert(error.message);
        }else
        if(error)     
            Alert.alert(error.message)
        else
            Alert.alert(t("submitted"));
            setName('');
            setPhone('');
            setNote('');
            setKurtaPajamaMeasurements({});
            setSalwarSuitMeasurements({});
            setPantShirtMeasurements({});
            
    }
    
    
    


    return (
        <KeyboardAvoidingView behavior={"height"} style={styles.layout}>
            <View style={styles.container}>
            <ScrollView>
                <Input 
                    style={styles.inputField}
                    label={t("name")}
                    value={name}
                    onChangeText={(text)=>(setName(text))}
                />
                <Input 
                    style={styles.inputField}
                    label={t("phone")}
                    value={phone}
                    onChangeText={(text)=>(setPhone(text))}
                />
                <Input 
                    style={styles.inputField}
                    label={t("naapNumber")}
                    value={naapNumber}
                    onChangeText={(text)=>(setNaapNumber(text))}
                />
                
                <CheckBox
                    containerStyle={styles.checkBox}
                    title={t("kudta_pajama")}
                    checked={selectedRadio === 0}
                    onPress={() => {
                        resetAllFields();
                        setSelectedRadio(0);
                    }}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                />
                <CheckBox
                    containerStyle={styles.checkBox}
                    title={t("salwar_suit")}
                    checked={selectedRadio === 1}
                    onPress={() => {
                        resetAllFields();
                        setSelectedRadio(1)
                    }}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                />
                <CheckBox
                    containerStyle={styles.checkBox}
                    title={t("pant_shirt")}
                    checked={selectedRadio === 2}
                    onPress={() => {
                        resetAllFields();
                        setSelectedRadio(2);
                    }}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                />
                {product}
                

                <Input 
                    style={styles.inputField}
                    label={t("note")}
                    value={note}
                    onChangeText={(text)=>(setNote(text))}
                />
                <View style={[styles.verticallySpaced,styles.mb20]}>
                    <Button title={t("add")} onPress={validateData}/>
                </View>
                <View style={[styles.verticallySpaced,styles.mb20]}>
                    <Button title={t("cancel")} onPress={()=>router.replace("/")}/>
                </View>
                <View style={[styles.verticallySpaced,styles.mb20]}>
                
                </View>
            </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}