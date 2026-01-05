import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from './styles';

import { useRouter } from 'expo-router';

import { Alert, AppState } from 'react-native';
import { supabase } from './../utils/supabase';
import "./i18n";
import { useTranslation } from 'react-i18next';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})


const LoginForm = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const {t}=useTranslation();
    
    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
        
        if (error) Alert.alert(error.message)
        else router.replace("/");
        setLoading(false)
      }
    
    return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Text style={styles.heading}>{t("login")}</Text>
                <Input
                    label={t("email")}
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                    label={t("password")}
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button title={t("login")} onPress={()=>signInWithEmail()} disabled={loading}/>
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button title={t("register")} onPress={()=>router.push("/register")}/>
            </View>
            
            
        </KeyboardAvoidingView>
    )
}

export default LoginForm