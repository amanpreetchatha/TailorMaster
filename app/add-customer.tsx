import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import useUserContext from "./providers/context";
import styles from "./styles";


export default function AddCustomer(){
    const user=useUserContext();
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [note,setNote]=useState("");
    
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
            <Input label="Lambai" value={kurtaPajamaMeasurements.lambai ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, lambai: text}))}/>
            <Input label="Ghera Kamar" value={kurtaPajamaMeasurements.gheraKamar ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, gheraKamar: text}))}/>
            <Input label="Teera" value={kurtaPajamaMeasurements.teera ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, teera: text}))}/>
            <Input label="Baah" value={kurtaPajamaMeasurements.baah ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, baah: text}))}/>
            <Input label="Modha" value={kurtaPajamaMeasurements.modha ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, modha: text}))}/>
            <Input label="Collar" value={kurtaPajamaMeasurements.collar ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, collar: text}))}/>
            <Input label="Pajama Mori" value={kurtaPajamaMeasurements.pajamaMori ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, pajamaMori: text}))}/>
            <Input label="Patt" value={kurtaPajamaMeasurements.patt ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, patt: text}))}/>
            <Input label="Jholi" value={kurtaPajamaMeasurements.jholi ?? ''} onChangeText={(text)=>setKurtaPajamaMeasurements(prev=>({...prev, jholi: text}))}/>
        </View>
    

    const salwarSuit =
        <View>
            <Input label="Paloi" value={salwarSuitMeasurements.paloi ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, paloi: text}))}/>
            <Input label="Lambai" value={salwarSuitMeasurements.lambai ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, lambai: text}))}/>
            <Input label="Shati" value={salwarSuitMeasurements.shati ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, shati: text}))}/>
            <Input label="Kamar" value={salwarSuitMeasurements.kamar ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, kamar: text}))}/>
            <Input label="Hip" value={salwarSuitMeasurements.hip ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, hip: text}))}/>
            <Input label="Ghera" value={salwarSuitMeasurements.ghera ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, ghera: text}))}/>
            <Input label="pending name here" />
            <Input label="Baah" value={salwarSuitMeasurements.baah ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, baah: text}))}/>
            <Input label="Baah Mori" value={salwarSuitMeasurements.baahMori ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, baahMori: text}))}/>
            <Input label="Modha" value={salwarSuitMeasurements.modha ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, modha: text}))}/>
            <Input label="Gala F B" value={salwarSuitMeasurements.gala ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, gala: text}))}/>
            <Input label="Salwar Mori" value={salwarSuitMeasurements.salwarMori ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, salwarMori: text}))}/>
            <Input label="pending name here" />
            <Input label="Fer" value={salwarSuitMeasurements.fer ?? ''} onChangeText={(text)=>setSalwarSuitMeasurements(prev=>({...prev, fer: text}))}/>
        </View>
    

    const pantShirt =
        <View>
            <Input label="Lambai" value={pantShirtMeasurements.lambai ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, lambai: text}))}/>
            <Input label="Front Kamar" value={pantShirtMeasurements.frontKamar ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, frontKamar: text}))}/>
            <Input label="Teera" value={pantShirtMeasurements.teera ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, teera: text}))}/> 
            <Input label="Baah" value={pantShirtMeasurements.baah ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, baah: text}))}/>
            <Input label="Modha" value={pantShirtMeasurements.modha ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, modha: text}))}/>
            <Input label="Collar" value={pantShirtMeasurements.collar ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, collar: text}))}/>
            <Input label="Pant Lambai" value={pantShirtMeasurements.pantLambai ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, pantLambai: text}))}/>
            <Input label="Kamar" value={pantShirtMeasurements.kamar ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, kamar: text}))}/>
            <Input label="Hip" value={pantShirtMeasurements.hip ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, hip: text}))}/>
            <Input label="Patt" value={pantShirtMeasurements.patt ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, patt: text}))}/>
            <Input label="Pant Mori" value={pantShirtMeasurements.pantMori ?? ''} onChangeText={(text)=>setPantShirtMeasurements(prev=>({...prev, pantMori: text}))}/>
            <Input label="pending name here" /> 
        </View>

    // don't store JSX in state — render based on selectedRadio
    const product = selectedRadio === 0 ? kurtaPajama : selectedRadio === 1 ? salwarSuit : pantShirt;
    
    function validateData(){
        setMessage("");
        if((name.length===0)||(note.length===0)){
            setMessage("Name and Notes can't be empty");
        }
        else{
            const customerData={"name": name, "phone": phone, "note": note, "last_updated": new Date(), "measurement_type": "" ,"measurements": {} };
            if(selectedRadio===0){
                customerData.measurement_type = "Kurta Pajama";
                customerData.measurements = kurtaPajamaMeasurements;
            }
            else if(selectedRadio===1){
                customerData.measurement_type = "Salwar Suit";
                customerData.measurements = salwarSuitMeasurements;
            }
            else if(selectedRadio===2){
                customerData.measurement_type = "Pent Shirt";
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
            setMessage(error.message);
        }else
        if(error)     
            setMessage(error.message)
        else
            setMessage("Submitted!");
            setName('');
            setPhone('');
            setNote('');
            setKurtaPajamaMeasurements({});
            setSalwarSuitMeasurements({});
            setPantShirtMeasurements({});
            
    }
    
    
    


    return (
        <View>
            <ScrollView>
                <Input 
                    style={styles.inputField}
                    label="Name"
                    value={name}
                    onChangeText={(text)=>(setName(text))}
                />
                <Input 
                    style={styles.inputField}
                    label="Phone number"
                    value={phone}
                    onChangeText={(text)=>(setPhone(text))}
                />
                
                <CheckBox
                    containerStyle={styles.checkBox}
                    title={"Kurta Pajama"}
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
                    title={"Salwar Suit"}
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
                    title={"Pent Shirt"}
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
                    label="Notes"
                    value={note}
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
            </ScrollView>
        </View>
    );
}