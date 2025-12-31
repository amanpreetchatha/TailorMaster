import { View } from "react-native";
import {Customer} from "./customer-list";
import { Input, Text } from "react-native-elements";
import { useLocalSearchParams } from "expo-router";
import styles from "./styles";


export default function CustomerDetails(){
    const customer = useLocalSearchParams();
    
    //console.log(measurements)

    
    console.log(customer)

    

    return (
        <View>
            <Text style={styles.text}>Name: {customer.name}</Text>
            <Text style={styles.text}>Phone: {customer.phone}</Text>
            <Text style={styles.text}>Type: {customer.measurement_type}</Text>

            <Text style={styles.text}>Measurements: </Text>
            <Text style={styles.text}>{customer.measurements}</Text>

            <Text style={styles.text}>Notes: {customer.note}</Text>
            <Text style={styles.text}>Last updated: {customer.last_updated}</Text>

        </View>
    )
}