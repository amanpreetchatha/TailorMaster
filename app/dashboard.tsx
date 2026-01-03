import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from 'react-native-elements';
import { supabase } from './../utils/supabase';
import useUserContext from "./providers/context";
import styles from "./styles";

export default function Dashboard() {
  const router=useRouter();
  const user = useUserContext();
  
  return (
    <View style={styles.container}>
        <Text style={[styles.welcome, styles.text]}>Welcome {user?.email}</Text>
        <View style={styles.mb20}>
          <Button title="Add Customer" onPress={()=>router.push('/add-customer')} />
        </View>
        <View style={styles.mb20}>
          <Button title="Customer List" onPress={()=>router.push('/customer-list')} />
        </View>
        <View style={styles.mb20}>
          <Button title="Log Out" onPress={() => {supabase.auth.signOut(); router.replace('/')}} />
        </View>
    </View>
  );
}