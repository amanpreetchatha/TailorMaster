import { useRouter } from "expo-router";
import { Pressable, View, Alert, ScrollView, FlatList } from "react-native";
import {Tab, Text, Button, Input, ListItem} from "react-native-elements"
import {useState, useEffect} from 'react';
import styles from "./styles";
import { supabase } from '../utils/supabase'


export default function CustomerList() {
  const router=useRouter();
  const [loading,setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');
  let [receivedData, setReceivedData] = useState(undefined);

  useEffect(()=>{
    getCustomerList();
  });
    async function getCustomerList(){
      try {
          // change this block of code so that it gets a list of customers from customer table in the database.
            setLoading(true)

            const { data, error, status } = await supabase.rpc('getAllCustomers');

            if (error && status !== 406) {
              console.log(error.message)
            }
      
            if (data) {
              setReceivedData(data);
              console.log(receivedData);
              
            }
          } catch (error) {
            if (error instanceof Error) {
              console.log(error.message)
            }
          } finally {
            setLoading(false);
  
          }
  
    }
    function renderList(){
      return (
        null
        //implement listitem here
      )
    }
  
  return (
    <View style={styles.container}>
      
        <View style={styles.verticallySpaced}>
          <Input
            leftIcon={{ type: 'font-awesome', name: 'search' }}
            onChangeText={(text) => setSearchString(text)}
            value={searchString}
            placeholder="Search"
          />
          <Button title="Search"></Button>
        </View>
        <View style={styles.verticallySpaced}>
          
            {renderList()}
            
            
        </View>      
    </View>
    
  );
}