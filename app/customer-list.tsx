import { useRouter } from "expo-router";
import { Pressable, View, Alert, ScrollView, FlatList } from "react-native";
import {Tab, Text, Button, Input, ListItem} from "react-native-elements"
import {useState, useEffect} from 'react';
import styles from "./styles";
import { supabase } from '../utils/supabase'

interface Customer{
  id: number;
  name: string;
  phone: string;
}

export default function CustomerList() {
  const router=useRouter();
  const [loading,setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');
  let [receivedData,setReceivedData] = useState<Customer[]>([]);
  
  useEffect(()=>{
    getCustomerList();
  },[]);
    async function getCustomerList(){
      try {
          // change this block of code so that it gets a list of customers from customer table in the database.
            setLoading(true)

            const { data, error, status } = await supabase
            .from("customer_list")
            .select("*")
            

            if (error && status !== 406) {
              console.log(error.message)
            }
      
            if (data) {
              setLoading(false);
              setReceivedData([...data]);
              
            }
          } catch (error) {
            if (error instanceof Error) {
              console.log(error.message)
            }
          }
  
    }
          
    async function handleSearch(){
      if(searchString.length>0){
        /*const { data, error, status } = await supabase
        .from("customer_list")
        .select("*")  
        .contains("name", searchString);

            if (error && status !== 406) {
              console.log(error.message)
            }
      
            if (data) {
              setLoading(false);
              setReceivedData([...data]);
              
            }
              */
        const copyOfReceivedData = [...receivedData];
        let searchResult: Customer[] = [];
        copyOfReceivedData.map((customer: Customer, index: number)=>{
          
          const nameIndex = customer.name.search(new RegExp(searchString, "i"));
          const phoneIndex = customer.phone.search(new RegExp(searchString, "i"));
          if(nameIndex || phoneIndex >=0)
            searchResult.push(customer);
        });
        console.log(searchResult)
        //searchResult.length>0 ? setReceivedData(searchResult): null;
      }
        
      } 
    
  
  
  return (
    <View style={[styles.container, styles.mb20]}>
      
        <View style={styles.verticallySpaced}>
          <Input
            leftIcon={{ type: 'font-awesome', name: 'search' }}
            onChangeText={(text) => setSearchString(text)}
            value={searchString}
            placeholder="Search"
          />
          <Button title="Search" onPress={handleSearch}></Button>
        </View>
        
        <ScrollView>
          {
            receivedData.map((customer: any, index: number)=>{
                
                return (
                  <ListItem key={customer.id}  containerStyle={styles.listItem}>
                    <ListItem.Content >
                      <ListItem.Title style={styles.text}>
                        {customer.name}
                      </ListItem.Title>
                      <ListItem.Subtitle style={styles.subText}>
                        {customer.phone}
                      </ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                )
              })
          }
            
            
        </ScrollView>      
    </View>
    
  );
}