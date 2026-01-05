import { useRouter } from "expo-router";
import { useTranslation } from 'react-i18next';
import { Text, View } from "react-native";
import { Button } from 'react-native-elements';
import { supabase } from './../utils/supabase';
import "./i18n";
import useUserContext from "./providers/context";
import styles from "./styles";


export default function Dashboard() {
  const router=useRouter();
  const user = useUserContext();
  const {t}=useTranslation();
  return (
    <View style={styles.container}>
        <Text style={[styles.welcome, styles.text]}>{t("greeting")} {user?.email}</Text> 
        <View style={styles.mb20}>
          <Button title={t("add_customer")} onPress={()=>router.push('/add-customer')} />
        </View>
        <View style={styles.mb20}>
          <Button title={t("customer_list")} onPress={()=>router.push('/customer-list')} />
        </View>
        <View style={styles.mb20}>
          <Button title={t("logout")} onPress={() => {supabase.auth.signOut(); router.replace('/')}} />
        </View>
    </View>
  );
}