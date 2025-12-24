import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
            backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
            backgroundColor: "#25292e",
        }
    }}>
      <Tabs.Screen
        name="index"
        options={{
            title: "Tailor Master",
            tabBarIcon: ({focused, color})=>{
                return <Ionicons
                    name={focused ? "home-sharp" : "home-outline"}
                    color={color}
                    size={30} />;
        },
    }} 
    />
      <Tabs.Screen name="custdetails" options={{headerTitle: "Customer Details"}}/>
      
    </Tabs>
  )
}
