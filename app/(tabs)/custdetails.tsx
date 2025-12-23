import { StyleSheet, Text, View } from "react-native";

export default function CustomerDetails() {
  return (
    <View
      style={styles.container}
    >
      <Text>Customer details here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
