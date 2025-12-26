import { useRouter } from "expo-router";
import { Pressable, View, Alert } from "react-native";
import {Tab, Text, Button, Input, ListItem} from "react-native-elements"
import {useState} from 'react';
import styles from "./styles";
import { supabase } from '../utils/supabase'
import { Session } from '@supabase/supabase-js'
import TableList from "./components/TableList";

export default function CustomerList({ session }: { session: Session }) {
  const router=useRouter();
  const username="user";
  const [loading,setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');

  const userDetails={email: session?.user.email, phone: session?.user.phone}

async function getCustomerList(){
    try {
        // change this block of code so that it gets a list of customers from customer table in the database.
          setLoading(true)
          if (!session?.user) throw new Error('No user on the session!')
    
          const { data, error, status } = await supabase
            .from('profiles')
            .select(`full_name`)
            .eq('id', session?.user.id)
            .single()
          if (error && status !== 406) {
            throw error
          }
    
          if (data) {
            //setFullName(data.full_name)

            //implement customer list logic here
            
          }
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert(error.message)
          }
        } finally {
          setLoading(false)
        }

  }
  

  return (
    <View style={styles.container}>
      
        <View style={styles.verticallySpaced}>
          <Button title="Add Customer" onPress={()=>router.push("/add-customer")} disabled={loading} />
        </View>
        <View>
          <Input
            style={styles.verticallySpaced}
            leftIcon={{ type: 'font-awesome', name: 'search' }}
            onChangeText={(text) => setSearchString(text)}
            value={searchString}
            placeholder="Search"
          />
          <TableList data={userDetails}>

          </TableList>

        </View>

      
    </View>
  );
}