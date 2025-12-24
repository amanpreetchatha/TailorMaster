import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import {styles} from "./styles";
export default function Index() {
  const router=useRouter();
  return (
    <View style={styles.container}>

      <Pressable onPress={()=>{router.push('/register')}} style={styles.button}>Register</Pressable>
      <Pressable onPress={()=>{router.push('/login')}} style={styles.button}>Login</Pressable>
    </View>
  );
}