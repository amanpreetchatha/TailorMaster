import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Link href={"/custdetails"} style={styles.button}>View Customer</Link>
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
    borderRadius: 16
  }
});
