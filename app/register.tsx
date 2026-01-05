
import { router } from 'expo-router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { supabase } from './../utils/supabase';
import "./i18n";
import styles from './styles';



const RegisterForm = () =>{
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const {t}=useTranslation();


    async function signUpWithEmail() {
      setLoading(true);  
      
      const {
          data: { session },
          error,
        } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } },   //send data here
        });
    
        if (error) Alert.alert(error.message)
        else router.replace("/")
        setLoading(false);
      }
    
    return (
      <View style={styles.container}>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input
            label={t("name")}
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            
          />
        </View>
        <View style={[styles.verticallySpaced]}>
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
          <Button title={t("register")} disabled={loading} onPress={() => signUpWithEmail()} />
        </View>
      </View>
        )
}

export default RegisterForm