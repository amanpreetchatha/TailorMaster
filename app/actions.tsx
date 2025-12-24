import { useRouter } from "expo-router";
import { Pressable, View, Text } from "react-native";
import {styles} from "./styles";

export default function CustomerList() {
  const router=useRouter();
  const username="user"
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {username}</Text>
        <Pressable onPress={()=>{router.push('/customer-list')}} style={styles.button}>Customer List</Pressable>
        <Pressable onPress={()=>{router.push('/')}} style={styles.button}>Logout</Pressable>
    </View>
  );
}