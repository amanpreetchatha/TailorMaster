import { useRouter } from "expo-router";
import { Pressable, View, Text } from "react-native";
import styles from "./styles";

export default function CustomerList() {
  const router=useRouter();
  const username="user"
  return (
    <View style={styles.container}>
        show customer list here
    </View>
  );
}