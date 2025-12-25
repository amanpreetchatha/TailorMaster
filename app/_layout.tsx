import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{headerTitle: "Tailor Master", headerLeft: ()=>null}}/>
        <Stack.Screen name="register" options={{headerTitle: "Register"}}/>
        <Stack.Screen name="login" options={{headerTitle: "Login"}}/>
        <Stack.Screen name="actions" options={{headerTitle: "Dashboard"}}/>
        <Stack.Screen name="customer-list" options={{headerTitle: "Customer List"}}/>
      </Stack>
    </>
  )
}
