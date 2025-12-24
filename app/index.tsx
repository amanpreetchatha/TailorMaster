import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export default function Index() {
  const router=useRouter();
  return (
    <View style={styles.container}>

      <Pressable onPress={()=>{router.push('/register')}} style={styles.button}>Register</Pressable>
      <Pressable onPress={()=>{router.push('/login')}} style={styles.button}>Login</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    backgroundColor: "#aa3",
    padding: 10,
    margin: 10,
    borderRadius: 16,
    width: 150,
    textAlign: "center"
  }
});
